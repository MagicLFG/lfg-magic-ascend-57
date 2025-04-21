
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize particles
    let particles: { x: number; y: number; radius: number; color: string; speedX: number; speedY: number }[] = [];
    const particleCount = 100;
    const colors = ['#8B5CF6', '#9b87f5', '#7E69AB', '#1EAEDB'];

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 3 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25
        });
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(15, 15, 25, 1)');
      gradient.addColorStop(1, 'rgba(18, 18, 35, 1)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = 0.3;
        ctx.fill();

        // Move particles
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });

      // Draw connections
      ctx.globalAlpha = 0.15;
      ctx.strokeStyle = '#8B5CF6';
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    // Set up event listeners
    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });

    resizeCanvas();
    initParticles();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background text (parallax moving left) */}
      <div
        className="pointer-events-none absolute inset-0 w-full h-full flex items-center z-0"
        aria-hidden="true"
        style={{
          overflow: 'hidden'
        }}
      >
        <div
          className="whitespace-nowrap font-grotesk font-bold text-white opacity-[0.03] tracking-tight animate-slide-left"
          style={{
            fontSize: 'clamp(5rem, 16vw, 11rem)'
          }}
        >
          <span className="inline-block mx-10">Web3 Reach</span>
          <span className="inline-block mx-10">2B+ Impressions</span>
          <span className="inline-block mx-10">900+ KOLs</span>
          <span className="inline-block mx-10">Asia Activation</span>
          <span className="inline-block mx-10">Web3 Reach</span>
          <span className="inline-block mx-10">2B+ Impressions</span>
          <span className="inline-block mx-10">900+ KOLs</span>
          <span className="inline-block mx-10">Asia Activation</span>
        </div>
      </div>
      {/* Canvas for particle animation (above text, under content) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-10"
        style={{ pointerEvents: 'none' }}
      />
      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-32 md:py-40 text-center z-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-grotesk mb-6 text-gradient animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
          We help Web3 ecosystems<br /> dominate in Asia.
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s' }}>
          Viral campaigns, strategic GTMs, and massive community activations.
        </p>

        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s' }}>
          <Button className="bg-web3-purple hover:bg-web3-purpleLight text-white px-8 py-6 rounded-md text-lg">
            {"Let's Build"}
          </Button>

          <Button variant="outline" className="border-web3-purple text-white hover:bg-web3-purple/10 px-8 py-6 rounded-md text-lg">
            See The Playbook <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
