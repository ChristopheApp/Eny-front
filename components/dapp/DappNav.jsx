import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ButtonLogin from "./ButtonLogin"
// const DappNav = (props) => {
//     return (
//         <>
//             <nav className="py-2 px-1 rounded-b-lg ">
//                 <div className="flex md:flex-row flex-col justify-between items-center">
//                     <Link href={"/"} passHref>
//                         <a>
//                             <Image className={"logo-nav"} src={"/img/logo-nav.svg"} alt="ENY logo" width={250} height={98} />
//                         </a>
//                     </Link>
//                     {/* <p className={"truncate"}>Balance ETH: <span>{balance}</span> </p> */}
//                     <ButtonLogin
//                         isConnected={props.stateConection}
//                         connectToWeb3={props.connectFunc}
//                         address={props.address}
//                     />
//                 </div>
//             </nav>

//         </>
//     );
// }


const DappNav = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <nav className="sticky top-0 blur-lg py-2 px-1 rounded-b-lg opacity-1">
                <div className="flex flex-col lg:flex-row">
                    <div className="flex justify-between items-center">
                        <div className={"md:block hidden"}>
                            <Link href={"/"} passHref>
                                <a>
                                    <Image className={"logo-nav"} src={"/img/logo-nav.svg"} alt="ENY logo" width={250} height={98} />
                                </a>
                            </Link>
                        </div>

                        <div className={"md:block sm:hidden lg:hidden"}>
                            <ButtonLogin
                                isConnected={props.stateConection}
                                connectToWeb3={props.connectFunc}
                                address={props.address}
                            />
                        </div>
                        <div>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="outline:none focus:outline-none block lg:hidden"
                            >
                                <svg
                                    className="w-8 h-8"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        className={isOpen ? "block" : "hidden"}
                                        fillRule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        className={!isOpen ? "block" : "hidden"}
                                        fillRule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>

                    </div>
                    <div
                        className={`${isOpen ? "flex" : "hidden"
                            } lg:flex flex-col lg:flex-row w-screen justify-between self-center py-4 lg:py-0 items-center`}
                    >
                        <ul className={"flex flex-1 lg:justify-around items-center lg:flex-row flex-col "} >
                            <li className={"text-lg font-medium hoverNavEny transition delay-100 duration-300 ease-in-out"}>
                                <Link href="/" passHref className={"mx-2 my-2 lg:my-0 hover:text-OM transition delay-100 duration-300 ease-in-out transform hover:scale-125"}>
                                    <a>Project</a>
                                </Link>
                            </li>
                            <li className={"text-lg font-medium hoverNavEny transition delay-100 duration-300 ease-in-out"}>
                                <Link href="/dapp" passHref className={"mx-2 my-2 lg:my-0 hover:text-OM transition delay-100 duration-300 ease-in-out transform hover:scale-125"}>
                                    <a>ICO</a>
                                </Link>
                            </li>
                            <li className={"text-lg font-medium hoverNavEny transition delay-100 duration-300 ease-in-out"}>
                                <Link href="/airdrop" passHref  className={"mx-2 my-2 lg:my-0 hover:text-OM transition delay-100 duration-300 ease-in-out transform hover:scale-125"}>
                                    <a className={" cursor-not-allowed "}>Air Drop</a>
                                </Link>
                            </li>
                            <li className={"text-lg font-medium hoverNavEny transition delay-100 duration-300 ease-in-out"}>
                                <Link href="/help" passHref className={"mx-2 my-2 lg:my-0 hover:text-OM transition delay-100 duration-300 ease-in-out transform hover:scale-125"}>
                                    <a className={" cursor-not-allowed "}>Help</a>
                                </Link>
                            </li>
                            <li className={"text-lg font-medium hoverNavEny transition delay-100 duration-300 ease-in-out"}>
                                <Link href="/whitepaper" passHref className={"mx-2 my-2 lg:my-0 hover:text-OM transition delay-100 duration-300 ease-in-out transform hover:scale-125"}>
                                    <a>White Paper</a>
                                </Link>
                            </li>
                        </ul>
                        <div className="flex flex-grow-0 flex-col lg:flex-row md:block hidden">
                            <ButtonLogin
                                isConnected={props.stateConection}
                                connectToWeb3={props.connectFunc}
                                address={props.address}
                            />
                        </div>
                    </div>
                </div>
            </nav>
            <style jsx>
                {`
                nav{
                    background-color:rgba(255, 255, 255, 0.7);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    z-index: 120;
                }
                .hoverNavEny{
                    border-bottom: 1px solid transparent;
                }
                .hoverNavEny:hover{
                    border-bottom: 1px solid black;
                }
                
                `}
            </style>


        </>
    )
}

export default DappNav
