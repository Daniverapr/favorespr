import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Star, 
  Shield, 
  Award, 
  Users, 
  TrendingUp,
  DollarSign,
  Clock,
  FileText,
  Camera,
  Phone,
  Mail,
  ArrowRight,
  Download
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { useAuthStore } from '../store/authStore';

export function ProvidersPage() {
  const { language } = useAuthStore();
  const [activeTab, setActiveTab] = useState('overview');

  const t = {
    es: {
      title: 'Únete como Proveedor de Servicios',
      subtitle: 'Convierte tus habilidades en ingresos. Conecta con miles de clientes que necesitan tus servicios profesionales.',
      joinNow: 'Únete Ahora',
      learnMore: 'Aprende Más',
      requirements: 'Requisitos',
      process: 'Proceso',
      earnings: 'Ganancias',
      support: 'Soporte',
      benefits: {
        title: 'Beneficios de ser Proveedor',
        flexible: 'Horarios flexibles',
        flexibleDesc: 'Trabaja cuando quieras, establece tu propia disponibilidad',
        income: 'Ingresos adicionales',
        incomeDesc: 'Gana dinero extra con tus habilidades y experiencia',
        clients: 'Clientes verificados',
        clientsDesc: 'Todos los clientes pasan por un proceso de verificación',
        support: 'Soporte 24/7',
        supportDesc: 'Equipo de soporte dedicado para ayudarte siempre',
        insurance: 'Seguro incluido',
        insuranceDesc: 'Cobertura de seguro para todos los trabajos',
        growth: 'Crecimiento profesional',
        growthDesc: 'Desarrolla tu negocio y construye tu reputación'
      },
      requirements: {
        title: 'Requisitos para Registro',
        age: 'Mayor de 18 años',
        id: 'Identificación válida',
        background: 'Verificación de antecedentes',
        skills: 'Habilidades comprobables',
        tools: 'Herramientas propias',
        insurance: 'Seguro de responsabilidad',
        phone: 'Teléfono verificado',
        bank: 'Cuenta bancaria'
      },
      process: {
        title: 'Proceso de Registro',
        step1: 'Información Personal',
        step1Desc: 'Completa tu perfil con información básica y foto',
        step2: 'Verificación',
        step2Desc: 'Verificamos tu identidad y antecedentes',
        step3: 'Habilidades',
        step3Desc: 'Demuestra tus habilidades y experiencia',
        step4: 'Documentación',
        step4Desc: 'Sube documentos requeridos y certificaciones',
        step5: 'Aprobación',
        step5Desc: 'Revisamos tu aplicación y te notificamos'
      },
      earnings: {
        title: 'Estructura de Ganancias',
        commission: 'Comisión de la plataforma',
        commissionDesc: 'Solo 15% por transacción completada',
        payout: 'Pagos semanales',
        payoutDesc: 'Recibe tus ganancias cada viernes',
        tips: 'Propinas incluidas',
        tipsDesc: 'Mantén el 100% de las propinas de clientes',
        bonus: 'Bonos por rendimiento',
        bonusDesc: 'Gana extra por excelente servicio'
      },
      dashboard: {
        title: 'Panel de Control del Proveedor',
        requests: 'Solicitudes de Trabajo',
        calendar: 'Calendario',
        earnings: 'Ganancias',
        reviews: 'Reseñas',
        profile: 'Perfil',
        analytics: 'Analíticas'
      },
      faq: {
        title: 'Preguntas Frecuentes',
        q1: '¿Cuánto puedo ganar?',
        a1: 'Los ingresos varían según el tipo de servicio, experiencia y disponibilidad. Nuestros proveedores top ganan $500-2000 por semana.',
        q2: '¿Cuándo recibo mis pagos?',
        a2: 'Los pagos se procesan semanalmente todos los viernes. El dinero se deposita directamente en tu cuenta bancaria.',
        q3: '¿Qué pasa si hay un problema?',
        a3: 'Nuestro equipo de soporte está disponible 24/7 para ayudarte con cualquier problema o disputa.',
        q4: '¿Puedo trabajar en múltiples categorías?',
        a4: 'Sí, puedes ofrecer servicios en múltiples categorías si tienes las habilidades y certificaciones necesarias.'
      }
    },
    en: {
      title: 'Join as a Service Provider',
      subtitle: 'Turn your skills into income. Connect with thousands of clients who need your professional services.',
      joinNow: 'Join Now',
      learnMore: 'Learn More',
      requirements: 'Requirements',
      process: 'Process',
      earnings: 'Earnings',
      support: 'Support',
      benefits: {
        title: 'Benefits of Being a Provider',
        flexible: 'Flexible schedule',
        flexibleDesc: 'Work when you want, set your own availability',
        income: 'Additional income',
        incomeDesc: 'Earn extra money with your skills and experience',
        clients: 'Verified clients',
        clientsDesc: 'All clients go through a verification process',
        support: '24/7 support',
        supportDesc: 'Dedicated support team to help you always',
        insurance: 'Insurance included',
        insuranceDesc: 'Insurance coverage for all jobs',
        growth: 'Professional growth',
        growthDesc: 'Grow your business and build your reputation'
      },
      requirements: {
        title: 'Registration Requirements',
        age: 'Over 18 years old',
        id: 'Valid identification',
        background: 'Background check',
        skills: 'Provable skills',
        tools: 'Own tools',
        insurance: 'Liability insurance',
        phone: 'Verified phone',
        bank: 'Bank account'
      },
      process: {
        title: 'Registration Process',
        step1: 'Personal Information',
        step1Desc: 'Complete your profile with basic information and photo',
        step2: 'Verification',
        step2Desc: 'We verify your identity and background',
        step3: 'Skills',
        step3Desc: 'Demonstrate your skills and experience',
        step4: 'Documentation',
        step4Desc: 'Upload required documents and certifications',
        step5: 'Approval',
        step5Desc: 'We review your application and notify you'
      },
      earnings: {
        title: 'Earnings Structure',
        commission: 'Platform commission',
        commissionDesc: 'Only 15% per completed transaction',
        payout: 'Weekly payments',
        payoutDesc: 'Receive your earnings every Friday',
        tips: 'Tips included',
        tipsDesc: 'Keep 100% of client tips',
        bonus: 'Performance bonuses',
        bonusDesc: 'Earn extra for excellent service'
      },
      dashboard: {
        title: 'Provider Dashboard',
        requests: 'Job Requests',
        calendar: 'Calendar',
        earnings: 'Earnings',
        reviews: 'Reviews',
        profile: 'Profile',
        analytics: 'Analytics'
      },
      faq: {
        title: 'Frequently Asked Questions',
        q1: 'How much can I earn?',
        a1: 'Earnings vary by service type, experience, and availability. Our top providers earn $500-2000 per week.',
        q2: 'When do I receive payments?',
        a2: 'Payments are processed weekly every Friday. Money is deposited directly into your bank account.',
        q3: 'What if there\'s a problem?',
        a3: 'Our support team is available 24/7 to help you with any problems or disputes.',
        q4: 'Can I work in multiple categories?',
        a4: 'Yes, you can offer services in multiple categories if you have the necessary skills and certifications.'
      }
    }
  };

  const benefits = [
    {
      icon: Clock,
      title: t[language].benefits.flexible,
      description: t[language].benefits.flexibleDesc,
      color: 'bg-blue-500'
    },
    {
      icon: DollarSign,
      title: t[language].benefits.income,
      description: t[language].benefits.incomeDesc,
      color: 'bg-green-500'
    },
    {
      icon: Shield,
      title: t[language].benefits.clients,
      description: t[language].benefits.clientsDesc,
      color: 'bg-purple-500'
    },
    {
      icon: Users,
      title: t[language].benefits.support,
      description: t[language].benefits.supportDesc,
      color: 'bg-orange-500'
    },
    {
      icon: CheckCircle,
      title: t[language].benefits.insurance,
      description: t[language].benefits.insuranceDesc,
      color: 'bg-red-500'
    },
    {
      icon: TrendingUp,
      title: t[language].benefits.growth,
      description: t[language].benefits.growthDesc,
      color: 'bg-indigo-500'
    }
  ];

  const requirements = [
    t[language].requirements.age,
    t[language].requirements.id,
    t[language].requirements.background,
    t[language].requirements.skills,
    t[language].requirements.tools,
    t[language].requirements.insurance,
    t[language].requirements.phone,
    t[language].requirements.bank
  ];

  const processSteps = [
    {
      title: t[language].process.step1,
      description: t[language].process.step1Desc,
      icon: Users
    },
    {
      title: t[language].process.step2,
      description: t[language].process.step2Desc,
      icon: Shield
    },
    {
      title: t[language].process.step3,
      description: t[language].process.step3Desc,
      icon: Award
    },
    {
      title: t[language].process.step4,
      description: t[language].process.step4Desc,
      icon: FileText
    },
    {
      title: t[language].process.step5,
      description: t[language].process.step5Desc,
      icon: CheckCircle
    }
  ];

  const tabs = [
    { id: 'overview', name: language === 'es' ? 'Resumen' : 'Overview' },
    { id: 'requirements', name: t[language].requirements.title },
    { id: 'process', name: t[language].process.title },
    { id: 'earnings', name: t[language].earnings.title },
    { id: 'support', name: t[language].support }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-secondary-600 text-white py-20">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                {t[language].title}
              </h1>
              <p className="text-xl text-primary-100 mb-8">
                {t[language].subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                  {t[language].joinNow}
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                  {t[language].learnMore}
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold">800+</div>
                  <div className="text-primary-200">Proveedores activos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">$850</div>
                  <div className="text-primary-200">Ganancia promedio/semana</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">4.9</div>
                  <div className="text-primary-200">Satisfacción promedio</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/4246006/pexels-photo-4246006.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional service provider"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating earnings card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 text-gray-900">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Esta semana</div>
                    <div className="text-lg font-bold">$1,250</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
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
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <div className={`w-16 h-16 ${benefit.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">
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

      {/* Detailed Information Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            {activeTab === 'requirements' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  {t[language].requirements.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'process' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  {t[language].process.title}
                </h3>
                <div className="space-y-6">
                  {processSteps.map((step, index) => {
                    const IconComponent = step.icon;
                    return (
                      <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-primary-600" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">
                            {index + 1}. {step.title}
                          </h4>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {activeTab === 'earnings' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  {t[language].earnings.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <div className="p-6 text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <DollarSign className="w-8 h-8 text-green-600" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">{t[language].earnings.commission}</h4>
                      <p className="text-gray-600 mb-4">{t[language].earnings.commissionDesc}</p>
                      <div className="text-3xl font-bold text-green-600">15%</div>
                    </div>
                  </Card>
                  
                  <Card>
                    <div className="p-6 text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Clock className="w-8 h-8 text-blue-600" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">{t[language].earnings.payout}</h4>
                      <p className="text-gray-600 mb-4">{t[language].earnings.payoutDesc}</p>
                      <div className="text-lg font-bold text-blue-600">Viernes</div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            )}
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
              {language === 'es' 
                ? '¿Listo para comenzar a ganar dinero?' 
                : 'Ready to start earning money?'
              }
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              {language === 'es'
                ? 'Únete a cientos de profesionales que ya están construyendo su negocio con nosotros.'
                : 'Join hundreds of professionals who are already building their business with us.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                {t[language].joinNow}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-primary-600"
                leftIcon={<Download size={16} />}
              >
                {language === 'es' ? 'Descargar Guía' : 'Download Guide'}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}