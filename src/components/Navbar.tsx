
import { useState } from "react";
import { Menu, X, MapPin, Mail } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-beige/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a href="/" className="font-serif text-2xl text-gold">Centro Novalaser</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#servicios" className="nav-link">Servicios</a>
            <a href="#tratamientos" className="nav-link">Tratamientos</a>
            <div className="relative group">
              <button className="nav-link flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                Centros
              </button>
              <div className="absolute hidden group-hover:block w-64 bg-white shadow-lg rounded-md mt-2">
                <a href="#centro-cadiz" className="block px-4 py-2 hover:bg-beige-light">
                  Centro Novalaser Cádiz
                </a>
                <a href="#centro-algeciras" className="block px-4 py-2 hover:bg-beige-light">
                  Centro Novalaser Algeciras
                </a>
              </div>
            </div>
            <a href="#contacto" className="nav-link flex items-center">
              <Mail className="w-4 h-4 mr-1" />
              Contacto
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
            <a href="#servicios" className="block nav-link py-2">Servicios</a>
            <a href="#tratamientos" className="block nav-link py-2">Tratamientos</a>
            <a href="#centro-cadiz" className="block nav-link py-2 pl-6">Centro Novalaser Cádiz</a>
            <a href="#centro-algeciras" className="block nav-link py-2 pl-6">Centro Novalaser Algeciras</a>
            <a href="#contacto" className="block nav-link py-2">Contacto</a>
            <a href="http://wa.me/34673355012" className="block btn-primary text-center mt-4">Reservar Cita</a>
          </div>}
      </div>
    </nav>;
};

export default Navbar;
