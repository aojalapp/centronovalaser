
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [particles, setParticles] = useState<{id: number, size: number, left: number, top: number, delay: number}[]>([]);
  
  useEffect(() => {
    // Create floating particles for background animation
    const newParticles = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 20) + 5,
      left: Math.floor(Math.random() * 100),
      top: Math.floor(Math.random() * 100),
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="relative min-h-[70vh] flex items-center section-luxury pt-20 overflow-hidden">
      {/* Gold accent elements */}
      <div className="gold-accent top-20 left-[20%]"></div>
      <div className="gold-accent bottom-20 right-[10%]"></div>
      <div className="gold-line w-[60%] top-40 left-[20%]"></div>
      <div className="gold-line w-[40%] bottom-20 right-[30%]"></div>
      
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
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center justify-center">
          <div className="w-48 h-48 mb-8 animate-fade-in relative">
            <div className="rounded-full overflow-hidden border-2 border-gold/20 shadow-xl w-full h-full">
              <img 
                src="/lovable-uploads/1cecbf28-ecfc-4eeb-91cf-a54bfc51a90c.png" 
                alt="Doctora Claudia de la Rosa" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full border border-gold/10 animate-pulse"></div>
          </div>
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-5xl text-slate-800 mb-6 animate-fade-in">
              <span className="inline-block animate-slide-in-right" style={{ animationDelay: "0.1s" }}>Belleza</span>{" "}
              <span className="inline-block animate-slide-in-right" style={{ animationDelay: "0.2s" }}>y</span>{" "}
              <span className="inline-block animate-slide-in-right" style={{ animationDelay: "0.3s" }}>Bienestar</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 mb-8 animate-fade-in" style={{
              animationDelay: "0.5s"
            }}>
              de la mano de la doctora Claudia de la Rosa
            </p>
            <a href="http://wa.me/34673355012" className="btn-primary inline-flex items-center space-x-2 animate-pulse hover:animate-none" style={{
              animationDelay: "0.7s"
            }}>
              <span>Reserva tu Experiencia</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
