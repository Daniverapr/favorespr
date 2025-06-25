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
  DollarSign,
  Star,
  User,
  Filter,
  Search,
  Grid,
  List
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { useAuthStore } from '../store/authStore';

interface Service {
  id: string;
  name: string;
  nameEn: string;
  category: string;
  description: string;
  descriptionEn: string;
  basePrice: number;
  duration: number;
  image: string;
  popular: boolean;
}

interface Provider {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  reviewCount: number;
  hourlyRate: number;
  responseTime: string;
  isOnline: boolean;
  specialties: string[];
}

export function EnhancedBookingPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { language } = useAuthStore();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [bookingData, setBookingData] = useState({
    service: searchParams.get('service') || '',
    provider: searchParams.get('provider') || '',
    specificService: '',
    description: '',
    location: '',
    photos: [],
    preferredDate: '',
    timeSlot: '',
    duration: 1,
    frequency: '',
    communication: '',
    payment: '',
    specialRequirements: ''
  });

  const t = {
    es: {
      title: 'Reservar Servicio',
      step: 'Paso',
      of: 'de',
      back: 'Atrás',
      continue: 'Continuar',
      confirm: 'Confirmar Reserva',
      selectService: 'Seleccionar Servicio',
      selectProvider: 'Elegir Profesional',
      scheduleService: 'Programar Servicio',
      reviewBooking: 'Revisar Reserva',
      payment: 'Pago',
      searchServices: 'Buscar servicios...',
      filterByCategory: 'Filtrar por categoría',
      allCategories: 'Todas las categorías',
      priceRange: 'Rango de precio',
      popular: 'Popular',
      perHour: '/hora',
      selectThisService: 'Seleccionar este servicio',
      viewProfile: 'Ver perfil',
      selectProvider: 'Seleccionar',
      online: 'En línea',
      responseTime: 'Tiempo de respuesta',
      reviews: 'reseñas',
      availableSlots: 'Horarios disponibles',
      morning: 'Mañana',
      afternoon: 'Tarde',
      evening: 'Noche',
      duration: 'Duración estimada',
      hours: 'horas',
      specialRequirements: 'Requisitos especiales',
      requirementsPlaceholder: 'Describe cualquier requisito especial...',
      bookingSummary: 'Resumen de la reserva',
      service: 'Servicio',
      provider: 'Profesional',
      date: 'Fecha',
      time: 'Hora',
      estimatedDuration: 'Duración estimada',
      location: 'Ubicación',
      subtotal: 'Subtotal',
      serviceFee: 'Tarifa de servicio',
      total: 'Total',
      paymentMethod: 'Método de pago',
      creditCard: 'Tarjeta de crédito',
      cash: 'Efectivo',
      athMovil: 'ATH Móvil',
      confirmBooking: 'Confirmar Reserva',
      bookingConfirmed: 'Reserva Confirmada',
      bookingNumber: 'Número de reserva',
      goToChat: 'Ir al chat',
      viewBookings: 'Ver mis reservas'
    },
    en: {
      title: 'Book Service',
      step: 'Step',
      of: 'of',
      back: 'Back',
      continue: 'Continue',
      confirm: 'Confirm Booking',
      selectService: 'Select Service',
      selectProvider: 'Choose Professional',
      scheduleService: 'Schedule Service',
      reviewBooking: 'Review Booking',
      payment: 'Payment',
      searchServices: 'Search services...',
      filterByCategory: 'Filter by category',
      allCategories: 'All categories',
      priceRange: 'Price range',
      popular: 'Popular',
      perHour: '/hour',
      selectThisService: 'Select this service',
      viewProfile: 'View profile',
      selectProvider: 'Select',
      online: 'Online',
      responseTime: 'Response time',
      reviews: 'reviews',
      availableSlots: 'Available slots',
      morning: 'Morning',
      afternoon: 'Afternoon',
      evening: 'Evening',
      duration: 'Estimated duration',
      hours: 'hours',
      specialRequirements: 'Special requirements',
      requirementsPlaceholder: 'Describe any special requirements...',
      bookingSummary: 'Booking summary',
      service: 'Service',
      provider: 'Professional',
      date: 'Date',
      time: 'Time',
      estimatedDuration: 'Estimated duration',
      location: 'Location',
      subtotal: 'Subtotal',
      serviceFee: 'Service fee',
      total: 'Total',
      paymentMethod: 'Payment method',
      creditCard: 'Credit card',
      cash: 'Cash',
      athMovil: 'ATH Mobile',
      confirmBooking: 'Confirm Booking',
      bookingConfirmed: 'Booking Confirmed',
      bookingNumber: 'Booking number',
      goToChat: 'Go to chat',
      viewBookings: 'View my bookings'
    }
  };

  // Mock services data
  const services: Service[] = [
    {
      id: 'plumbing-repair',
      name: 'Reparación de Plomería',
      nameEn: 'Plumbing Repair',
      category: 'plumbing',
      description: 'Reparación de filtraciones, destapes y problemas de plomería en general.',
      descriptionEn: 'Repair of leaks, unclogging and general plumbing problems.',
      basePrice: 45,
      duration: 2,
      image: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=400',
      popular: true
    },
    {
      id: 'electrical-installation',
      name: 'Instalación Eléctrica',
      nameEn: 'Electrical Installation',
      category: 'electrical',
      description: 'Instalación de abanicos, enchufes, interruptores y sistemas eléctricos.',
      descriptionEn: 'Installation of fans, outlets, switches and electrical systems.',
      basePrice: 55,
      duration: 3,
      image: 'https://images.pexels.com/photos/4792732/pexels-photo-4792732.jpeg?auto=compress&cs=tinysrgb&w=400',
      popular: true
    },
    {
      id: 'handyman-repair',
      name: 'Reparaciones Menores',
      nameEn: 'Minor Repairs',
      category: 'handyman',
      description: 'Montaje de muebles, reparación de puertas, instalación de estantes.',
      descriptionEn: 'Furniture assembly, door repair, shelf installation.',
      basePrice: 35,
      duration: 1.5,
      image: 'https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=400',
      popular: false
    }
  ];

  // Mock providers data
  const providers: Provider[] = [
    {
      id: '1',
      name: 'Carlos Vega',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4.9,
      reviewCount: 127,
      hourlyRate: 45,
      responseTime: '15 min',
      isOnline: true,
      specialties: ['Plomería', 'Instalaciones']
    },
    {
      id: '2',
      name: 'María Santos',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4.8,
      reviewCount: 89,
      hourlyRate: 40,
      responseTime: '20 min',
      isOnline: false,
      specialties: ['Electricidad', 'Reparaciones']
    },
    {
      id: '3',
      name: 'Luis Pérez',
      avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4.7,
      reviewCount: 203,
      hourlyRate: 35,
      responseTime: '10 min',
      isOnline: true,
      specialties: ['Handyman', 'Carpintería']
    }
  ];

  const categories = [
    { id: 'all', name: t[language].allCategories },
    { id: 'plumbing', name: language === 'es' ? 'Plomería' : 'Plumbing' },
    { id: 'electrical', name: language === 'es' ? 'Electricidad' : 'Electrical' },
    { id: 'handyman', name: 'Handyman' },
    { id: 'cleaning', name: language === 'es' ? 'Limpieza' : 'Cleaning' },
    { id: 'gardening', name: language === 'es' ? 'Jardinería' : 'Gardening' }
  ];

  const timeSlots = [
    { id: 'morning-8', time: '8:00 AM', period: 'morning' },
    { id: 'morning-9', time: '9:00 AM', period: 'morning' },
    { id: 'morning-10', time: '10:00 AM', period: 'morning' },
    { id: 'morning-11', time: '11:00 AM', period: 'morning' },
    { id: 'afternoon-12', time: '12:00 PM', period: 'afternoon' },
    { id: 'afternoon-1', time: '1:00 PM', period: 'afternoon' },
    { id: 'afternoon-2', time: '2:00 PM', period: 'afternoon' },
    { id: 'afternoon-3', time: '3:00 PM', period: 'afternoon' },
    { id: 'afternoon-4', time: '4:00 PM', period: 'afternoon' },
    { id: 'evening-5', time: '5:00 PM', period: 'evening' },
    { id: 'evening-6', time: '6:00 PM', period: 'evening' }
  ];

  const steps = [
    { id: 1, title: t[language].selectService },
    { id: 2, title: t[language].selectProvider },
    { id: 3, title: t[language].scheduleService },
    { id: 4, title: t[language].reviewBooking },
    { id: 5, title: t[language].payment }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = searchQuery === '' || 
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.nameEn.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = categoryFilter === 'all' || service.category === categoryFilter;
    const matchesPrice = service.basePrice >= priceRange[0] && service.basePrice <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

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

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setBookingData(prev => ({ ...prev, service: service.id }));
    handleNext();
  };

  const handleProviderSelect = (provider: Provider) => {
    setSelectedProvider(provider);
    setBookingData(prev => ({ ...prev, provider: provider.id }));
    handleNext();
  };

  const handleConfirmBooking = () => {
    // Here you would typically send the booking data to your backend
    console.log('Booking confirmed:', bookingData);
    setCurrentStep(6); // Show confirmation
  };

  const updateBookingData = (field: string, value: any) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const calculateTotal = () => {
    if (!selectedService || !selectedProvider) return 0;
    const subtotal = selectedProvider.hourlyRate * bookingData.duration;
    const serviceFee = subtotal * 0.1; // 10% service fee
    return subtotal + serviceFee;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {t[language].title}
          </h1>
          {currentStep <= 5 && (
            <p className="text-gray-600">
              {t[language].step} {currentStep} {t[language].of} {steps.length}
            </p>
          )}
        </div>

        {/* Progress Bar */}
        {currentStep <= 5 && (
          <div className="mb-8">
            <div className="bg-gray-200 rounded-full h-2">
              <motion.div
                className="bg-primary-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(currentStep / steps.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="flex justify-between mt-2">
              {steps.map((step, index) => (
                <span
                  key={step.id}
                  className={`text-sm ${
                    currentStep >= step.id ? 'text-primary-600 font-medium' : 'text-gray-500'
                  }`}
                >
                  {step.title}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Step Content */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Step 1: Service Selection */}
                {currentStep === 1 && (
                  <div>
                    {/* Search and Filters */}
                    <Card className="mb-6">
                      <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                          <div className="md:col-span-6 relative">
                            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <input
                              type="text"
                              placeholder={t[language].searchServices}
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            />
                          </div>
                          <div className="md:col-span-4">
                            <select
                              value={categoryFilter}
                              onChange={(e) => setCategoryFilter(e.target.value)}
                              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            >
                              {categories.map(category => (
                                <option key={category.id} value={category.id}>
                                  {category.name}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="md:col-span-2">
                            <div className="flex border border-gray-300 rounded-lg">
                              <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2.5 ${viewMode === 'grid' ? 'bg-primary-50 text-primary-600' : 'text-gray-400'}`}
                              >
                                <Grid size={16} />
                              </button>
                              <button
                                onClick={() => setViewMode('list')}
                                className={`p-2.5 ${viewMode === 'list' ? 'bg-primary-50 text-primary-600' : 'text-gray-400'}`}
                              >
                                <List size={16} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>

                    {/* Services Grid */}
                    <div className={`grid gap-6 ${
                      viewMode === 'grid' 
                        ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                        : 'grid-cols-1'
                    }`}>
                      {filteredServices.map((service, index) => (
                        <motion.div
                          key={service.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                          <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                            <div className={viewMode === 'list' ? 'flex' : ''}>
                              <div className={`relative ${
                                viewMode === 'list' ? 'w-48 h-32 flex-shrink-0' : 'h-48'
                              } overflow-hidden ${viewMode === 'grid' ? 'rounded-t-xl' : 'rounded-l-xl'}`}>
                                <img
                                  src={service.image}
                                  alt={language === 'es' ? service.name : service.nameEn}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                {service.popular && (
                                  <span className="absolute top-2 left-2 px-2 py-1 bg-warning text-white text-xs font-medium rounded-full">
                                    {t[language].popular}
                                  </span>
                                )}
                                <div className="absolute top-2 right-2 bg-white rounded-lg px-2 py-1">
                                  <span className="text-sm font-bold text-primary-600">
                                    ${service.basePrice}{t[language].perHour}
                                  </span>
                                </div>
                              </div>
                              
                              <div className="p-6 flex-1">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                  {language === 'es' ? service.name : service.nameEn}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                  {language === 'es' ? service.description : service.descriptionEn}
                                </p>
                                <div className="flex items-center justify-between">
                                  <div className="text-sm text-gray-500">
                                    {t[language].duration}: {service.duration} {t[language].hours}
                                  </div>
                                  <Button
                                    onClick={() => handleServiceSelect(service)}
                                    size="sm"
                                  >
                                    {t[language].selectThisService}
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Provider Selection */}
                {currentStep === 2 && selectedService && (
                  <div>
                    <div className="mb-6">
                      <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                        {t[language].selectProvider}
                      </h2>
                      <p className="text-gray-600">
                        {language === 'es' ? selectedService.name : selectedService.nameEn}
                      </p>
                    </div>

                    <div className="grid gap-6">
                      {providers.map((provider, index) => (
                        <motion.div
                          key={provider.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                          <Card className="hover:shadow-lg transition-shadow">
                            <div className="p-6">
                              <div className="flex items-start justify-between">
                                <div className="flex items-start gap-4">
                                  <div className="relative">
                                    <img
                                      src={provider.avatar}
                                      alt={provider.name}
                                      className="w-16 h-16 rounded-full object-cover"
                                    />
                                    {provider.isOnline && (
                                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success rounded-full border-2 border-white flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                      </div>
                                    )}
                                  </div>
                                  
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                      <h3 className="text-lg font-semibold text-gray-900">
                                        {provider.name}
                                      </h3>
                                      {provider.isOnline && (
                                        <span className="px-2 py-1 bg-success/10 text-success text-xs font-medium rounded-full">
                                          {t[language].online}
                                        </span>
                                      )}
                                    </div>
                                    
                                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                                      <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 text-warning fill-current" />
                                        <span className="font-medium">{provider.rating}</span>
                                        <span>({provider.reviewCount} {t[language].reviews})</span>
                                      </div>
                                      <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        <span>{t[language].responseTime}: {provider.responseTime}</span>
                                      </div>
                                    </div>
                                    
                                    <div className="flex flex-wrap gap-1 mb-3">
                                      {provider.specialties.map((specialty, idx) => (
                                        <span
                                          key={idx}
                                          className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-full"
                                        >
                                          {specialty}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="text-right">
                                  <div className="text-lg font-bold text-primary-600 mb-2">
                                    ${provider.hourlyRate}{t[language].perHour}
                                  </div>
                                  <div className="flex gap-2">
                                    <Button variant="outline" size="sm">
                                      {t[language].viewProfile}
                                    </Button>
                                    <Button
                                      onClick={() => handleProviderSelect(provider)}
                                      size="sm"
                                    >
                                      {t[language].selectProvider}
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Schedule Service */}
                {currentStep === 3 && selectedService && selectedProvider && (
                  <div>
                    <div className="mb-6">
                      <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                        {t[language].scheduleService}
                      </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Calendar */}
                      <Card>
                        <div className="p-6">
                          <h3 className="text-lg font-semibold mb-4">
                            <Calendar className="inline w-5 h-5 mr-2" />
                            Seleccionar Fecha
                          </h3>
                          <Input
                            type="date"
                            value={bookingData.preferredDate}
                            onChange={(e) => updateBookingData('preferredDate', e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                          />
                        </div>
                      </Card>

                      {/* Time Slots */}
                      <Card>
                        <div className="p-6">
                          <h3 className="text-lg font-semibold mb-4">
                            <Clock className="inline w-5 h-5 mr-2" />
                            {t[language].availableSlots}
                          </h3>
                          
                          <div className="space-y-4">
                            {['morning', 'afternoon', 'evening'].map(period => (
                              <div key={period}>
                                <h4 className="font-medium text-gray-700 mb-2">
                                  {t[language][period as keyof typeof t[typeof language]]}
                                </h4>
                                <div className="grid grid-cols-3 gap-2">
                                  {timeSlots
                                    .filter(slot => slot.period === period)
                                    .map(slot => (
                                      <button
                                        key={slot.id}
                                        onClick={() => updateBookingData('timeSlot', slot.id)}
                                        className={`p-2 text-sm rounded-lg border transition-colors ${
                                          bookingData.timeSlot === slot.id
                                            ? 'border-primary-500 bg-primary-50 text-primary-700'
                                            : 'border-gray-200 hover:border-primary-300'
                                        }`}
                                      >
                                        {slot.time}
                                      </button>
                                    ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Card>
                    </div>

                    {/* Duration and Requirements */}
                    <div className="grid lg:grid-cols-2 gap-8 mt-8">
                      <Card>
                        <div className="p-6">
                          <h3 className="text-lg font-semibold mb-4">
                            {t[language].duration}
                          </h3>
                          <div className="flex items-center gap-4">
                            <input
                              type="range"
                              min="0.5"
                              max="8"
                              step="0.5"
                              value={bookingData.duration}
                              onChange={(e) => updateBookingData('duration', parseFloat(e.target.value))}
                              className="flex-1"
                            />
                            <span className="font-medium">
                              {bookingData.duration} {t[language].hours}
                            </span>
                          </div>
                        </div>
                      </Card>

                      <Card>
                        <div className="p-6">
                          <h3 className="text-lg font-semibold mb-4">
                            {t[language].specialRequirements}
                          </h3>
                          <textarea
                            value={bookingData.specialRequirements}
                            onChange={(e) => updateBookingData('specialRequirements', e.target.value)}
                            placeholder={t[language].requirementsPlaceholder}
                            rows={4}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          />
                        </div>
                      </Card>
                    </div>
                  </div>
                )}

                {/* Step 4: Review Booking */}
                {currentStep === 4 && (
                  <div>
                    <div className="mb-6">
                      <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                        {t[language].reviewBooking}
                      </h2>
                    </div>

                    <Card>
                      <div className="p-6">
                        <div className="grid lg:grid-cols-2 gap-8">
                          <div>
                            <h3 className="text-lg font-semibold mb-4">{t[language].bookingSummary}</h3>
                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <span className="text-gray-600">{t[language].service}:</span>
                                <span className="font-medium">
                                  {selectedService && (language === 'es' ? selectedService.name : selectedService.nameEn)}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">{t[language].provider}:</span>
                                <span className="font-medium">{selectedProvider?.name}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">{t[language].date}:</span>
                                <span className="font-medium">{bookingData.preferredDate}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">{t[language].time}:</span>
                                <span className="font-medium">
                                  {timeSlots.find(slot => slot.id === bookingData.timeSlot)?.time}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">{t[language].estimatedDuration}:</span>
                                <span className="font-medium">{bookingData.duration} {t[language].hours}</span>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h3 className="text-lg font-semibold mb-4">Desglose de Precios</h3>
                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <span className="text-gray-600">{t[language].subtotal}:</span>
                                <span className="font-medium">
                                  ${selectedProvider && (selectedProvider.hourlyRate * bookingData.duration).toFixed(2)}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">{t[language].serviceFee}:</span>
                                <span className="font-medium">
                                  ${selectedProvider && (selectedProvider.hourlyRate * bookingData.duration * 0.1).toFixed(2)}
                                </span>
                              </div>
                              <div className="border-t border-gray-200 pt-3">
                                <div className="flex justify-between">
                                  <span className="text-lg font-semibold">{t[language].total}:</span>
                                  <span className="text-lg font-bold text-primary-600">
                                    ${calculateTotal().toFixed(2)}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                )}

                {/* Step 5: Payment */}
                {currentStep === 5 && (
                  <div>
                    <div className="mb-6">
                      <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                        {t[language].payment}
                      </h2>
                    </div>

                    <Card>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold mb-4">{t[language].paymentMethod}</h3>
                        <div className="grid gap-4">
                          {[
                            { id: 'card', name: t[language].creditCard, icon: CreditCard },
                            { id: 'cash', name: t[language].cash, icon: DollarSign },
                            { id: 'ath', name: t[language].athMovil, icon: Phone }
                          ].map(method => {
                            const IconComponent = method.icon;
                            return (
                              <button
                                key={method.id}
                                onClick={() => updateBookingData('payment', method.id)}
                                className={`p-4 border-2 rounded-lg text-left transition-all ${
                                  bookingData.payment === method.id
                                    ? 'border-primary-500 bg-primary-50'
                                    : 'border-gray-200 hover:border-primary-300'
                                }`}
                              >
                                <div className="flex items-center gap-3">
                                  <IconComponent className="w-5 h-5 text-gray-600" />
                                  <span className="font-medium">{method.name}</span>
                                </div>
                              </button>
                            );
                          })}
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-200">
                          <Button
                            onClick={handleConfirmBooking}
                            size="lg"
                            fullWidth
                            rightIcon={<CheckCircle size={18} />}
                          >
                            {t[language].confirmBooking}
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </div>
                )}

                {/* Step 6: Confirmation */}
                {currentStep === 6 && (
                  <div className="text-center">
                    <Card>
                      <div className="p-8">
                        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                          <CheckCircle className="w-8 h-8 text-success" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                          {t[language].bookingConfirmed}
                        </h2>
                        <p className="text-gray-600 mb-6">
                          {t[language].bookingNumber}: #BK{Date.now().toString().slice(-6)}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <Button
                            onClick={() => navigate('/chat')}
                            leftIcon={<MessageCircle size={16} />}
                          >
                            {t[language].goToChat}
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => navigate('/dashboard')}
                          >
                            {t[language].viewBookings}
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            {currentStep <= 5 && currentStep !== 1 && (
              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  leftIcon={<ArrowLeft size={16} />}
                >
                  {t[language].back}
                </Button>

                {currentStep < 5 && (
                  <Button
                    onClick={handleNext}
                    disabled={
                      (currentStep === 1 && !selectedService) ||
                      (currentStep === 2 && !selectedProvider) ||
                      (currentStep === 3 && (!bookingData.preferredDate || !bookingData.timeSlot))
                    }
                    rightIcon={<ArrowRight size={16} />}
                  >
                    {t[language].continue}
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {selectedService && (
                <Card className="mb-6">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Servicio Seleccionado</h3>
                    <div className="flex items-start gap-3">
                      <img
                        src={selectedService.image}
                        alt={language === 'es' ? selectedService.name : selectedService.nameEn}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div>
                        <h4 className="font-medium">
                          {language === 'es' ? selectedService.name : selectedService.nameEn}
                        </h4>
                        <p className="text-sm text-gray-600">
                          ${selectedService.basePrice}{t[language].perHour}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              )}

              {selectedProvider && (
                <Card className="mb-6">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Profesional Seleccionado</h3>
                    <div className="flex items-start gap-3">
                      <img
                        src={selectedProvider.avatar}
                        alt={selectedProvider.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-medium">{selectedProvider.name}</h4>
                        <div className="flex items-center gap-1 text-sm">
                          <Star className="w-3 h-3 text-warning fill-current" />
                          <span>{selectedProvider.rating}</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          ${selectedProvider.hourlyRate}{t[language].perHour}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              )}

              {currentStep >= 3 && selectedService && selectedProvider && (
                <Card>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Resumen de Costos</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Tarifa por hora:</span>
                        <span>${selectedProvider.hourlyRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duración:</span>
                        <span>{bookingData.duration} {t[language].hours}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span>${(selectedProvider.hourlyRate * bookingData.duration).toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tarifa de servicio:</span>
                        <span>${(selectedProvider.hourlyRate * bookingData.duration * 0.1).toFixed(2)}</span>
                      </div>
                      <div className="border-t border-gray-200 pt-2">
                        <div className="flex justify-between font-semibold">
                          <span>Total:</span>
                          <span className="text-primary-600">${calculateTotal().toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}