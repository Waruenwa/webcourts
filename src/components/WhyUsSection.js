'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  FaUserShield,
  FaClock,
  FaGavel,
  FaThumbsUp,
  FaHeadset,
  FaLock,
} from 'react-icons/fa';

const MotionBox = motion(Box);

const reasons = [
  {
    icon: FaUserShield,
    title: 'ผู้เชี่ยวชาญตัวจริง',
    description: 'ทีมงานที่มีความรู้และประสบการณ์เฉพาะทาง ผ่านการรับรองจากหน่วยงานที่เกี่ยวข้อง',
    number: '01',
  },
  {
    icon: FaClock,
    title: 'ดำเนินการรวดเร็ว',
    description: 'กระบวนการทำงานรวดเร็ว ไม่ยุ่งยาก ตรวจสอบเอกสารเบื้องต้นภายใน 24 ชั่วโมง',
    number: '02',
  },
  {
    icon: FaGavel,
    title: 'ถูกต้องตามกฎหมาย',
    description: 'ทุกขั้นตอนดำเนินการภายใต้กรอบกฎหมาย ปกป้องสิทธิ์ของลูกค้าอย่างเต็มที่',
    number: '03',
  },
  {
    icon: FaThumbsUp,
    title: 'อัตราสำเร็จสูง',
    description: 'ความสำเร็จในการแก้ไขปัญหาหนี้สูงถึง 95% จากประสบการณ์กว่า 10,000 เคส',
    number: '04',
  },
  {
    icon: FaHeadset,
    title: 'ปรึกษาฟรี 24/7',
    description: 'ให้คำปรึกษาฟรีตลอด 24 ชั่วโมง ไม่มีค่าใช้จ่ายเบื้องต้น ไม่มีเงื่อนไข',
    number: '05',
  },
  {
    icon: FaLock,
    title: 'รักษาความลับ',
    description: 'ข้อมูลลูกค้าเป็นความลับสูงสุด ระบบรักษาความปลอดภัยมาตรฐานสากล',
    number: '06',
  },
];

export default function WhyUsSection() {
  return (
    <Box
      id="why-us"
      as="section"
      py={{ base: 16, md: 24 }}
      bg="navy.800"
      position="relative"
      overflow="hidden"
    >
      {/* Background decoration */}
      <Box
        position="absolute"
        top="20%"
        right="-10%"
        w="500px"
        h="500px"
        borderRadius="full"
        bg="accent.500"
        opacity={0.03}
        filter="blur(100px)"
      />
      <Box
        position="absolute"
        bottom="10%"
        left="-5%"
        w="400px"
        h="400px"
        borderRadius="full"
        bg="accent.500"
        opacity={0.02}
        filter="blur(80px)"
      />

      <Container maxW="1200px" position="relative" zIndex={2}>
        {/* Section Header */}
        <VStack spacing={4} textAlign="center" mb={16}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Text
              color="accent.400"
              fontWeight="700"
              fontSize="sm"
              textTransform="uppercase"
              letterSpacing="widest"
            >
              Why Choose Us
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
              color="white"
            >
              ทำไมต้องเลือก{' '}
              <Text as="span" color="accent.400">
                COURTS
              </Text>
            </Heading>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Text color="whiteAlpha.600" fontSize={{ base: 'md', md: 'lg' }} maxW="600px">
              เราพร้อมเป็นที่ปรึกษาคู่คิดของคุณ ในทุกปัญหาเรื่องหนี้สิน
            </Text>
          </MotionBox>
        </VStack>

        {/* Reason Cards */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {reasons.map((reason, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Box
                bg="whiteAlpha.50"
                border="1px solid"
                borderColor="whiteAlpha.100"
                borderRadius="2xl"
                p={8}
                position="relative"
                overflow="hidden"
                _hover={{
                  bg: 'whiteAlpha.100',
                  borderColor: 'accent.500',
                  transform: 'translateY(-5px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                }}
                transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                cursor="pointer"
                h="100%"
              >
                {/* Number watermark */}
                <Text
                  position="absolute"
                  top={4}
                  right={6}
                  fontSize="5xl"
                  fontWeight="900"
                  color="whiteAlpha.50"
                  lineHeight={1}
                >
                  {reason.number}
                </Text>

                <VStack align="start" spacing={4} position="relative" zIndex={2}>
                  <Flex
                    w="55px"
                    h="55px"
                    borderRadius="xl"
                    bgGradient="linear(135deg, accent.500, accent.600)"
                    align="center"
                    justify="center"
                    boxShadow="0 8px 20px rgba(245, 146, 42, 0.3)"
                  >
                    <Icon as={reason.icon} w={6} h={6} color="white" />
                  </Flex>

                  <Heading as="h3" fontSize="lg" fontWeight="700" color="white">
                    {reason.title}
                  </Heading>

                  <Text color="whiteAlpha.600" fontSize="sm" lineHeight="1.8">
                    {reason.description}
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
