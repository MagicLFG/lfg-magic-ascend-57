
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-web3-dark hero-gradient opacity-20"></div>
      
      {/* Particle effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ 
          backgroundImage: 'radial-gradient(rgba(139, 92, 246, 0.1) 2px, transparent 2px), radial-gradient(rgba(30, 174, 219, 0.05) 2px, transparent 2px)',
          backgroundSize: '50px 50px, 60px 60px',
          backgroundPosition: '0 0, 25px 25px'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-32 md:py-40 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-grotesk mb-6 text-gradient animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
          We help Web3 ecosystems<br /> dominate in Asia.
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s' }}>
          Viral campaigns, strategic GTMs, and massive community activations.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s' }}>
          <Button className="bg-web3-purple hover:bg-web3-purpleLight text-white px-8 py-6 rounded-md text-lg">
            Let's Build
          </Button>
          
          <Button variant="outline" className="border-web3-purple text-white hover:bg-web3-purple/10 px-8 py-6 rounded-md text-lg">
            See The Playbook <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
