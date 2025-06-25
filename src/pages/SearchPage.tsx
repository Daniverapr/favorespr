import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  MapPin, 
  Star, 
  Clock, 
  DollarSign,
  Grid,
  List,
  Map,
  SlidersHorizontal,
  CheckCircle,
  Heart,
  MessageCircle,
  Phone,
  Award,
  Shield
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { useAuthStore } from '../store/authStore';

interface Provider {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  reviewCount: number;
  hourlyRate: number;
  specialties: string[];
  location: string;
  distance: number;
  responseTime: string;
  completedJobs: number;
  isVerified: boolean;
  isElite: boolean;
  isOnline: boolean;
  bio: string;
  languages: string[];
  workPhotos: string[];
  availability: string[];
}

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { language } = useAuthStore();
  
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('categoria') || 'all');
  const [location, setLocation] = useState(searchParams.get('ubicacion') || '');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [rating, setRating] = useState(0);
  const [sortBy, setSortBy] = useState('recommended');
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'map'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [onlineOnly, setOnlineOnly] = useState(false);
  const [verifiedOnly, setVerifiedOnly] = useState(false);

  const t = {
    es: {
      searchPlaceholder: 'Buscar servicios o profesionales...',
      locationPlaceholder: 'Ubicación',
      filters: 'Filtros',
      sortBy: 'Ordenar por',
      viewMode: 'Vista',
      recommended: 'Recomendado',
      priceAsc: 'Precio: menor a mayor',
      priceDesc: 'Precio: mayor a menor',
      rating: 'Mejor valorados',
      distance: 'Más cercanos',
      newest: 'Más nuevos',
      category: 'Categoría',
      allCategories: 'Todas las categorías',
      priceRange: 'Rango de precio',
      minRating: 'Calificación mínima',
      availability: 'Disponibilidad',
      onlineNow: 'En línea ahora',
      verifiedOnly: 'Solo verificados',
      clearFilters: 'Limpiar filtros',
      resultsFound: 'resultados encontrados',
      noResults: 'No se encontraron resultados',
      noResultsDesc: 'Intenta ajustar tus filtros o buscar algo diferente',
      perHour: '/hora',
      away: 'km',
      responseTime: 'Tiempo de respuesta',
      completedJobs: 'trabajos completados',
      viewProfile: 'Ver perfil',
      contact: 'Contactar',
      book: 'Reservar',
      favorite: 'Favorito',
      elite: 'Elite',
      verified: 'Verificado',
      online: 'En línea',
      languages: 'Idiomas'
    },
    en: {
      searchPlaceholder: 'Search services or professionals...',
      locationPlaceholder: 'Location',
      filters: 'Filters',
      sortBy: 'Sort by',
      viewMode: 'View',
      recommended: 'Recommended',
      priceAsc: 'Price: low to high',
      priceDesc: 'Price: high to low',
      rating: 'Highest rated',
      distance: 'Nearest',
      newest: 'Newest',
      category: 'Category',
      allCategories: 'All categories',
      priceRange: 'Price range',
      minRating: 'Minimum rating',
      availability: 'Availability',
      onlineNow: 'Online now',
      verifiedOnly: 'Verified only',
      clearFilters: 'Clear filters',
      resultsFound: 'results found',
      noResults: 'No results found',
      noResultsDesc: 'Try adjusting your filters or searching for something different',
      perHour: '/hour',
      away: 'km away',
      responseTime: 'Response time',
      completedJobs: 'completed jobs',
      viewProfile: 'View profile',
      contact: 'Contact',
      book: 'Book',
      favorite: 'Favorite',
      elite: 'Elite',
      verified: 'Verified',
      online: 'Online',
      languages: 'Languages'
    }
  };

  // Mock data - in real app this would come from API
  const providers: Provider[] = [
    {
      id: '1',
      name: 'Carlos Vega',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4.9,
      reviewCount: 127,
      hourlyRate: 45,
      specialties: ['Plomería', 'Instalaciones'],
      location: 'San Juan',
      distance: 2.3,
      responseTime: '15 min',
      completedJobs: 234,
      isVerified: true,
      isElite: true,
      isOnline: true,
      bio: 'Plomero certificado con más de 10 años de experiencia. Especializado en reparaciones de emergencia y instalaciones residenciales.',
      languages: ['Español', 'English'],
      workPhotos: [
        'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      availability: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']
    },
    {
      id: '2',
      name: 'María Santos',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4.8,
      reviewCount: 89,
      hourlyRate: 35,
      specialties: ['Pintura', 'Decoración'],
      location: 'Bayamón',
      distance: 5.1,
      responseTime: '20 min',
      completedJobs: 156,
      isVerified: true,
      isElite: false,
      isOnline: false,
      bio: 'Pintora profesional especializada en interiores y exteriores. Trabajo con materiales de alta calidad.',
      languages: ['Español'],
      workPhotos: [
        'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      availability: ['Lunes', 'Miércoles', 'Viernes', 'Sábado']
    },
    {
      id: '3',
      name: 'Luis Pérez',
      avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4.7,
      reviewCount: 203,
      hourlyRate: 30,
      specialties: ['Handyman', 'Carpintería'],
      location: 'Caguas',
      distance: 8.7,
      responseTime: '10 min',
      completedJobs: 312,
      isVerified: true,
      isElite: true,
      isOnline: true,
      bio: 'Handyman con experiencia en múltiples áreas. Reparaciones rápidas y eficientes.',
      languages: ['Español', 'English'],
      workPhotos: [
        'https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      availability: ['Todos los días']
    }
  ];

  const categories = [
    { id: 'all', name: t[language].allCategories },
    { id: 'plumbing', name: language === 'es' ? 'Plomería' : 'Plumbing' },
    { id: 'electrical', name: language === 'es' ? 'Electricidad' : 'Electrical' },
    { id: 'handyman', name: 'Handyman' },
    { id: 'cleaning', name: language === 'es' ? 'Limpieza' : 'Cleaning' },
    { id: 'gardening', name: language === 'es' ? 'Jardinería' : 'Gardening' },
    { id: 'painting', name: language === 'es' ? 'Pintura' : 'Painting' }
  ];

  const filteredProviders = useMemo(() => {
    let filtered = providers.filter(provider => {
      const matchesSearch = searchQuery === '' || 
        provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        provider.specialties.some(specialty => 
          specialty.toLowerCase().includes(searchQuery.toLowerCase())
        );
      
      const matchesCategory = selectedCategory === 'all' || 
        provider.specialties.some(specialty => 
          specialty.toLowerCase().includes(selectedCategory.toLowerCase())
        );
      
      const matchesPrice = provider.hourlyRate >= priceRange[0] && provider.hourlyRate <= priceRange[1];
      const matchesRating = provider.rating >= rating;
      const matchesOnline = !onlineOnly || provider.isOnline;
      const matchesVerified = !verifiedOnly || provider.isVerified;
      
      return matchesSearch && matchesCategory && matchesPrice && matchesRating && matchesOnline && matchesVerified;
    });

    // Sort providers
    switch (sortBy) {
      case 'priceAsc':
        filtered.sort((a, b) => a.hourlyRate - b.hourlyRate);
        break;
      case 'priceDesc':
        filtered.sort((a, b) => b.hourlyRate - a.hourlyRate);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'distance':
        filtered.sort((a, b) => a.distance - b.distance);
        break;
      case 'recommended':
      default:
        filtered.sort((a, b) => {
          const aScore = (a.rating * 0.4) + (a.isElite ? 0.3 : 0) + (a.isVerified ? 0.2 : 0) + (a.isOnline ? 0.1 : 0);
          const bScore = (b.rating * 0.4) + (b.isElite ? 0.3 : 0) + (b.isVerified ? 0.2 : 0) + (b.isOnline ? 0.1 : 0);
          return bScore - aScore;
        });
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, priceRange, rating, sortBy, onlineOnly, verifiedOnly]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-30">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={t[language].searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={t[language].locationPlaceholder}
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-48 pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>

            {/* Controls */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                leftIcon={<Filter size={16} />}
                className="lg:hidden"
              >
                {t[language].filters}
              </Button>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="recommended">{t[language].recommended}</option>
                <option value="priceAsc">{t[language].priceAsc}</option>
                <option value="priceDesc">{t[language].priceDesc}</option>
                <option value="rating">{t[language].rating}</option>
                <option value="distance">{t[language].distance}</option>
              </select>

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
                <button
                  onClick={() => setViewMode('map')}
                  className={`p-2.5 ${viewMode === 'map' ? 'bg-primary-50 text-primary-600' : 'text-gray-400'}`}
                >
                  <Map size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-6">
          {/* Filters Sidebar */}
          <div className={`w-80 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <Card className="sticky top-32">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">{t[language].filters}</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSelectedCategory('all');
                      setPriceRange([0, 200]);
                      setRating(0);
                      setOnlineOnly(false);
                      setVerifiedOnly(false);
                    }}
                  >
                    {t[language].clearFilters}
                  </Button>
                </div>

                <div className="space-y-6">
                  {/* Category Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t[language].category}
                    </label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      {categories.map(category => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Price Range */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t[language].priceRange}: ${priceRange[0]} - ${priceRange[1]}
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="range"
                        min="0"
                        max="200"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                        className="flex-1"
                      />
                      <input
                        type="range"
                        min="0"
                        max="200"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="flex-1"
                      />
                    </div>
                  </div>

                  {/* Rating Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t[language].minRating}
                    </label>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(star => (
                        <button
                          key={star}
                          onClick={() => setRating(star)}
                          className={`p-1 ${rating >= star ? 'text-warning' : 'text-gray-300'}`}
                        >
                          <Star size={20} fill="currentColor" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Availability Filters */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t[language].availability}
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={onlineOnly}
                          onChange={(e) => setOnlineOnly(e.target.checked)}
                          className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="ml-2 text-sm">{t[language].onlineNow}</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={verifiedOnly}
                          onChange={(e) => setVerifiedOnly(e.target.checked)}
                          className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="ml-2 text-sm">{t[language].verifiedOnly}</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Results */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                {filteredProviders.length} {t[language].resultsFound}
              </p>
            </div>

            {/* Results Grid/List */}
            {filteredProviders.length > 0 ? (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredProviders.map((provider, index) => (
                  <ProviderCard
                    key={provider.id}
                    provider={provider}
                    viewMode={viewMode}
                    language={language}
                    t={t}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-gray-400 mb-4">
                  <Search size={64} className="mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {t[language].noResults}
                </h3>
                <p className="text-gray-600">
                  {t[language].noResultsDesc}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProviderCard({ provider, viewMode, language, t, index }: {
  provider: Provider;
  viewMode: 'grid' | 'list' | 'map';
  language: 'es' | 'en';
  t: any;
  index: number;
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className={`h-full hover:shadow-lg transition-all duration-300 ${
        viewMode === 'list' ? 'flex' : ''
      }`}>
        <div className={`${viewMode === 'list' ? 'flex w-full' : ''}`}>
          {/* Provider Image */}
          <div className={`relative ${
            viewMode === 'list' ? 'w-32 h-32 flex-shrink-0' : 'h-48'
          } overflow-hidden ${viewMode === 'grid' ? 'rounded-t-xl' : 'rounded-l-xl'}`}>
            <img
              src={provider.avatar}
              alt={provider.name}
              className="w-full h-full object-cover"
            />
            
            {/* Status Badges */}
            <div className="absolute top-2 left-2 flex flex-col gap-1">
              {provider.isOnline && (
                <span className="px-2 py-1 bg-green-500 text-white text-xs font-medium rounded-full flex items-center gap-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  {t[language].online}
                </span>
              )}
              {provider.isElite && (
                <span className="px-2 py-1 bg-warning text-white text-xs font-medium rounded-full flex items-center gap-1">
                  <Award size={10} />
                  {t[language].elite}
                </span>
              )}
            </div>

            {/* Favorite Button */}
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
            >
              <Heart 
                size={16} 
                className={isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'} 
              />
            </button>
          </div>

          {/* Content */}
          <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
            <div className={`${viewMode === 'list' ? 'flex justify-between h-full' : ''}`}>
              <div className={viewMode === 'list' ? 'flex-1' : ''}>
                {/* Header */}
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                      {provider.name}
                      {provider.isVerified && (
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                      )}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin size={14} />
                      {provider.location} • {provider.distance} {t[language].away}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary-600">
                      ${provider.hourlyRate}{t[language].perHour}
                    </div>
                  </div>
                </div>

                {/* Rating and Stats */}
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-warning fill-current" />
                    <span className="font-medium">{provider.rating}</span>
                    <span>({provider.reviewCount})</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{provider.responseTime}</span>
                  </div>
                  <div>
                    {provider.completedJobs} {t[language].completedJobs}
                  </div>
                </div>

                {/* Specialties */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {provider.specialties.slice(0, 3).map((specialty, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                  {provider.specialties.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{provider.specialties.length - 3}
                    </span>
                  )}
                </div>

                {/* Bio */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {provider.bio}
                </p>

                {/* Languages */}
                <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                  <span>{t[language].languages}:</span>
                  <span>{provider.languages.join(', ')}</span>
                </div>
              </div>

              {/* Actions */}
              <div className={`${
                viewMode === 'list' 
                  ? 'flex flex-col justify-end gap-2 ml-4' 
                  : 'flex gap-2'
              }`}>
                <Link to={`/proveedor/${provider.id}`}>
                  <Button variant="outline" size="sm" className="w-full">
                    {t[language].viewProfile}
                  </Button>
                </Link>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    leftIcon={<MessageCircle size={14} />}
                    className="flex-1"
                  >
                    {t[language].contact}
                  </Button>
                  <Link to={`/agendar?provider=${provider.id}`}>
                    <Button size="sm" className="flex-1">
                      {t[language].book}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}