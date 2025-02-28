
import { MapPin, Phone } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const Centros = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Start showing items with delay
          centers.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index]);
            }, index * 300);
          });
          // Unobserve after triggering
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);
  
  return (
    <section id="centros" className="py-20 bg-[#403E43] relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-[url('/lovable-uploads/e98b2de1-25bd-47d9-83e6-a847446add8b.png')] bg-repeat opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title text-white overflow-hidden">
            <span className="inline-block animate-slide-in-right">Nuestros Centros</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto overflow-hidden">
            <span className="inline-block animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
              Visítanos en cualquiera de nuestras tres localizaciones
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {centers.map((center, index) => (
            <div 
              key={index} 
              className={`glass-card rounded-lg p-6 flex flex-col h-full transition-all duration-700 transform ${
                visibleItems.includes(index) 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-20"
              } hover:shadow-xl hover:-translate-y-2`}
            >
              <h3 className="font-serif text-xl text-gold mb-4">{center.name}</h3>
              <p className="text-slate-200 mb-2">{center.address}</p>
              <p className="text-slate-200 mb-6">{center.city}</p>
              
              <div className="mt-auto grid grid-cols-1 gap-3">
                <a 
                  href={center.mapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Ver en Google Maps</span>
                </a>
                
                <a 
                  href={`tel:+34956220697`} 
                  className="btn-primary flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-4 h-4" />
                  <span>956 220 697</span>
                </a>
                
                <a 
                  href={`tel:+34646944706`} 
                  className="btn-primary flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-4 h-4" />
                  <span>646 944 706</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const centers = [
  {
    name: "Centro NovaLaser Cádiz",
    address: "C/ Gaspar del pino, 3 Bajo A.",
    city: "11001 Cádiz",
    mapsUrl: "https://maps.google.com/?q=Centro+NovaLaser+Cádiz+C/+Gaspar+del+pino,+3+Bajo+A.+11001+Cádiz"
  },
  {
    name: "Centro NovaLaser Algeciras",
    address: "C/ Rochas, 1-C.",
    city: "11201 Algeciras",
    mapsUrl: "https://maps.google.com/?q=Centro+NovaLaser+Algeciras+C/+Rochas,+1-C.+11201+Algeciras"
  },
  {
    name: "Centro NovaLaser Arcos de la Fra.",
    address: "C/ Alcalde Alfonso Arroyal, 17.",
    city: "Arcos de la Fra.",
    mapsUrl: "https://maps.google.com/?q=Centro+NovaLaser+Arcos+de+la+Fra.+C/+Alcalde+Alfonso+Arroyal,+17.+Arcos+de+la+Fra"
  }
];

export default Centros;
