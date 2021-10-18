import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.headers}>
        <div className={styles.header_button_list}>
          <div className={styles.header_button}>
            Top
          </div>
          <div className={styles.header_button}>
            Blog
          </div>
          <div className={styles.header_button}>
            others
          </div>
        </div>
        <div className={styles.header_profile}>
          Profile
        </div>
      </div>
      <div className={styles.contents}>
        Welcome to My Blog!
      </div>
    </div>
  )
}
