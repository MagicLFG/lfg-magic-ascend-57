
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
          <h2 className="text-4xl md:text-5xl font-grotesk font-bold mb-6 text-gradient tracking-tight">
            Trusted By Innovators
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-sans">
            Leading blockchain and Web3 ecosystems that are reshaping the digital landscape
          </p>
        </div>

        <div className="logos-slider">
          <div className="logos-slide-track pause-on-hover">
            {/* First set of logos - the duplicated sets create the infinite loop effect */}
            {clients.map((client) => (
              <div key={`${client.name}-1`} className="logo-item group">
                <div className="p-4 card-border rounded-2xl bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      console.error(`Failed to load image: ${client.logo}`);
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                </div>
                <p className="mt-3 text-sm text-gray-400 font-grotesk font-medium tracking-wide group-hover:text-white transition-colors">
                  {client.name}
                </p>
              </div>
            ))}
            
            {/* Duplicate set for seamless looping */}
            {clients.map((client) => (
              <div key={`${client.name}-2`} className="logo-item group">
                <div className="p-4 card-border rounded-2xl bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      console.error(`Failed to load image: ${client.logo}`);
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                </div>
                <p className="mt-3 text-sm text-gray-400 font-grotesk font-medium tracking-wide group-hover:text-white transition-colors">
                  {client.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
