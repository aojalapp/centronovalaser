
import React, { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Reviews = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
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
    <section className="py-20 bg-beige relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-[url('/lovable-uploads/e98b2de1-25bd-47d9-83e6-a847446add8b.png')] bg-repeat opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`section-title transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            Opiniones de Nuestros Clientes
          </h2>
          <div className={`flex justify-center items-center mb-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-6 h-6 fill-gold text-gold transition-all duration-500`} 
                  style={{ 
                    animationDelay: `${i * 0.1}s`,
                    transform: isVisible ? 'scale(1)' : 'scale(0)',
                    opacity: isVisible ? 1 : 0,
                    transition: `transform 0.5s ${i * 0.1}s, opacity 0.5s ${i * 0.1}s`
                  }}
                />
              ))}
            </div>
            <span className={`ml-2 text-slate-600 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              5.0 en Google
            </span>
          </div>
          <p className={`text-lg text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            Descubre lo que nuestros clientes dicen sobre su experiencia
          </p>
        </div>

        <Carousel 
          className={`w-full max-w-5xl mx-auto px-10 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="glass-card rounded-lg p-6 h-full flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4 flex-grow italic">"{review.content}"</p>
                  <p className="font-medium text-gold-dark">{review.name}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </section>
  );
};

const reviews = [
  {
    name: "Lourdes Gómez Suárez",
    content: "Llevo muchísimos años visitando a Claudia tanto por las dietas personalizadas como por tratamientos estéticos. Es una gran profesional, agradable y simpática y siempre intenta ayudar en todo lo podible a cada clienta. Recomendable 100%"
  },
  {
    name: "Isabel Gago Moreno",
    content: "Es un centro al que llevo acudiendo años no solo para depilación con los mas modernas técnicas sino también por la dieta personalizada de la nutricionista Claudia. Estoy muy contenta con los servicios que prestan y se lo aconsejaría a todo el mundo. El trato es excepcional, cercano y adecuado a las necesidades de las Clientas."
  },
  {
    name: "Gerencia CCCA",
    content: "Centro especializado en solucionar problemas de salud y estética que cuenta con profesionales de alta cualificación y amplia experiencia. Un gran servicio. Muy recomendable"
  },
  {
    name: "Carmen Fernandez",
    content: "Muy profesional. Totalmente recomendable."
  },
  {
    name: "María Sánchez",
    content: "Desde mi primera consulta me sentí en muy buenas manos. La Dra. Claudia tiene un don para entender exactamente lo que necesitas. Los resultados superaron mis expectativas y el ambiente del centro es increíblemente acogedor."
  },
  {
    name: "Elena Martínez",
    content: "Acudí para un tratamiento facial y quedé encantada con el resultado. El personal es muy profesional y atento, te explican todo el proceso y te hacen sentir cómoda en todo momento. La Dra. Claudia es excepcional."
  },
  {
    name: "Ana López",
    content: "He probado varios centros estéticos en la zona, pero ninguno se compara con la experiencia y resultados obtenidos aquí. El seguimiento personalizado y la atención al detalle marcan la diferencia. Sin duda, mi centro de confianza."
  }
];

export default Reviews;
