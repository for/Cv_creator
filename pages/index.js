import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from './components/layout'

export default function Home() {
  
  return (
    
   <div className={styles.container}>
     
     <Layout h1={styles.h1} input={styles.input}/>
      
   </div>
  );
}
