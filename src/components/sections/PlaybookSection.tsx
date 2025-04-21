
import React from 'react';
import { Rocket, Calendar, Users, BarChart } from 'lucide-react';

const steps = [
  {
    title: 'Pre-TGE',
    subtitle: 'Strategy',
    description: 'Building foundations with market research, messaging, and community infrastructure.',
    icon: <Calendar className="h-8 w-8 text-web3-purple" />
  },
  {
    title: 'TGE',
    subtitle: 'Activation',
    description: 'Executing launch campaigns, KOL coordination, and community activations.',
    icon: <Rocket className="h-8 w-8 text-web3-purple" />
  },
  {
    title: 'Post-TGE',
    subtitle: 'Retention',
    description: 'Maintaining momentum with engagement programs and ecosystem narrative.',
    icon: <Users className="h-8 w-8 text-web3-purple" />
  },
  {
    title: 'Expansion',
    subtitle: 'Scale',
    description: 'Scaling reach across new markets with targeted campaigns and partnerships.',
    icon: <BarChart className="h-8 w-8 text-web3-purple" />
  }
];

export const PlaybookSection = () => {
  return (
    <section id="playbook" className="relative py-20 px-6 md:px-12 lg:px-24 bg-web3-darkAlt">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-grotesk font-extrabold text-gradient animate-fade-in-up drop-shadow-glow">
          The Playbook
        </h2>
      </div>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-4">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className="flex flex-col items-center bg-web3-dark rounded-2xl p-8 group hover:shadow-[0_0_30px_4px_#8B5CF6cc] transition-all text-center animate-fade-in-up"
            style={{ animationDelay: `${0.1 * i}s` }}
          >
            <div className="mb-4">
              {step.icon}
            </div>
            <h3 className="text-2xl font-bold text-web3-purple mb-1">{step.title}</h3>
            <span className="text-lg font-semibold text-web3-blue mb-2">{step.subtitle}</span>
            <p className="text-white/90">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
