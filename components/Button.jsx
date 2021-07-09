import React from 'react'
import Link from 'next/link'
import styles from '../styles/Button.module.css'

const Button = ({ name, to }) => {
    return (
        <>
            <Link href={to} passHref>
                <button className={styles.enyButton}>
                    {name}
                </button>
            </Link>
        </>
    );
}

export default Button
