import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import InternalLink from './InternalLink'
import MobileNav from './MobileNav'
const Navbar = ({ }) => {
    // const [isOpen, setOpen] = useState(false)
    // const [page, setpage] = useState("")
    const [active, setActive] = useState(false)
    const handleClick = () => setActive(!click)
    const closeMobileMenu = () => setActive(false)

    const [windowDimension, setWindowDimension] = useState(null);

    useEffect(() => {
        setWindowDimension(window.innerWidth);
    }, []);

    useEffect(() => {
        function handleResize() {
            setWindowDimension(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isMobile = windowDimension <= 950

    return (
        <>
           
                <nav id={styles.navbarDesktop}>
                    <Link href={"/"} passHref>
                        <Image className={"logo-nav"} src={"/img/logo-nav.svg"} alt="ENY logo" width={250} height={98} />
                    </Link>
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


