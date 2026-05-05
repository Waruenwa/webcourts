'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Icon,
  Flex,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  FaHandHoldingUsd,
  FaSearchDollar,
  FaBalanceScale,
} from 'react-icons/fa';

const MotionBox = motion(Box);

const services = [
  {
    icon: FaHandHoldingUsd,
    title: 'รวมลดปลดหนี้',
    description:
      'บริการรวมหนี้สินทุกประเภท ลดดอกเบี้ย ลดยอดผ่อนชำระ ปลดหนี้ได้เร็วขึ้น ช่วยให้คุณหายใจได้อย่างสบาย',
    color: '#F5922A',
    iconBg: '#FFF3E0',
  },
  {
    icon: FaSearchDollar,
    title: 'วิเคราะห์ภาระหนี้',
    description:
      'ตรวจสอบยอดหนี้ ดอกเบี้ย และเงื่อนไขการชำระ เพื่อหาแนวทางลดภาระที่เหมาะกับคุณ',
    color: '#7C5CFC',
    iconBg: '#F1EEFF',
  },
  {
    icon: FaBalanceScale,
    title: 'ปรึกษาปัญหาหนี้',
    description:
      'ให้คำปรึกษาปัญหาหนี้สินทุกประเภท โดยทีมผู้เชี่ยวชาญ วิเคราะห์สถานการณ์ วางแผนชำระหนี้อย่างเป็นระบบ',
    color: '#00C9A7',
    iconBg: '#E6FAF6',
  },
];

export default function ServicesSection() {
  return (
    <Box
      id="services"
      as="section"
      py={{ base: 16, md: 24 }}
      bg="gray.50"
      position="relative"
    >
      {/* Decorative top gradient */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        h="2px"
        bgGradient="linear(to-r, transparent, accent.500, transparent)"
      />

      <Container maxW="1200px">
        {/* Section Header */}
        <VStack spacing={4} textAlign="center" mb={16}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Text
              color="accent.500"
              fontWeight="700"
              fontSize="sm"
              textTransform="uppercase"
              letterSpacing="widest"
            >
              Our Services
            </Text>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Heading
              as="h2"
              fontSize={{ base: '2xl', md: '4xl' }}
              fontWeight="800"
              color="navy.600"
            >
              บริการของเรา
            </Heading>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Text
              color="gray.500"
              fontSize={{ base: 'md', md: 'lg' }}
              maxW="600px"
            >
              COURTS พร้อมให้บริการรวมลดปลดหนี้ครบวงจร ดูแลคุณตั้งแต่ต้นจนจบ
            </Text>
          </MotionBox>
        </VStack>

        {/* Service Cards */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {services.map((service, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Box
                bg="white"
                p={8}
                borderRadius="2xl"
                boxShadow="0 4px 20px rgba(0,0,0,0.06)"
                border="1px solid"
                borderColor="gray.100"
                _hover={{
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.12)',
                  borderColor: service.color,
                }}
                transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                cursor="pointer"
                position="relative"
                overflow="hidden"
                h="100%"
                role="group"
              >
                {/* Top accent line */}
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  h="3px"
                  bg={service.color}
                  opacity={0}
                  _groupHover={{ opacity: 1 }}
                  transition="opacity 0.3s ease"
                />

                <VStack align="start" spacing={5}>
                  <Flex
                    w="64px"
                    h="64px"
                    borderRadius="2xl"
                    bg={service.iconBg}
                    align="center"
                    justify="center"
                    boxShadow={`0 12px 28px ${service.color}20`}
                    transition="all 0.3s ease"
                    _groupHover={{
                      transform: 'translateY(-2px)',
                      boxShadow: `0 16px 34px ${service.color}30`,
                    }}
                  >
                    <Icon as={service.icon} w={8} h={8} color={service.color} />
                  </Flex>

                  <Heading
                    as="h3"
                    fontSize="xl"
                    fontWeight="700"
                    color="navy.600"
                  >
                    {service.title}
                  </Heading>

                  <Text color="gray.500" fontSize="sm" lineHeight="1.8">
                    {service.description}
                  </Text>
                </VStack>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
