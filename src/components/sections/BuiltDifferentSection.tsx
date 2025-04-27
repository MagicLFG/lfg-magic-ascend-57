
import React, { useEffect, useRef } from "react";
import { Separator } from "@/components/ui/separator";
import { Info, Grid2x2 } from "lucide-react";

export const BuiltDifferentSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });
    
    return () => {
      cardsRef.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);
  
  return (
    <section id="built-different" ref={sectionRef} className="py-24 bg-web3-dark">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built Different</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our approach is what sets us apart in the Web3 landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            ref={(el) => (cardsRef.current[0] = el)} 
            className="bg-web3-darkAlt p-8 rounded-lg border border-gray-800 opacity-0"
          >
            <Info className="h-10 w-10 text-web3-purple mb-4" />
            <h3 className="text-xl font-bold mb-3">Strategy-First Approach</h3>
            <p className="text-gray-400">
              We develop comprehensive strategies tailored to your project's specific needs and goals.
            </p>
          </div>
          
          <div 
            ref={(el) => (cardsRef.current[1] = el)} 
            className="bg-web3-darkAlt p-8 rounded-lg border border-gray-800 opacity-0"
          >
            <Grid2x2 className="h-10 w-10 text-web3-purple mb-4" />
            <h3 className="text-xl font-bold mb-3">Cross-Cultural Expertise</h3>
            <p className="text-gray-400">
              Our team brings deep understanding of both Eastern and Western markets, connecting projects globally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
