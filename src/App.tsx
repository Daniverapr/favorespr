import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { BookingPage } from './pages/BookingPage';
import { EnhancedBookingPage } from './pages/EnhancedBookingPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { RegisterPage } from './pages/RegisterPage';
import { ProvidersPage } from './pages/ProvidersPage';
import { SearchPage } from './pages/SearchPage';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-white flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/servicios" element={<ServicesPage />} />
              <Route path="/como-funciona" element={<HowItWorksPage />} />
              <Route path="/registro" element={<RegisterPage />} />
              <Route path="/ser-proveedor" element={<ProvidersPage />} />
              <Route path="/agendar" element={<BookingPage />} />
              <Route path="/reservar" element={<EnhancedBookingPage />} />
              <Route path="/proveedor/:id" element={<div className="p-8 text-center">Provider Profile Coming Soon</div>} />
              <Route path="/buscar" element={<SearchPage />} />
              <Route path="/dashboard" element={<div className="p-8 text-center">Dashboard Coming Soon</div>} />
              <Route path="/proveedor-dashboard" element={<div className="p-8 text-center">Provider Dashboard Coming Soon</div>} />
              <Route path="/chat" element={<div className="p-8 text-center">Chat Coming Soon</div>} />
              <Route path="/login" element={<div className="p-8 text-center">Login Coming Soon</div>} />
            </Routes>
          </main>
          <Footer />
        </div>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
      </Router>
    </QueryClientProvider>
  );
}

export default App;