import Head from 'next/head';
import styles from '../../styles/Home.module.css';

export default function Layout ({children}){
  return(
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;900&display=swap" rel="stylesheet" /> 
      </Head>

      {children}

      <footer className={styles.footer}>
        <p>Frontend Engineer Technical Challenge</p>
      </footer>
    </>
  )
}