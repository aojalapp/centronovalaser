
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-[70vh] flex items-center bg-[#E5DEFF]">
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center justify-center">
          <div className="w-48 h-48 mb-8 animate-fade-in">
            <div className="rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="/lovable-uploads/1cecbf28-ecfc-4eeb-91cf-a54bfc51a90c.png" 
                alt="Doctora Claudia de la Rosa" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-5xl text-slate-800 mb-6 animate-fade-in">Belleza y Bienestar</h1>
            <p className="text-lg md:text-xl text-slate-700 mb-8 animate-fade-in" style={{
              animationDelay: "0.2s"
            }}>
              de la mano de la doctora Claudia de la Rosa
            </p>
            <a href="http://wa.me/34673355012" className="btn-primary inline-flex items-center space-x-2 animate-fade-in" style={{
              animationDelay: "0.4s"
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
