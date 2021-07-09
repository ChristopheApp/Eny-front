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
          <div className={styles.aboutColRight} >
            <h3>Lorem ipsum bla bla bla bla </h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. </p>
          </div>
          <div className={styles.aboutColLeft} >
            <Cards title={"Community"} desc={"Donec odio nisl, finibus imperdiet vehicula nec, tempus eu sem. Curabitur eget nulla erat."} />
            <Cards title={"ICO"} desc={"Donec odio nisl, finibus imperdiet vehicula nec, tempus eu sem. Curabitur eget nulla erat."} />
            <Cards title={"Utility"} desc={"Donec odio nisl, finibus imperdiet vehicula nec, tempus eu sem. Curabitur eget nulla erat."} />
          </div>
        </div>
      </section>
    </>
  )
}

