import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import Button from './Button'
import styles from '../styles/Navbar.module.css'
import InternalLink from './InternalLink'
const Navbar = ({ }) => {
    // const [isOpen, setOpen] = useState(false)
    // const [page, setpage] = useState("")

    return (
        <>
            <nav id={styles.navbarDesktop}>
                <Image src={"/img/logo-nav.svg"} alt="ENY logo" width={196} height={90} />
                <ul className={styles.linksEny} >
                    <li>
                        <InternalLink name="Home" section="" top="1" />
                    </li>
                    <li>
                        <InternalLink name="About" section="about-eny" top="0" />
                    </li>
                    <li>
                        <InternalLink name="Roadmap" section="roadmap-key" top="0" />
                    </li>
                    <li>
                        <InternalLink name="News" section="news-eny" top="0" />
                    </li>
                    <li><a href="/whitepaper" target="_blank" rel="noopener noreferrer" >{"White Paper"}</a></li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://discord.com">
                            <Image src="/img/discord.svg" alt="Icon discord" width={30} height={30} />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://telegram.com" >
                            <Image src="/img/telegram.svg" alt="Icon telegram" width={30} height={30} />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com" >
                            <Image src="/img/twitter.svg" alt="Icon twitter" width={30} height={30} />
                        </a>
                    </li>
                </ul>
                {/* <Button name="Get started" to="/dapp" /> */}
                <Link href={"/dapp"} passHref>
                <button className={styles.navButton}>
                    {"Get started"}
                </button>
            </Link>
            </nav>

        </>
    )
}

export default Navbar


