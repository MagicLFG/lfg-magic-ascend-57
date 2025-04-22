
import React, { useEffect, useRef } from 'react';

const flags = [
  { code: 'CN', country: 'China', emoji: '🇨🇳' },
  { code: 'KR', country: 'South Korea', emoji: '🇰🇷' },
  { code: 'JP', country: 'Japan', emoji: '🇯🇵' },
  { code: 'VN', country: 'Vietnam', emoji: '🇻🇳' },
  { code: 'TH', country: 'Thailand', emoji: '🇹🇭' },
  { code: 'RU', country: 'Russia', emoji: '🇷🇺' },
  { code: 'TR', country: 'Turkey', emoji: '🇹🇷' },
  { code: 'SG', country: 'Singapore', emoji: '🇸🇬' },
  { code: 'HK', country: 'Hong Kong', emoji: '🇭🇰' },
  { code: 'IN', country: 'India', emoji: '🇮🇳' },
  { code: 'MY', country: 'Malaysia', emoji: '🇲🇾' },
  { code: 'ID', country: 'Indonesia', emoji: '🇮🇩' },
  { code: 'AE', country: 'UAE', emoji: '🇦🇪' },
  { code: 'GLOBAL', country: 'Global', emoji: '🌐' },
];

export const CommunitiesSection = () => {
  const flagsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    flagsRef.current.forEach(flag => {
      if (flag) observer.observe(flag);
    });

    return () => {
      flagsRef.current.forEach(flag => {
        if (flag) observer.unobserve(flag);
      });
    };
  }, []);

  return (
    <section id="communities" className="py-20 bg-web3-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">Communities That Move With Us</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From China to Turkey, Japan to Russia — we work with local leaders, mods, and creators who know how to mobilize people, not just impressions.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6 justify-center">
          {flags.map((flag, index) => (
            <div
              key={flag.code}
              ref={el => flagsRef.current[index] = el}
              className="flex flex-col items-center text-center opacity-0"
              style={{ animationDelay: `${0.05 * index}s` }}
            >
              <div className="text-6xl sm:text-7xl mb-3">{flag.emoji}</div>
              <div className="text-sm text-gray-400">{flag.country}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
