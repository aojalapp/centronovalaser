import { useState } from "react";
import { Menu, X, ChevronDown, User, MapPin, BookOpen, Mail } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-beige/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a href="/" className="font-serif text-2xl text-gold">Centro Novalaser</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#servicios" className="nav-link">Servicios</a>
            <div className="relative group">
              <button className="nav-link flex items-center">
                Tratamientos <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute hidden group-hover:block w-64 bg-white shadow-lg rounded-md mt-2">
                {treatments.map((treatment, index) => (
                  <div key={index} className="relative group/sub">
                    <a href={`#${treatment.id}`} className="block px-4 py-2 hover:bg-beige-light flex items-center justify-between">
                      {treatment.name}
                      <ChevronDown className="w-4 h-4" />
                    </a>
                    <div className="absolute left-full top-0 hidden group-hover/sub:block w-64 bg-white shadow-lg rounded-md">
                      {treatment.subcategories.map((sub, subIndex) => (
                        <a key={subIndex} href={`#${treatment.id}-${subIndex}`} className="block px-4 py-2 hover:bg-beige-light">
                          {sub}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <a href="#productos" className="nav-link">Productos</a>
            <a href="#quienes-somos" className="nav-link flex items-center">
              <User className="w-4 h-4 mr-1" />
              Quiénes Somos
            </a>
            <div className="relative group">
              <button className="nav-link flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                Centros <ChevronDown className="ml-1 w-4 h-4" />
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
            <a href="#blog" className="nav-link flex items-center">
              <BookOpen className="w-4 h-4 mr-1" />
              Blog
            </a>
            <a href="#contacto" className="nav-link flex items-center">
              <Mail className="w-4 h-4 mr-1" />
              Contacto
            </a>
            <a href="#contacto" className="btn-primary">Reservar Cita</a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <a href="#servicios" className="block nav-link py-2">Servicios</a>
            <a href="#tratamientos" className="block nav-link py-2">Tratamientos</a>
            <a href="#productos" className="block nav-link py-2">Productos</a>
            <a href="#quienes-somos" className="block nav-link py-2">Quiénes Somos</a>
            <a href="#centro-cadiz" className="block nav-link py-2 pl-6">Centro Novalaser Cádiz</a>
            <a href="#centro-algeciras" className="block nav-link py-2 pl-6">Centro Novalaser Algeciras</a>
            <a href="#blog" className="block nav-link py-2">Blog</a>
            <a href="#contacto" className="block nav-link py-2">Contacto</a>
            <a href="#contacto" className="block btn-primary text-center mt-4">Reservar Cita</a>
          </div>
        )}
      </div>
    </nav>
  );
};

const treatments = [{
  id: "faciales",
  name: "Tratamientos Faciales",
  subcategories: ["Limpieza facial profunda", "Peeling químico", "Microdermoabrasión", "Radiofrecuencia facial", "Hidratación con ácido hialurónico", "Mesoterapia facial"]
}, {
  id: "corporales",
  name: "Tratamientos Corporales",
  subcategories: ["Cavitación", "Criolipólisis", "Presoterapia", "Radiofrecuencia corporal", "Masajes reductores y reafirmantes"]
}, {
  id: "estetica",
  name: "Rejuvenecimiento y Medicina Estética",
  subcategories: ["Botox", "Rellenos dérmicos con ácido hialurónico", "Hilos tensores", "Plasma rico en plaquetas (PRP)"]
}, {
  id: "depilacion",
  name: "Depilación y Cuidado del Vello",
  subcategories: ["Depilación láser", "Micropigmentación"]
}, {
  id: "capilares",
  name: "Tratamientos Capilares",
  subcategories: ["Mesoterapia capilar", "Plasma rico en plaquetas (PRP) capilar", "Láser capilar"]
}];

export default Navbar;
