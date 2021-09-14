import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Of Lorem Ipsum</title>
      </Head>
      <div className="banner">
        <Image src="/lorem-ipsum-banner.jpg" width={1000} height={350} />
      </div>
      <div className={styles.home}>
        <h2 className={styles.welcome}>Welcome to The Home of Lorem Ipsum</h2>
        <div className="lorem_definition">
          <h3 className={styles.headers}>What is Lorem Ipsum?</h3>
          <p><i>Lorem ipsum</i> is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        </div>
        <div className="lorem_history">
          <h3 className={styles.headers}>HISTORY, PURPOSE AND USAGE</h3>
          <p><i>Lorem Ipsum</i>, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's <i>De Finibus Bonorum et Malorum</i> for use in a type specimen book. It usually begins with:</p>

          <p><i className={styles.headers}>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</i></p>

          <p>The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.</p>

          <p>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs.</p>
        </div>
      </div>
    </div>
  )
}
