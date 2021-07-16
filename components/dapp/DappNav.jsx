import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ButtonLogin from "./ButtonLogin"


const DappNav = ({ stateConection, connectFunc, balance, address }) => {

    return (
        <>
            <nav className="py-2 px-1 rounded-b-lg ">
                <div className="flex md:flex-row flex-col justify-between items-center">
                    <Link href={""} passHref>
                        <Image className={"logo-nav"} src={"/img/logo-nav.svg"} alt="ENY logo" width={250} height={98} />
                    </Link>
                    {/* <p className={"truncate"}>Balance ETH: <span>{balance}</span> </p> */}
                    <ButtonLogin
                        isConnected={stateConection}
                        connectToWeb3={connectFunc}
                        address={address}
                    />
                </div>
            </nav>
            
        </>
    );
}

export default DappNav
