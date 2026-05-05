'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  Flex,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaArrowDown } from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);

export default function HeroSection() {
  return (
    <Box
      id="home"
      as="section"
      position="relative"
      minH="100vh"
      display="flex"
      alignItems="center"
      overflow="hidden"
    >
      {/* Background Image */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundImage="url('/bg-business.png')"
        backgroundSize="cover"
        backgroundPosition="center"
        zIndex={0}
      />

      {/* Color Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="#3F2964"
        opacity={0.85}
        zIndex={1}
      />

      <Container
        maxW="1200px"
        position="relative"
        zIndex={2}
        pt={{ base: 24, md: 0 }}
      >
        <VStack spacing={8} textAlign="center" maxW="850px" mx="auto">
          {/* Badge */}
          {/* <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Box
              bg="whiteAlpha.100"
              border="1px solid"
              borderColor="accent.500"
              px={6}
              py={2}
              borderRadius="full"
              backdropFilter="blur(10px)"
            >
              <Text color="accent.400" fontSize="sm" fontWeight="600" letterSpacing="wide">
                ✦ ผู้เชี่ยวชาญด้านการแก้ไขปัญหาหนี้
              </Text>
            </Box>
          </MotionBox> */}

          {/* Main Heading */}
          <MotionHeading
            as="h1"
            fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
            fontWeight="800"
            color="white"
            lineHeight="1.2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            mt={3}
          >
            รวมลดปลดหนี้{' '}
            <Text as="span" color="accent.400">
              ครบวงจร
            </Text>
            <br />
            ปรึกษาปัญหาหนี้{' '}
            <Text as="span" color="accent.400">
              ฟรี
            </Text>
          </MotionHeading>

          {/* Subtitle */}
          <MotionText
            fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
            color="whiteAlpha.800"
            maxW="650px"
            lineHeight="1.8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            บริษัท คอร์ทส์ เม็กก้าสโตร์ (ประเทศไทย) จำกัด
          </MotionText>

          {/* CTA Buttons */}
          <MotionFlex
            gap={4}
            flexDir={{ base: 'column', sm: 'row' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <Button
              as="a"
              href="#contact"
              size="lg"
              bg="#E53935"
              color="white"
              px={10}
              py={7}
              fontSize="lg"
              fontWeight="700"
              borderRadius="md"
              className="pulse-glow"
              _hover={{
                bg: '#D32F2F',
                transform: 'translateY(-3px)',
                boxShadow: '0 15px 40px rgba(229, 57, 53, 0.4)',
              }}
              transition="all 0.3s ease"
              leftIcon={<FaPhoneAlt />}
            >
              ติดต่อเรา
            </Button>

            <Button
              as="a"
              href="#services"
              size="lg"
              variant="outline"
              borderColor="whiteAlpha.400"
              color="white"
              px={10}
              py={7}
              fontSize="lg"
              borderRadius="full"
              _hover={{
                bg: 'whiteAlpha.100',
                borderColor: 'accent.400',
                color: 'accent.400',
                transform: 'translateY(-3px)',
              }}
              transition="all 0.3s ease"
            >
              ดูบริการของเรา
            </Button>
          </MotionFlex>

          {/* Stats bar */}
          {/* <MotionFlex
            mt={12}
            gap={{ base: 6, md: 12 }}
            flexDir={{ base: 'column', md: 'row' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
          >
            {[
              { number: '10,000+', label: 'ลูกค้าที่ไว้วางใจ' },
              { number: '95%', label: 'อัตราความสำเร็จ' },
              { number: '24/7', label: 'พร้อมให้บริการ' },
            ].map((stat, i) => (
              <VStack key={i} spacing={1}>
                <Text
                  color="accent.400"
                  fontSize={{ base: '2xl', md: '3xl' }}
                  fontWeight="800"
                >
                  {stat.number}
                </Text>
                <Text color="whiteAlpha.600" fontSize="sm">
                  {stat.label}
                </Text>
              </VStack>
            ))}
          </MotionFlex> */}
        </VStack>
      </Container>

      {/* Scroll down indicator */}
      <Box
        position="absolute"
        bottom={8}
        left="50%"
        transform="translateX(-50%)"
        zIndex={2}
        className="float-animation"
      >
        <Flex
          direction="column"
          align="center"
          as="a"
          href="#services"
          _hover={{ opacity: 0.8 }}
        >
          <Text color="whiteAlpha.500" fontSize="xs" mb={2}>
            เลื่อนลง
          </Text>
          <FaArrowDown color="rgba(255,255,255,0.3)" size={16} />
        </Flex>
      </Box>
    </Box>
  );
}
