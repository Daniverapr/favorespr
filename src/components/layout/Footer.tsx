import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

export function Footer() {
  const { language } = useAuthStore();

  const t = {
    es: {
      description: 'La plataforma líder en Puerto Rico para conectar con trabajadores verificados para servicios del hogar y reparaciones.',
      services: 'Servicios',
      company: 'Empresa',
      support: 'Soporte',
      about: 'Acerca de',
      careers: 'Carreras',
      press: 'Prensa',
      help: 'Centro de ayuda',
      contact: 'Contacto',
      safety: 'Seguridad',
      community: 'Comunidad',
      trust: 'Confianza',
      privacy: 'Privacidad',
      terms: 'Términos',
      cookies: 'Cookies',
      rights: 'Todos los derechos reservados.',
      viewAll: 'Ver todos'
    },
    en: {
      description: 'The leading platform in Puerto Rico to connect with verified workers for home services and repairs.',
      services: 'Services',
      company: 'Company',
      support: 'Support',
      about: 'About',
      careers: 'Careers',
      press: 'Press',
      help: 'Help Center',
      contact: 'Contact',
      safety: 'Safety',
      community: 'Community',
      trust: 'Trust',
      privacy: 'Privacy',
      terms: 'Terms',
      cookies: 'Cookies',
      rights: 'All rights reserved.',
      viewAll: 'View all'
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold">TrabajoPR</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {t[language].description}
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-gray-400" />
                <span className="text-gray-300">Puerto Rico</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-gray-400" />
                <span className="text-gray-300">(787) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-gray-400" />
                <span className="text-gray-300">soporte@trabajopr.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">{t[language].services}</h3>
            <ul className="space-y-2">
              <li><Link to="/servicios/plomeria" className="text-gray-300 hover:text-white transition-colors">Plomería</Link></li>
              <li><Link to="/servicios/electricidad" className="text-gray-300 hover:text-white transition-colors">Electricidad</Link></li>
              <li><Link to="/servicios/handyman" className="text-gray-300 hover:text-white transition-colors">Handyman</Link></li>
              <li><Link to="/servicios/jardineria" className="text-gray-300 hover:text-white transition-colors">Jardinería</Link></li>
              <li><Link to="/servicios/pintura" className="text-gray-300 hover:text-white transition-colors">Pintura</Link></li>
              <li><Link to="/servicios" className="text-primary-400 hover:text-primary-300 transition-colors">{t[language].viewAll}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">{t[language].company}</h3>
            <ul className="space-y-2">
              <li><Link to="/acerca" className="text-gray-300 hover:text-white transition-colors">{t[language].about}</Link></li>
              <li><Link to="/como-funciona" className="text-gray-300 hover:text-white transition-colors">Cómo funciona</Link></li>
              <li><Link to="/ser-proveedor" className="text-gray-300 hover:text-white transition-colors">Ser Proveedor</Link></li>
              <li><Link to="/carreras" className="text-gray-300 hover:text-white transition-colors">{t[language].careers}</Link></li>
              <li><Link to="/prensa" className="text-gray-300 hover:text-white transition-colors">{t[language].press}</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">{t[language].support}</h3>
            <ul className="space-y-2">
              <li><Link to="/ayuda" className="text-gray-300 hover:text-white transition-colors">{t[language].help}</Link></li>
              <li><Link to="/contacto" className="text-gray-300 hover:text-white transition-colors">{t[language].contact}</Link></li>
              <li><Link to="/seguridad" className="text-gray-300 hover:text-white transition-colors">{t[language].safety}</Link></li>
              <li><Link to="/comunidad" className="text-gray-300 hover:text-white transition-colors">{t[language].community}</Link></li>
              <li><Link to="/confianza" className="text-gray-300 hover:text-white transition-colors">{t[language].trust}</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap items-center space-x-6 mb-4 md:mb-0">
              <Link to="/privacidad" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t[language].privacy}
              </Link>
              <Link to="/terminos" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t[language].terms}
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t[language].cookies}
              </Link>
              <span className="text-gray-400 text-sm">
                © 2024 TrabajoPR. {t[language].rights}
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}