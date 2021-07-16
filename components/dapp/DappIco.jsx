import React from 'react'
import Title from '../Title'
import styles from '../../styles/Ico.module.css'
import IcoInfo from './IcoInfo'
import IcoInput from './IcoInput'

const DappIco = ({ balance, enyAmount, sendEth, ethAmount, displayTotalAmountInDollars, onChangeEnyInput }) => {
    return (
        <>
            <section id={"roadmap-key"} className={`${styles.IcoEny} h-section lg:px-sectionX md:px-sectionX-m`}>
                <Title title="ICO" sub="Initial Coin Offering" />

                <div className={"w-full my-auto "} >

                    <h4>{"Wild Lauchpad"}</h4>

                    <div className={"w-full xl:p-sectionY md:p-2 rounded-xl flex lg:flex-row-reverse lg:justify-evenly lg:items-center flex-col items-center"} >
                        <div className={"lg:w-2/5 w-full my-1 h-full xl:p-4 p-2 rounded-xl bg-blanco border-opacity-70 shadow-xl border-2 border-sombre"} >
                            <IcoInfo title={"Presale Address: "} param={"0x6752A24c636AEdC688de1e38212c392547A3b90c"} uppercase br />
                            <IcoInfo title={"Token Address: "} param={"0x6752A24c636AEdC688de1e38212c392547A3b90c"} uppercase br suptext={"Do not send ETH to the token address"} />
                            <IcoInfo title={"Presale Rate: "} param={"*0,001* ETH per ENY"} uppercase />
                            <IcoInfo title={"ICO State:"} param={"*OPEN*"} uppercase />
                            <IcoInfo title={"Minimum Contribution: "} param={"*0,001*"} uppercase />
                            <IcoInfo title={"Presale Start Time: "} param={"*1626165000*"} uppercase />
                            <IcoInfo title={"Presale End Time: "} param={"*1631349000*"} uppercase />
                            <IcoInfo title={"Token left: "} param={"*1299999*"} uppercase />
                            <IcoInfo title={"Participants: "} param={"*12*"} uppercase last />
                        </div>
                        <IcoInput
                            balance={balance}
                            onChangeEnyInput={onChangeEnyInput}
                            enyAmount={enyAmount}
                            ethAmount={ethAmount}
                            displayTotalAmountInDollars={displayTotalAmountInDollars}
                            sendEth={sendEth}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default DappIco
