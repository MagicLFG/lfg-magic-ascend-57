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
  return;
};