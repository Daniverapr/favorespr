import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Droplet, 
  Zap, 
  Hammer, 
  PaintBucket, 
  Leaf,
  Bug,
  Sparkles,
  Settings,
  ArrowRight 
} from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

const iconMap = {
  Wrench,
  Droplet,
  Zap,
  Hammer,
  PaintBucket,
  Leaf,
  Bug,
  Sparkles,
  Settings
};

export function ServicesSection() {
  const { language } = useAuthStore();

  const t = {
    es: {
      title: 'Explora por categoría',
      subtitle: 'Encuentra el profesional perfecto para cualquier trabajo en tu hogar.',
      viewAll: 'Ver todos los servicios'
    },
    en: {
      title: 'Explore by category',
      subtitle: 'Find the perfect professional for any job in your home.',
      viewAll: 'View all services'
    }
  };

  const services = [
    {
      id: 'handyman',
      name: language === 'es' ? 'Handyman' : 'Handyman',
      description: language === 'es' 
        ? 'Reparaciones menores para el hogar. Desde montar muebles hasta arreglar puertas.'
        : 'Minor home repairs. From furniture assembly to door fixes.',
      icon: 'Wrench',
      color: 'bg-blue-500',
      colorLight: 'bg-blue-50',
      colorText: 'text-blue-600',
      image: 'https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=400',
      startingPrice: 25,
      popular: true
    },
    {
      id: 'plumbing',
      name: language === 'es' ? 'Plomería' : 'Plumbing',
      description: language === 'es' 
        ? 'Destapes, filtraciones e instalaciones profesionales.'
        : 'Unclogging, leaks and professional installations.',
      icon: 'Droplet',
      color: 'bg-primary-500',
      colorLight: 'bg-primary-50',
      colorText: 'text-primary-600',
      image: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=400',
      startingPrice: 35,
      popular: true
    },
    {
      id: 'electrical',
      name: language === 'es' ? 'Electricidad' : 'Electrical',
      description: language === 'es' 
        ? 'Instalación de abanicos, enchufes, paneles y más.'
        : 'Fan installation, outlets, panels and more.',
      icon: 'Zap',
      color: 'bg-orange-500',
      colorLight: 'bg-orange-50',
      colorText: 'text-orange-600',
      image: 'https://images.pexels.com/photos/4792732/pexels-photo-4792732.jpeg?auto=compress&cs=tinysrgb&w=400',
      startingPrice: 40
    },
    {
      id: 'carpentry',
      name: language === 'es' ? 'Carpintería' : 'Carpentry',
      description: language === 'es' 
        ? 'Gabinetes, puertas, estanterías a la medida.'
        : 'Custom cabinets, doors, shelving.',
      icon: 'Hammer',
      color: 'bg-green-500',
      colorLight: 'bg-green-50',
      colorText: 'text-green-600',
      image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=400',
      startingPrice: 45
    },
    {
      id: 'painting',
      name: language === 'es' ? 'Pintura' : 'Painting',
      description: language === 'es' 
        ? 'Pintura interior/exterior, sellado de techos y texturizado.'
        : 'Interior/exterior painting, roof sealing and texturing.',
      icon: 'PaintBucket',
      color: 'bg-purple-500',
      colorLight: 'bg-purple-50',
      colorText: 'text-purple-600',
      image: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=400',
      startingPrice: 30
    },
    {
      id: 'gardening',
      name: language === 'es' ? 'Jardinería' : 'Gardening',
      description: language === 'es' 
        ? 'Corte de grama, poda, limpieza de patios.'
        : 'Lawn cutting, pruning, yard cleanup.',
      icon: 'Leaf',
      color: 'bg-indigo-500',
      colorLight: 'bg-indigo-50',
      colorText: 'text-indigo-600',
      image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=400',
      startingPrice: 25
    },
    {
      id: 'pest_control',
      name: language === 'es' ? 'Fumigación' : 'Pest Control',
      description: language === 'es' 
        ? 'Control de plagas y desinfección mensual.'
        : 'Pest control and monthly disinfection.',
      icon: 'Bug',
      color: 'bg-pink-500',
      colorLight: 'bg-pink-50',
      colorText: 'text-pink-600',
      image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=400',
      startingPrice: 50
    },
    {
      id: 'cleaning',
      name: language === 'es' ? 'Limpieza' : 'Cleaning',
      description: language === 'es' 
        ? 'Servicios profesionales de limpieza profunda.'
        : 'Professional deep cleaning services.',
      icon: 'Sparkles',
      color: 'bg-rose-500',
      colorLight: 'bg-rose-50',
      colorText: 'text-rose-600',
      image: 'https://images.pexels.com/photos/4107123/pexels-photo-4107123.jpeg?auto=compress&cs=tinysrgb&w=400',
      startingPrice: 20
    },
    {
      id: 'installations',
      name: language === 'es' ? 'Instalaciones' : 'Installations',
      description: language === 'es' 
        ? 'Cámaras, WiFi, paneles solares, lavadoras.'
        : 'Cameras, WiFi, solar panels, washers.',
      icon: 'Settings',
      color: 'bg-teal-500',
      colorLight: 'bg-teal-50',
      colorText: 'text-teal-600',
      image: 'https://images.pexels.com/photos/4792732/pexels-photo-4792732.jpeg?auto=compress&cs=tinysrgb&w=400',
      startingPrice: 55
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t[language].title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t[language].subtitle}
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group"
              >
                <Link to={`/buscar?categoria=${service.id}`}>
                  <div className="relative bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden">
                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className="px-2 py-1 bg-warning text-white text-xs font-medium rounded-full">
                          Popular
                        </span>
                      </div>
                    )}

                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className={`p-3 ${service.colorLight} rounded-xl`}>
                          <IconComponent className={`w-6 h-6 ${service.colorText}`} />
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500">Desde</div>
                          <div className="text-lg font-bold text-gray-900">
                            ${service.startingPrice}/hr
                          </div>
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {service.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          Ver profesionales
                        </span>
                        <ArrowRight className="w-4 h-4 text-primary-500 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/servicios">
              <button className="inline-flex items-center px-8 py-4 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors shadow-soft hover:shadow-medium">
                {t[language].viewAll}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </Link>
            <Link to="/reservar">
              <button className="inline-flex items-center px-8 py-4 border-2 border-primary-500 text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transition-colors">
                Reservar Servicio
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}