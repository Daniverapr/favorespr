import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { HowItWorksSection } from '../components/home/HowItWorksSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';

export function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <TestimonialsSection />
    </div>
  );
}