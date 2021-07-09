import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Whitepaper.module.css'
import Title from '../Title'
const Whitepaper = () => {
    return (
        <>
            {/* White Paper */}
            <section id={styles["whitepaper-eny"]} >
                <Title title="White Paper" sub="WhitePaper.WhitePaper.WhitePaper.WhitePaper.WhitePaper" />
                <Link href={"/white-paper"} passHref>
                    <button className={styles.whiteButton}>
                        {"White Paper"}
                    </button>
                </Link>
            </section>
        </>
    );
}

export default Whitepaper
