import React from 'react'
import Title from '../Title'
import styles from '../../styles/Ico.module.css'
import IcoInput from './IcoInput'

const DappIco = ({ balance, enyAmount, sendEth, ethAmount, displayTotalAmountInDollars, onChangeEnyInput }) => {
    return (
        <>
            <section id={"roadmap-key"} className={styles.IcoEny}>
                <Title title="ICO" sub="Initial Coin Offering" />
                <div className={"w-full flex justify-evenly my-auto"} >

                    

                    <IcoInput
                        balance={balance}
                        enyAmount={enyAmount}
                        sendEth={sendEth}
                        ethAmount={ethAmount}
                        displayTotalAmountInDollars={displayTotalAmountInDollars}
                        onChangeEnyInput={onChangeEnyInput}
                    />
                </div>
            </section>
        </>
    )
}

export default DappIco
