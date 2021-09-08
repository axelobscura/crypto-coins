import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from './components/Layout';
import styles from '../styles/Home.module.css';

export default function Dashboard(props) {

  if(!props.data && !props.data2){
    return(
      <div>
        <p>
          Loading
        </p>
      </div>
    )
  };

  console.log(props.data2);
  
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.dash}>
          <h2>DASHBOARD</h2>
          <hr/>
          <table style={{'width':'90%'}}>
            <thead>
            <tr>
              <th>BTC</th>
              <th>ETH</th>
              <th>XRP</th>
            </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h1>$ {props.data.BTC.USD}</h1>
                </td>
                <td>
                  <h1>$ {props.data.ETH.USD}</h1>
                </td>
                <td>
                  <h1>$ {props.data.XRP.USD}</h1>
                </td>
              </tr>
              <tr>
                <td>
                  <h1>$ {props.data2[0].current_price}</h1>
                </td>
                <td>
                  <h1>$ {props.data2[1].current_price}</h1>
                </td>
                <td>
                  <h1>$ {props.data2[2].current_price}</h1>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
    
  )
}

export async function getStaticProps(context) {
  const res = await fetch(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP&tsyms=USD,EUR`);
  const res2 = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,ripple`)
  const data = await res.json();
  const data2 = await res2.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { 
      data,
      data2
    }, // will be passed to the page component as props
  }
}

