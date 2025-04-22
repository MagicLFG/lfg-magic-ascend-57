
import React from 'react';

const clients = [
  {
    name: 'Galxe',
    logo: '/galxe.png'
  },
  {
    name: 'KuCoin',
    logo: '/kucoin.png'
  },
  {
    name: 'Up Network',
    logo: '/upnetwork.png'
  },
  {
    name: 'Helium',
    logo: '/helium.png'
  },
  {
    name: 'BitTorrent',
    logo: '/bittorrent.png'
  },
  {
    name: 'zkLink',
    logo: '/zklink.png'
  },
  {
    name: 'GasZero',
    logo: '/GasZero.png'
  },
  {
    name: 'Movement',
    logo: '/Movement.png'
  },
  {
    name: 'AscendEX',
    logo: '/Ascend.png'
  }
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
              style={{animationDelay: `${0.05 * index}s`}}
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="h-12 w-auto object-contain"
                onError={(e) => {
                  console.error(`Failed to load image: ${client.logo}`);
                  e.currentTarget.src = "/placeholder.svg";
                }}
              />
              <p className="mt-2 text-sm text-gray-400">{client.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
