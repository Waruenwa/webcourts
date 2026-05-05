'use client';

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Container,
  Image,
  Link,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  VStack,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { label: 'หน้าแรก', href: '#home' },
  { label: 'บริการของเรา', href: '#services' },
  { label: 'เกี่ยวกับเรา', href: '#about' },
  { label: 'เอกสารประชุม', href: '#meeting-documents' },
  { label: 'การคุ้มครองข้อมูลส่วนบุคคล', href: '#privacy' },
  { label: 'ติดต่อเรา', href: '#contact' },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={9999}
      bg={scrolled ? '#2D1155' : 'transparent'}
      backdropFilter={scrolled ? 'none' : 'none'}
      borderBottom={scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none'}
      transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
      py={scrolled ? 3 : 5}
    >
      <Container maxW="1400px">
        <Flex align="center" justify="space-between">
          {/* Logo */}
          <Link href="#home">
            <Image
              src="/cou-white.png"
              alt="COURTS Logo"
              h={scrolled ? '28px' : '30px'}
              transition="all 0.3s ease"
              _hover={{ opacity: 0.8 }}
            />
          </Link>

          {/* Desktop Nav */}
          <HStack spacing={8} display={{ base: 'none', lg: 'flex' }}>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                color="whiteAlpha.900"
                fontSize="sm"
                fontWeight="500"
                position="relative"
                _hover={{
                  color: 'accent.400',
                  textDecoration: 'none',
                  _after: {
                    width: '100%',
                  },
                }}
                _after={{
                  content: '""',
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  width: '0%',
                  height: '2px',
                  bg: 'accent.500',
                  transition: 'width 0.3s ease',
                }}
              >
                {item.label}
              </Link>
            ))}
          </HStack>

          {/* CTA Button Desktop */}
          <Box display={{ base: 'none', lg: 'block' }}>
            <Link
              href="#contact"
              bg="#E53935"
              color="white"
              px={6}
              py={2}
              borderRadius="full"
              fontWeight="600"
              fontSize="sm"
              _hover={{
                bg: '#D32F2F',
                textDecoration: 'none',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(229, 57, 53, 0.35)',
              }}
              transition="all 0.3s ease"
            >
              ปรึกษาฟรี
            </Link>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            display={{ base: 'flex', lg: 'none' }}
            icon={<HamburgerIcon />}
            variant="ghost"
            color="white"
            fontSize="24px"
            onClick={onOpen}
            _hover={{ bg: 'whiteAlpha.200' }}
            aria-label="Open menu"
          />
        </Flex>
      </Container>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
        <DrawerOverlay bg="blackAlpha.700" backdropFilter="blur(10px)" />
        <DrawerContent bg="#2D1155" pt={2}>
          <DrawerCloseButton color="white" size="lg" top={4} right={4} />
          
          <Box px={6} pt={4} pb={6}>
            <Image
              src="/cou-white.png"
              alt="COURTS Logo"
              h="24px"
              objectFit="contain"
            />
          </Box>

          <DrawerBody>
            <VStack spacing={8} align="stretch" px={2}>
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  color="whiteAlpha.900"
                  fontSize="lg"
                  fontWeight="600"
                  textAlign="left"
                  _hover={{
                    color: 'accent.400',
                    textDecoration: 'none',
                  }}
                  onClick={onClose}
                  transition="all 0.2s ease"
                >
                  {item.label}
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
