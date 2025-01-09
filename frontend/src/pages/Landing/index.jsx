import React from 'react';
import { Hero } from './Hero';
import { Features } from './Features';
import { Testimonials } from './Testimonials';
import { Pricing } from './Pricing';
import { CTASection } from './CTASection';
import { LandingHeader } from './LandingHeader';

export const Landing= () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <LandingHeader />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <CTASection />
    </div>
  );
};
