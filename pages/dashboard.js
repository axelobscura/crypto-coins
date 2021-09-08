import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from './components/Layout';
import styles from '../styles/Home.module.css';

export default function Dashboard(props) {

  console.log(props);

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.login}>
          <h2>DASHBOARD</h2>
        </div>
      </div>
    </Layout>
    
  )
}

export async function getStaticProps(context) {
  const res = await fetch(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP&tsyms=USD,EUR`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}

