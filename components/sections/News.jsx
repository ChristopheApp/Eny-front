import React from 'react'
import styles from '../../styles/News.module.css'
import Title from '../Title'
import CardNews from '../CardNews'

const News = () => {
    return (
        <>
            {/* News */}
            <section id={"news-eny"} className={styles.newsEny}>
                <Title title="News" sub="News.News.News.News.News.News.News" />
                <div className={styles.cardsContainer} >
                    <CardNews
                        title={"Token deploy on tesnet Rinkeby"}
                        desc={"We are proud to announce the beginning of the development of the project le sang! 🔥"}
                    />
                    <CardNews
                        title={"Personal ICO deploy on tesnet Rinkeby"}
                        desc={"You can test the bizbiz right now! 💸 It's easy if you already have Rinkeby ether 🪙. Otherwise wait for the documentation or look for the answer on '' l'internet '' ! 🤓"}
                    />
                    <CardNews
                        title={"dApp Test ICO ENY"}
                        desc={"Yep, click on the top right button there... ↗️ The Getting Start thing! And you'll get right to it 🤜🏿. Don't hesitate to give us feedback! 🔥 "}
                    />
                </div>
            </section>
        </>
    );
}

export default News
