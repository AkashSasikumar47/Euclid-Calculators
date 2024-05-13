"use client";

import React from 'react';
import Head from 'next/head';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Calculators from './components/Calculators/Calculators';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import '../app/globals.css';

const HomePage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Calculators | Euclid Resolutions</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>

      <Navbar />
      <Hero />
      <About />
      <Calculators />
      <Contact />
      <Footer />

    </div>
  );
};

export default HomePage;