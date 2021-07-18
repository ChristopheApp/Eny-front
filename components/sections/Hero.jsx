import React from 'react'
import Image from 'next/image'
import Button from '../Button'
import styles from '../../styles/Hero.module.css'
// import logo from '../../public/img/uillustration.png'
import logo from '../../public/img/illu.svg'
const Hero = () => {
    return (
        <>
            {/* Hero */}
            <section className={styles.heroEny} id="hero-eny">
                <div className={styles.heroContainer} >
                    <div className={`${styles.coLr}`} >
                        <h1 className={"uppercase"}>EnY, the token that raises on the market !</h1>
                        <p>{"A crypto-currency created around a certain open-source philosophy, inspired by a French RAP icon. Start in \"stunt\" 🛵💨 to arrive in \"T-max\" 🏍️💨 In \"Y\" like your grandfather!"}</p>
                        <div className={styles.heroBtnContainer}>
                            <Button name="Get started" to={"/dapp"} margin={1} />
                            <Button name="White Paper" to={"https://rocky-promotion-f0b.notion.site/ENY-Token-Whitepaper-77ec25531e2e46e59ea6ed08a4124662"} margin={1} />
                        </div>
                    </div>
                    <div className={styles.coLl} >
                        <Image
                            className={styles.heroImg}
                            src={logo}
                            alt="En y illustration"
                            width={400}
                            height={400}
                        />
                    </div>
                </div>
                {/* <div className={styles.counterContainer} >
                    <div className={styles.counter} >
                        <span className={styles.counterNumber} >$0.30</span>
                        <p className={styles.counterTitle} >Current Price</p>
                    </div>
                    <div className={styles.counter} >
                        <span className={styles.counterNumber} >35,766</span>
                        <p className={styles.counterTitle} >Holders</p>
                    </div>
                    <div className={styles.counter} >
                        <span className={styles.counterNumber} >6,350,000,000</span>
                        <p className={styles.counterTitle} >Supply</p>
                    </div>
                    <div className={styles.counter} >
                        <span className={styles.counterNumber} >$10729.80</span>
                        <p className={styles.counterTitle} >Market Cap</p>
                    </div>
                </div> */}
            </section>
        </>
    );
}

export default Hero
