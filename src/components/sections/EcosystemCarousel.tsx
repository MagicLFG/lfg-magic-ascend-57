
import React, { useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const partners = [
  { name: 'Galxe', logo: 'G' },
  { name: 'KuCoin', logo: 'K' },
  { name: 'Up Network', logo: 'U' },
  { name: 'Helium', logo: 'H' },
  { name: 'BitTorrent', logo: 'B' },
  { name: 'Movement', logo: 'M' },
  { name: 'Chain', logo: 'C' },
  { name: 'Protocol', logo: 'P' },
];

export const EcosystemCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 2
        : scrollLeft + clientWidth / 2;
      
      carouselRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    // Auto-scroll
    if (carouselRef.current) {
      interval = setInterval(() => {
        if (carouselRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
          
          if (scrollLeft + clientWidth >= scrollWidth - 10) {
            carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            carouselRef.current.scrollTo({ 
              left: scrollLeft + clientWidth / 4,
              behavior: 'smooth'
            });
          }
        }
      }, 3000);
    }
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="clients" className="py-20 bg-web3-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">Our Ecosystem</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Proud to work with leading projects across the Web3 space.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <Button 
              variant="ghost" 
              size="icon" 
              className="bg-web3-darkAlt/70 hover:bg-web3-darkAlt text-white rounded-full h-12 w-12"
              onClick={() => scroll('left')}
            >
              <ArrowLeft size={20} />
            </Button>
          </div>
          
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto py-8 gap-8 hide-scrollbar scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {partners.map((partner) => (
              <div 
                key={partner.name}
                className="flex-shrink-0 w-40 h-40 md:w-56 md:h-56 flex items-center justify-center card-border rounded-xl"
              >
                <div className="text-5xl font-bold text-gradient">{partner.logo}</div>
                <div className="mt-4 text-gray-300">{partner.name}</div>
              </div>
            ))}
            
            {/* Duplicate partners for infinite scroll effect */}
            {partners.map((partner) => (
              <div 
                key={`${partner.name}-dup`} 
                className="flex-shrink-0 w-40 h-40 md:w-56 md:h-56 flex items-center justify-center card-border rounded-xl"
              >
                <div className="text-5xl font-bold text-gradient">{partner.logo}</div>
                <div className="mt-4 text-gray-300">{partner.name}</div>
              </div>
            ))}
          </div>
          
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <Button 
              variant="ghost" 
              size="icon"
              className="bg-web3-darkAlt/70 hover:bg-web3-darkAlt text-white rounded-full h-12 w-12"
              onClick={() => scroll('right')}
            >
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
