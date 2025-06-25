import React from 'react';
import { motion } from 'framer-motion';
import { Search, UserCheck, Calendar, Star, MessageCircle } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

export function HowItWorksSection() {
  const { language } = useAuthStore();

  const t = {
    es: {
      title: 'Cómo Funciona (Resumen)',
      subtitle: 'Es súper fácil obtener ayuda para tus tareas domésticas. En solo 5 pasos tendrás un profesional en tu hogar.',
      step1: {
        title: 'Encuentra lo que necesitas',
        description: 'Busca o explora por categoría. Puedes subir fotos si no estás seguro.'
      },
      step2: {
        title: 'Agenda en minutos',
        description: 'Selecciona proveedor, fecha y hora. Mira su perfil y precio estimado.'
      },
      step3: {
        title: 'Comunica por chat',
        description: 'Chat integrado para coordinar detalles y resolver dudas.'
      },
      step4: {
        title: 'Recibe el servicio',
        description: 'El profesional llega a tu ubicación y realiza el trabajo.'
      },
      step5: {
        title: 'Evalúa y guarda favoritos',
        description: 'Tu calificación ayuda a otros y puedes repetir con un solo clic.'
      },
      ctaTitle: '¿Listo para comenzar?',
      ctaSubtitle: 'Miles de profesionales verificados están esperando ayudarte. Obtén tu primera tarea completada hoy mismo.',
      createAccount: 'Crear Cuenta',
      exploreServices: 'Explorar servicios'
    },
    en: {
      title: 'How It Works (Summary)',
      subtitle: 'It\'s super easy to get help with your household tasks. In just 5 steps you\'ll have a professional at your home.',
      step1: {
        title: 'Find what you need',
        description: 'Search or browse by category. You can upload photos if you\'re not sure.'
      },
      step2: {
        title: 'Schedule in minutes',
        description: 'Select provider, date and time. View their profile and estimated price.'
      },
      step3: {
        title: 'Communicate via chat',
        description: 'Integrated chat to coordinate details and resolve doubts.'
      },
      step4: {
        title: 'Receive the service',
        description: 'The professional arrives at your location and performs the work.'
      },
      step5: {
        title: 'Rate and save favorites',
        description: 'Your rating helps others and you can repeat with one click.'
      },
      ctaTitle: 'Ready to get started?',
      ctaSubtitle: 'Thousands of verified professionals are waiting to help you. Get your first task completed today.',
      createAccount: 'Create Account',
      exploreServices: 'Explore services'
    }
  };

  const steps = [
    {
      id: 1,
      icon: Search,
      title: t[language].step1.title,
      description: t[language].step1.description,
      color: 'bg-blue-500',
      colorLight: 'bg-blue-50',
      colorText: 'text-blue-600',
    },
    {
      id: 2,
      icon: UserCheck,
      title: t[language].step2.title,
      description: t[language].step2.description,
      color: 'bg-primary-500',
      colorLight: 'bg-primary-50',
      colorText: 'text-primary-600',
    },
    {
      id: 3,
      icon: MessageCircle,
      title: t[language].step3.title,
      description: t[language].step3.description,
      color: 'bg-purple-500',
      colorLight: 'bg-purple-50',
      colorText: 'text-purple-600',
    },
    {
      id: 4,
      icon: Calendar,
      title: t[language].step4.title,
      description: t[language].step4.description,
      color: 'bg-orange-500',
      colorLight: 'bg-orange-50',
      colorText: 'text-orange-600',
    },
    {
      id: 5,
      icon: Star,
      title: t[language].step5.title,
      description: t[language].step5.description,
      color: 'bg-green-500',
      colorLight: 'bg-green-50',
      colorText: 'text-green-600',
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
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

        {/* Steps */}
        <div className="relative">
          {/* Connection Lines - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5">
            <div className="flex justify-between items-center h-full max-w-6xl mx-auto px-20">
              {Array.from({ length: 4 }).map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                  className="flex-1 h-0.5 bg-gradient-to-r from-gray-300 to-primary-200 mx-4 origin-left"
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative text-center"
                >
                  {/* Step Number */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 ${step.colorLight} rounded-full flex items-center justify-center mx-auto mb-4 relative z-10`}>
                      <IconComponent className={`w-8 h-8 ${step.colorText}`} />
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-4 border-primary-500 rounded-full flex items-center justify-center text-sm font-bold text-primary-600">
                      {step.id}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-white rounded-xl p-6 shadow-soft h-full">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {t[language].ctaTitle}
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              {t[language].ctaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
                {t[language].createAccount}
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary-600 transition-all">
                {t[language].exploreServices}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}