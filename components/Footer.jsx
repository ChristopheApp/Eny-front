import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <>
            <footer className={"footer-container"}>
                <div className={"logo-footer"} >
                    <Image src="/img/logo-nav.svg" alt="Logo ENY token" width={200} height={84} />
                </div>
                <div className={"icons-footer"} >
                    <div className={"icon discord"} ></div>
                    <div className={"icon telegram"} ></div>
                    <div className={"icon twitter"} ></div>
                </div>
            </footer>
            <style jsx>{`
.footer-container {
    width: 100%;
    min-height: 200px;
    padding: 0 95px 20px;
    border-radius: 15px 15px 0 0;

    background-color: #1D1C1E;
    position: relative;
    z-index: 0;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

.icons-footer {
    width: 20%;
    display: flex;
    justify-content: flex-end;
}

.icon {
    width: 30px;
    height: 30px;
    margin-left: 20px;
}

.discord {
    background-image: url("/img/discord-yellow.svg");
    background-size: 90%;
    background-repeat: no-repeat;
    background-position: center;
}

.telegram {
    background-image: url("/img/telegram-yellow.svg");
    background-size: 90%;
    background-repeat: no-repeat;
    background-position: center;
}

.twitter {
    background-image: url("/img/twitter-yellow.svg");
    background-size: 90%;
    background-repeat: no-repeat;
    background-position: center;
}

@media screen and (max-width: 768px) {
    .footer-container {
        padding: 0 5% 1%;
        border-radius: 15px 15px 0 0;
    
        background-color: #1D1C1E;
        position: relative;
        z-index: 0;
    
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-end;
    }
}
            `}</style>
        </>
    );
}

export default Footer
