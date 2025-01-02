import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import HomeVariations from '../components/HomeSection';

function HomePage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4">
        <HeroSection />
      </main>
      <HomeVariations />
    </>
  );
}

export default HomePage;

