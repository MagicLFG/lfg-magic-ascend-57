
import React from 'react';

const clients = [
  { name: 'Galxe', logo: '/lovable-uploads/99b75027-eb4d-401d-aeb6-604cc624dfd8.png' },
  { name: 'KuCoin', logo: '/lovable-uploads/a57c7f42-4232-4785-a203-3c1601a45e7a.png' },
  { name: 'Up Network', logo: 'Up Network' },
  { name: 'Helium', logo: 'Helium' },
  { name: 'BitTorrent', logo: 'BitTorrent' },
  { name: 'zkLink', logo: 'zkLink' },
  { name: 'GasZero', logo: 'GasZero' },
  { name: 'Movement', logo: 'Movement' },
  { name: 'AscendEX', logo: 'AscendEX' },
];

export const ClientLogos = () => {
  return (
    <section id="clients" className="py-20 bg-web3-darkAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Trusted By</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <div 
              key={client.name} 
              className="flex flex-col items-center justify-center p-6 card-border rounded-xl animate-fade-in-up opacity-0"
              style={{ animationDelay: `${0.05 * index}s` }}
            >
              {client.logo.startsWith('/') ? (
                <img src={client.logo} alt={client.name} className="h-12 object-contain" />
              ) : (
                <p className="text-2xl font-bold text-gradient">{client.logo}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
