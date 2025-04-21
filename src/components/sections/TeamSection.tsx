
import React from 'react';
import { cn } from '@/lib/utils';

const team = [
  {
    name: 'Charles Zhang',
    role: 'Founder',
    bio: 'Former growth lead at multiple unicorn Web3 projects with deep connections across Asian crypto markets.',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Stan Lee',
    role: 'Project Manager',
    bio: 'Strategic operations expert with 8+ years experience coordinating complex marketing campaigns across APAC.',
    image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Denis Li',
    role: 'GTM Strategy Lead',
    bio: 'Data-driven market analyst specialized in crafting entry strategies for emerging tech in Asian markets.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  }
];

export const TeamSection = () => {
  return (
    <section className="py-20 md:py-32 bg-web3-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">Our Team</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Industry experts with deep Web3 and Asian market experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={member.name}
              className={cn(
                "card-border rounded-xl p-6 transition-all duration-500 hover:translate-y-[-8px]",
                "opacity-0 animate-fade-in-up"
              )}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6 overflow-hidden rounded-full w-48 h-48 mx-auto">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-web3-purple mb-4">{member.role}</p>
              <p className="text-gray-400">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
