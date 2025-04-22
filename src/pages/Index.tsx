
import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { MetricsSection } from '@/components/sections/MetricsSection';
import { BuiltDifferentSection } from '@/components/sections/BuiltDifferentSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { ClientLogos } from '@/components/sections/ClientLogos';
import { Footer } from '@/components/layout/Footer';
import { CommunitiesSection } from '@/components/sections/CommunitiesSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-web3-dark text-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <MetricsSection />
      <BuiltDifferentSection />
      <CommunitiesSection />
      <ClientLogos />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Index;
