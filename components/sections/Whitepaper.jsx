import React from 'react'
import Button from '../Button'
import styles from '../../styles/Whitepaper.module.css'
import Title from '../Title'
const Whitepaper = () => {
    return (
        <>
            {/* White Paper */}
            <section id={styles["whitepaper-eny"]} >
                <Title title="White Paper" sub="WhitePaper.WhitePaper.WhitePaper.WhitePaper.WhitePaper" />
                <Button name="White Paper" to="/white-paper" />
            </section>
        </>
    );
}

export default Whitepaper
