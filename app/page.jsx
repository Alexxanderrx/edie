import Image from 'next/image'
import styles from './page.module.css'
import NavBar from '@/components/navBar/navBar'

export default function Home() {
  return (
    <main className={styles.main}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <NavBar />
      <section className={styles.fondo}>
        <div className={styles.card00}>
          <p>Unhappy with your website?</p>
          <h1>We create beautiful
            and fast web services</h1>
        </div>

        <div className={styles.img00} />

        <div className={styles.card01}>
          <h1>Story, emotion and purpose</h1>
          <p>We help transform your ideas into real world applications that will outperform your toughest competition and help you achieve your strategic goals in short period of time.</p>
          <div className={styles.card01a}>
            <p>Want us to contact you?</p>
            <div className={styles.card01b}>
              <input placeholder='Email'></input>
              <button>Join</button>
            </div>
          </div>

        </div>
      </section>

      <section className={styles.fondo}>
        s2
      </section>

      <section className={styles.fondo}>
        s3
      </section>

      <section className={styles.fondo}>
        s4
      </section>

      <footer>
        footer
      </footer>
    </main>
  )
}
