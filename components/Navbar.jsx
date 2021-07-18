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
                    <a>
                        <Image className={"logo-nav"} src={"/img/logo-nav.svg"} alt="ENY logo" width={250} height={98} />
                    </a>
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
                    <li><Link href="/whitepaper" target="_blank" rel="noopener noreferrer" >{"White Paper"}</Link></li>
                    <li>
                        <Link target="_blank" rel="noopener noreferrer" href="https://discord.com" passHref>
                            <Image src="/img/discord.svg" alt="Icon discord" width={30} height={30}
                            className={"transition delay-150 duration-300 ease-in-out transform hover:scale-125"}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link target="_blank" rel="noopener noreferrer" href="https://telegram.com" passHref>
                            <Image src="/img/telegram.svg" alt="Icon telegram" width={30} height={30}
                            className={"transition delay-150 duration-300 ease-in-out transform hover:scale-125"}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link target="_blank" rel="noopener noreferrer" href="https://twitter.com" passHref>
                            <Image src="/img/twitter.svg" alt="Icon twitter" width={30} height={30}
                            className={"transition delay-150 duration-300 ease-in-out transform hover:scale-125"}
                            />
                        </Link>
                    </li>
                </ul>
                <Link href={"/dapp"} passHref>
                    <a >
                        <button className={styles.navButton}>
                            {"Get started"}
                        </button>
                    </a>
                </Link>
            </nav>

        </>
    )
}

export default Navbar


