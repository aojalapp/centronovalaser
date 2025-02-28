
import { ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <section id="tratamientos" className="py-20 bg-beige-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Nuestros Tratamientos</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Descubre nuestra exclusiva gama de tratamientos personalizados para tu bienestar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <a 
              key={index}
              href={`#${treatment.id}`}
              className="glass-card rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 group"
            >
              <div className="relative">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-52 object-cover"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
              </div>
              <div className="p-5 text-center">
                <h3 className="font-serif text-xl text-gold mb-2">{treatment.title}</h3>
                <p className="text-slate-600 text-sm">{treatment.categories.join(' • ')}</p>
              </div>
            </a>
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
    categories: ["Tratamientos Corporales", "Tratamientos Faciales"],
    image: "/lovable-uploads/9328d841-39bf-403e-9b88-fe9de294eda7.png"
  },
  {
    id: "nutricion-dietetica",
    title: "Nutrición y Dietética",
    categories: ["Nutrición y Dietética"],
    image: "/lovable-uploads/c318c70a-4aea-493e-9503-d72c4f797eb9.png"
  },
  {
    id: "medicina-antienvejecimiento",
    title: "Medicina Antienvejecimiento",
    categories: ["Medicina Antienvejecimiento"],
    image: "/lovable-uploads/9db21fdc-382b-4b80-bdb3-55afe226bfdc.png"
  },
  {
    id: "tratamiento-lesiones-pigmentadas",
    title: "Tratamiento de lesiones pigmentadas",
    categories: ["Tratamientos Corporales", "Tratamientos Faciales"],
    image: "/lovable-uploads/51d17fae-5985-4c9e-88bd-7290c8784c51.png"
  },
  {
    id: "depilacion-laser",
    title: "Depilación Láser",
    categories: ["Depilación Láser"],
    image: "/lovable-uploads/588e9c3b-0fbb-49c8-8b79-f4dee8a55ada.png"
  },
  {
    id: "endermologia",
    title: "Endermología",
    categories: ["Tratamientos Corporales", "Tratamientos Faciales"],
    image: "/lovable-uploads/c318c70a-4aea-493e-9503-d72c4f797eb9.png"
  },
  {
    id: "skin-tightening",
    title: "Skin Tightening",
    categories: ["Tratamientos Corporales", "Tratamientos Faciales"],
    image: "/lovable-uploads/9db21fdc-382b-4b80-bdb3-55afe226bfdc.png"
  },
  {
    id: "mesoterapia-virtual",
    title: "Mesoterapia Virtual",
    categories: ["Tratamientos Corporales", "Tratamientos Faciales"],
    image: "/lovable-uploads/51d17fae-5985-4c9e-88bd-7290c8784c51.png"
  },
  {
    id: "carboxiterapia",
    title: "Carboxiterapia",
    categories: ["Tratamientos Corporales", "Tratamientos Faciales"],
    image: "/lovable-uploads/588e9c3b-0fbb-49c8-8b79-f4dee8a55ada.png"
  }
];

export default Services;
