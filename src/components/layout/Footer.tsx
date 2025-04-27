import React from 'react';
import { Mail, MapPin, Twitter } from 'lucide-react';

export const Footer = () => {
  return <footer id="contact" className="bg-web3-dark border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex flex-col items-center text-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              Let's build something that lasts.
            </h3>
            <div className="flex items-center justify-center text-gray-300 mb-4">
              <Mail className="h-5 w-5 mr-3 text-web3-purple" />
              <a href="mailto:charles@lfgmagic.xyz" className="hover:text-white transition-colors">Sergei@lfgmagic.xyz</a>
            </div>
            <div className="flex items-center justify-center text-gray-300">
              <MapPin className="h-5 w-5 mr-3 text-web3-purple" />
              <div>
                <p className="mb-1">Singapore</p>
                <p className="mb-1">Hong Kong</p>
                <p>Seoul</p>
              </div>
            </div>
            
            <div className="flex justify-center space-x-4 mt-8">
              <a href="https://x.com/lfgmagicxyz" className="text-gray-400 hover:text-web3-purple transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
          <div className="text-white font-bold text-xl mb-4">
            LFG<span className="text-web3-purple">Magic</span>
          </div>
          <div className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} LFG Magic. All rights reserved.
          </div>
        </div>
      </div>
    </footer>;
};
