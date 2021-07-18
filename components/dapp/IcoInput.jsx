import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from "react-loader-spinner"
import ButtonInput from './ButtonInput'

const IcoInput = (props) => {
    return (
        <>

            <div className={"lg:w-2/5 w-full my-1 h-full xl:p-4 p-2 bg-white shadow-xl border-2 border-sombre border-opacity-70 rounded-xl flex flex-col items-center"}>
                <div className={"border-allu border-b-2 py-2"} >
                    {!props.isRinkeby && <p className={"text-le-sang text-medium uppercase font-medium"}>Must be in Rinkeby Network 😓</p>}
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
                        <input
                            disabled={!props.isRinkeby && "disabled"}
                            name={"amount"}
                            max="1300000"
                            min="0"
                            type="number"
                            onChange={e => props.onChangeEnyInput(e.target.value)}
                            value={props.enyAmount}
                            className={
                                "w-full py-2 my-2 text-center text-md font-medium bg-blanco rounded-md pl-10 focus:outline-none focus:shadow-outline focus:bg-bonne-mere focus:bg-opacity-20 border-2 border-sombre transition delay-100 duration-300 ease-in-out disabled:opacity-20"}
                            placeholder="Desired Amount"
                            autoComplete="off"
                        />
                        <span className="absolute inset-y-0 left-0 pl-2 font-medium flex items-center">ENY </span>
                    </div>

                    <ButtonInput
                        name={"Contribute"}
                        func={props.sendEth}
                        isRinkeby={props.isRinkeby}
                    //Disabled if not Rinkeby 
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
                
                {/* Loader & tx hash */}
                <div className={"border-allu border-t-2 py-2 mt-2 truncate w-full flex flex-col items-center"}>
                    {props.hash &&
                        <div className={"truncate w-full px-2"}>
                            <p>Your Transaction Hash</p>
                            <Link

                                href={(`https://rinkeby.etherscan.io/tx/${props.hash}`)}
                                passHref
                            >
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={"truncate font-light text-sm underline"}>
                                    {props.hash}
                                </a>
                            </Link>
                        </div>
                    }
                    {
                        (props.isLoading)
                        &&
                        <div>
                            <Loader
                                type="ThreeDots"
                                color="#F2CE14"
                                height={50}
                                width={50}
                            />
                        </div>
                    }
                </div>
            </div>

        </>
    )
}

export default IcoInput
