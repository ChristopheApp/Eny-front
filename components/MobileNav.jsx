import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import InternalLink from './InternalLink'
import Button from '../components/Button'
import { Discord, Telegram, Twitter } from "../components/icons"

const MobileNav = () => {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <nav className="sticky top-0 blur-lg py-2 px-1 rounded-b-lg opacity-1">
                <div className="flex flex-col lg:flex-row">
                    <div className="flex justify-between items-center">
                        <Link href={"/"} passHref>
                            <a>
                                <Image className={"logo-nav"} src={"/img/logo-nav.svg"} alt="ENY logo" width={250} height={98} />
                            </a>
                        </Link>
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
                                <InternalLink className={""} name="Home" section="hero-eny" top="1" />
                            </li>
                            <li className={"text-lg font-medium hoverNavEny transition delay-100 duration-300 ease-in-out"}>
                                <InternalLink name="About" section="about-eny" top="0" />
                            </li>
                            <li className={"text-lg font-medium hoverNavEny transition delay-100 duration-300 ease-in-out"}>
                                <InternalLink name="Roadmap" section="roadmap-key" top="0" />
                            </li>
                            <li className={"text-lg font-medium hoverNavEny transition delay-100 duration-300 ease-in-out"}>
                                <InternalLink name="News" section="news-eny" top="0" />
                            </li>
                            <li className={"text-lg font-medium hoverNavEny transition delay-100 duration-300 ease-in-out"}>
                                <Link href="/img/" target="_blank" rel="noopener noreferrer" >{"White Paper"}</Link>
                            </li>
                        </ul>
                        <div className={"flex flex-shrink-0 w-40 justify-around"}>
                            <Link target="_blank" rel="noopener noreferrer" href="https://discord.com" passHref className={"mx-2 my-2 lg:my-0 hover:text-OM transition delay-100 duration-300 ease-in-out transform hover:scale-125"}>
                                <a>
                                    <Discord />
                                </a>
                            </Link>
                            <Link target="_blank" rel="noopener noreferrer" href="https://telegram.com" passHref className={"mx-2 my-2 lg:my-0 hover:text-OM transition delay-100 duration-300 ease-in-out transform hover:scale-125"}>
                                <a>
                                    <Telegram />
                                </a>
                            </Link>
                            <Link target="_blank" rel="noopener noreferrer" href="https://twitter.com" passHref className={"mx-2 my-2 lg:my-0 hover:text-OM transition delay-100 duration-300 ease-in-out transform hover:scale-125"}>
                                <a>
                                    <Twitter />
                                </a>
                            </Link>
                        </div>
                        <div className="flex flex-grow-0 flex-col lg:flex-row">
                            <Button name="Get started" to={"/dapp"} margin={1} />
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
                    z-index: 3000;
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
    );
}

export default MobileNav
