
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
    }, { threshold: 0.1 });

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
    <section
      id="built-different"
      className="relative py-20 px-6 md:px-12 lg:px-24"
      style={{
        background: "linear-gradient(99deg, #1EAEDB88 0%, #8B5CF670 100%)",
        boxShadow: "0 0 40px 0 #8B5CF640, 0 1px 1px #000c"
      }}
    >
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-grotesk font-extrabold text-gradient drop-shadow-glow animate-fade-in-up">
          Built Different
        </h2>
      </div>
      <div className="flex flex-col md:flex-row md:gap-10 gap-8 justify-center items-stretch">
        {/* Mission Block */}
        <div 
          ref={el => cardsRef.current[0] = el}
          className="flex-1 bg-web3-darkAlt/80 rounded-2xl p-8 glass-morphism border-2 border-web3-purple/30 group hover:shadow-[0_0_24px_6px_#8B5CF6aa] transition-all duration-300 opacity-0 relative overflow-hidden"
        >
          <div className="absolute top-6 right-6 opacity-30">
            <Grid2x2 className="h-9 w-9 text-web3-purplehover:rotate-12 transition-transform duration-200" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-web3-blue drop-shadow-glow">Mission</h3>
          <p className="mb-3 text-lg text-white/90">
            We craft go-to-market systems, not one-off campaigns.
          </p>
          <p className="mb-3 text-lg text-white/90">
            We build momentum that scales with your roadmap.
          </p>
          <p className="mb-5 text-lg text-white/90">
            And we do it with boots-on-the-ground insights and a global mindset.
          </p>
          <a
            href="#services"
            className="inline-flex items-center gap-2 font-semibold text-web3-purple transition-colors duration-200 hover:text-web3-blue story-link"
          >
            Learn More
            <span>
              <Info className="w-5 h-5" />
            </span>
          </a>
        </div>
        
        {/* Divider on desktop, margin on mobile */}
        <div className="my-2 md:my-0 md:mx-0 flex items-center md:flex-col">
          <Separator orientation="vertical" className="hidden md:block h-32 w-[2px] bg-gradient-to-b from-web3-purple/70 to-web3-blue/60 rounded-full mx-6" />
          <Separator orientation="horizontal" className="block md:hidden mb-0 w-24 mx-auto bg-gradient-to-r from-web3-purple/70 to-web3-blue/60 rounded-full" />
        </div>
        
        {/* Belief Block */}
        <div 
          ref={el => cardsRef.current[1] = el}
          className="flex-1 bg-web3-darkAlt/80 rounded-2xl p-8 glass-morphism border-2 border-web3-purple/30 group hover:shadow-[0_0_24px_6px_#1EAEDB99] transition-all duration-300 opacity-0 relative overflow-hidden"
        >
          <div className="absolute top-6 right-6 opacity-30">
            <Info className="h-9 w-9 text-web3-blue group-hover:rotate-12 transition-transform duration-200" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-web3-purple drop-shadow-glow">Belief</h3>
          <p className="mb-3 text-lg text-white/90">
            Web3 doesn't need more noise — it needs clarity with edge.
          </p>
          <p className="mb-3 text-lg text-white/90">
            Most play it too safe or too degen. Neither scales.
          </p>
          <p className="mb-5 text-lg text-white/90">
            We build in the middle: smart, viral, and built to last.
          </p>
          <a
            href="#playbook"
            className="inline-flex items-center gap-2 font-semibold text-web3-blue transition-colors duration-200 hover:text-web3-purple story-link"
          >
            Learn More
            <span>
              <Grid2x2 className="w-5 h-5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
