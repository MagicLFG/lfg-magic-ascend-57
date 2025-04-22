import React from 'react';

const clients = [
  {
    name: 'Galxe',
    logo: '/Galxe_Logo_Wordmark_White.png'
  }, 
  {
    name: 'KuCoin',
    logo: '/Kucoin.jpg'
  }, 
  {
    name: 'Up Network',
    logo: '/lovable-uploads/c36fdc36-08a3-4bea-82d9-0a0f6f4d5c17.png'
  }, 
  {
    name: 'Helium',
    logo: '/lovable-uploads/1ce834aa-5881-4ff4-a8bc-7b93abc49ded.png'
  }, 
  {
    name: 'BitTorrent',
    logo: '/lovable-uploads/21e6e52e-3fac-4f08-b90a-20b5aca06733.png'
  }, 
  {
    name: 'zkLink',
    logo: '/lovable-uploads/0a80d9db-bed7-4ba2-9ca1-4cfdf7df3003.png'
  }, 
  {
    name: 'GasZero',
    logo: '/lovable-uploads/40be0aba-61e1-45e0-a1a9-9b33f09c9d67.png'
  }, 
  {
    name: 'Movement',
    logo: '/lovable-uploads/99b10fc1-6b93-48ca-882c-0eaf78e9de92.png'
  }, 
  {
    name: 'AscendEX',
    logo: '/lovable-uploads/0f0f8e8c-1bfb-45d0-a4e2-1e70cb8c1cb1.png'
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
