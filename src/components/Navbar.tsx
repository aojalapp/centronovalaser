
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-beige/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a href="/" className="font-serif text-2xl text-gold">Centro Novalaser</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#tratamientos" className="nav-link">Tratamientos</a>
            <a href="#centros" className="nav-link">Centros</a>
            <a href="tel:+34646944706" className="btn-primary flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>646 944 706</span>
            </a>
            <a href="http://wa.me/34673355012" className="btn-primary">Reservar Cita</a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden pb-4">
            <a href="#tratamientos" className="block nav-link py-2">Tratamientos</a>
            <a href="#centros" className="block nav-link py-2">Centros</a>
            <a href="tel:+34646944706" className="block nav-link py-2 flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span>646 944 706</span>
            </a>
            <a href="http://wa.me/34673355012" className="block btn-primary text-center mt-4">Reservar Cita</a>
          </div>}
      </div>
    </nav>;
};

export default Navbar;
