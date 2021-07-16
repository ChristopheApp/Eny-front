import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ButtonLogin from "./ButtonLogin"

const DappNav = (props) => {
    return (
        <>
            <nav className="py-2 px-1 rounded-b-lg ">
                <div className="flex md:flex-row flex-col justify-between items-center">
                    <Link href={"/"} passHref>
                        <Image className={"logo-nav"} src={"/img/logo-nav.svg"} alt="ENY logo" width={250} height={98} />
                    </Link>
                    {/* <p className={"truncate"}>Balance ETH: <span>{balance}</span> </p> */}
                    <ButtonLogin
                        isConnected={props.stateConection}
                        connectToWeb3={props.connectFunc}
                        address={props.address}
                    />
                </div>
            </nav>

        </>
    );
}

export default DappNav
