
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
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-web3-dark">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-grotesk font-bold text-center mb-16 text-gradient">
          Our Team
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <div 
              key={member.name}
              className="flex flex-col items-center text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-web3-purple/30 hover:border-web3-blue/70 transition-all duration-300">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-web3-purple font-semibold mb-3">{member.role}</p>
              <p className="text-gray-300 max-w-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
