import styles from '../styles/Lorems.module.css'
import Head from 'next/dist/next-server/lib/head'
import DummyComp from '../components/DummyComp'

export default function Guides() {
  return (
    <>
    <Head>
      <title>The Lorems | Home Of Lorem Ipsum By Micky</title>
    </Head>
      <div className={styles.lorems}>
        <h2>All Lorem Ipsums</h2>
        <p><DummyComp /></p>

      </div>

    </>
  )
}