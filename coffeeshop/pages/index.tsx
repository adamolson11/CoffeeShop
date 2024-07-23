// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Coffee Shop</title>
        <meta name="description" content="Welcome to Coffee Shop. Discover the best coffee in town." />
      </Head>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
