import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ENY Token</title>
        <meta name="description" content="En Y Token - Official web site" />
        <link rel="icon" href="/wheelie1.svg" />
      </Head>

      <main className={styles.main}>
      <Navbar />

        <h1 className={styles.title}>
          En Y, Le token préféré des OVNI
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>$ENY</code>
        </p>

        
      </main>

      <footer className={styles.footer}>
        
          Powered by LA TEAM JUL{' '}
          <span className={styles.logo}>
            <Image src="/signejul1.svg" alt="Signe Jul" width={30} height={20} />
          </span>
      </footer>
    </div>
  )
}
