
import React, { useEffect, useRef } from 'react';
import { Rocket, Globe, Users, ArrowRight, MessageSquare, BarChart } from 'lucide-react';

const services = [
  {
    title: 'Asia GTM Strategy',
    description: 'Tailored go-to-market strategies designed specifically for Asian markets with cultural nuance baked in.',
    icon: <Globe className="h-8 w-8 text-web3-purple" />,
  },
  {
    title: 'Community Campaigns',
    description: 'Viral community growth and engagement strategies that create genuine excitement and lasting loyalty.',
    icon: <Users className="h-8 w-8 text-web3-purple" />,
  },
  {
    title: 'KOL & Influencer Activation',
    description: 'Strategic partnerships with authentic voices across 12+ Asian markets for maximum reach and credibility.',
    icon: <MessageSquare className="h-8 w-8 text-web3-purple" />,
  },
  {
    title: 'Stealth Demand Engineering',
    description: 'Behind-the-scenes tactics that create natural momentum and organic growth for your ecosystem.',
    icon: <Rocket className="h-8 w-8 text-web3-purple" />,
  },
  {
    title: 'Narrative Craft & Localization',
    description: 'Compelling storytelling adapted for Asian markets with culturally-relevant messaging that resonates.',
    icon: <BarChart className="h-8 w-8 text-web3-purple" />,
  },
  {
    title: 'CEX & Liquidity Coordination',
    description: 'Strategic exchange relationships and liquidity optimization to support healthy market dynamics.',
    icon: <ArrowRight className="h-8 w-8 text-web3-purple" />,
  }
];

export const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="services" className="py-20 md:py-32 bg-web3-darkAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions to scale your Web3 ecosystem across Asian markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="card-border rounded-xl p-8 opacity-0"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="mb-5">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
