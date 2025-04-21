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
  return <section id="mission" className="py-20 md:py-32 bg-web3-darkAlt relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {})}
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="card-border rounded-xl p-8 max-w-2xl text-center">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Ready to launch in Asia?</h3>
            <p className="text-gray-300 mb-6">We work with teams who are ready to scale with intent. 
Operating across Singapore, Hong Kong, and Seoul.

  Strategic marketing for ecosystems that want to win</p>
            <button className="bg-web3-purple hover:bg-web3-purpleLight text-white px-8 py-3 rounded-md text-lg font-medium transition-all">
              Book a Strategy Call
            </button>
          </div>
        </div>
      </div>
    </section>;
};