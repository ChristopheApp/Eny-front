import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'

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
                    <li>
                        <a className={styles.icon}
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://discord.com"
                        >
                            <Image src="/img/discord-yellow.svg" alt="Icon discord" width={30} height={30} />
                        </a>
                    </li>
                    <li>
                        <a className={styles.icon}
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://telegram.com"
                        >
                            <Image src="/img/telegram-yellow.svg" alt="Icon telegram" width={30} height={30} />
                        </a>
                    </li>
                    <li>
                        <a className={styles.icon}
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://twitter.com"
                        >
                            <Image src="/img/twitter-yellow.svg" alt="Icon twitter" width={30} height={30} />
                        </a>
                    </li>
                </div>
            </footer>
        </>
    );
}

export default Footer
