import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { JupiterProvider } from '@jup-ag/react-hook';
import {
    getTokenAccountsByOwnerWithWrappedSol,
    nativeToUi
} from "@blockworks-foundation/mango-client";
import React, { 
  useState, 
  useEffect, 
  useCallback, 
  useMemo 
} from "react";
import {getTokenAccountsByOwner} from "utils/web3-extension";
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const connection:Connection = null;

  useEffect(() => {
    const fetchCoinGeckoList = async () => {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/list'
      )
      const data = await response.json()
      console.log("data", data);
    }

    fetchCoinGeckoList()
}, [])  


  return (
    <JupiterProvider
      connection={connection}
      cluster="mainnet-beta"
      userPublicKey={undefined}        
    >
      <div>test</div>
    </JupiterProvider>
  )
}

export default Home
