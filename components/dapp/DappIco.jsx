import React, { useEffect, useState } from 'react'
import Title from '../Title'
import styles from '../../styles/Ico.module.css'
import IcoInfo from './IcoInfo'
import IcoInput from './IcoInput'

const DappIco = (props) => {
    const [presaleAddr, setPresaleAdrr] = useState(null)
    const [tokenAddr, setTokenAddr] = useState(null)
    const [presaleRate, setPresaleRate] = useState("")
    const [icoState, setIcoState] = useState(null)
    const [totalSupply, setTotalSupply] = useState(null)
    const [presaleEnd, setPresaleEnd] = useState(null)
    const [tokenLeft, setTokenLeft] = useState(null)
    const [tokenContract, setTokenContract] = useState(null)

    useEffect(() => {
        console.table(props.contractInfo)
        setIcoState(props.contractInfo.icoState)
        setPresaleRate(props.contractInfo.tokenPriceEth)
        setTotalSupply(props.contractInfo.tokenIcoSupply)
        setTokenContract(props.contractInfo.tokenContract)
        setTokenLeft(totalSupply - (props.contractInfo.tokensSold))
        setPresaleEnd(props.contractInfo.tokenIcoTimeOut)
        
    }, [props])

    return (
        <>
            <section id={"roadmap-key"} className={`${styles.IcoEny} h-section lg:px-sectionX md:px-sectionX-m`}>
                <Title title="ICO" sub="Initial Coin Offering" />

                <div className={"w-full my-auto "} >

                    <h4>{"Wild Lauchpad"}</h4>

                    <div className={"w-full xl:p-sectionY md:p-2 rounded-xl flex lg:flex-row-reverse lg:justify-evenly lg:items-center flex-col items-center"} >
                        <div className={"lg:w-2/5 w-full my-1 h-full xl:p-4 p-2 rounded-xl bg-blanco border-opacity-70 shadow-xl border-2 border-sombre"} >
                            <IcoInfo
                                title={"Presale Address: "}
                                // TO Process .ENV
                                param={"0x6752A24c636AEdC688de1e38212c392547A3b90c"}
                                uppercase
                                br
                            />
                            <IcoInfo
                                title={"Token Address: "}
                                param={tokenContract}
                                uppercase
                                br
                                suptext={"Do not send ETH to the token address"}
                            />
                            <IcoInfo
                                title={"ICO State:"}
                                param={(icoState ? ' Available' : ' Not Available')}
                                uppercase
                            />
                            <IcoInfo
                                title={"Total supply: "}
                                param={`${totalSupply} ENY`}
                                uppercase
                            />
                            <IcoInfo
                                title={"Presale Rate: "}
                                param={`${presaleRate} ETH per ENY`}
                                uppercase
                            />
                            <IcoInfo
                                title={"Presale End Time: "}
                                param={presaleEnd}
                                uppercase
                            />
                            <IcoInfo
                                title={"Token left: "}
                                param={`${tokenLeft} ENY`}
                                uppercase
                                last
                            />
                        </div>
                        <IcoInput
                            balance={props.balance}
                            onChangeEnyInput={props.onChangeEnyInput}
                            enyAmount={props.enyAmount}
                            ethAmount={props.ethAmount}
                            displayTotalAmountInDollars={props.displayTotalAmountInDollars}
                            sendEth={props.sendEth}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default DappIco
