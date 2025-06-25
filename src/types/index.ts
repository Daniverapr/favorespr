export interface User {
  id: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  role: 'client' | 'provider' | 'admin';
  avatar?: string;
  emailVerified: boolean;
  phoneVerified: boolean;
  createdAt: string;
  profile?: UserProfile;
  providerProfile?: ProviderProfile;
}

export interface UserProfile {
  id: string;
  userId: string;
  bio?: string;
  address?: Address;
  emergencyContact?: string;
  preferences: {
    language: 'es' | 'en';
    notifications: boolean;
    marketing: boolean;
  };
}

export interface ProviderProfile {
  id: string;
  userId: string;
  bio: string;
  hourlyRate: number;
  responseTime: number;
  completionRate: number;
  totalJobs: number;
  isVerified: boolean;
  isElite: boolean;
  backgroundCheckStatus: 'pending' | 'approved' | 'rejected';
  specialties: string[];
  availability: Availability[];
  serviceAreas: string[];
  workPhotos: string[];
  certifications: Certification[];
  languages: string[];
  insuranceVerified: boolean;
  rating: number;
  reviewCount: number;
}

export interface ServiceCategory {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
  subcategories: string[];
}

export interface Booking {
  id: string;
  clientId: string;
  providerId?: string;
  client: User;
  provider?: User;
  serviceCategory: string;
  subcategory: string;
  title: string;
  description: string;
  estimatedHours: number;
  scheduledDate: string;
  scheduledTime: string;
  status: BookingStatus;
  address: Address;
  totalPrice: number;
  platformFee: number;
  providerEarnings: number;
  paymentStatus: PaymentStatus;
  messages: Message[];
  reviews: Review[];
  requirements: string[];
  photos: string[];
  createdAt: string;
  updatedAt: string;
}

export type BookingStatus = 
  | 'pending' 
  | 'confirmed' 
  | 'in_progress' 
  | 'completed' 
  | 'cancelled' 
  | 'disputed';

export type PaymentStatus = 
  | 'pending' 
  | 'authorized' 
  | 'captured' 
  | 'refunded' 
  | 'failed';

export interface Message {
  id: string;
  bookingId: string;
  senderId: string;
  sender: User;
  content: string;
  type: 'text' | 'image' | 'audio' | 'system';
  mediaUrl?: string;
  status: 'sent' | 'delivered' | 'read';
  createdAt: string;
}

export interface Review {
  id: string;
  bookingId: string;
  reviewerId: string;
  revieweeId: string;
  reviewer: User;
  reviewee: User;
  rating: number;
  title: string;
  content: string;
  categories: {
    communication: number;
    punctuality: number;
    quality: number;
    value: number;
  };
  photos: string[];
  response?: string;
  responseDate?: string;
  createdAt: string;
}

export interface Address {
  id: string;
  street: string;
  apartment?: string;
  city: string;
  municipality: string;
  zipCode: string;
  country: string;
  latitude?: number;
  longitude?: number;
  instructions?: string;
  isDefault: boolean;
}

export interface Availability {
  id: string;
  providerId: string;
  dayOfWeek: number;
  startTime: string;
  endTime: string;
  isRecurring: boolean;
  specificDate?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  documentUrl: string;
  verified: boolean;
}

export interface PaymentMethod {
  id: string;
  userId: string;
  type: 'card' | 'paypal' | 'ath_movil' | 'cash';
  last4?: string;
  brand?: string;
  expiryMonth?: number;
  expiryYear?: number;
  isDefault: boolean;
}

export interface SearchFilters {
  query?: string;
  category?: string;
  location?: {
    municipality: string;
    radius: number;
  };
  priceRange?: {
    min: number;
    max: number;
  };
  availability?: {
    date: string;
    time: string;
  };
  rating?: number;
  verified?: boolean;
  languages?: string[];
  sortBy?: 'recommended' | 'price_low' | 'price_high' | 'rating' | 'distance';
}

// Puerto Rico municipalities
export const PR_MUNICIPALITIES = [
  'Adjuntas', 'Aguada', 'Aguadilla', 'Aguas Buenas', 'Aibonito', 'Arecibo',
  'Arroyo', 'Barceloneta', 'Barranquitas', 'Bayamón', 'Cabo Rojo', 'Caguas',
  'Camuy', 'Canóvanas', 'Carolina', 'Cataño', 'Cayey', 'Ceiba', 'Cidra',
  'Coamo', 'Comerío', 'Corozal', 'Culebra', 'Dorado', 'Fajardo', 'Florida',
  'Guánica', 'Guayama', 'Guayanilla', 'Guaynabo', 'Gurabo', 'Hatillo',
  'Hormigueros', 'Humacao', 'Isabela', 'Jayuya', 'Juana Díaz', 'Juncos',
  'Lajas', 'Lares', 'Las Marías', 'Las Piedras', 'Loíza', 'Luquillo',
  'Manatí', 'Maricao', 'Maunabo', 'Mayagüez', 'Moca', 'Morovis', 'Naguabo',
  'Naranjito', 'Orocovis', 'Patillas', 'Peñuelas', 'Ponce', 'Quebradillas',
  'Rincón', 'Río Grande', 'Sabana Grande', 'Salinas', 'San Germán',
  'San Juan', 'San Lorenzo', 'San Sebastián', 'Santa Isabel', 'Toa Alta',
  'Toa Baja', 'Trujillo Alto', 'Utuado', 'Vega Alta', 'Vega Baja', 'Vieques',
  'Villalba', 'Yabucoa', 'Yauco'
];

// Service categories
export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'handyman',
    name: 'Handyman',
    nameEn: 'Handyman',
    description: 'Reparaciones menores para el hogar. Desde montar muebles hasta arreglar puertas.',
    descriptionEn: 'Minor home repairs. From furniture assembly to door fixes.',
    icon: 'Wrench',
    subcategories: ['Montaje de muebles', 'Reparación de puertas', 'Instalación de estantes', 'Reparaciones menores']
  },
  {
    id: 'plumbing',
    name: 'Plomería',
    nameEn: 'Plumbing',
    description: 'Destapes, filtraciones e instalaciones profesionales.',
    descriptionEn: 'Unclogging, leaks and professional installations.',
    icon: 'Droplet',
    subcategories: ['Destapes', 'Reparación de filtraciones', 'Instalación de grifos', 'Reparación de inodoros']
  },
  {
    id: 'electrical',
    name: 'Electricidad',
    nameEn: 'Electrical',
    description: 'Instalación de abanicos, enchufes, paneles y más.',
    descriptionEn: 'Fan installation, outlets, panels and more.',
    icon: 'Zap',
    subcategories: ['Instalación de abanicos', 'Enchufes nuevos', 'Reparación de paneles', 'Instalación de luces']
  },
  {
    id: 'carpentry',
    name: 'Carpintería',
    nameEn: 'Carpentry',
    description: 'Gabinetes, puertas, estanterías a la medida.',
    descriptionEn: 'Custom cabinets, doors, shelving.',
    icon: 'Hammer',
    subcategories: ['Gabinetes a medida', 'Reparación de puertas', 'Estanterías', 'Marcos de ventanas']
  },
  {
    id: 'painting',
    name: 'Pintura',
    nameEn: 'Painting',
    description: 'Pintura interior/exterior, sellado de techos y texturizado.',
    descriptionEn: 'Interior/exterior painting, roof sealing and texturing.',
    icon: 'PaintBucket',
    subcategories: ['Pintura interior', 'Pintura exterior', 'Sellado de techos', 'Texturizado']
  },
  {
    id: 'gardening',
    name: 'Jardinería',
    nameEn: 'Gardening',
    description: 'Corte de grama, poda, limpieza de patios.',
    descriptionEn: 'Lawn cutting, pruning, yard cleanup.',
    icon: 'Leaf',
    subcategories: ['Corte de grama', 'Poda de árboles', 'Limpieza de patios', 'Diseño de jardines']
  },
  {
    id: 'pest_control',
    name: 'Fumigación',
    nameEn: 'Pest Control',
    description: 'Control de plagas y desinfección mensual.',
    descriptionEn: 'Pest control and monthly disinfection.',
    icon: 'Bug',
    subcategories: ['Fumigación residencial', 'Control de termitas', 'Desinfección', 'Control de roedores']
  },
  {
    id: 'cleaning',
    name: 'Limpieza',
    nameEn: 'Cleaning',
    description: 'Servicios profesionales de limpieza profunda.',
    descriptionEn: 'Professional deep cleaning services.',
    icon: 'Sparkles',
    subcategories: ['Limpieza profunda', 'Limpieza regular', 'Limpieza post-construcción', 'Limpieza de oficinas']
  },
  {
    id: 'installations',
    name: 'Instalaciones',
    nameEn: 'Installations',
    description: 'Cámaras, WiFi, paneles solares, lavadoras.',
    descriptionEn: 'Cameras, WiFi, solar panels, washers.',
    icon: 'Settings',
    subcategories: ['Cámaras de seguridad', 'Instalación WiFi', 'Paneles solares', 'Electrodomésticos']
  }
];