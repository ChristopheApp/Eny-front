import React from 'react'
import styles from '../styles/Cards.module.css'

const Cards = ({ title, desc }) => {
    return (
        <>
            <div className={styles.enyCardContainer}>
                <h4>{title}</h4>
                <p>{desc}</p>
            </div>
        </>
    );
}

export default Cards
