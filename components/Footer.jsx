import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'
import { Discord, Telegram, Twitter } from "../components/icons"

const Footer = () => {
    return (
        <>
            <footer className={styles.footerContainer}>
                <div className={styles["logo-footer"]} >
                    <Link href={"/"} passHref>
                        <a href={"/"}>
                            <Image className={"logo-nav"} src={"/img/logo-nav.svg"} alt="ENY logo" width={200} height={84} />
                        </a>
                    </Link>
                </div>
                <div className={"flex md:flex-row flex-col justify-center items-center"}>
                    <Link href={"https://rocky-promotion-f0b.notion.site/ENY-Token-Whitepaper-77ec25531e2e46e59ea6ed08a4124662"} passHref>
                        <a target="_blank" rel="noopener noreferrer"
                            className={"font-bold uppercase text-lg text-bonne-mere mx-2 tracking-widest hover:underline hover:text-white"}
                        >
                            White Paper
                        </a>
                    </Link>
                    <Link href={"https://rocky-promotion-f0b.notion.site/Tokenomics-2f66f5ff1cb34689bcdfeaea6e2b005c"} passHref>
                        <a target="_blank" rel="noopener noreferrer"
                            className={"font-bold uppercase text-lg text-bonne-mere mx-2 tracking-widest hover:underline hover:text-white"}
                        >
                            Tokenomics
                        </a>
                    </Link>
                </div>
                <div className={styles.iconsFooter} >
                    <li className={"text-bonne-mere mx-2 my-2 transition delay-150 duration-300 ease-in-out transform hover:scale-125"}>
                        <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://discord.com"
                            passHref
                        >
                            <a>
                                <Discord />
                            </a>
                        </Link>
                    </li>
                    <li className={"text-bonne-mere mx-2 my-2 transition delay-150 duration-300 ease-in-out transform hover:scale-125"}>
                        <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://telegram.com"
                            passHref
                        >
                            <a>
                                <Telegram />
                            </a>
                        </Link>
                    </li>
                    <li className={"text-bonne-mere mx-2 my-2 transition delay-150 duration-300 ease-in-out transform hover:scale-125"}>
                        <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://twitter.com"
                            passHref
                        >
                            <a>
                                <Twitter />
                            </a>
                        </Link>
                    </li>
                </div>
            </footer>
        </>
    );
}

export default Footer
