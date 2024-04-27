"use client";

import React from 'react';
import Head from 'next/head';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Calculators from './components/Calculators/Calculators';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

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

      <Navbar />
      <Hero />
      <Calculators />
      <About />
      <Contact />
      <Footer />

    </div>
  );
};

export default HomePage;