import Head from 'next/head';
import React from 'react'
import styles from '../styles/Home.module.css';
import ImageIn from '../components/Image';
import Content from '../components/Content';
import Background from '../components/Background';
import Text from '../components/Text';

export default function Home() {


  return (
    <>
      <Head>
        <title>Michael Yu Lab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ImageIn />
      <Content />
      <Background lassName={styles.background}>
        <Text />
      </Background>
    </>
  )
}
