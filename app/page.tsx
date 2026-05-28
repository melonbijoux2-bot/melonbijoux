'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import CollectionsGrid from '@/components/CollectionsGrid';
import StatementSection from '@/components/StatementSection';
import ProductSpotlight from '@/components/ProductSpotlight';
import Lookbook from '@/components/Lookbook';
import Features from '@/components/Features';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-brand-black min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <CollectionsGrid />
      <StatementSection />
      <ProductSpotlight />
      <Lookbook />
      <Features />
      <Newsletter />
      <Footer />
    </main>
  );
}
