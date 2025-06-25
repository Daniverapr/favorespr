import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Star, Shield, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { useAuthStore } from '../../store/authStore';

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const { language } = useAuthStore();

  const t = {
    es: {
      badge: '🇵🇷 Hecho en Puerto Rico',
      headline: 'Contrata fácilmente trabajadores confiables cerca de ti',
      subheadline: 'Desde plomeros y electricistas hasta expertos en jardinería — todo desde una sola plataforma.',
      searchPlaceholder: '¿Qué necesitas?',
      locationPlaceholder: 'Tu municipio',
      searchButton: 'Buscar',
      popularServices: 'Servicios populares:',
      verified: 'Verificados',
      rating: 'Puntuación',
      clients: 'Clientes',
      viewServices: 'Ver Servicios',
      howItWorks: 'Cómo Funciona'
    },
    en: {
      badge: '🇵🇷 Made in Puerto Rico',
      headline: 'Easily hire reliable workers near you',
      subheadline: 'From plumbers and electricians to gardening experts — all from one platform.',
      searchPlaceholder: 'What do you need?',
      locationPlaceholder: 'Your municipality',
      searchButton: 'Search',
      popularServices: 'Popular services:',
      verified: 'Verified',
      rating: 'Rating',
      clients: 'Clients',
      viewServices: 'View Services',
      howItWorks: 'How It Works'
    }
  };

  const popularServices = language === 'es' 
    ? ['Plomería', 'Electricidad', 'Handyman', 'Jardinería', 'Pintura']
    : ['Plumbing', 'Electrical', 'Handyman', 'Gardening', 'Painting'];

  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-20 pb-32 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary-50 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
      </div>

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                {t[language].badge}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t[language].headline}
              </h1>
              <p className="text-xl text-gray-600 mt-6 max-w-2xl">
                {t[language].subheadline}
              </p>
            </div>

            {/* Search Bar */}
            <div className="bg-white rounded-2xl shadow-large p-2 mb-8 max-w-2xl">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
                <div className="md:col-span-6 relative">
                  <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder={t[language].searchPlaceholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border-0 rounded-xl focus:ring-2 focus:ring-primary-500 focus:outline-none"
                  />
                </div>
                <div className="md:col-span-4 relative">
                  <MapPin className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder={t[language].locationPlaceholder}
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border-0 rounded-xl focus:ring-2 focus:ring-primary-500 focus:outline-none"
                  />
                </div>
                <div className="md:col-span-2">
                  <Button 
                    fullWidth 
                    size="lg" 
                    className="h-12"
                    rightIcon={<Search size={18} />}
                  >
                    {t[language].searchButton}
                  </Button>
                </div>
              </div>
            </div>

            {/* Popular Services */}
            <div className="mb-8">
              <p className="text-sm text-gray-500 mb-3">{t[language].popularServices}</p>
              <div className="flex flex-wrap gap-2">
                {popularServices.map((service, index) => (
                  <motion.button
                    key={service}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-primary-300 hover:text-primary-700 hover:bg-primary-50 transition-all duration-200"
                  >
                    {service}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/servicios">
                <Button size="lg" rightIcon={<ArrowRight size={18} />}>
                  {t[language].viewServices}
                </Button>
              </Link>
              <Link to="/como-funciona">
                <Button variant="outline" size="lg">
                  {t[language].howItWorks}
                </Button>
              </Link>
              <Link to="/registro">
                <Button variant="outline" size="lg">
                  Registrarse
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 max-w-md">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-xl mb-2 mx-auto">
                  <Shield className="w-6 h-6 text-primary-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">{t[language].verified}</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-warning/10 rounded-xl mb-2 mx-auto">
                  <Star className="w-6 h-6 text-warning" />
                </div>
                <div className="text-2xl font-bold text-gray-900">4.9</div>
                <div className="text-sm text-gray-600">{t[language].rating}</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-secondary-100 rounded-xl mb-2 mx-auto">
                  <Users className="w-6 h-6 text-secondary-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">25K+</div>
                <div className="text-sm text-gray-600">{t[language].clients}</div>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4246006/pexels-photo-4246006.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional service worker"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-large"
              />
              
              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute top-4 right-4 bg-white rounded-xl shadow-medium p-4 max-w-48"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Carlos M.</div>
                    <div className="flex items-center">
                      <Star className="w-3 h-3 text-warning fill-current" />
                      <span className="text-xs text-gray-600 ml-1">5.0 • Elite</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  "Excelente trabajo de plomería. ¡Recomendado!"
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="absolute bottom-4 left-4 bg-white rounded-xl shadow-medium p-4"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                  <span className="text-sm font-medium text-gray-900">En línea</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  89 trabajadores disponibles ahora
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}