
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';
import AccommodationSection from '../components/AccommodationSection';
import TransportSection from '../components/TransportSection';
import RestaurantSection from '../components/RestaurantSection';
import TravelSection from '../components/TravelSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ServicesGrid />
      <AccommodationSection />
      <TransportSection />
      <RestaurantSection />
      <TravelSection />
      <Footer />
    </div>
  );
};

export default Index;
