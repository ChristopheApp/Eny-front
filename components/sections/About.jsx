import React from 'react'
import Cards from '../Cards'
import styles from '../../styles/About.module.css'
import Title from '../Title'

export default function About() {
  return (
    <>
      {/* About */}
      <section id={"about-eny"} className={styles.abouteny} >
        <Title title="About" sub="About.About.About.About.About.About.About" />
        <div className={styles.aboutContainer}>
          <div className={`${styles.aboutColRight} text-left`} >
            <h3 className={"uppercase"}>{'Showcase yourself, but don\'t forget your values.'}</h3>
            <p>
          { "ENY token ($ENY) is a crypto-currency based on a certain open-source and collaborative philosophy, inspired by the rapper JUL. Dedicated to educate the population to the use of crypto-currencies, ENY aims to provide tokens in a simple and friendly way that can be used by the community on our platforms and more. "}
          <br/> 
          {" Friendly, collaborative, fun, ENY token differentiates itself from other digital currencies thanks to its passion (\"It\'s the passion that speaks\") and its great community (\"The blood!\")."}
            </p>
          </div>
          <div className={styles.aboutColLeft} >
            <Cards title={"Community"} desc={"A linked community with a common goal of success without forgetting its values such as respect, love and sharing. ✨"} />
            <Cards title={"ICO"} desc={"Initial coins offering at the price of a caprisun for a freewheeling start. Not to the moon!  We keep the goods on earth! We don't forget the reals. 🪙🌍"} />
            <Cards title={"Utility"} desc={"For a small service, an airmax exchange, or your chocolate bar and your caprisun at the food store around the corner, ENY will be there! 💪🏾"} />
          </div>
        </div>
      </section>
    </>
  )
}

