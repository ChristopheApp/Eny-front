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
                        <Image className={"logo-nav"} src={"/img/logo-nav.svg"} alt="ENY logo" width={200} height={84} />
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
                            <Discord />
                        </Link>
                    </li>
                    <li className={"text-bonne-mere mx-2 my-2 transition delay-150 duration-300 ease-in-out transform hover:scale-125"}>
                        <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://telegram.com"
                            passHref
                        >
                            <Telegram />
                        </Link>
                    </li>
                    <li className={"text-bonne-mere mx-2 my-2 transition delay-150 duration-300 ease-in-out transform hover:scale-125"}>
                        <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://twitter.com"
                            passHref
                        >
                            <Twitter />
                        </Link>
                    </li>
                </div>
            </footer>
        </>
    );
}

export default Footer
