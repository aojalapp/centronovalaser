
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-[url('/lovable-uploads/588e9c3b-0fbb-49c8-8b79-f4dee8a55ada.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6 animate-fade-in">
            Belleza y Bienestar de Lujo
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Descubre nuestros tratamientos y productos exclusivos para tu transformación integral
          </p>
          <button className="btn-primary flex items-center space-x-2 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <span>Reserva tu Experiencia</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
