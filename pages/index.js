import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja | Home</title>
      </Head>
      <div className={styles.container}>
        
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ducimus cumque, hic aliquid excepturi accusamus est assumenda doloribus porro, quisquam vitae alias id similique omnis repellendus, voluptates numquam quod delectus?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ducimus cumque, hic aliquid excepturi accusamus est assumenda doloribus porro, quisquam vitae alias id similique omnis repellendus, voluptates numquam quod delectus?
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
        
      </div>
    </>
  )
}
