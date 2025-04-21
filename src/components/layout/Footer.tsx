
import React from 'react';
import { Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-web3-dark border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Let's build something that lasts.
            </h3>
            <div className="flex items-center text-gray-300 mb-4">
              <Mail className="h-5 w-5 mr-3 text-web3-purple" />
              <a href="mailto:charles@lfgmagic.xyz" className="hover:text-white transition-colors">
                charles@lfgmagic.xyz
              </a>
            </div>
            <div className="flex items-start text-gray-300">
              <MapPin className="h-5 w-5 mr-3 text-web3-purple mt-1" />
              <div>
                <p className="mb-1">Singapore</p>
                <p className="mb-1">Hong Kong</p>
                <p>Seoul</p>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-8">
              <a href="#" className="text-gray-400 hover:text-web3-purple transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-web3-purple transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-web3-purple transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-web3-purple transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="card-border rounded-xl p-8">
            <h4 className="text-xl font-bold mb-6 text-gradient">Get Our Web3 Asia Insights</h4>
            <p className="text-gray-300 mb-6">
              Subscribe to receive our exclusive insights on Web3 marketing trends and opportunities in Asian markets.
            </p>
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="bg-web3-dark border border-gray-700 text-white rounded-md px-4 py-3 flex-grow focus:outline-none focus:border-web3-purple"
              />
              <button className="bg-web3-purple hover:bg-web3-purpleLight text-white px-6 py-3 rounded-md font-medium transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white font-bold text-xl mb-4 md:mb-0">
            LFG<span className="text-web3-purple">Magic</span>
          </div>
          <div className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} LFG Magic. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
