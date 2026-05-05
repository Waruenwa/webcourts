'use client';

import { Box } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import WhyUsSection from '@/components/WhyUsSection';
import ProcessSection from '@/components/ProcessSection';
import PrivacySection from '@/components/PrivacySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <Box as="main" overflowX="hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <WhyUsSection />
      <PrivacySection />
      <ContactSection />
      <Footer />
    </Box>
  );
}
