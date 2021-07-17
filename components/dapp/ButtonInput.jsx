import React from 'react'
import styles from '../../styles/Button.module.css'

const ButtonInput = ({ name, func, isRinkeby }) => {

    return (
        <>
            <a>
                <button
                    disabled={!isRinkeby && "disabled"}
                    onClick={func && func}
                    className={` ${styles.navBtn} transition delay-100 duration-300 ease-in-out hover:bg-bonne-mere disabled:opacity-20 `}
                >
                    {name}
                </button>
            </a>

        </>
    );
}

export default ButtonInput
