"use client";

import React from 'react';
import Head from 'next/head';

import '../app/globals.css';

const HomePage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Calculators | Euclid Resolutions</title>
        <meta name="description" content="Discover the future of technology with IEEE SRM Student Branch. Stay tuned for our exciting new website, packed with resources, events, and opportunities for students passionate about innovation and excellence." />
        <meta name="keywords" content="IEEE SRMIST, computer science, engineering, innovation, technology" />
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>

      <h1 className="text-2xl font-bold text-blue-800 underline">
        Hello world!
      </h1>

    </div>
  );
};

export default HomePage;