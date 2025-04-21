
import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { MetricsSection } from '@/components/sections/MetricsSection';
import { EcosystemCarousel } from '@/components/sections/EcosystemCarousel';
import { PlaybookSection } from '@/components/sections/PlaybookSection';
import { BuiltDifferentSection } from '@/components/sections/BuiltDifferentSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { ClientLogos } from '@/components/sections/ClientLogos';
import { Footer } from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-web3-dark text-white">
      <Navbar />
      {/* Move BuiltDifferentSection first */}
      <BuiltDifferentSection />
      <HeroSection />
      <ServicesSection />
      <MetricsSection />
      <EcosystemCarousel />
      <PlaybookSection />
      <TeamSection />
      <ClientLogos />
      <Footer />
    </div>
  );
};

export default Index;
