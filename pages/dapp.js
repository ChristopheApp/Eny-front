import { useState, useCallback, useEffect } from 'react'
import Head from 'next/head'
import Web3 from 'web3'

import DappNav from '../components/dapp/DappNav'
import DappIco from '../components/dapp/DappIco'

import styles from '../styles/Home.module.css'


import Erc20Abi from '../contracts/erc20ABI.json'
import ICOContractAbi from '../contracts/ICOContractABI.json'


export default function Home() {

  const [web3] = useState(new Web3(Web3.givenProvider || "ws://localhost:8545"))
  const [isConnectedWeb3, setIsConnectedWeb3] = useState(false)

  const [accounts, setAccounts] = useState([])
  const [balance, setBalance] = useState(0)

  const [contractInfo, setContractInfo] = useState({});

  // Pass to .ENV
  const [ENYtokenAddress] = useState("0x86B88770bC0122A957CABFa41775728824F2cc29")  // Adresse du ENY token sur Rinkeby
  // Pass to .ENV
  const [ICOContractAddress] = useState("0xD7B969F5e3FA2585D02f778Ab82c045cB35BB7B4")  // Adresse qui détient les ENY pour les envoyer

  // const [enyWalletSupply] = useState("0x2B6d5d6A6f588084dC9565ffA1b7f28fe60D479E") // adresse en commun qui contient la total supply

  const [enyPrice, setEnyPrice] = useState(0) // Le prix d'un ENY
  const [ethPrice, setEthPrice] = useState(0) // Le prix en dollars de l'eth (à mettre à jour avec API)

  const [enyAmount, setEnyAmount] = useState(0) // Champ de l'input Eny
  const [ethAmount, setEthAmount] = useState(0) // Champ de l'input Eth

  const [displayTotalAmountInDollars, setDisplayTotalAmountInDollars] = useState(0) // Affichage de la valeur totale en dollars

  const connectToWeb3 = useCallback(
    async () => {
      if (window.ethereum) {
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' })
          setIsConnectedWeb3(true)
          //  web3.eth.net.getId()
          //  .then(setNetworkId)

        } catch (err) {
          console.error(err)
        }
      } else {
        alert("Install Metamask")
      }
    }, []
  )

  /*
    Connection au chargement de la page
  */
  useEffect(async () => {
    const displayAccConnect = () => console.log("connect")
    const displayChainChanged = () => { console.log("chainChanged"); initIcoContract() }
    const displayAccChanged = () => {
      const getAccounts = async () => setAccounts(await web3.eth.getAccounts())

      const acc = getAccounts()
      // console.log(acc)

      if (acc.length == 0)
        setIsConnectedWeb3(false)
    }

    window.ethereum.on('connect', displayAccConnect)
    window.ethereum.on('chainChanged', displayChainChanged)
    window.ethereum.on('accountsChanged', displayAccChanged)

    getEthPrice()
    initIcoContract()

    return () => {
      if (window.ethereum.removeListener) {
        window.ethereum.removeListener('connect', displayAccConnect)
        window.ethereum.removeListener('chainChanged', displayAccChanged)
        window.ethereum.removeListener('accountsChanged', displayAccChanged)
      }
    }
  }, [])

  useEffect(() => {
    // Accounts
    const getAccounts = async () => setAccounts(await web3.eth.getAccounts())
    const getBalance = async () => setBalance(web3.utils.fromWei(await web3.eth.getBalance(accounts[0])))

    if (accounts.length == 0) getAccounts()
    if (accounts.length > 0) getBalance()
    if (accounts.length == 0)
      setIsConnectedWeb3(false)
    else
      setIsConnectedWeb3(true)
  }, [isConnectedWeb3, accounts, web3.eth, web3.utils])


  // Initialise le contract de l'ico
  const initIcoContract = async () => {
    console.log("init Contract")

    const icoContract = new web3.eth.Contract(
      ICOContractAbi,
      ICOContractAddress
    )

    try {
      console.log(icoContract)
      const tokenContract = await icoContract.methods.tokenContract().call()
      const icoState = await icoContract.methods.icoState().call()
      const tokenIcoSupply = web3.utils.fromWei(await icoContract.methods.tokenIcoSupply().call())
      const tokenPrice = await icoContract.methods.tokenPrice().call()
      const tokenPriceEth = web3.utils.fromWei(tokenPrice)
      const tokensSold = await icoContract.methods.tokensSold().call()
      const tokenIcoTimeOut = (new Date((await icoContract.methods.tokensIcoTimeOut().call()) * 1000)).toUTCString()
      
      // Set contractInfo Props for ICO Informations
      setContractInfo({ tokensSold, tokenPriceEth, tokenIcoSupply, icoState, tokenContract, tokenIcoTimeOut })
      // Set the price of 1 ENY per ETH for the currency comparator
      setEnyPrice(tokenPriceEth)
    } catch (error) {
      console.error(error)
      alert("You must be on the Rinkebi network.")
    }
  }

  // Récupérér le pris en dollars de l'eth grace à l'api
  const getEthPrice = async () => {
    try {
      const rawResponse = await fetch("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=EUR,USD&api_key=c7582671050eb2459c1ce20d8648c6a98125675220aedd35943ccb246a0feb70")
      const response = await rawResponse.json();
      setEthPrice(response.USD)
      // console.log(response)
    } catch (error) {
      setEthPrice(0)
      alert("Impossible de récupérer le prix de l'eth, reviens plus tard.")
    }
  }


  // Envoi des ETH au multisig pour revoir ensuite des ENY
  const sendEth = async () => {
    // Sécurise le montant, pour pas envoyer plus d'ENY si on change l'input entre les 2 Transactions
    // Peut aussi se faire en désactivant les input
    console.log(ethAmount)
    const tokenAmount = web3.utils.toWei(ethAmount.toString())
    const receiptAddress = accounts[0]

    console.log(tokenAmount)
    console.log(receiptAddress)

    if (ethAmount <= 0)
      alert("Invalid amount. Must be > 0")
    else {
      /*
      Chargement du contrat du token ENY
      */
      const enyContract = new web3.eth.Contract(
        Erc20Abi,
        ENYtokenAddress
      )

      /*
      Chargement du contrat de l'ico
      */
      const icoContract = new web3.eth.Contract(
        ICOContractAbi,
        ICOContractAddress
      )

      /* 
      Nécessite une vérification d'être sur le bon réseau (ici Rinkebi)
      A quel moment ? je sais pas trop
      */
      try {
        const name = await enyContract.methods.name().call()
        const balance = await enyContract.methods.balanceOf(accounts[0]).call()
        const symbol = await enyContract.methods.symbol().call()

        console.log(balance)
        console.log(symbol)

        // Si on est sur le bon réseau on peut faire la transaction
        try {
          icoContract.methods.buyAmountTokens().send({ from: receiptAddress, value: tokenAmount })
            .once('transactionHash', function (hash) {
              console.log(hash)
            })
            .once('confirmation', function () {
              console.log("Transaction confirmed");

              // Si la transaction se passe bien
            })

        } catch (error) {
          alert("Error send.")
        }

      } catch (error) {
        alert("The contract network is not valid.")
      }

    }
  }

  // Changement de valeur dans l'input ENY
  const onChangeEnyInput = (value) => {
    console.log(value)
    setEnyAmount(value) // Actualise le montant d'eny
    setEthAmount(value * enyPrice) // Actualise le montant d'eth 
    setDisplayTotalAmountInDollars(value * enyPrice * ethPrice) // Actualise la valeur en $

  }

  return (
    <div className={styles.container}>
      <Head>
        <title>ENY Token</title>
        <meta name="description" content="En Y Token - Official web site" />
        <link rel="icon" href="/wheelie1.svg" />

      </Head>

      <main className={styles.main}>
        <DappNav
          stateConection={isConnectedWeb3}
          connectFunc={connectToWeb3}
          balance={balance}
          address={accounts[0]}
        />
        <DappIco
          balance={balance}
          enyAmount={enyAmount}
          sendEth={sendEth}
          ethAmount={ethAmount}
          displayTotalAmountInDollars={displayTotalAmountInDollars}
          onChangeEnyInput={onChangeEnyInput}
          contractInfo={contractInfo}
          web3={web3}
        />
      </main>
    </div>
  )
}
