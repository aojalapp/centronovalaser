import { ArrowRight } from "lucide-react";
const Services = () => {
  return <section className="py-20 bg-beige-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Explora nuestros servicios</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Experience our comprehensive range of beauty and wellness treatments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <div key={index} className="glass-card rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="font-serif text-xl mb-2">{service.title}</h3>
              <p className="text-slate-600 mb-4">{service.description}</p>
              <button className="text-gold hover:text-gold-dark flex items-center">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>)}
        </div>
      </div>
    </section>;
};
const services = [{
  title: "Facial Treatments",
  description: "Advanced skincare solutions for radiant, youthful skin",
  image: "/lovable-uploads/c318c70a-4aea-493e-9503-d72c4f797eb9.png"
}, {
  title: "Body Treatments",
  description: "Luxurious therapies for complete body rejuvenation",
  image: "/lovable-uploads/51d17fae-5985-4c9e-88bd-7290c8784c51.png"
}, {
  title: "Aesthetic Medicine",
  description: "Cutting-edge procedures for natural-looking results",
  image: "/lovable-uploads/9db21fdc-382b-4b80-bdb3-55afe226bfdc.png"
}];
export default Services;