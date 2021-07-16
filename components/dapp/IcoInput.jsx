import React from 'react'
import Button from '../Button'
import IcoInfo from './IcoInfo'

const IcoInput = ({ balance, enyAmount, sendEth, ethAmount, displayTotalAmountInDollars, onChangeEnyInput }) => {
    return (
        <>
            <div className={"bg-OM h-full p-10 rounded-xl flex flex-col-reverse justify-between items-center"} >
                <div className={"border-b-2"} >
                    <h3>Ico info</h3>
                    <IcoInfo title={"Presale Address: "} param={"0x6752A24c636AEdC688de1e38212c392547A3b90c"} uppercase br />
                    <IcoInfo title={"Token Address: "} param={"0x6752A24c636AEdC688de1e38212c392547A3b90c"} uppercase br suptext={"Do not send ETH to the token address"} />
                    <IcoInfo title={"Presale Rate: "} param={"*0,001* ETH per ENY"} uppercase />
                    <IcoInfo title={"ICO State:"} param={"*OPEN*"} uppercase/>
                    <IcoInfo title={"Minimum Contribution: "} param={"*0,001*"} uppercase  />
                    <IcoInfo title={"Presale Start Time: "} param={"*1626165000*"} uppercase />
                    <IcoInfo title={"Presale End Time: "} param={"*1631349000*"} uppercase />
                    <IcoInfo title={"Token left: "} param={"*1299999*"} uppercase />
                </div>
                <div className={"flex flex-col"}>
                    <p>Your balance: {(balance)} ETH</p>
                    <div className={"flex flex-row-reverse"}>
                        <p>ENY</p>
                        {/* Input max = token left */}
                        <input
                            className={"text-right"}
                            max="1300000"
                            type="number"
                            onChange={e => onChangeEnyInput(e.target.value)}
                            value={enyAmount}
                        />
                    </div>
                    <div>
                        <p>You will pay:</p>
                        <span> {ethAmount} eth ~ {displayTotalAmountInDollars} $</span>
                    </div>
                <Button
                    name={"Contribute"}
                    to={""}
                    margin={1}
                    func={sendEth}
                />
                </div>
            </div>
        </>
    )
}

export default IcoInput
