import { useState, useCallback, useEffect } from 'react'
import Head from 'next/head'
import Web3 from 'web3'
import { info, success, danger, warning } from "../components/toast"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.min.css'

import DappNav from '../components/dapp/DappNav'
import DappIco from '../components/dapp/DappIco'
import Footer from '../components/Footer'

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
  const [icoContract] = useState(new web3.eth.Contract(ICOContractAbi, ICOContractAddress))
  const [enyContract] = useState(new web3.eth.Contract(Erc20Abi, ENYtokenAddress))
  // const [enyWalletSupply] = useState("0x2B6d5d6A6f588084dC9565ffA1b7f28fe60D479E") // adresse en commun qui contient la total supply
  const [enyPrice, setEnyPrice] = useState(0) // Le prix d'un ENY
  const [ethPrice, setEthPrice] = useState(0) // Le prix en dollars de l'eth (à mettre à jour avec API)

  const [enyAmount, setEnyAmount] = useState(0) // Champ de l'input Eny
  const [ethAmount, setEthAmount] = useState(0) // Champ de l'input Eth

  const [displayTotalAmountInDollars, setDisplayTotalAmountInDollars] = useState(0) // Affichage de la valeur totale en dollars
  const [isLoading, setIsLoading] = useState(false)

  const [isRinkeby, setIsRinkeby] = useState(false)
  const [network, setNetwork] = useState(null)
  const [isTransaction, setIsTransaction] = useState(false)
  const [hash, setHash] = useState(null)
  
  const connectToWeb3 = useCallback(
    async () => {

      let currentChainID = await web3.eth.net.getId()
      setNetwork(currentChainID)
      if (window.ethereum && currentChainID == 4) {
        setIsRinkeby(true)
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' })
          setIsConnectedWeb3(true)
        } catch (err) {
          // console.error(err)
          danger("Ouch something went wrong !", 8000)
        }
      } else {
        if (currentChainID != 4) danger("Please use Rinkebi Network !", 8000)
        else danger("Please install Metamask !", 8000)
        setIsRinkeby(false)
      }
    }, []
  )

  // Function test network
  const verifyNetwork = async () => {
    let currentChainID = await web3.eth.getChainId()
    // console.log(currentChainID)

    if (currentChainID == 4) {
      setIsRinkeby(true)
      setNetwork(currentChainID)
    } else {
      setIsRinkeby(false)
      setNetwork(currentChainID)
    }
  }

  /*
    Connection au chargement de la page
  */
  useEffect(() => {
    const displayAccConnect = () => verifyNetwork()
    const displayChainChanged = async () => {
      // console.log("chainChanged")
      initIcoContract()
    }
    const displayAccChanged = () => {
      const getAccounts = async () => setAccounts(await web3.eth.getAccounts())
      const acc = getAccounts()
      if (acc.length == 0)
        setIsConnectedWeb3(false)
    }

    // GetAccount onchange 
    window.ethereum.on('connect', displayAccConnect)
    window.ethereum.on('chainChanged', displayChainChanged)
    window.ethereum.on('accountsChanged', displayAccChanged)

    getEthPrice()
    initIcoContract()
    // verifyNetwork()

    return () => {
      if (window.ethereum.removeListener) {
        window.ethereum.removeListener('connect', displayAccConnect)
        window.ethereum.removeListener('chainChanged', displayAccChanged)
        window.ethereum.removeListener('accountsChanged', displayAccChanged)
      }
    }
  }, [])

  useEffect(() => {
    verifyNetwork()
    // console.log("FROM ROOt:"+isTransaction)
    // Accounts
    const getAccounts = async () => setAccounts(await web3.eth.getAccounts())
    const getBalance = async () => setBalance(web3.utils.fromWei(await web3.eth.getBalance(accounts[0])))
    if (accounts.length == 0) getAccounts()
    if (accounts.length > 0) getBalance()
    if (accounts.length == 0)
      setIsConnectedWeb3(false)
    else
      setIsConnectedWeb3(true)
  }, [isConnectedWeb3, accounts, web3.eth, web3.utils, network, isTransaction])


  // Initialise le contract de l'ico
  const initIcoContract = async () => {
    try {
      // console.log(icoContract)
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
      // console.error(error)
      // warning("APPELEZ TTTT Please use Rinkeby network! ☠️", 5000)
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
      // alert("Impossible de récupérer le prix de l'eth, reviens plus tard.")
      danger("Can't get the ETH price back, come back later.", 8000)
    }
  }


  // Envoi des ETH au multisig pour revoir ensuite des ENY
  const sendEth = async () => {
    // Sécurise le montant, pour pas envoyer plus d'ENY si on change l'input entre les 2 Transactions
    // Peut aussi se faire en désactivant les input
    // console.log(ethAmount)
    const tokenAmount = web3.utils.toWei(ethAmount.toString())
    const receiptAddress = accounts[0]

    // console.log(tokenAmount)
    // console.log(receiptAddress)

    if (ethAmount <= 0)
      // alert("Invalid amount. Must be > 0")
      danger("🤷‍♀️ Please enter a valid Amount!", 8000)
    else {
      /* 
      Nécessite une vérification d'être sur le bon réseau (ici Rinkebi)
      A quel moment ? je sais pas trop
      */

      if (isRinkeby) {
        // Si on est sur le bon réseau on peut faire la transaction
        try {
          icoContract.methods.buyAmountTokens().send({ from: receiptAddress, value: tokenAmount })
            .on('sending', () => {
              // Then => Start loader
              setIsLoading(true)
              // Then => clear input at the end
              warning("Transaction send ! \n Please confirm the transaction on metamask", 3000)
            })
            .once('transactionHash', function (hash) {
              // console.log(hash)
              setHash(hash)
              info("Tx Hash is here !", 8000)
            })
            .once('confirmation', function () {
              success("Transaction has been confirmed !", 8000)
              // console.log("Transaction confirmed")
              initIcoContract()
              // Si la transaction se passe bien
              // SET Transaction OK pour reload la balance
              setIsTransaction(true)
            })
          // SET Transaction END 
          setIsTransaction(false)

        } catch (error) {
          // alert("Error send.")
          if (error.code === 4001) {
            setIsLoading(false)
            setIsTransaction(false)
            danger(" 🙅‍♀️ You reject the transaction !", 8000)
          }
        }
      } else {
        warning("Please use Rinkeby network! ☠️", 5000)
      }

    }
  }
  // Changement de valeur dans l'input ENY
  const onChangeEnyInput = (value) => {
    // console.log(value)
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
      <ToastContainer position="bottom-center"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
          isRinkeby={isRinkeby}
          hash={hash}

        />
      </main>

      <Footer />
    </div>
  )
}
