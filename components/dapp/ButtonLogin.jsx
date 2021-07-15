import React, { useEffect, useState } from 'react'
import styles from '../../styles/Button.module.css'
import Illu from "../icons/Illu"

const ButtonLogin = ({ isConnected, connectToWeb3, address }) => {
    const [CouleurPastille, setCouleurPastille] = useState("red") // le moot pastille remplace une icone avec un simple cercle rouge ou vert si on est connecté ou pas comme sur etherscan dans write contract

    useEffect(() => {
        if (isConnected)
            setCouleurPastille('green')
        else
            setCouleurPastille('red')

    }, [isConnected])

    return (
        <>
            <button onClick={connectToWeb3} className={`bg-gray-300 flex justify-center items-center ${styles.enyButton}`}>
                <span className={"text-sm pr-1"}>{(!isConnected ? "Connect Wallet" : (address && "Connected"))}</span>
                <Illu
                    width={"15"}
                    height={"15"}
                    fill={CouleurPastille} />
            </button>
        </>
    );
}

export default ButtonLogin
