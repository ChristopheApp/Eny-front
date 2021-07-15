import React from 'react'
import styles from '../styles/CardNews.module.css'
const CardNews = ({title, subt, desc}) => {
    return (
        <>
            <div className={`${styles.cardNews} transition delay-100 duration-300 ease-in-out`} >
                <h4>{title}</h4>
                <h5>{subt}</h5>
                <p>{desc}</p>
            </div>
        </>
    );
}

export default CardNews
