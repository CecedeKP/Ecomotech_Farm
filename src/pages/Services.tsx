
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsletterSection from '@/components/NewsletterSection';
import ServiceCard from '@/components/ServiceCard';
import { Building, Clipboard, BookOpen, Wrench } from 'lucide-react';
import { Service } from '@/types';

const services: Service[] = [
  {
    id: "1",
    title: "Farm Setup & Design",
    description: "Professional assistance with designing and setting up efficient poultry farming operations of any scale.",
    fullDescription: "Our team of experts provides comprehensive guidance for setting up your poultry farm from scratch or optimizing your existing operation. We assess location suitability, design efficient layouts, and recommend appropriate equipment based on your specific needs and budget. Our service includes environmental considerations, waste management solutions, and compliance with local regulations.",
    imageUrl: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    title: "Poultry Health Consultation",
    description: "Expert advice on disease prevention, diagnosis, and management for healthier flocks.",
    fullDescription: "Maintain optimal health of your poultry with our specialized consultation services. Our veterinarians provide preventive care strategies, vaccination schedules, and prompt diagnosis of health issues. We offer tailored biosecurity protocols and treatment plans for common poultry diseases, helping you minimize losses and maximize productivity through improved flock health management.",
    imageUrl: "https://images.unsplash.com/photo-1599443015574-be5fe8a05783?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    title: "Training Programs",
    description: "Comprehensive training for farm owners and staff on modern poultry farming techniques.",
    fullDescription: "Our hands-on training programs equip farm owners and staff with the knowledge and skills needed for successful poultry management. From basic poultry handling to advanced breeding techniques, our courses cover all aspects of poultry farming. We offer both group workshops and personalized one-on-one training sessions, with practical demonstrations and ongoing support to ensure effective implementation of best practices.",
    imageUrl: "https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "4",
    title: "Equipment Maintenance",
    description: "Regular maintenance and repair services for all types of poultry farming equipment.",
    fullDescription: "Keep your farm operations running smoothly with our professional equipment maintenance services. Our skilled technicians provide regular inspections, preventive maintenance, and prompt repairs for feeders, waterers, ventilation systems, and other critical farm equipment. We offer customized maintenance schedules, emergency repair services, and guidance on equipment upgrades to improve efficiency and reduce long-term costs.",
    imageUrl: "https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  },
];

const serviceIcons = [
  <Building size={48} />,
  <Clipboard size={48} />,
  <BookOpen size={48} />,
  <Wrench size={48} />,
];

const Services = () => {
  return (
    <div>
      <Navbar />
      
      <div className="bg-poultry-brown/10 py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold text-poultry-brown mb-4">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide expert guidance and support for all aspects of poultry farming, from setup to maintenance.
          </p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.id}
                title={service.title}
                description={service.description}
                icon={serviceIcons[index]}
                url={`/services/${service.id}`}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-poultry-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-poultry-brown mb-4">
                Expert Consultation for Your Poultry Business
              </h2>
              <div className="w-24 h-1 bg-poultry-green mb-6"></div>
              <p className="text-gray-700 mb-6">
                Our team of experienced poultry farming specialists is dedicated to helping you achieve optimal results in your farming operations. Whether you're just starting out or looking to improve an established farm, we provide tailored solutions to meet your specific needs.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <span className="text-poultry-green flex-shrink-0 mt-1">✓</span>
                  <span>Personalized farm assessments and improvement plans</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-poultry-green flex-shrink-0 mt-1">✓</span>
                  <span>Breeding program development and genetic improvement</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-poultry-green flex-shrink-0 mt-1">✓</span>
                  <span>Feed formulation and nutrition management</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-poultry-green flex-shrink-0 mt-1">✓</span>
                  <span>Marketing strategies for poultry products</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Poultry farm consultation" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-poultry-brown mb-4 text-center">
              Request a Consultation
            </h2>
            <form className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-poultry-brown"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-poultry-brown"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="service" className="block text-gray-700 mb-2">Service Interested In</label>
                <select 
                  id="service" 
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-poultry-brown"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="farm-setup">Farm Setup & Design</option>
                  <option value="health">Poultry Health Consultation</option>
                  <option value="training">Training Programs</option>
                  <option value="maintenance">Equipment Maintenance</option>
                  <option value="other">Other (specify below)</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-poultry-brown"
                  placeholder="Please describe your needs or questions..."
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button 
                  type="submit" 
                  className="bg-poultry-brown hover:bg-poultry-brown/90 text-white font-medium py-2.5 px-6 rounded-md"
                >
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Services;
