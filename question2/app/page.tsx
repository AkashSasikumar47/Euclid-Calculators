import React from 'react';
import Head from 'next/head';
import AllProductsPage from './components/AllProductsPage';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Top Products</title>
      </Head>

      <main>
        <AllProductsPage />
      </main>
    </div>
  );
};

export default Home;