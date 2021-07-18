import React, { useEffect, useState } from 'react'
import Title from '../Title'
import styles from '../../styles/Roadmap.module.css'
import Image from 'next/image'
// import Timeline from '../Timeline'

const Roadmap = () => {
    const data = [
        {
            id: 1,
            title: "Q3 2021",
            description: [
                "✅ Token Tesnet on Rinkeby",
                "✅ Personal ICO Tesnet deploy",
                "✅ Test dApp ICO ENY"
            ]
        },
        {
            id: 2,
            title: "Q4 2021",
            description: [
                "❌ Deploy Token on Matic",
                "❌ Seed Round DxSale 0.05$",
                "❌ List on CoinGecko"
            ]
        },
        {
            id: 3,
            title: "Q1  2022",
            description: [
                "❌ Investor Round 0.30$",
                "❌ Lauchpad Binance 🤞",
                "❌ dApp Konectoo"
            ]
        },
        {
            id: 4,
            title: "Q2  2022",
            description: [
                "🤞 Public Sale 0.55$",
                "❌ Personal Sale 0.50$",
                "🏍️💨"
            ]
        }
    ]


    const [idQ, setIdQ] = useState("1")
    const getId = (e) => {
        setIdQ(e.target.id)

    }

    // useEffect(() => {
    //     console.log(idQ)

    // }, [idQ])

    return (
        <>
            {/* Roadmap */}
            <section id={"roadmap-key"} className={`${styles.roadmapEny} md:px-0`}>
                <Title title="Roadmap" sub="Roadmap.Roadmap.Roadmap.Roadmap.Roadmap.Roadmap.Roadmap" />
                <div className={`${styles["timeline-container"]} flex flex-col justify-evenly`} >
                    <div>
                        {/* useEffect when state change reload with the good info */}
                        {data.map(q => (
                            <button
                                key={q.id}
                                id={q.id}
                                onClick={getId}
                                className={"w-20 h-5 bg-bonne-mere mx-4 my-2 p-2 rounded-md hover:bg-OM hover:shadow-md transition delay-100 duration-300 ease-in-out "}
                            >
                                {q.title}
                            </button>
                        ))}
                    </div>
                    <div>
                        {data.map((q, i) => (
                            <>
                                {idQ == q.id &&
                                    <div key={q.id}
                                        className={"mx-auto bg-white py-2 px-4 rounded-3xl w-64 my-4 shadow-xl"}
                                    >
                                        <h3 className={"text-xl font-semibold my-2 "}> {q.title}{q.id == 1 ? " 🔥" : " ❄️"}</h3>
                                        <div className="flex flex-col justify-center text-left text-sombre text-sm">{q.description.map((li) => (
                                            <p key={li.id} className={"m-0"}>{li}</p>
                                        ))}</div>

                                    </div>
                                }
                            </>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Roadmap