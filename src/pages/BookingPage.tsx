import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  Calendar, 
  Clock, 
  MapPin, 
  CreditCard,
  CheckCircle,
  Upload,
  Mic,
  Camera,
  Phone,
  MessageCircle,
  DollarSign
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { useAuthStore } from '../store/authStore';

interface BookingStep {
  id: number;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  component: React.ComponentType<any>;
}

export function BookingPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { language } = useAuthStore();
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: searchParams.get('service') || '',
    specificService: '',
    description: '',
    location: '',
    photos: [],
    preferredDate: '',
    timeOfDay: '',
    frequency: '',
    communication: '',
    payment: ''
  });

  const t = {
    es: {
      title: 'Agendar Servicio',
      step: 'Paso',
      of: 'de',
      back: 'Atrás',
      continue: 'Continuar',
      confirm: 'Confirmar Cita',
      summary: 'Resumen del Servicio',
      estimatedCost: 'Costo Estimado',
      goToChat: 'Ir al chat con el proveedor'
    },
    en: {
      title: 'Book Service',
      step: 'Step',
      of: 'of',
      back: 'Back',
      continue: 'Continue',
      confirm: 'Confirm Appointment',
      summary: 'Service Summary',
      estimatedCost: 'Estimated Cost',
      goToChat: 'Go to chat with provider'
    }
  };

  const steps: BookingStep[] = [
    {
      id: 1,
      title: '¿Qué servicio necesitas?',
      titleEn: 'What service do you need?',
      description: 'Selecciona la categoría de servicio',
      descriptionEn: 'Select the service category',
      component: ServiceSelectionStep
    },
    {
      id: 2,
      title: '¿Qué necesitas específicamente?',
      titleEn: 'What do you need specifically?',
      description: 'Detalles específicos del servicio',
      descriptionEn: 'Specific service details',
      component: SpecificServiceStep
    },
    {
      id: 3,
      title: 'Describe el problema',
      titleEn: 'Describe the problem',
      description: 'Proporciona más detalles',
      descriptionEn: 'Provide more details',
      component: DescriptionStep
    },
    {
      id: 4,
      title: 'Ubicación del servicio',
      titleEn: 'Service location',
      description: 'Dónde necesitas el servicio',
      descriptionEn: 'Where you need the service',
      component: LocationStep
    },
    {
      id: 5,
      title: 'Adjuntar fotos',
      titleEn: 'Attach photos',
      description: 'Ayúdanos a entender mejor',
      descriptionEn: 'Help us understand better',
      component: PhotosStep
    },
    {
      id: 6,
      title: 'Fecha preferida',
      titleEn: 'Preferred date',
      description: 'Cuándo necesitas el servicio',
      descriptionEn: 'When you need the service',
      component: DateStep
    },
    {
      id: 7,
      title: 'Hora del día',
      titleEn: 'Time of day',
      description: 'Horario preferido',
      descriptionEn: 'Preferred time',
      component: TimeStep
    },
    {
      id: 8,
      title: 'Frecuencia del servicio',
      titleEn: 'Service frequency',
      description: 'Con qué frecuencia lo necesitas',
      descriptionEn: 'How often you need it',
      component: FrequencyStep
    },
    {
      id: 9,
      title: 'Método de comunicación',
      titleEn: 'Communication method',
      description: 'Cómo prefieres comunicarte',
      descriptionEn: 'How you prefer to communicate',
      component: CommunicationStep
    },
    {
      id: 10,
      title: 'Método de pago',
      titleEn: 'Payment method',
      description: 'Cómo quieres pagar',
      descriptionEn: 'How you want to pay',
      component: PaymentStep
    }
  ];

  const currentStepData = steps[currentStep - 1];
  const StepComponent = currentStepData.component;

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleConfirm = () => {
    // Here you would typically send the booking data to your backend
    console.log('Booking confirmed:', bookingData);
    // Navigate to chat or confirmation page
    navigate('/chat');
  };

  const updateBookingData = (field: string, value: any) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {t[language].title}
          </h1>
          <p className="text-gray-600">
            {t[language].step} {currentStep} {t[language].of} {steps.length}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-primary-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(currentStep / steps.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Step Content */}
        <Card className="mb-8">
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {language === 'es' ? currentStepData.title : currentStepData.titleEn}
              </h2>
              <p className="text-gray-600">
                {language === 'es' ? currentStepData.description : currentStepData.descriptionEn}
              </p>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <StepComponent
                  bookingData={bookingData}
                  updateBookingData={updateBookingData}
                  language={language}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1}
            leftIcon={<ArrowLeft size={16} />}
          >
            {t[language].back}
          </Button>

          {currentStep === steps.length ? (
            <Button
              onClick={handleConfirm}
              rightIcon={<CheckCircle size={16} />}
            >
              {t[language].confirm}
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              rightIcon={<ArrowRight size={16} />}
            >
              {t[language].continue}
            </Button>
          )}
        </div>

        {/* Summary Sidebar (visible on larger screens) */}
        {currentStep > 1 && (
          <div className="hidden lg:block fixed right-8 top-1/2 transform -translate-y-1/2 w-80">
            <BookingSummary bookingData={bookingData} language={language} />
          </div>
        )}
      </div>
    </div>
  );
}

// Step Components
function ServiceSelectionStep({ bookingData, updateBookingData, language }: any) {
  const services = [
    { id: 'plumbing', name: 'Plomería', nameEn: 'Plumbing', icon: '🚿' },
    { id: 'electrical', name: 'Electricidad', nameEn: 'Electrical', icon: '💡' },
    { id: 'handyman', name: 'Handyman', nameEn: 'Handyman', icon: '🛠️' },
    { id: 'cleaning', name: 'Limpieza', nameEn: 'Cleaning', icon: '🧼' },
    { id: 'gardening', name: 'Jardinería', nameEn: 'Gardening', icon: '🌿' },
    { id: 'painting', name: 'Pintura', nameEn: 'Painting', icon: '🎨' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {services.map(service => (
        <button
          key={service.id}
          onClick={() => updateBookingData('service', service.id)}
          className={`p-6 rounded-xl border-2 transition-all ${
            bookingData.service === service.id
              ? 'border-primary-500 bg-primary-50'
              : 'border-gray-200 hover:border-primary-300'
          }`}
        >
          <div className="text-3xl mb-2">{service.icon}</div>
          <div className="font-medium">
            {language === 'es' ? service.name : service.nameEn}
          </div>
        </button>
      ))}
    </div>
  );
}

function SpecificServiceStep({ bookingData, updateBookingData, language }: any) {
  const specificServices = {
    plumbing: [
      { id: 'unclog', name: 'Destape', nameEn: 'Unclogging' },
      { id: 'leak', name: 'Reparar filtración', nameEn: 'Fix leak' },
      { id: 'install', name: 'Instalación', nameEn: 'Installation' },
      { id: 'maintenance', name: 'Mantenimiento', nameEn: 'Maintenance' }
    ],
    electrical: [
      { id: 'fan', name: 'Instalar abanico', nameEn: 'Install fan' },
      { id: 'outlet', name: 'Nuevo enchufe', nameEn: 'New outlet' },
      { id: 'lighting', name: 'Iluminación', nameEn: 'Lighting' },
      { id: 'panel', name: 'Panel eléctrico', nameEn: 'Electrical panel' }
    ],
    handyman: [
      { id: 'furniture', name: 'Montar muebles', nameEn: 'Assemble furniture' },
      { id: 'door', name: 'Reparar puerta', nameEn: 'Fix door' },
      { id: 'shelf', name: 'Instalar estante', nameEn: 'Install shelf' },
      { id: 'general', name: 'Reparación general', nameEn: 'General repair' }
    ]
  };

  const options = specificServices[bookingData.service as keyof typeof specificServices] || [];

  return (
    <div className="space-y-4">
      {options.map(option => (
        <button
          key={option.id}
          onClick={() => updateBookingData('specificService', option.id)}
          className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
            bookingData.specificService === option.id
              ? 'border-primary-500 bg-primary-50'
              : 'border-gray-200 hover:border-primary-300'
          }`}
        >
          {language === 'es' ? option.name : option.nameEn}
        </button>
      ))}
    </div>
  );
}

function DescriptionStep({ bookingData, updateBookingData, language }: any) {
  const [isRecording, setIsRecording] = useState(false);

  const t = {
    es: {
      placeholder: 'Describe el problema o trabajo que necesitas...',
      voiceInput: 'Entrada de voz',
      startRecording: 'Iniciar grabación',
      stopRecording: 'Detener grabación'
    },
    en: {
      placeholder: 'Describe the problem or work you need...',
      voiceInput: 'Voice input',
      startRecording: 'Start recording',
      stopRecording: 'Stop recording'
    }
  };

  return (
    <div className="space-y-6">
      <textarea
        value={bookingData.description}
        onChange={(e) => updateBookingData('description', e.target.value)}
        placeholder={t[language].placeholder}
        rows={6}
        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
      />
      
      <div className="flex justify-center">
        <Button
          variant="outline"
          onClick={() => setIsRecording(!isRecording)}
          leftIcon={<Mic size={16} />}
          className={isRecording ? 'bg-red-50 border-red-300 text-red-600' : ''}
        >
          {isRecording ? t[language].stopRecording : t[language].startRecording}
        </Button>
      </div>
    </div>
  );
}

function LocationStep({ bookingData, updateBookingData, language }: any) {
  const t = {
    es: {
      address: 'Dirección completa',
      addressPlaceholder: 'Calle, número, municipio...',
      useGPS: 'Usar mi ubicación actual',
      instructions: 'Instrucciones adicionales',
      instructionsPlaceholder: 'Apartamento, piso, referencias...'
    },
    en: {
      address: 'Full address',
      addressPlaceholder: 'Street, number, municipality...',
      useGPS: 'Use my current location',
      instructions: 'Additional instructions',
      instructionsPlaceholder: 'Apartment, floor, references...'
    }
  };

  return (
    <div className="space-y-6">
      <Input
        label={t[language].address}
        placeholder={t[language].addressPlaceholder}
        value={bookingData.location}
        onChange={(e) => updateBookingData('location', e.target.value)}
        leftIcon={<MapPin size={16} />}
      />
      
      <Button
        variant="outline"
        fullWidth
        leftIcon={<MapPin size={16} />}
      >
        {t[language].useGPS}
      </Button>
      
      <Input
        label={t[language].instructions}
        placeholder={t[language].instructionsPlaceholder}
        value={bookingData.instructions}
        onChange={(e) => updateBookingData('instructions', e.target.value)}
      />
    </div>
  );
}

function PhotosStep({ bookingData, updateBookingData, language }: any) {
  const t = {
    es: {
      dragDrop: 'Arrastra fotos aquí o haz clic para seleccionar',
      takePhoto: 'Tomar foto',
      optional: 'Opcional - Las fotos ayudan a los profesionales a prepararse mejor'
    },
    en: {
      dragDrop: 'Drag photos here or click to select',
      takePhoto: 'Take photo',
      optional: 'Optional - Photos help professionals prepare better'
    }
  };

  return (
    <div className="space-y-6">
      <p className="text-center text-gray-600">{t[language].optional}</p>
      
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary-400 transition-colors">
        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600 mb-4">{t[language].dragDrop}</p>
        <Button variant="outline">
          Seleccionar archivos
        </Button>
      </div>
      
      <div className="flex justify-center">
        <Button
          variant="outline"
          leftIcon={<Camera size={16} />}
        >
          {t[language].takePhoto}
        </Button>
      </div>
    </div>
  );
}

function DateStep({ bookingData, updateBookingData, language }: any) {
  const today = new Date().toISOString().split('T')[0];
  
  return (
    <div className="space-y-6">
      <Input
        type="date"
        label={language === 'es' ? 'Fecha preferida' : 'Preferred date'}
        value={bookingData.preferredDate}
        onChange={(e) => updateBookingData('preferredDate', e.target.value)}
        min={today}
        leftIcon={<Calendar size={16} />}
      />
    </div>
  );
}

function TimeStep({ bookingData, updateBookingData, language }: any) {
  const timeOptions = [
    { id: 'morning', name: 'Mañana (8:00 AM - 12:00 PM)', nameEn: 'Morning (8:00 AM - 12:00 PM)' },
    { id: 'afternoon', name: 'Tarde (12:00 PM - 6:00 PM)', nameEn: 'Afternoon (12:00 PM - 6:00 PM)' },
    { id: 'evening', name: 'Noche (6:00 PM - 10:00 PM)', nameEn: 'Evening (6:00 PM - 10:00 PM)' }
  ];

  return (
    <div className="space-y-4">
      {timeOptions.map(option => (
        <button
          key={option.id}
          onClick={() => updateBookingData('timeOfDay', option.id)}
          className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
            bookingData.timeOfDay === option.id
              ? 'border-primary-500 bg-primary-50'
              : 'border-gray-200 hover:border-primary-300'
          }`}
        >
          <Clock className="inline w-5 h-5 mr-3" />
          {language === 'es' ? option.name : option.nameEn}
        </button>
      ))}
    </div>
  );
}

function FrequencyStep({ bookingData, updateBookingData, language }: any) {
  const frequencyOptions = [
    { id: 'once', name: 'Una sola vez', nameEn: 'One time only' },
    { id: 'weekly', name: 'Semanal', nameEn: 'Weekly' },
    { id: 'monthly', name: 'Mensual', nameEn: 'Monthly' },
    { id: 'asNeeded', name: 'Según necesidad', nameEn: 'As needed' }
  ];

  return (
    <div className="space-y-4">
      {frequencyOptions.map(option => (
        <button
          key={option.id}
          onClick={() => updateBookingData('frequency', option.id)}
          className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
            bookingData.frequency === option.id
              ? 'border-primary-500 bg-primary-50'
              : 'border-gray-200 hover:border-primary-300'
          }`}
        >
          {language === 'es' ? option.name : option.nameEn}
        </button>
      ))}
    </div>
  );
}

function CommunicationStep({ bookingData, updateBookingData, language }: any) {
  const communicationOptions = [
    { id: 'chat', name: 'Chat en la app', nameEn: 'In-app chat', icon: MessageCircle },
    { id: 'phone', name: 'Llamada telefónica', nameEn: 'Phone call', icon: Phone },
    { id: 'both', name: 'Ambas opciones', nameEn: 'Both options', icon: MessageCircle }
  ];

  return (
    <div className="space-y-4">
      {communicationOptions.map(option => {
        const IconComponent = option.icon;
        return (
          <button
            key={option.id}
            onClick={() => updateBookingData('communication', option.id)}
            className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
              bookingData.communication === option.id
                ? 'border-primary-500 bg-primary-50'
                : 'border-gray-200 hover:border-primary-300'
            }`}
          >
            <IconComponent className="inline w-5 h-5 mr-3" />
            {language === 'es' ? option.name : option.nameEn}
          </button>
        );
      })}
    </div>
  );
}

function PaymentStep({ bookingData, updateBookingData, language }: any) {
  const paymentOptions = [
    { id: 'card', name: 'Tarjeta de crédito/débito', nameEn: 'Credit/debit card', icon: CreditCard },
    { id: 'cash', name: 'Efectivo', nameEn: 'Cash', icon: DollarSign },
    { id: 'ath', name: 'ATH Móvil', nameEn: 'ATH Mobile', icon: Phone }
  ];

  return (
    <div className="space-y-4">
      {paymentOptions.map(option => {
        const IconComponent = option.icon;
        return (
          <button
            key={option.id}
            onClick={() => updateBookingData('payment', option.id)}
            className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
              bookingData.payment === option.id
                ? 'border-primary-500 bg-primary-50'
                : 'border-gray-200 hover:border-primary-300'
            }`}
          >
            <IconComponent className="inline w-5 h-5 mr-3" />
            {language === 'es' ? option.name : option.nameEn}
          </button>
        );
      })}
    </div>
  );
}

function BookingSummary({ bookingData, language }: any) {
  const t = {
    es: {
      summary: 'Resumen del Servicio',
      service: 'Servicio',
      date: 'Fecha',
      time: 'Hora',
      location: 'Ubicación',
      payment: 'Pago',
      estimatedCost: 'Costo Estimado'
    },
    en: {
      summary: 'Service Summary',
      service: 'Service',
      date: 'Date',
      time: 'Time',
      location: 'Location',
      payment: 'Payment',
      estimatedCost: 'Estimated Cost'
    }
  };

  return (
    <Card>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">{t[language].summary}</h3>
        <div className="space-y-3 text-sm">
          {bookingData.service && (
            <div>
              <span className="font-medium">{t[language].service}:</span>
              <span className="ml-2 capitalize">{bookingData.service}</span>
            </div>
          )}
          {bookingData.preferredDate && (
            <div>
              <span className="font-medium">{t[language].date}:</span>
              <span className="ml-2">{bookingData.preferredDate}</span>
            </div>
          )}
          {bookingData.timeOfDay && (
            <div>
              <span className="font-medium">{t[language].time}:</span>
              <span className="ml-2 capitalize">{bookingData.timeOfDay}</span>
            </div>
          )}
          {bookingData.location && (
            <div>
              <span className="font-medium">{t[language].location}:</span>
              <span className="ml-2">{bookingData.location}</span>
            </div>
          )}
          {bookingData.payment && (
            <div>
              <span className="font-medium">{t[language].payment}:</span>
              <span className="ml-2 capitalize">{bookingData.payment}</span>
            </div>
          )}
        </div>
        <div className="border-t border-gray-200 mt-4 pt-4">
          <div className="flex justify-between items-center">
            <span className="font-medium">{t[language].estimatedCost}:</span>
            <span className="text-lg font-bold text-primary-600">$45-75</span>
          </div>
        </div>
      </div>
    </Card>
  );
}