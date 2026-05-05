'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  HStack,
  Icon,
  Flex,
  Select,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaLine,
  FaPaperPlane,
} from 'react-icons/fa';

const MotionBox = motion(Box);

const contactInfo = [
  {
    icon: FaPhoneAlt,
    title: 'โทรศัพท์',
    detail: '02 857 5188',
    subDetail: 'จันทร์-ศุกร์ 9:00-18:00',
    color: '#F5922A',
    iconBg: '#FFF3E0',
  },
  {
    icon: FaLine,
    title: 'LINE Official',
    detail: '@rlpn',
    subDetail: 'ตอบกลับภายใน 5 นาที',
    color: '#06C755',
    iconBg: '#E7FAEF',
  },
  // {
  //   icon: FaEnvelope,
  //   title: 'อีเมล',
  //   detail: 'contact@courts.co.th',
  //   subDetail: 'ตอบกลับภายใน 24 ชั่วโมง',
  //   color: '#7C5CFC',
  //   iconBg: '#F1EEFF',
  // },
  {
    icon: FaMapMarkerAlt,
    title: 'สำนักงานใหญ่',
    detail: 'บริษัท คอร์ทส์ เม็กก้าสโตร์ (ประเทศไทย) จำกัด',
    subDetail: '34/6 ม.1 ถ.แจ้งวัฒนะ อ.ปากเกร็ด จ.นนทบุรี 11120',
    color: '#FF6B6B',
    iconBg: '#FFF0F1',
  },
];

export default function ContactSection() {
  return (
    <Box
      id="contact"
      as="section"
      py={{ base: 16, md: 24 }}
      bg="white"
      position="relative"
    >
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
              Contact Us
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
              ติดต่อเรา
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
              maxW="550px"
            >
              พร้อมรับฟังและช่วยเหลือคุณ ปรึกษาปัญหาหนี้ฟรี ไม่มีค่าใช้จ่าย
            </Text>
          </MotionBox>
        </VStack>

        <Flex direction={{ base: 'column', lg: 'row' }} gap={10}>
          {/* Contact Info Cards */}
          <MotionBox
            flex={1}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4}>
              {contactInfo.map((info, index) => (
                <Box
                  key={index}
                  p={6}
                  borderRadius="2xl"
                  bg="gray.50"
                  border="1px solid"
                  borderColor="gray.100"
                  _hover={{
                    transform: 'translateY(-3px)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                    borderColor: info.color,
                  }}
                  transition="all 0.3s ease"
                  cursor="pointer"
                >
                  <VStack align="start" spacing={3}>
                    <Flex
                      w="45px"
                      h="45px"
                      borderRadius="xl"
                      bg={info.iconBg}
                      align="center"
                      justify="center"
                      boxShadow={`0 10px 24px ${info.color}20`}
                    >
                      <Icon as={info.icon} w={5} h={5} color={info.color} />
                    </Flex>
                    <Text fontWeight="700" color="navy.600" fontSize="sm">
                      {info.title}
                    </Text>
                    <Text color="navy.500" fontWeight="600" fontSize="md">
                      {info.detail}
                    </Text>
                    <Text color="gray.400" fontSize="xs">
                      {info.subDetail}
                    </Text>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </MotionBox>

          {/* Contact Form */}
          <MotionBox
            flex={1}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Box
              bg="navy.700"
              borderRadius="3xl"
              p={{ base: 6, md: 10 }}
              position="relative"
              overflow="hidden"
            >
              {/* Decorative */}
              <Box
                position="absolute"
                top="-50px"
                right="-50px"
                w="150px"
                h="150px"
                borderRadius="full"
                bg="accent.500"
                opacity={0.05}
              />

              <VStack spacing={5} position="relative" zIndex={2}>
                <Heading
                  as="h3"
                  fontSize="xl"
                  fontWeight="700"
                  color="white"
                  w="100%"
                >
                  ส่งข้อความถึงเรา
                </Heading>

                <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} w="100%">
                  <FormControl id="name">
                    <FormLabel color="whiteAlpha.700" fontSize="sm">
                      ชื่อ-นามสกุล
                    </FormLabel>
                    <Input
                      placeholder="ชื่อของคุณ"
                      bg="whiteAlpha.100"
                      border="1px solid"
                      borderColor="whiteAlpha.200"
                      color="white"
                      borderRadius="xl"
                      _placeholder={{ color: 'whiteAlpha.400' }}
                      _hover={{ borderColor: 'accent.500' }}
                      _focus={{
                        borderColor: 'accent.500',
                        boxShadow: '0 0 0 1px #f5922a',
                      }}
                    />
                  </FormControl>
                  <FormControl id="phone">
                    <FormLabel color="whiteAlpha.700" fontSize="sm">
                      เบอร์โทรศัพท์
                    </FormLabel>
                    <Input
                      placeholder="0XX-XXX-XXXX"
                      bg="whiteAlpha.100"
                      border="1px solid"
                      borderColor="whiteAlpha.200"
                      color="white"
                      borderRadius="xl"
                      _placeholder={{ color: 'whiteAlpha.400' }}
                      _hover={{ borderColor: 'accent.500' }}
                      _focus={{
                        borderColor: 'accent.500',
                        boxShadow: '0 0 0 1px #f5922a',
                      }}
                    />
                  </FormControl>
                </SimpleGrid>

                <FormControl id="service">
                  <FormLabel color="whiteAlpha.700" fontSize="sm">
                    บริการที่สนใจ
                  </FormLabel>
                  <Select
                    placeholder="เลือกบริการ"
                    bg="whiteAlpha.100"
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                    color="whiteAlpha.700"
                    borderRadius="xl"
                    _hover={{ borderColor: 'accent.500' }}
                    _focus={{
                      borderColor: 'accent.500',
                      boxShadow: '0 0 0 1px #f5922a',
                    }}
                  >
                    <option style={{ background: '#1a0d3f' }} value="debt">
                      รวมลดปลดหนี้
                    </option>
                    <option style={{ background: '#1a0d3f' }} value="analysis">
                      วิเคราะห์ภาระหนี้
                    </option>
                    <option style={{ background: '#1a0d3f' }} value="consult">
                      ปรึกษาปัญหาหนี้
                    </option>
                  </Select>
                </FormControl>

                <FormControl id="message">
                  <FormLabel color="whiteAlpha.700" fontSize="sm">
                    รายละเอียด
                  </FormLabel>
                  <Textarea
                    placeholder="อธิบายปัญหาหนี้สินของคุณ..."
                    rows={4}
                    bg="whiteAlpha.100"
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                    color="white"
                    borderRadius="xl"
                    _placeholder={{ color: 'whiteAlpha.400' }}
                    _hover={{ borderColor: 'accent.500' }}
                    _focus={{
                      borderColor: 'accent.500',
                      boxShadow: '0 0 0 1px #f5922a',
                    }}
                    resize="none"
                  />
                </FormControl>

                <Button
                  w="100%"
                  size="lg"
                  bg="accent.500"
                  color="white"
                  borderRadius="xl"
                  fontWeight="700"
                  py={7}
                  _hover={{
                    bg: 'accent.600',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 10px 30px rgba(245, 146, 42, 0.3)',
                  }}
                  transition="all 0.3s ease"
                  leftIcon={<FaPaperPlane />}
                >
                  ส่งข้อความ
                </Button>
              </VStack>
            </Box>
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  );
}
