import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from './components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  // Routing to table on submit
  const router = useRouter();

  // Setting state
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const userSubmitData = (e) => {
    e.preventDefault();
    let firstName = e.target[0].value;
    setFirstname(firstName);
    let lastName = e.target[1].value;
    setLastname(lastName);
    let email = e.target[2].value;
    setEmail(email);
    let phone = e.target[2].value;
    setPhone(phone);
  }

  console.log(firstname);

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.login}>
          <h2>WELCOME</h2>
          <p className={styles.textcenter}>CRYPTO COIN CONVERTER</p>
          <hr/>
          <form onSubmit={userSubmitData}>
            <p>First:</p>
            <input type="text" name="firstName" required />
            <p>Last:</p>
            <input type="text" name="lastName" required />
            <p>Email:</p>
            <input type="email" name="email" required />
            <p>Phone Number:</p>
            <input type="text" name="lastName" required />
            <hr/>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </Layout>
    
  )
}
