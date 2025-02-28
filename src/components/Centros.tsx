
import { MapPin, Phone } from "lucide-react";

const Centros = () => {
  return (
    <section id="centros" className="py-20 bg-[#D3E4FD]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Nuestros Centros</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Visítanos en cualquiera de nuestras tres localizaciones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {centers.map((center, index) => (
            <div key={index} className="glass-card rounded-lg p-6 flex flex-col h-full">
              <h3 className="font-serif text-xl text-gold mb-4">{center.name}</h3>
              <p className="text-slate-600 mb-6">{center.address}</p>
              <p className="text-slate-600 mb-6">{center.city}</p>
              
              <div className="mt-auto grid grid-cols-1 gap-3">
                <a 
                  href={center.mapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center space-x-2"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Ver en Google Maps</span>
                </a>
                
                <a 
                  href={`tel:+34956220697`} 
                  className="btn-primary flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>956 220 697</span>
                </a>
                
                <a 
                  href={`tel:+34646944706`} 
                  className="btn-primary flex items-center justify-center space-x-2"
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
