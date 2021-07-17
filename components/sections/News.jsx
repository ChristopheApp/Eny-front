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
                        title={"Development Start"}
                        subt="Ouloulou!"
                        desc={"We are proud to announce the beginning of the development of the project le sang!🔥 It smells good!"}
                    />
                    <CardNews
                        title={"Title"}
                        subt="Subtitle"
                        desc={"Lancement sur les chapeaux de roues les gens 🔥 Préparer vos sous-sous 💸"}
                    />
                    <CardNews
                        title={"Title"}
                        subt="Subtitle"
                        desc={"Lancement sur les chapeaux de roues les gens 🔥 Préparer vos sous-sous 💸"}
                    />
                </div>
            </section>
        </>
    );
}

export default News
