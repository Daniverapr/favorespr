import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Shield, 
  Award,
  CheckCircle,
  ArrowRight,
  MapPin,
  Users,
  TrendingUp
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { useAuthStore } from '../store/authStore';

interface Service {
  id: string;
  name: string;
  nameEn: string;
  category: string;
  description: string;
  descriptionEn: string;
  benefits: string[];
  benefitsEn: string[];
  icon: string;
  image: string;
  startingPrice: number;
  averageRating: number;
  completedJobs: number;
  responseTime: string;
  packages: {
    basic: { name: string; price: number; features: string[]; };
    standard: { name: string; price: number; features: string[]; };
    premium: { name: string; price: number; features: string[]; };
  };
  testimonials: {
    name: string;
    rating: number;
    comment: string;
    location: string;
    avatar: string;
  }[];
  keywords: string[];
  popular: boolean;
  verified: boolean;
}

export function ServicesPage() {
  const { language } = useAuthStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [showFilters, setShowFilters] = useState(false);

  const t = {
    es: {
      title: 'Servicios Profesionales',
      subtitle: 'Encuentra el profesional perfecto para cualquier trabajo. Todos nuestros proveedores están verificados y altamente calificados.',
      searchPlaceholder: 'Buscar servicios...',
      filterBy: 'Filtrar por',
      sortBy: 'Ordenar por',
      allCategories: 'Todas las categorías',
      popular: 'Más populares',
      priceAsc: 'Precio: menor a mayor',
      priceDesc: 'Precio: mayor a menor',
      rating: 'Mejor valorados',
      recent: 'Más recientes',
      startingFrom: 'Desde',
      perHour: '/hora',
      viewDetails: 'Ver detalles',
      bookNow: 'Reservar ahora',
      benefits: 'Beneficios',
      packages: 'Paquetes',
      testimonials: 'Testimonios',
      basic: 'Básico',
      standard: 'Estándar',
      premium: 'Premium',
      mostPopular: 'Más popular',
      verified: 'Verificado',
      jobs: 'trabajos',
      avgResponse: 'Respuesta promedio',
      trustBadges: {
        verified: 'Proveedores verificados',
        insured: 'Asegurados',
        rated: 'Altamente valorados',
        available: 'Disponibles 24/7'
      }
    },
    en: {
      title: 'Professional Services',
      subtitle: 'Find the perfect professional for any job. All our providers are verified and highly qualified.',
      searchPlaceholder: 'Search services...',
      filterBy: 'Filter by',
      sortBy: 'Sort by',
      allCategories: 'All categories',
      popular: 'Most popular',
      priceAsc: 'Price: low to high',
      priceDesc: 'Price: high to low',
      rating: 'Highest rated',
      recent: 'Most recent',
      startingFrom: 'Starting from',
      perHour: '/hour',
      viewDetails: 'View details',
      bookNow: 'Book now',
      benefits: 'Benefits',
      packages: 'Packages',
      testimonials: 'Testimonials',
      basic: 'Basic',
      standard: 'Standard',
      premium: 'Premium',
      mostPopular: 'Most popular',
      verified: 'Verified',
      jobs: 'jobs',
      avgResponse: 'Average response',
      trustBadges: {
        verified: 'Verified providers',
        insured: 'Insured',
        rated: 'Highly rated',
        available: 'Available 24/7'
      }
    }
  };

  const services: Service[] = [
    {
      id: 'plumbing',
      name: 'Plomería',
      nameEn: 'Plumbing',
      category: 'home-repair',
      description: 'Servicios profesionales de plomería para tu hogar o negocio. Nuestros plomeros certificados resuelven desde pequeñas reparaciones hasta instalaciones completas. Con más de 10 años de experiencia, garantizamos trabajos de calidad usando materiales de primera. Disponibles para emergencias 24/7, ofrecemos diagnósticos gratuitos y presupuestos sin compromiso. Especializados en sistemas residenciales y comerciales, cumplimos con todos los códigos de construcción locales.',
      descriptionEn: 'Professional plumbing services for your home or business. Our certified plumbers solve everything from small repairs to complete installations. With over 10 years of experience, we guarantee quality work using top-grade materials. Available for 24/7 emergencies, we offer free diagnostics and no-obligation estimates. Specialized in residential and commercial systems, we comply with all local building codes.',
      benefits: [
        'Plomeros certificados y con licencia',
        'Garantía de 2 años en todos los trabajos',
        'Servicio de emergencia 24/7',
        'Diagnóstico gratuito',
        'Materiales de primera calidad',
        'Precios transparentes sin sorpresas',
        'Limpieza completa después del trabajo'
      ],
      benefitsEn: [
        'Licensed and certified plumbers',
        '2-year warranty on all work',
        '24/7 emergency service',
        'Free diagnosis',
        'Top-quality materials',
        'Transparent pricing with no surprises',
        'Complete cleanup after work'
      ],
      icon: 'Droplet',
      image: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=800',
      startingPrice: 35,
      averageRating: 4.8,
      completedJobs: 2847,
      responseTime: '15 min',
      packages: {
        basic: {
          name: 'Reparación Básica',
          price: 35,
          features: [
            'Diagnóstico del problema',
            'Reparación menor',
            'Garantía de 30 días',
            'Limpieza básica'
          ]
        },
        standard: {
          name: 'Servicio Completo',
          price: 65,
          features: [
            'Diagnóstico completo',
            'Reparación o instalación',
            'Garantía de 1 año',
            'Materiales incluidos',
            'Limpieza completa'
          ]
        },
        premium: {
          name: 'Servicio Premium',
          price: 95,
          features: [
            'Inspección completa del sistema',
            'Reparación/instalación premium',
            'Garantía de 2 años',
            'Materiales premium incluidos',
            'Mantenimiento preventivo',
            'Soporte prioritario'
          ]
        }
      },
      testimonials: [
        {
          name: 'María González',
          rating: 5,
          comment: 'Excelente servicio. Llegaron rápido y solucionaron mi problema de filtración en menos de una hora.',
          location: 'San Juan',
          avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
        },
        {
          name: 'Carlos Rivera',
          rating: 5,
          comment: 'Muy profesionales. El trabajo quedó perfecto y el precio fue justo.',
          location: 'Bayamón',
          avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
        }
      ],
      keywords: ['plomería', 'plomero', 'destape', 'filtración', 'tubería', 'grifo', 'inodoro'],
      popular: true,
      verified: true
    },
    {
      id: 'electrical',
      name: 'Electricidad',
      nameEn: 'Electrical',
      category: 'home-repair',
      description: 'Servicios eléctricos profesionales con electricistas certificados. Realizamos instalaciones, reparaciones y mantenimiento de sistemas eléctricos residenciales y comerciales. Cumplimos con el Código Eléctrico Nacional y todas las regulaciones locales. Nuestro equipo cuenta con más de 15 años de experiencia y está completamente asegurado. Ofrecemos servicios de emergencia y trabajamos con las mejores marcas del mercado para garantizar seguridad y durabilidad.',
      descriptionEn: 'Professional electrical services with certified electricians. We perform installations, repairs and maintenance of residential and commercial electrical systems. We comply with the National Electrical Code and all local regulations. Our team has over 15 years of experience and is fully insured. We offer emergency services and work with the best brands in the market to guarantee safety and durability.',
      benefits: [
        'Electricistas certificados y asegurados',
        'Cumplimiento del Código Eléctrico Nacional',
        'Garantía de 3 años en instalaciones',
        'Servicio de emergencia disponible',
        'Inspección gratuita de seguridad',
        'Materiales de marcas reconocidas',
        'Precios competitivos y transparentes'
      ],
      benefitsEn: [
        'Certified and insured electricians',
        'National Electrical Code compliance',
        '3-year warranty on installations',
        'Emergency service available',
        'Free safety inspection',
        'Recognized brand materials',
        'Competitive and transparent pricing'
      ],
      icon: 'Zap',
      image: 'https://images.pexels.com/photos/4792732/pexels-photo-4792732.jpeg?auto=compress&cs=tinysrgb&w=800',
      startingPrice: 40,
      averageRating: 4.9,
      completedJobs: 1923,
      responseTime: '20 min',
      packages: {
        basic: {
          name: 'Reparación Eléctrica',
          price: 40,
          features: [
            'Diagnóstico del problema',
            'Reparación básica',
            'Prueba de funcionamiento',
            'Garantía de 6 meses'
          ]
        },
        standard: {
          name: 'Instalación Estándar',
          price: 75,
          features: [
            'Instalación completa',
            'Materiales incluidos',
            'Pruebas de seguridad',
            'Garantía de 2 años',
            'Certificado de instalación'
          ]
        },
        premium: {
          name: 'Sistema Completo',
          price: 120,
          features: [
            'Diseño del sistema eléctrico',
            'Instalación premium',
            'Materiales de alta gama',
            'Garantía de 3 años',
            'Mantenimiento anual incluido',
            'Soporte técnico 24/7'
          ]
        }
      },
      testimonials: [
        {
          name: 'Ana Martínez',
          rating: 5,
          comment: 'Instalaron mi sistema de abanicos perfectamente. Muy profesionales y puntuales.',
          location: 'Caguas',
          avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150'
        }
      ],
      keywords: ['electricista', 'instalación eléctrica', 'abanico', 'panel eléctrico', 'enchufe'],
      popular: true,
      verified: true
    },
    {
      id: 'handyman',
      name: 'Handyman',
      nameEn: 'Handyman',
      category: 'home-repair',
      description: 'Servicios de handyman para todas tus necesidades del hogar. Nuestros profesionales multihabilidades pueden manejar una amplia variedad de tareas, desde reparaciones menores hasta proyectos de mejoras. Con herramientas profesionales y años de experiencia, ofrecemos soluciones rápidas y efectivas. Especializados en montaje de muebles, reparaciones de puertas y ventanas, instalación de estantes, y mucho más. Servicio confiable con precios justos.',
      descriptionEn: 'Handyman services for all your home needs. Our multi-skilled professionals can handle a wide variety of tasks, from minor repairs to improvement projects. With professional tools and years of experience, we offer quick and effective solutions. Specialized in furniture assembly, door and window repairs, shelf installation, and much more. Reliable service with fair prices.',
      benefits: [
        'Profesionales multihabilidades',
        'Herramientas profesionales incluidas',
        'Servicio el mismo día disponible',
        'Presupuesto gratuito',
        'Trabajo garantizado',
        'Precios por hora o proyecto',
        'Flexibilidad de horarios'
      ],
      benefitsEn: [
        'Multi-skilled professionals',
        'Professional tools included',
        'Same-day service available',
        'Free estimate',
        'Guaranteed work',
        'Hourly or project pricing',
        'Flexible scheduling'
      ],
      icon: 'Wrench',
      image: 'https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=800',
      startingPrice: 25,
      averageRating: 4.7,
      completedJobs: 3456,
      responseTime: '10 min',
      packages: {
        basic: {
          name: 'Reparación Rápida',
          price: 25,
          features: [
            'Hasta 1 hora de trabajo',
            'Herramientas básicas incluidas',
            'Reparación menor',
            'Garantía de 30 días'
          ]
        },
        standard: {
          name: 'Proyecto Mediano',
          price: 45,
          features: [
            'Hasta 3 horas de trabajo',
            'Herramientas profesionales',
            'Materiales básicos incluidos',
            'Garantía de 90 días',
            'Limpieza incluida'
          ]
        },
        premium: {
          name: 'Proyecto Completo',
          price: 70,
          features: [
            'Día completo de trabajo',
            'Todas las herramientas incluidas',
            'Materiales premium',
            'Garantía de 6 meses',
            'Seguimiento post-servicio'
          ]
        }
      },
      testimonials: [
        {
          name: 'Luis Pérez',
          rating: 5,
          comment: 'Montó todos mis muebles de IKEA en tiempo récord. Excelente trabajo.',
          location: 'Ponce',
          avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150'
        }
      ],
      keywords: ['handyman', 'reparaciones', 'montaje', 'muebles', 'mantenimiento'],
      popular: true,
      verified: true
    }
  ];

  const categories = [
    { id: 'all', name: language === 'es' ? 'Todas las categorías' : 'All categories' },
    { id: 'home-repair', name: language === 'es' ? 'Reparaciones del hogar' : 'Home repairs' },
    { id: 'cleaning', name: language === 'es' ? 'Limpieza' : 'Cleaning' },
    { id: 'gardening', name: language === 'es' ? 'Jardinería' : 'Gardening' },
    { id: 'installation', name: language === 'es' ? 'Instalaciones' : 'Installations' }
  ];

  const filteredServices = useMemo(() => {
    let filtered = services.filter(service => {
      const matchesSearch = searchQuery === '' || 
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });

    // Sort services
    switch (sortBy) {
      case 'priceAsc':
        filtered.sort((a, b) => a.startingPrice - b.startingPrice);
        break;
      case 'priceDesc':
        filtered.sort((a, b) => b.startingPrice - a.startingPrice);
        break;
      case 'rating':
        filtered.sort((a, b) => b.averageRating - a.averageRating);
        break;
      case 'popular':
      default:
        filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {t[language].title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t[language].subtitle}
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {Object.entries(t[language].trustBadges).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                    {key === 'verified' && <Shield className="w-6 h-6 text-primary-600" />}
                    {key === 'insured' && <CheckCircle className="w-6 h-6 text-primary-600" />}
                    {key === 'rated' && <Star className="w-6 h-6 text-primary-600" />}
                    {key === 'available' && <Clock className="w-6 h-6 text-primary-600" />}
                  </div>
                  <p className="text-sm font-medium text-gray-700">{value}</p>
                </motion.div>
              ))}
            </div>

            {/* Search and Filters */}
            <div className="bg-white rounded-2xl shadow-large p-6 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-6 relative">
                  <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder={t[language].searchPlaceholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <div className="md:col-span-3">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="md:col-span-3">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="popular">{t[language].popular}</option>
                    <option value="priceAsc">{t[language].priceAsc}</option>
                    <option value="priceDesc">{t[language].priceDesc}</option>
                    <option value="rating">{t[language].rating}</option>
                  </select>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                language={language}
                t={t}
                index={index}
              />
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                {language === 'es' 
                  ? 'No se encontraron servicios que coincidan con tu búsqueda.'
                  : 'No services found matching your search.'
                }
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ service, language, t, index }: {
  service: Service;
  language: 'es' | 'en';
  t: any;
  index: number;
}) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300">
        {/* Service Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={service.image}
            alt={language === 'es' ? service.name : service.nameEn}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {service.popular && (
              <span className="px-2 py-1 bg-warning text-white text-xs font-medium rounded-full">
                Popular
              </span>
            )}
            {service.verified && (
              <span className="px-2 py-1 bg-success text-white text-xs font-medium rounded-full flex items-center gap-1">
                <CheckCircle size={12} />
                {t[language].verified}
              </span>
            )}
          </div>

          {/* Price */}
          <div className="absolute top-3 right-3 bg-white rounded-lg px-3 py-1">
            <span className="text-sm text-gray-500">{t[language].startingFrom}</span>
            <div className="font-bold text-primary-600">
              ${service.startingPrice}{t[language].perHour}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold text-gray-900">
              {language === 'es' ? service.name : service.nameEn}
            </h3>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-warning fill-current" />
              <span className="font-medium">{service.averageRating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{service.completedJobs} {t[language].jobs}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{t[language].avgResponse}: {service.responseTime}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-4 line-clamp-3">
            {language === 'es' ? service.description : service.descriptionEn}
          </p>

          {/* Benefits Preview */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 mb-2">{t[language].benefits}:</h4>
            <ul className="space-y-1">
              {(language === 'es' ? service.benefits : service.benefitsEn).slice(0, 3).map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
            {service.benefits.length > 3 && (
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-primary-600 text-sm font-medium mt-2 hover:text-primary-700"
              >
                {showDetails ? 'Ver menos' : `+${service.benefits.length - 3} más`}
              </button>
            )}
          </div>

          {/* Expanded Details */}
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-gray-100 pt-4 mb-6"
            >
              {/* Packages */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">{t[language].packages}:</h4>
                <div className="grid grid-cols-1 gap-3">
                  {Object.entries(service.packages).map(([key, pkg]) => (
                    <div key={key} className="border border-gray-200 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <h5 className="font-medium text-gray-900">{pkg.name}</h5>
                        <span className="font-bold text-primary-600">${pkg.price}</span>
                      </div>
                      <ul className="space-y-1">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-success flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-3">{t[language].testimonials}:</h4>
                <div className="space-y-3">
                  {service.testimonials.map((testimonial, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center gap-3 mb-2">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-medium text-sm">{testimonial.name}</div>
                          <div className="flex items-center gap-1">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                              <Star key={i} className="w-3 h-3 text-warning fill-current" />
                            ))}
                            <span className="text-xs text-gray-500 ml-1">{testimonial.location}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">"{testimonial.comment}"</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Actions */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={() => setShowDetails(!showDetails)}
            >
              {t[language].viewDetails}
            </Button>
            <Link to={`/agendar?service=${service.id}`} className="flex-1">
              <Button size="sm" className="w-full" rightIcon={<ArrowRight size={16} />}>
                {t[language].bookNow}
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}