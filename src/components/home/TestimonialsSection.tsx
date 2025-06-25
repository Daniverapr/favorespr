import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

export function TestimonialsSection() {
  const { language } = useAuthStore();

  const t = {
    es: {
      title: 'Lo que dicen nuestros clientes',
      subtitle: 'Miles de puertorriqueños ya confían en TrabajoPR para sus tareas del hogar. Lee sus experiencias reales.',
      tasksCompleted: 'Tareas completadas',
      averageRating: 'Puntuación promedio',
      verifiedWorkers: 'Trabajadores verificados',
      municipalitiesCovered: 'Municipios cubiertos'
    },
    en: {
      title: 'What our clients say',
      subtitle: 'Thousands of Puerto Ricans already trust TrabajoPR for their household tasks. Read their real experiences.',
      tasksCompleted: 'Tasks completed',
      averageRating: 'Average rating',
      verifiedWorkers: 'Verified workers',
      municipalitiesCovered: 'Municipalities covered'
    }
  };

  const testimonials = [
    {
      id: 1,
      name: 'Carmen Rodríguez',
      location: 'San Juan, PR',
      rating: 5,
      text: language === 'es' 
        ? 'Increíble servicio! Carlos llegó puntual y arregló mi problema de plomería rápidamente. Definitivamente lo voy a contratar de nuevo.'
        : 'Amazing service! Carlos arrived on time and fixed my plumbing problem quickly. I will definitely hire him again.',
      service: language === 'es' ? 'Plomería' : 'Plumbing',
      worker: 'Carlos Vega',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: language === 'es' ? '2 días atrás' : '2 days ago'
    },
    {
      id: 2,
      name: 'José Rivera',
      location: 'Bayamón, PR',
      rating: 5,
      text: language === 'es' 
        ? 'Luis instaló mi abanico nuevo en tiempo récord y quedó perfecto. Muy profesional y con todas las herramientas necesarias.'
        : 'Luis installed my new fan in record time and it was perfect. Very professional and with all the necessary tools.',
      service: language === 'es' ? 'Electricidad' : 'Electrical',
      worker: 'Luis Pérez',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: language === 'es' ? '1 semana atrás' : '1 week ago'
    },
    {
      id: 3,
      name: 'Ana García',
      location: 'Caguas, PR',
      rating: 5,
      text: language === 'es' 
        ? 'El trabajo de pintura fue excelente. María fue muy cuidadosa y el resultado superó mis expectativas.'
        : 'The painting work was excellent. María was very careful and the result exceeded my expectations.',
      service: language === 'es' ? 'Pintura' : 'Painting',
      worker: 'María Santos',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: language === 'es' ? '3 días atrás' : '3 days ago'
    },
    {
      id: 4,
      name: 'Miguel Torres',
      location: 'Ponce, PR',
      rating: 5,
      text: language === 'es' 
        ? 'Roberto cortó mi grama y limpió el patio perfectamente. Muy recomendado para trabajos de jardinería.'
        : 'Roberto cut my grass and cleaned the yard perfectly. Highly recommended for gardening work.',
      service: language === 'es' ? 'Jardinería' : 'Gardening',
      worker: 'Roberto Díaz',
      avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: language === 'es' ? '5 días atrás' : '5 days ago'
    },
    {
      id: 5,
      name: 'Isabella Martín',
      location: 'Mayagüez, PR',
      rating: 5,
      text: language === 'es' 
        ? 'La limpieza profunda de mi casa quedó increíble. Sofía es muy detallista y profesional.'
        : 'The deep cleaning of my house was incredible. Sofía is very detail-oriented and professional.',
      service: language === 'es' ? 'Limpieza' : 'Cleaning',
      worker: 'Sofía Morales',
      avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: language === 'es' ? '1 día atrás' : '1 day ago'
    },
    {
      id: 6,
      name: 'David López',
      location: 'Arecibo, PR',
      rating: 5,
      text: language === 'es' 
        ? 'Instaló mi sistema de cámaras de seguridad perfectamente. Muy paciente explicando cómo usar todo.'
        : 'He installed my security camera system perfectly. Very patient explaining how to use everything.',
      service: language === 'es' ? 'Instalaciones' : 'Installations',
      worker: 'Tech Solutions PR',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      date: language === 'es' ? '4 días atrás' : '4 days ago'
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-gray-100 hover:border-primary-200 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-primary-200 group-hover:text-primary-300 transition-colors" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-warning fill-current"
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">
                    {testimonial.date}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-gray-700 leading-relaxed mb-4 flex-grow">
                  "{testimonial.text}"
                </p>

                {/* Service Info */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">
                        {language === 'es' ? 'Servicio' : 'Service'}
                      </p>
                      <p className="text-sm font-medium text-gray-900">
                        {testimonial.service}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500 uppercase tracking-wide">
                        {language === 'es' ? 'Trabajador' : 'Worker'}
                      </p>
                      <p className="text-sm font-medium text-primary-600">
                        {testimonial.worker}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-gray-50 to-primary-50 rounded-2xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">25,000+</div>
              <div className="text-gray-600">{t[language].tasksCompleted}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-gray-600">{t[language].averageRating}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">800+</div>
              <div className="text-gray-600">{t[language].verifiedWorkers}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">78</div>
              <div className="text-gray-600">{t[language].municipalitiesCovered}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}