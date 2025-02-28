
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-[#8E9196] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="mb-2">Copyright © 2015 - Centro Nova Laser Cádiz. Todos los derechos reservados</p>
          <p>web designed by <a href="https://nicovela.com" target="_blank" rel="noopener noreferrer" className="text-gold-light hover:underline">nicovela.com</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
