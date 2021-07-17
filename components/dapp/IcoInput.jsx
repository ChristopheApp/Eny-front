import React, { useEffect, useState } from 'react'
import Button from '../Button'

const IcoInput = (props) => {
    return (
        <>
            <div className={"lg:w-2/5 w-full my-1 h-full xl:p-4 p-2 bg-white shadow-xl border-2 border-sombre border-opacity-70 rounded-xl flex flex-col items-center"}>
                <div className={"border-allu border-b-2 py-2"} >
                    <p className={"font-medium m-0 p-0"}>
                        Your balance:
                    </p>
                    <span className={" font-light hover:bg-bonne-mere hover:bg-opacity-20"}>
                        {(props.balance)} ETH
                    </span>
                </div>

                <div className={"py-4 flex 2xl:w-full flex-col items-center 2xl:flex-row 2xl:justify-around mt-2 border-allu border-b-2 pt-2"}>
                    <label htmlFor="amount" className={"font-medium"}>Desired amount:</label>
                    <div className={"relative text-sombre w-full 2xl:w-1/3"}>
                        {/* Input max = token left */}
                        <input
                            name={"amount"}
                            max="1300000"
                            type="number"
                            onChange={e => props.onChangeEnyInput(e.target.value)}
                            value={props.enyAmount}
                            className={
                                "w-full disabled py-2 my-2 text-center text-md font-medium bg-blanco rounded-md pl-10 focus:outline-none focus:shadow-outline focus:bg-bonne-mere focus:bg-opacity-20 border-2 border-sombre transition delay-100 duration-300 ease-in-out"}
                            placeholder="Desired Amount"
                            autoComplete="off"
                        />
                        <span className="absolute inset-y-0 left-0 pl-2 font-medium flex items-center">ENY </span>
                    </div>

                    <Button
                        name={"Contribute"}
                        to={""}
                        margin={1}
                        func={props.sendEth}
                    />
                </div>
                <div className={"mt-2"}>
                    <p className={"font-medium"}>You will pay:</p>
                    <div className={"flex flex-col text-sm 2xl:flex-row"}>
                        <span className={"font-normal"}>{props.ethAmount} {"ETH"}</span>
                        <span className={"px-2 font-bold"}>&asymp;</span>
                        <span className={"font-normal"}> {props.displayTotalAmountInDollars} $</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IcoInput
