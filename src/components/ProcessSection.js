'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Icon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaClipboardList, FaSearchDollar, FaHandshake, FaSmile } from 'react-icons/fa';

const MotionBox = motion(Box);

const steps = [
  {
    icon: FaClipboardList,
    step: '01',
    title: 'ปรึกษา & แจ้งข้อมูล',
    description: 'ติดต่อเราเพื่อเล่าปัญหาหนี้สิน ทีมงานจะรับฟังและรวบรวมข้อมูลเบื้องต้น',
  },
  {
    icon: FaSearchDollar,
    step: '02',
    title: 'วิเคราะห์ & วางแผน',
    description: 'ผู้เชี่ยวชาญวิเคราะห์สถานการณ์หนี้ วางแผนการแก้ไขที่เหมาะสมที่สุด',
  },
  {
    icon: FaHandshake,
    step: '03',
    title: 'ดำเนินการ & เจรจา',
    description: 'ทีมงานดำเนินการแก้ไขปัญหาหนี้ เจรจาต่อรองกับเจ้าหนี้อย่างเป็นระบบ',
  },
  {
    icon: FaSmile,
    step: '04',
    title: 'สำเร็จ & ปลดหนี้',
    description: 'ลูกค้าปลดภาระหนี้สิน เริ่มต้นชีวิตใหม่อย่างมั่นคงทางการเงิน',
  },
];



export default function ProcessSection() {
  return (
    <Box as="section" py={{ base: 16, md: 24 }} bg="gray.50" position="relative">
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
              How It Works
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
              ขั้นตอนการดำเนินงาน
            </Heading>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Text color="gray.500" fontSize={{ base: 'md', md: 'lg' }} maxW="550px">
              เพียง 4 ขั้นตอนง่ายๆ สู่การปลดหนี้อย่างสมบูรณ์
            </Text>
          </MotionBox>
        </VStack>

        {/* Process Steps */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
          {steps.map((item, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <VStack
                spacing={5}
                textAlign="center"
                p={8}
                bg="white"
                borderRadius="2xl"
                boxShadow="0 4px 20px rgba(0,0,0,0.04)"
                border="1px solid"
                borderColor="gray.100"
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                }}
                transition="all 0.3s ease"
                position="relative"
                h="100%"
              >
                {/* Step number */}
                <Box
                  position="absolute"
                  top={-4}
                  left="50%"
                  transform="translateX(-50%)"
                  bg="accent.500"
                  color="white"
                  w="32px"
                  h="32px"
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="xs"
                  fontWeight="800"
                  boxShadow="0 4px 12px rgba(245, 146, 42, 0.3)"
                >
                  {item.step}
                </Box>

                {/* Icon */}
                <Box
                  w="80px"
                  h="80px"
                  borderRadius="2xl"
                  bgGradient="linear(135deg, navy.600, navy.800)"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mt={2}
                >
                  <Icon as={item.icon} w={8} h={8} color="accent.400" />
                </Box>

                <Heading as="h3" fontSize="lg" fontWeight="700" color="navy.600">
                  {item.title}
                </Heading>

                <Text color="gray.500" fontSize="sm" lineHeight="1.8">
                  {item.description}
                </Text>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
