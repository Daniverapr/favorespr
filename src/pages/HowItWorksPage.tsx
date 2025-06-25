import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  UserCheck, 
  Calendar, 
  MessageCircle, 
  Star, 
  Shield, 
  Clock, 
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  CreditCard,
  MapPin,
  Users,
  TrendingUp,
  Heart
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { useAuthStore } from '../store/authStore';

export function HowItWorksPage() {
  const { language } = useAuthStore();

  const t = {
    es: {
      title: 'Cómo Funciona TrabajoPR',
      subtitle: 'Conectar con profesionales verificados nunca fue tan fácil. Sigue estos simples pasos para obtener el servicio que necesitas.',
      getStarted: 'Comenzar Ahora',
      learnMore: 'Más Información',
      steps: {
        step1: {
          title: 'Encuentra lo que necesitas',
          description: 'Busca por categoría de servicio o describe tu proyecto. Nuestro sistema inteligente te conectará con los profesionales más adecuados.',
          details: [
            'Explora más de 50 categorías de servicios',
            'Usa nuestra búsqueda inteligente con palabras clave',
            'Sube fotos para describir mejor tu proyecto',
            'Recibe sugerencias personalizadas basadas en tu ubicación'
          ]
        },
        step2: {
          title: 'Revisa perfiles y elige tu profesional',
          description: 'Compara perfiles verificados, lee reseñas reales y selecciona el profesional que mejor se adapte a tus necesidades.',
          details: [
            'Perfiles completamente verificados con antecedentes',
            'Reseñas y calificaciones de clientes reales',
            'Portafolio de trabajos anteriores con fotos',
            'Precios transparentes sin sorpresas'
          ]
        },
        step3: {
          title: 'Agenda tu cita en minutos',
          description: 'Selecciona fecha y hora que te convenga. Nuestro calendario en tiempo real muestra la disponibilidad actual.',
          details: [
            'Calendario en tiempo real con disponibilidad',
            'Confirmación instantánea o en menos de 2 horas',
            'Flexibilidad para reprogramar si es necesario',
            'Recordatorios automáticos por SMS y email'
          ]
        },
        step4: {
          title: 'Comunícate directamente',
          description: 'Chat integrado para coordinar detalles, hacer preguntas y mantenerte informado sobre el progreso.',
          details: [
            'Chat en tiempo real con tu profesional',
            'Comparte fotos y documentos fácilmente',
            'Recibe actualizaciones del progreso',
            'Soporte 24/7 disponible si lo necesitas'
          ]
        },
        step5: {
          title: 'Recibe el servicio y evalúa',
          description: 'El profesional llega puntual, realiza el trabajo y tú evalúas la experiencia para ayudar a otros usuarios.',
          details: [
            'Profesionales puntuales y preparados',
            'Trabajo garantizado con seguro incluido',
            'Pago seguro después de completar el servicio',
            'Tu evaluación ayuda a mejorar la plataforma'
          ]
        }
      },
      benefits: {
        title: 'Beneficios de Usar TrabajoPR',
        subtitle: 'Más que una plataforma, somos tu socio de confianza para el hogar',
        items: [
          {
            title: 'Profesionales Verificados',
            description: 'Todos nuestros proveedores pasan por verificación de antecedentes y validación de habilidades.',
            icon: 'Shield'
          },
          {
            title: 'Precios Transparentes',
            description: 'Sin costos ocultos. Conoce el precio exacto antes de confirmar tu cita.',
            icon: 'CreditCard'
          },
          {
            title: 'Disponibilidad 24/7',
            description: 'Agenda servicios cuando te convenga, incluyendo fines de semana y días feriados.',
            icon: 'Clock'
          },
          {
            title: 'Garantía de Satisfacción',
            description: 'Si no estás satisfecho, trabajamos contigo para solucionarlo o te devolvemos tu dinero.',
            icon: 'Award'
          },
          {
            title: 'Cobertura Completa',
            description: 'Servicio disponible en los 78 municipios de Puerto Rico.',
            icon: 'MapPin'
          },
          {
            title: 'Comunidad Confiable',
            description: 'Más de 25,000 clientes satisfechos y creciendo cada día.',
            icon: 'Users'
          }
        ]
      },
      faq: {
        title: 'Preguntas Frecuentes',
        items: [
          {
            question: '¿Cómo sé que los profesionales están calificados?',
            answer: 'Todos nuestros profesionales pasan por un riguroso proceso de verificación que incluye validación de identidad, verificación de antecedentes, pruebas de habilidades y referencias de trabajos anteriores.'
          },
          {
            question: '¿Qué pasa si no estoy satisfecho con el servicio?',
            answer: 'Ofrecemos una garantía de satisfacción del 100%. Si no estás completamente satisfecho, trabajaremos con el profesional para corregir cualquier problema o te reembolsaremos tu dinero.'
          },
          {
            question: '¿Cuánto tiempo toma conseguir una cita?',
            answer: 'La mayoría de las citas se confirman en menos de 2 horas. Para servicios de emergencia, tenemos profesionales disponibles las 24 horas.'
          },
          {
            question: '¿Cómo funcionan los pagos?',
            answer: 'Los pagos son seguros y se procesan después de completar el servicio. Aceptamos tarjetas de crédito, débito, PayPal y ATH Móvil. No hay pagos por adelantado.'
          },
          {
            question: '¿Qué incluye el seguro?',
            answer: 'Todos los trabajos están cubiertos por nuestro seguro de responsabilidad civil. Esto protege tu propiedad en caso de daños accidentales durante el servicio.'
          },
          {
            question: '¿Puedo cancelar o reprogramar mi cita?',
            answer: 'Sí, puedes cancelar o reprogramar hasta 4 horas antes de la cita sin costo adicional. Para cambios de último minuto, pueden aplicar cargos mínimos.'
          }
        ]
      },
      cta: {
        title: '¿Listo para comenzar?',
        subtitle: 'Únete a miles de puertorriqueños que ya confían en TrabajoPR para sus necesidades del hogar.',
        primaryButton: 'Buscar Servicios',
        secondaryButton: 'Crear Cuenta Gratis'
      }
    },
    en: {
      title: 'How TrabajoPR Works',
      subtitle: 'Connecting with verified professionals has never been easier. Follow these simple steps to get the service you need.',
      getStarted: 'Get Started',
      learnMore: 'Learn More',
      steps: {
        step1: {
          title: 'Find what you need',
          description: 'Search by service category or describe your project. Our smart system will connect you with the most suitable professionals.',
          details: [
            'Explore over 50 service categories',
            'Use our smart search with keywords',
            'Upload photos to better describe your project',
            'Get personalized suggestions based on your location'
          ]
        },
        step2: {
          title: 'Review profiles and choose your professional',
          description: 'Compare verified profiles, read real reviews, and select the professional that best fits your needs.',
          details: [
            'Fully verified profiles with background checks',
            'Reviews and ratings from real customers',
            'Portfolio of previous work with photos',
            'Transparent pricing with no surprises'
          ]
        },
        step3: {
          title: 'Schedule your appointment in minutes',
          description: 'Select a date and time that works for you. Our real-time calendar shows current availability.',
          details: [
            'Real-time calendar with availability',
            'Instant confirmation or within 2 hours',
            'Flexibility to reschedule if needed',
            'Automatic reminders via SMS and email'
          ]
        },
        step4: {
          title: 'Communicate directly',
          description: 'Integrated chat to coordinate details, ask questions, and stay informed about progress.',
          details: [
            'Real-time chat with your professional',
            'Share photos and documents easily',
            'Receive progress updates',
            '24/7 support available if you need it'
          ]
        },
        step5: {
          title: 'Receive service and rate',
          description: 'The professional arrives on time, performs the work, and you rate the experience to help other users.',
          details: [
            'Punctual and prepared professionals',
            'Guaranteed work with insurance included',
            'Secure payment after service completion',
            'Your rating helps improve the platform'
          ]
        }
      },
      benefits: {
        title: 'Benefits of Using TrabajoPR',
        subtitle: 'More than a platform, we are your trusted home partner',
        items: [
          {
            title: 'Verified Professionals',
            description: 'All our providers undergo background verification and skill validation.',
            icon: 'Shield'
          },
          {
            title: 'Transparent Pricing',
            description: 'No hidden costs. Know the exact price before confirming your appointment.',
            icon: 'CreditCard'
          },
          {
            title: '24/7 Availability',
            description: 'Schedule services when convenient for you, including weekends and holidays.',
            icon: 'Clock'
          },
          {
            title: 'Satisfaction Guarantee',
            description: 'If you\'re not satisfied, we work with you to fix it or refund your money.',
            icon: 'Award'
          },
          {
            title: 'Complete Coverage',
            description: 'Service available in all 78 municipalities of Puerto Rico.',
            icon: 'MapPin'
          },
          {
            title: 'Trusted Community',
            description: 'Over 25,000 satisfied customers and growing every day.',
            icon: 'Users'
          }
        ]
      },
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'How do I know the professionals are qualified?',
            answer: 'All our professionals go through a rigorous verification process that includes identity validation, background checks, skill tests, and references from previous work.'
          },
          {
            question: 'What if I\'m not satisfied with the service?',
            answer: 'We offer a 100% satisfaction guarantee. If you\'re not completely satisfied, we\'ll work with the professional to correct any issues or refund your money.'
          },
          {
            question: 'How long does it take to get an appointment?',
            answer: 'Most appointments are confirmed in less than 2 hours. For emergency services, we have professionals available 24 hours a day.'
          },
          {
            question: 'How do payments work?',
            answer: 'Payments are secure and processed after service completion. We accept credit cards, debit cards, PayPal, and ATH Mobile. No advance payments required.'
          },
          {
            question: 'What does insurance include?',
            answer: 'All work is covered by our liability insurance. This protects your property in case of accidental damage during service.'
          },
          {
            question: 'Can I cancel or reschedule my appointment?',
            answer: 'Yes, you can cancel or reschedule up to 4 hours before the appointment at no additional cost. For last-minute changes, minimal charges may apply.'
          }
        ]
      },
      cta: {
        title: 'Ready to get started?',
        subtitle: 'Join thousands of Puerto Ricans who already trust TrabajoPR for their home needs.',
        primaryButton: 'Search Services',
        secondaryButton: 'Create Free Account'
      }
    }
  };

  const steps = [
    {
      id: 1,
      icon: Search,
      title: t[language].steps.step1.title,
      description: t[language].steps.step1.description,
      details: t[language].steps.step1.details,
      color: 'bg-blue-500',
      colorLight: 'bg-blue-50',
      colorText: 'text-blue-600'
    },
    {
      id: 2,
      icon: UserCheck,
      title: t[language].steps.step2.title,
      description: t[language].steps.step2.description,
      details: t[language].steps.step2.details,
      color: 'bg-primary-500',
      colorLight: 'bg-primary-50',
      colorText: 'text-primary-600'
    },
    {
      id: 3,
      icon: Calendar,
      title: t[language].steps.step3.title,
      description: t[language].steps.step3.description,
      details: t[language].steps.step3.details,
      color: 'bg-green-500',
      colorLight: 'bg-green-50',
      colorText: 'text-green-600'
    },
    {
      id: 4,
      icon: MessageCircle,
      title: t[language].steps.step4.title,
      description: t[language].steps.step4.description,
      details: t[language].steps.step4.details,
      color: 'bg-purple-500',
      colorLight: 'bg-purple-50',
      colorText: 'text-purple-600'
    },
    {
      id: 5,
      icon: Star,
      title: t[language].steps.step5.title,
      description: t[language].steps.step5.description,
      details: t[language].steps.step5.details,
      color: 'bg-orange-500',
      colorLight: 'bg-orange-50',
      colorText: 'text-orange-600'
    }
  ];

  const iconMap = {
    Shield,
    CreditCard,
    Clock,
    Award,
    MapPin,
    Users
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t[language].title}
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              {t[language].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/servicios">
                <Button size="lg" rightIcon={<ArrowRight size={18} />}>
                  {t[language].getStarted}
                </Button>
              </Link>
              <Link to="/ser-proveedor">
                <Button variant="outline" size="lg">
                  {t[language].learnMore}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:grid-flow-col-dense'
                  }`}
                >
                  {/* Content */}
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 ${step.colorLight} rounded-2xl flex items-center justify-center`}>
                        <IconComponent className={`w-8 h-8 ${step.colorText}`} />
                      </div>
                      <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                        {step.id}
                      </div>
                    </div>
                    
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h2>
                    <p className="text-xl text-gray-600 mb-6">
                      {step.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual */}
                  <div className={isEven ? 'lg:col-start-2' : ''}>
                    <div className="relative">
                      <div className={`w-full h-80 ${step.color} rounded-2xl flex items-center justify-center`}>
                        <IconComponent className="w-32 h-32 text-white opacity-20" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10 rounded-2xl"></div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t[language].benefits.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t[language].benefits.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t[language].benefits.items.map((benefit, index) => {
              const IconComponent = iconMap[benefit.icon as keyof typeof iconMap];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-shadow">
                    <div className="p-8">
                      <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="w-8 h-8 text-primary-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t[language].faq.title}
            </h2>
          </motion.div>

          <div className="space-y-6">
            {t[language].faq.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {item.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              {t[language].cta.title}
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              {t[language].cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/servicios">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                  {t[language].cta.primaryButton}
                </Button>
              </Link>
              <Link to="/registro">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-primary-600"
                >
                  {t[language].cta.secondaryButton}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}