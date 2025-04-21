
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
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-web3-dark">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-grotesk font-bold text-center mb-16 text-gradient">
          Web3 Marketing Playbook
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.title} 
              className="bg-web3-darkAlt/40 p-8 rounded-xl card-border animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-1">{step.title}</h3>
              <p className="text-web3-purple font-semibold mb-3">{step.subtitle}</p>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
