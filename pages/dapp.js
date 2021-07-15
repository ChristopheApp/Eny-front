import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import MobileNav from '../components/MobileNav'

import { useState, useCallback, useEffect } from 'react'
import Web3 from 'web3';

import Erc20Abi from '../contracts/erc20ABI.json'

export default function Home() {

  const [web3] = useState(new Web3(Web3.givenProvider || "ws://localhost:8545"));
  const [isConnectedWeb3, setIsConnectedWeb3] = useState(false);
  const [CouleurPastille, setCouleurPastille] = useState("red") // le moot pastille remplace une icone avec un simple cercle rouge ou vert si on est connecté ou pas comme sur etherscan dans write contract

  const [accounts, setAccounts] = useState([]);
  const [balance, setBalance] = useState(0);

  const [ENYtokenAddress] = useState("0x71363b88139a12a27cdb949bb12e60f10d295e25") // adresse du ENY token sur Rinkeby
  const [multisigAddress] = useState("0x37BdE4fC119F17a0906b2A406DcA47C32C8E20e0") // adresse du contract Multisig pour déposer les eth
  const [ICOAddress] = useState("") // Adresse qui détient les ENY pour les envoyer
  
  const [enyPrice] = useState(0.05) // Le prix d'un ENY
  const [ethPrice, setEthPrice] = useState(2200) // Le prix en dollars de l'eth (à mettre à jour avec API)

  const [enyAmount, setEnyAmount] = useState(0) // Champ de l'input Eny
  const [ethAmount, setEthAmount] = useState(0) // Champ de l'input Eth

  const [displayTotalAmountInDollars, setDisplayTotalAmountInDollars] = useState(0) // Affichage de la valeure totale en dollars

  const connectToWeb3 = useCallback(
    async () => {
      if(window.ethereum) {
        try {
          await window.ethereum.request({method: 'eth_requestAccounts'})

          setIsConnectedWeb3(true)
        //  web3.eth.net.getId()
        //  .then(setNetworkId)
         
        } catch (err) {
          console.error(err)
        }
      } else {
        alert("Install Metamask")
      }
    }
  )

  // Juste pour voir plus facilement si on est connecté ou pas 
  useEffect(() => {
    if(isConnectedWeb3)
      setCouleurPastille('green')
    else
      setCouleurPastille('red')

  }, [isConnectedWeb3])

  /*
    Connection au chargement de la page
  */
  useEffect(() => {
    const displayAccConnect =  () => console.log("connect")
    const displayChainChanged =  () => console.log("chainChanged")
    const displayAccChanged =  () => {
      const getAccounts = async () => setAccounts(await web3.eth.getAccounts())

      const acc = getAccounts()
      console.log(acc)

      if(acc.length == 0)
        setIsConnectedWeb3(false)
    }

    window.ethereum.on('connect', displayAccConnect)
    window.ethereum.on('chainChanged', displayChainChanged)
    window.ethereum.on('accountsChanged', displayAccChanged)

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
    const getBalance = async () => setBalance(await web3.eth.getBalance(accounts[0]))

    if (accounts.length == 0) getAccounts()
    if (accounts.length > 0) getBalance()

    console.log(accounts)

    if(accounts.length == 0)
      setIsConnectedWeb3(false)
    else
      setIsConnectedWeb3(true)
  
  }, [isConnectedWeb3, accounts])


  
  // Envoi des ETH au multisig pour revoir ensuite des ENY
  const sendEth = async () => {
    // Sécurise le montant, pour pas envoyer plus d'ENY si on change l'input entre les 2 Transactions
    // Peut aussi se faire en désactivant les input
    const tokenAmount = enyAmount
    const receiptAddress = accounts[0]

    console.log(tokenAmount)
    console.log(receiptAddress)

    if(ethAmount <= 0)
      alert("Invalid amount. Must be > 0")
    else {

      /* 
      Nécessite une vérification d'être sur le bon réseau (ici Rinkebi)
      A quel moment ? je sais pas trop
      */
     
      /*
      Chargement du contrat du token ENY
      */
      const enyContract = new web3.eth.Contract(
        Erc20Abi,
        ENYtokenAddress
        )
      
      try {
        const name = await enyContract.methods.name().call()
        const balance = await enyContract.methods.balanceOf(accounts[0]).call()
        const symbol = await enyContract.methods.symbol().call()
        
        console.log(name)
        console.log(balance)
        console.log(symbol)
        
        // Fonctionne bien, on recoit les eth sur le multisig https://rinkeby.gnosis-safe.io/app/#/safes/0x37BdE4fC119F17a0906b2A406DcA47C32C8E20e0/balances
        web3.eth.sendTransaction({
          from: accounts[0],
          to: multisigAddress, 
          value: web3.utils.toWei(ethAmount) 
        })
        .once('transactionHash', function(hash){
          console.log(hash)
        })
        .once('confirmation', function() {
          console.log("Transaction confirmed");
          
          // Si la transaction se passe bien
          recevoirEnyTokens(receiptAddress, tokenAmount, enyContract)
        })
        
      } catch (error) {
        alert("You must be on the Rinkebi network.")
      }
      
    }
  }
    
  
    /*
      NE FONCTIONNE PAS !
      Fonction appeler lorsque l'envoi d'ether sur le multisig s'est bien passé
      Trouver le moyen pour que l'on puisse recevoir automatiquement les ENY 
      Actuellement c'est celui qui doit recevoir qui les envoi (il faut signé et payer les gas)
    */
    const recevoirEnyTokens = async (receiptAddress, tokenAmount, erc20Contract) => {

      console.log(await erc20Contract.methods.balanceOf("0x17aA29f9C48D557E5d582F8C1459b19472EAe0A1").call())
      try {
        console.log(erc20Contract)
        console.log(receiptAddress)
        console.log(tokenAmount)                              // (ma 2eme adresse pour test)
        const receipt = await erc20Contract.methods.transfer("0x17aA29f9C48D557E5d582F8C1459b19472EAe0A1", web3.utils.toWei(tokenAmount)).send({from: receiptAddress}) // Pas la bonne méthode, peut etre plus un transferFrom avec Allowance
        // .once('transactionHash', function(hash){
        //   console.log(hash)
        // })
        // .once('confirmation', function() {
        //   console.log("Transaction confirmed");
        // })
        console.log(receipt)
      } catch (error) {
        alert("Error send.")
      }
  }

  const onChangeEthInput = (value) => {
    console.log(value)
    setEthAmount(value) // Actualise la valeur en ETH
    setEnyAmount(ethToEny(value)) // Actualise la valeur en Eny
    setDisplayTotalAmountInDollars(ethToDollars(value)) // Actualise la valeur en $

  }

  const onChangeEnyInput = (value) => {
    console.log(value)
    setEnyAmount(value) // Actualise la valeur en Eny
    setEthAmount(enyToEth(value)) // Actualise la valeur en ETH
    setDisplayTotalAmountInDollars(enyToDollars(value)) // Actualise la valeur en $
    
  }

  /*
    Conversion masquer le temps de tester
  */

  // Conversion Eth en Dollars
  const ethToDollars = (eth) => {
    return eth //* ethPrice
  }

  // Conversion Eny en Dollars
  const enyToDollars = (eny) => {
    return eny //* enyPrice
  }

  // Conversion Eth en Eny
  const ethToEny = (eth) => {
    return eth //* ethPrice / enyPrice
  }

  // Conversion Eny en Eth
  const enyToEth = (eny) => {
    return eny //* enyPrice / ethPrice
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>ENY Token</title>
        <meta name="description" content="En Y Token - Official web site" />
        <link rel="icon" href="/wheelie1.svg" />
      </Head>

      <main className={styles.main}>
          <MobileNav />

        <h1 className={styles.title}>
          En Y, Le token préféré des OVNI
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>$ENY</code>
        </p>

        <div>
            {/* { <a href={`https://rinkebi.etherscan.io/`} target="_blank" rel="noreferrer"  >
                rinkebi ↗️
              </a> } */}
            <button onClick={connectToWeb3} className={styles.button}>Connect web3 <p style={{color: CouleurPastille}}>pastille</p> </button>
          </div>

        <div className={styles.card}>
            <div className={styles.subCard}>
              <p>Buy ENY</p>
              <p></p>
            </div>
            
            <div className={styles.subCard}>
              <p>ETH ({ethPrice} $)</p>
              <input onChange={e => onChangeEthInput(e.target.value)} value={ethAmount} type="number"  />
            </div>

            <div className={styles.subCard}>
              <p>ENY ({enyPrice} $)</p>
              <input onChange={e => onChangeEnyInput(e.target.value)} value={enyAmount} type="number"  />
            </div>
            
            <button onClick={sendEth} className={styles.button}>Recevoir {enyAmount} ENY ({displayTotalAmountInDollars} $)</button>
          </div>

        
      </main>

      <footer className={styles.footer}>
        
          Powered by LA TEAM JUL{' '}
          <span className={styles.logo}>
            <Image src="/signejul1.svg" alt="Signe Jul" width={30} height={20} />
          </span>
      </footer>
    </div>
  )
}
