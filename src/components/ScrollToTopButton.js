'use client';

import { useEffect, useState } from 'react';
import { IconButton } from '@chakra-ui/react';
import { FaChevronUp } from 'react-icons/fa';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 320);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <IconButton
      aria-label="Scroll to top"
      icon={<FaChevronUp />}
      onClick={scrollToTop}
      position="fixed"
      right={{ base: 4, md: 7 }}
      bottom={{ base: 5, md: 7 }}
      zIndex={9998}
      w={{ base: '52px', md: '58px' }}
      h={{ base: '52px', md: '58px' }}
      minW={{ base: '52px', md: '58px' }}
      borderRadius="full"
      bg="#F5922A"
      color="white"
      fontSize={{ base: '18px', md: '20px' }}
      boxShadow="0 12px 30px rgba(245, 146, 42, 0.35)"
      opacity={isVisible ? 1 : 0}
      pointerEvents={isVisible ? 'auto' : 'none'}
      transform={isVisible ? 'translateY(0)' : 'translateY(14px)'}
      transition="opacity 0.25s ease, transform 0.25s ease, background 0.2s ease, box-shadow 0.2s ease"
      _hover={{
        bg: '#E68523',
        transform: isVisible ? 'translateY(-3px)' : 'translateY(14px)',
        boxShadow: '0 16px 36px rgba(245, 146, 42, 0.45)',
      }}
      _active={{
        bg: '#D4771C',
        transform: 'translateY(0)',
      }}
    />
  );
}
