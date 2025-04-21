
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
    <section id="playbook" className="py-20 bg-gradient-to-b from-web3-dark to-web3-darker">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-grotesk">Our Playbook</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A systematic approach to driving growth across every stage of your ecosystem's journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-web3-darker/50 backdrop-blur-sm border border-web3-purple/20 rounded-lg p-6 hover:border-web3-purple/50 transition-all hover:translate-y-[-4px]"
            >
              <div className="bg-web3-darkest p-3 rounded-lg inline-block mb-4">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-1">{step.title}</h3>
              <p className="text-web3-purple font-semibold mb-3">{step.subtitle}</p>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
