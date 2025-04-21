
import React from 'react';

const clients = [
  { name: 'KuCoin', tag: 'Exchange' },
  { name: 'Galxe', tag: 'Growth' },
  { name: 'Helium', tag: 'IoT' },
  { name: 'BitTorrent', tag: 'Protocol' },
  { name: 'Movement', tag: 'DAO' },
  { name: 'Network', tag: 'Infrastructure' },
  { name: 'Protocol', tag: 'DeFi' },
  { name: 'Chain', tag: 'Layer 1' },
];

export const ClientLogos = () => {
  return (
    <section className="py-20 bg-web3-darkAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Trusted By</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div 
              key={client.name} 
              className="flex flex-col items-center justify-center p-6 card-border rounded-xl animate-fade-in-up opacity-0"
              style={{ animationDelay: `${0.05 * index}s` }}
            >
              <p className="text-2xl font-bold text-gradient mb-2">{client.name}</p>
              <span className="text-sm text-gray-400 px-3 py-1 rounded-full bg-web3-dark/50">
                {client.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
