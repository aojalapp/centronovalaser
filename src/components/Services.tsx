
import { ArrowRight, Plus, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Services = () => {
  const [activePopover, setActivePopover] = useState<string | null>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [particles, setParticles] = useState<{id: number, size: number, left: number, top: number, delay: number}[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const handlePopoverToggle = (id: string) => {
    if (activePopover === id) {
      setActivePopover(null);
    } else {
      setActivePopover(id);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Start showing items with delay
          treatments.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index]);
            }, index * 200);
          });
          // Unobserve after triggering
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.1 }
    );

    // Create floating particles for background animation
    const newParticles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 15) + 5,
      left: Math.floor(Math.random() * 100),
      top: Math.floor(Math.random() * 100),
      delay: Math.random() * 5
    }));
    setParticles(newParticles);

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="tratamientos" className="py-20 section-luxury-alt relative overflow-hidden" ref={sectionRef}>
      {/* Gold accent elements */}
      <div className="gold-accent top-40 right-[15%]"></div>
      <div className="gold-accent bottom-40 left-[10%]"></div>
      <div className="gold-line w-[70%] top-20 left-[15%]"></div>
      <div className="gold-line w-[50%] bottom-10 right-[25%]"></div>
      
      <div className="floating-particles">
        {particles.map(particle => (
          <div 
            key={particle.id}
            className="particle"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              opacity: 0.05 + (Math.random() * 0.1)
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title overflow-hidden">
            <span className="inline-block animate-slide-in-right">Nuestros Tratamientos</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto overflow-hidden">
            <span className="inline-block animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
              Descubre nuestra exclusiva gama de tratamientos personalizados para tu bienestar
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <div 
              key={index} 
              className={`relative transition-all duration-700 transform ${
                visibleItems.includes(index) 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-20"
              }`}
            >
              <div className="glass-card rounded-lg overflow-hidden shadow-lg group h-full hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-serif text-xl text-gold mb-4">{treatment.title}</h3>
                  <button 
                    onClick={() => handlePopoverToggle(treatment.id)}
                    className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-gold hover:bg-gold-dark text-white text-sm transition-all duration-300 space-x-1 hover:scale-105"
                  >
                    <span>Ver más</span>
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Description Popover */}
              {activePopover === treatment.id && (
                <div className="absolute inset-0 z-10 animate-scale-in">
                  <div className="glass-card rounded-lg overflow-hidden shadow-xl h-full bg-white/95 p-6 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-serif text-xl text-gold">{treatment.title}</h3>
                      <button 
                        onClick={() => setActivePopover(null)}
                        className="text-slate-400 hover:text-slate-600 transition-colors hover:rotate-90 transition-transform duration-300"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <p className="text-slate-600 mb-6 flex-grow">{treatment.description}</p>
                    <a 
                      href="http://wa.me/34673355012" 
                      className="inline-block text-center w-full px-4 py-2 bg-gold hover:bg-gold-dark text-white rounded-md transition-all duration-300 hover:scale-105"
                    >
                      Pide más info
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const treatments = [
  {
    id: "laser-vascular",
    title: "Láser Vascular",
    description: "Si te preocupan las venitas visibles en piernas o rostro, este tratamiento con láser es ideal para reducirlas de manera segura y efectiva, mejorando la apariencia de tu piel.",
    image: "/lovable-uploads/cbd92966-5246-42f0-a4c4-cd4b6f6ebc87.png"
  },
  {
    id: "nutricion-dietetica",
    title: "Nutrición y Dietética",
    description: "Te ayudamos a encontrar el equilibrio en tu alimentación con asesoramiento personalizado, para que te sientas bien por dentro y por fuera, logrando tus objetivos de salud de forma saludable.",
    image: "/lovable-uploads/afc4dc21-07cd-4984-b5d9-683a17e980ff.png"
  },
  {
    id: "medicina-antienvejecimiento",
    title: "Medicina Antienvejecimiento",
    description: "Cuidamos tu piel con tratamientos diseñados para prevenir y suavizar los signos de la edad, devolviéndole firmeza y luminosidad. Perfecto si quieres verte y sentirte más joven.",
    image: "/lovable-uploads/7f8d0d4f-91d7-4cc9-8981-3b365c8b3ab2.png"
  },
  {
    id: "tratamiento-lesiones-pigmentadas",
    title: "Tratamiento de lesiones pigmentadas",
    description: "Si las manchas en la piel te preocupan, este tratamiento te ayuda a reducirlas de forma progresiva para un tono más uniforme y una piel más radiante.",
    image: "/lovable-uploads/543a5f0c-33dd-40ea-a368-a16427556e92.png"
  },
  {
    id: "depilacion-laser",
    title: "Depilación Láser",
    description: "Olvídate del vello no deseado con un método seguro y duradero. Ideal para mantener tu piel suave sin la molestia del afeitado o la cera.",
    image: "/lovable-uploads/dee80a50-c83b-49fd-8b18-6c5f2008a4a3.png"
  },
  {
    id: "endermologia",
    title: "Endermología",
    description: "Te ofrecemos una solución efectiva para mejorar la textura de tu piel, reduciendo la celulitis y ayudando a activar la circulación, para que te sientas más cómoda y segura con tu cuerpo.",
    image: "/lovable-uploads/e6d9dd5d-16cb-493e-90bc-6fdbc60e1404.png"
  },
  {
    id: "skin-tightening",
    title: "Skin Tightening",
    description: "Recupera la firmeza de tu piel con este tratamiento que estimula la producción de colágeno, ideal para mejorar la elasticidad en rostro, cuello y cuerpo.",
    image: "/lovable-uploads/c4b6357a-420e-4f02-906f-5b999f102074.png"
  },
  {
    id: "mesoterapia-virtual",
    title: "Mesoterapia Virtual",
    description: "Hidrata y revitaliza tu piel sin necesidad de agujas, con activos que penetran profundamente para un efecto rejuvenecedor inmediato y duradero.",
    image: "/lovable-uploads/4e2a469a-fc79-4a7e-950b-e097c03d50d2.png"
  },
  {
    id: "carboxiterapia",
    title: "Carboxiterapia",
    description: "Un tratamiento natural que mejora la circulación y reduce celulitis, estrías y grasa localizada, ayudándote a lograr una piel más lisa y tonificada.",
    image: "/lovable-uploads/57a15703-bf0b-4be3-aa72-69e125df3442.png"
  }
];

export default Services;
