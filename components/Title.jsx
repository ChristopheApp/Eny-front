import React from 'react'
import styles from '../styles/Title.module.css'

const Title = ({ title, sub }) => {
    // do function sub()
    return (
        <>
            <div className={styles.enyTitleContainer} >
                <h2>{title}</h2>
                <p className={styles.enySubtitle} >{sub}</p>
            </div>
        </>
    );
}

export default Title
