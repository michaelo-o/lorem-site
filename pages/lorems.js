import styles from '../styles/Lorems.module.css'
import Head from 'next/dist/next-server/lib/head'

export default function Guides() {
  return (
    <>
    <Head>
      <title>The Lorems</title>
    </Head>
      <div className={styles.lorems}>
        <h2>All Lorem Ipsums</h2>
      </div>

    </>
  )
}