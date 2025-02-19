
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-beige/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a href="/" className="font-serif text-2xl text-gold">BeautyWave</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="nav-link">Services</a>
            <div className="relative group">
              <button className="nav-link flex items-center">
                Treatments <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg rounded-md mt-2">
                <a href="#facial" className="block px-4 py-2 hover:bg-beige-light">Facial Treatments</a>
                <a href="#body" className="block px-4 py-2 hover:bg-beige-light">Body Treatments</a>
                <a href="#aesthetic" className="block px-4 py-2 hover:bg-beige-light">Aesthetic Medicine</a>
              </div>
            </div>
            <a href="#products" className="nav-link">Products</a>
            <a href="#contact" className="btn-primary">Book Now</a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <a href="#services" className="block nav-link py-2">Services</a>
            <a href="#treatments" className="block nav-link py-2">Treatments</a>
            <a href="#products" className="block nav-link py-2">Products</a>
            <a href="#contact" className="block btn-primary text-center mt-4">Book Now</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
