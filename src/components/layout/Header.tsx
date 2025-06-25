import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { Search, Menu, X, Bell, User, MessageCircle, Globe } from 'lucide-react';
import { Button } from '../ui/Button';
import { useAuthStore } from '../../store/authStore';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { user, isAuthenticated, language, setLanguage } = useAuthStore();
  const location = useLocation();

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const t = {
    es: {
      services: 'Servicios',
      howItWorks: 'Cómo Funciona',
      becomeProvider: 'Ser Proveedor',
      login: 'Iniciar Sesión',
      register: 'Registrarse',
      searchPlaceholder: '¿Qué necesitas?',
      dashboard: 'Panel',
      messages: 'Mensajes'
    },
    en: {
      services: 'Services',
      howItWorks: 'How It Works',
      becomeProvider: 'Become Provider',
      login: 'Login',
      register: 'Register',
      searchPlaceholder: 'What do you need?',
      dashboard: 'Dashboard',
      messages: 'Messages'
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold text-gray-900 hidden sm:block">
              TrabajoPR
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/servicios" 
              className={clsx(
                "font-medium transition-colors",
                location.pathname === '/servicios' 
                  ? "text-primary-600" 
                  : "text-gray-600 hover:text-primary-600"
              )}
            >
              {t[language].services}
            </Link>
            <Link 
              to="/como-funciona" 
              className={clsx(
                "font-medium transition-colors",
                location.pathname === '/como-funciona' 
                  ? "text-primary-600" 
                  : "text-gray-600 hover:text-primary-600"
              )}
            >
              {t[language].howItWorks}
            </Link>
            <Link 
              to="/ser-proveedor" 
              className={clsx(
                "font-medium transition-colors",
                location.pathname === '/ser-proveedor' 
                  ? "text-primary-600" 
                  : "text-gray-600 hover:text-primary-600"
              )}
            >
              {t[language].becomeProvider}
            </Link>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder={t[language].searchPlaceholder}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="p-2 text-gray-600 hover:text-primary-600 transition-colors"
              title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            >
              <Globe size={20} />
            </button>

            {/* Search Button - Mobile */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="lg:hidden p-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
              <Search size={20} />
            </button>

            {isAuthenticated ? (
              <>
                {/* Notifications */}
                <button className="relative p-2 text-gray-600 hover:text-primary-600 transition-colors">
                  <Bell size={20} />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-error text-white text-xs rounded-full flex items-center justify-center">
                    3
                  </span>
                </button>

                {/* Messages */}
                <Link 
                  to="/chat" 
                  className="hidden sm:block p-2 text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <MessageCircle size={20} />
                </Link>

                {/* Dashboard */}
                <Link
                  to="/dashboard"
                  className="hidden sm:flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <User size={16} />
                  <span className="text-sm font-medium">{user?.firstName}</span>
                </Link>
              </>
            ) : (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {/* Open login modal */}}
                  className="hidden sm:inline-flex"
                >
                  {t[language].login}
                </Button>
                <Button
                  size="sm"
                  onClick={() => {/* Open signup modal */}}
                >
                  {t[language].register}
                </Button>
              </>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden border-t border-gray-100 bg-white"
        >
          <div className="px-4 py-4 space-y-4">
            <Link
              to="/servicios"
              className="block text-gray-600 hover:text-primary-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t[language].services}
            </Link>
            <Link
              to="/como-funciona"
              className="block text-gray-600 hover:text-primary-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t[language].howItWorks}
            </Link>
            <Link
              to="/ser-proveedor"
              className="block text-gray-600 hover:text-primary-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t[language].becomeProvider}
            </Link>
            
            {!isAuthenticated && (
              <div className="pt-4 border-t border-gray-100 space-y-2">
                <Button variant="ghost" fullWidth size="sm">
                  {t[language].login}
                </Button>
                <Button fullWidth size="sm">
                  {t[language].register}
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* Mobile Search Modal */}
      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="lg:hidden fixed inset-0 z-50 bg-white"
        >
          <div className="flex items-center p-4 border-b border-gray-100">
            <input
              type="text"
              placeholder={t[language].searchPlaceholder}
              className="flex-1 pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              autoFocus
            />
            <button
              onClick={() => setIsSearchOpen(false)}
              className="ml-4 p-2 text-gray-600"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="p-4">
            <h3 className="text-sm font-medium text-gray-500 mb-3">Servicios populares</h3>
            <div className="space-y-2">
              {['Plomería', 'Electricidad', 'Handyman', 'Jardinería'].map((service) => (
                <button
                  key={service}
                  className="block w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}