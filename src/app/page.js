'use client';

import { Box } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import MeetingDocumentsSection from '@/components/MeetingDocumentsSection';
import PrivacySection from '@/components/PrivacySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

export default function Home() {
  return (
    <Box as="main" overflowX="hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <MeetingDocumentsSection />
      <PrivacySection />
      <ContactSection />
      <Footer />
      <CookieConsent />
    </Box>
  );
}
