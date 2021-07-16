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
                        <h1>En Y, le token qui cabre sur le marché ! </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat bibendum dolor ut consequat. Nam commodo tortor id tortor tincidunt maximus. </p>
                        <div className={styles.heroBtnContainer}>
                            <Button name="Get started" to={"/dapp"} margin={1} />
                            <Button name="White Paper" to={"/whitepaper"} margin={1} />
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
                <div className={styles.counterContainer} >
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
                </div>
            </section>
        </>
    );
}

export default Hero
