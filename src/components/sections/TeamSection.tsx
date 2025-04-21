
import React from 'react';

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
  },
];

export const TeamSection = () => {
  return (
    <section id="team" className="py-20 md:py-32 bg-web3-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">Our Team</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the experts behind our successful Web3 growth campaigns
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={member.name}
              className="card-border rounded-xl overflow-hidden animate-fade-in-up opacity-0"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-web3-purple mb-4">{member.role}</p>
                <p className="text-gray-400">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
