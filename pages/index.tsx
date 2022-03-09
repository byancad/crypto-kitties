import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import KittyReader from '../components/ConnectWeb3/ConnectWeb3';
import { Box, Button, Container, FormControl, FormHelperText, FormLabel, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { SearchForm } from '../components/Forms/SearchForm';
import useKittyContract from '../Hooks/useKittyContract';
import { contract } from 'ethers';

const Home: NextPage = () => {
  const kitty = useKittyContract();
  // const kittyContract = kitty && kitty.kittyContract && kitty.kittyContract.contract
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Kitty Browser</title>
      
        
      </Head>

      <main className={styles.main}>
      
        <h1 className={styles.title}>
         KittyCatGo
        </h1>

      <Container maxW='xl' centerContent>
      <Box w='100%'padding='40px'>
        <SearchForm contract={kitty?.kittyContract}></SearchForm>
      </Box>
      </Container>

        
      
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
