
import React from 'react';
import { Rocket, Calendar, Users, BarChart } from 'lucide-react';

const steps = [{
  title: 'Pre-TGE',
  subtitle: 'Strategy',
  description: 'Building foundations with market research, messaging, and community infrastructure.',
  icon: <Calendar className="h-8 w-8 text-web3-purple" />
}, {
  title: 'TGE',
  subtitle: 'Activation',
  description: 'Executing launch campaigns, KOL coordination, and community activations.',
  icon: <Rocket className="h-8 w-8 text-web3-purple" />
}, {
  title: 'Post-TGE',
  subtitle: 'Retention',
  description: 'Maintaining momentum with engagement programs and ecosystem narrative.',
  icon: <Users className="h-8 w-8 text-web3-purple" />
}, {
  title: 'Expansion',
  subtitle: 'Scale',
  description: 'Scaling reach across new markets with targeted campaigns and partnerships.',
  icon: <BarChart className="h-8 w-8 text-web3-purple" />
}];

export const PlaybookSection = () => {
  return (
    <section id="playbook" className="py-20 bg-web3-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">Our Strategic Playbook</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A systematic approach to building Web3 communities that last.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.title} 
              className="card-border rounded-xl p-8 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards' }}
            >
              <div className="mb-5">{step.icon}</div>
              <h3 className="text-xl font-bold mb-1">{step.title}</h3>
              <p className="text-sm text-web3-purple mb-4">{step.subtitle}</p>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
