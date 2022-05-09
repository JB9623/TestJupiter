import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Card, Row, Col } from 'antd';
import { Connection } from "@solana/web3.js";
import useTranslation from 'next-translate/useTranslation';
import { JupiterProvider } from '@jup-ag/react-hook';

const Home: NextPage = () => {
  const { t } = useTranslation('common');
  const [coins, setCoins] = useState<any[]>([]);
  const connection:Connection = null;

  useEffect(() => {
    const fetchCoinGeckoList = async () => {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/list'
      );
      const data = await response.json();
      setCoins(data);
      console.log('data', data);
    };

    fetchCoinGeckoList();
  }, []);

  return (
    <JupiterProvider
      connection={connection}
      cluster="mainnet-beta"
      userPublicKey={undefined}       
    >
      <Head>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <title>Jupiter</title>
      </Head>
      <main>
        <h1>{t('hello')} Jupiter</h1>
        <Row gutter={[20, 20]}>
          {coins.slice(0, 10).map((coin: any) => {
            return (
              <Col key={coin.id} span={8}>
                <Card title={coin.name}>
                  <p>{coin.symbol}</p>
                  <p>{coin.id}</p>
                </Card>
              </Col>
            );
          })}
        </Row>
      </main>
    </JupiterProvider>
  );
};

export default Home;
