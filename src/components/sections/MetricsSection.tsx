import React, { useEffect, useRef, useState } from 'react';
interface CountUpProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  delay?: number;
}
const CountUp: React.FC<CountUpProps> = ({
  end,
  suffix = '',
  prefix = '',
  duration = 2000,
  delay = 0
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        const start = 0;
        const startTimestamp = performance.now() + delay;
        const step = (timestamp: number) => {
          if (timestamp < startTimestamp) {
            window.requestAnimationFrame(step);
            return;
          }
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          const currentCount = Math.floor(progress * (end - start) + start);
          setCount(currentCount);
          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
            setCount(end);
          }
        };
        window.requestAnimationFrame(step);
      }
    }, {
      threshold: 0.1
    });
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [end, duration, delay, hasAnimated]);
  return <span ref={countRef}>
      {prefix}{count}{suffix}
    </span>;
};
export const MetricsSection = () => {
  return <section className="py-20 md:py-32 bg-web3-dark relative overflow-hidden">
      {/* Parallax background text */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="whitespace-nowrap text-[8rem] md:text-[12rem] font-bold text-white opacity-[0.03] tracking-tight animate-slide-left flex items-center">
          <span className="inline-block mx-12">Web3 Reach</span>
          <span className="inline-block mx-12">2B+ Impressions</span>
          <span className="inline-block mx-12">900+ KOLs</span>
          <span className="inline-block mx-12">Asia Activation</span>
          <span className="inline-block mx-12">Web3 Reach</span>
          <span className="inline-block mx-12">2B+ Impressions</span>
          <span className="inline-block mx-12">900+ KOLs</span>
          <span className="inline-block mx-12">Asia Activation</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">The Amplifiers</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Delivering measurable results across Asian markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="animate-count-up opacity-0" style={{
          animationDelay: '0.2s'
        }}>
            <p className="text-5xl md:text-6xl font-bold mb-4 text-gradient">
              <CountUp end={50} suffix="M+" />
            </p>
            <p className="text-xl text-gray-300">total combined followers</p>
          </div>

          <div className="animate-count-up opacity-0" style={{
          animationDelay: '0.4s'
        }}>
            <p className="text-5xl md:text-6xl font-bold mb-4 text-gradient">
              <CountUp end={2} suffix="B+" />
            </p>
            <p className="text-xl text-gray-300">media impressions</p>
          </div>

          <div className="animate-count-up opacity-0" style={{
          animationDelay: '0.6s'
        }}>
            <p className="text-5xl md:text-6xl font-bold mb-4 text-gradient">
              <CountUp end={900} suffix="+" />
            </p>
            <p className="text-xl text-gray-300">active KOLs across 12+ markets</p>
          </div>
        </div>
      </div>
    </section>;
};