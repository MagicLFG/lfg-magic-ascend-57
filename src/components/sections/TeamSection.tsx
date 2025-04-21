
import React from 'react';
import { cn } from '@/lib/utils';

const team = [{
  name: 'Charles Zhang',
  role: 'Founder',
  bio: 'Former growth lead at multiple unicorn Web3 projects with deep connections across Asian crypto markets.',
  image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
}, {
  name: 'Stan Lee',
  role: 'Project Manager',
  bio: 'Strategic operations expert with 8+ years experience coordinating complex marketing campaigns across APAC.',
  image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
}, {
  name: 'Denis Li',
  role: 'GTM Strategy Lead',
  bio: 'Data-driven market analyst specialized in crafting entry strategies for emerging tech in Asian markets.',
  image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
}];

export const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-web3-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-grotesk">Our Team</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the specialists who will drive your Web3 success in Asia
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={index} 
              className={cn(
                "bg-web3-darker/50 backdrop-blur-sm border border-web3-purple/20 rounded-lg overflow-hidden",
                "hover:border-web3-purple/50 transition-all hover:translate-y-[-4px]"
              )}
            >
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-web3-purple font-semibold mb-3">{member.role}</p>
                <p className="text-gray-400">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
