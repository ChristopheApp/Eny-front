import Link from 'next/link'
import React from 'react'
import styles from '../../styles/CommingSoon.module.css'


const CommingSoon = ({name}) => {
    return (
        <>
            {/* CommingSoon */}
            <section className={`${styles.heroEny} text-center m-0`} id="hero-eny">
                <h2>{name}</h2>
                <h3>Comming Soon</h3>
                <div>
                    <Link href={"/"} passHref>
                        <a className={"mx-4 bg-sombre w-20 p-2 uppercase rounded-lg text-white hover:text-sombre hover:bg-blanco transition delay-100 duration-300 ease-in-out "}>
                            {"-> Project"}
                        </a>
                    </Link>
                    <Link href={"/dapp"} passHref>
                        <a className={"mx-4 bg-sombre w-20 p-2 uppercase rounded-lg text-white hover:text-sombre hover:bg-blanco transition delay-100 duration-300 ease-in-out "}>
                        {"-> dApp"}
                        </a>
                    </Link>
                </div>
            </section>
        </>
    );
}

export default CommingSoon
