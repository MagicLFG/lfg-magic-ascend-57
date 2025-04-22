
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
    <section id="clients" className="py-20 bg-web3-darkAlt overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Trusted By</h2>
        </div>

        <div className="logos-slider">
          <div className="logos-slide-track pause-on-hover">
            {/* First set of logos - the duplicated sets create the infinite loop effect */}
            {clients.map((client) => (
              <div key={`${client.name}-1`} className="logo-item">
                <div className="p-4 card-border rounded-xl bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-sm">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="h-12 w-auto object-contain"
                    onError={(e) => {
                      console.error(`Failed to load image: ${client.logo}`);
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-400">{client.name}</p>
              </div>
            ))}
            
            {/* Duplicate set for seamless looping */}
            {clients.map((client) => (
              <div key={`${client.name}-2`} className="logo-item">
                <div className="p-4 card-border rounded-xl bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-sm">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="h-12 w-auto object-contain"
                    onError={(e) => {
                      console.error(`Failed to load image: ${client.logo}`);
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-400">{client.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
