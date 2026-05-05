'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  VStack,
  HStack,
  Icon,
  Image,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const MotionBox = motion(Box);

const features = [
  'ให้บริการรวมหนี้ ลดหนี้ ปลดหนี้ ครบวงจร',
  'ทีมผู้เชี่ยวชาญด้านกฎหมายและการเงิน',
  'ดำเนินการอย่างถูกต้องตามกฎหมาย',
  'ปรึกษาฟรี ไม่มีค่าใช้จ่ายเบื้องต้น',
  'ผลงานเป็นที่ประจักษ์ ลูกค้าไว้วางใจมากกว่า 10,000 ราย',
  'รักษาความลับลูกค้าอย่างเคร่งครัด',
];

export default function AboutSection() {
  return (
    <Box id="about" as="section" py={{ base: 16, md: 24 }} bg="white" position="relative">
      <Container maxW="1200px">
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align="center"
          gap={{ base: 12, lg: 16 }}
        >
          {/* Left - Visual */}
          <MotionBox
            flex={1}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Box position="relative">
              {/* Main card */}
              <Box
                bg="navy.600"
                borderRadius="3xl"
                p={{ base: 8, md: 12 }}
                position="relative"
                overflow="hidden"
              >
                {/* Decorative elements */}
                <Box
                  position="absolute"
                  top="-50px"
                  right="-50px"
                  w="200px"
                  h="200px"
                  borderRadius="full"
                  bg="accent.500"
                  opacity={0.1}
                />
                <Box
                  position="absolute"
                  bottom="-30px"
                  left="-30px"
                  w="150px"
                  h="150px"
                  borderRadius="full"
                  bg="accent.500"
                  opacity={0.08}
                />

                <VStack spacing={6} align="center" position="relative" zIndex={2}>
                  <Image
                    src="/cou-white.png"
                    alt="COURTS Logo"
                    h={{ base: '30px', md: '30px' }}
                  />
                  <Text
                    color="whiteAlpha.900"
                    fontSize={{ base: 'md', md: 'lg' }}
                    textAlign="center"
                    lineHeight="2"
                    fontWeight="300"
                  >
                    &ldquo;เราเชื่อว่าทุกคนมีสิทธิ์ที่จะเริ่มต้นใหม่
                    <br />
                    ปัญหาหนี้สินไม่ใช่จุดจบ แต่เป็นจุดเริ่มต้น
                    <br />
                    ของการวางแผนการเงินที่ดีกว่า&rdquo;
                  </Text>

                  <Box w="60px" h="2px" bg="accent.500" />

                  <Text color="accent.400" fontWeight="600" fontSize="sm">
                    คอร์ทส์ เม็กก้าสโตร์ (ประเทศไทย)
                  </Text>
                </VStack>
              </Box>

              {/* Floating stats card */}
              <Box
                position={{ base: 'relative', md: 'absolute' }}
                bottom={{ md: '-30px' }}
                right={{ md: '-30px' }}
                bg="white"
                borderRadius="2xl"
                p={6}
                boxShadow="0 10px 40px rgba(0,0,0,0.1)"
                border="1px solid"
                borderColor="gray.100"
                mt={{ base: 4, md: 0 }}
              >
                <HStack spacing={4}>
                  <Box
                    w="50px"
                    h="50px"
                    borderRadius="xl"
                    bg="green.50"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text fontSize="2xl">🏆</Text>
                  </Box>
                  <VStack align="start" spacing={0}>
                    <Text fontWeight="800" fontSize="xl" color="navy.600">
                      10+ ปี
                    </Text>
                    <Text color="gray.500" fontSize="xs">
                      ประสบการณ์ในวงการ
                    </Text>
                  </VStack>
                </HStack>
              </Box>
            </Box>
          </MotionBox>

          {/* Right - Content */}
          <MotionBox
            flex={1}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <VStack align="start" spacing={6}>
              <Text
                color="accent.500"
                fontWeight="700"
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="widest"
              >
                About Us
              </Text>

              <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                fontWeight="800"
                color="navy.600"
                lineHeight="1.3"
              >
                เกี่ยวกับ{' '}
                <Text as="span" color="accent.500">
                  COURTS
                </Text>
              </Heading>

              <Text color="gray.600" fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.9">
                บริษัท คอร์ทส์ เม็กก้าสโตร์ (ประเทศไทย) จำกัด (Courts Megastore (Thailand))
                ประกอบธุรกิจให้สินเชื่อตามประมวลกฎหมายแพ่งและพาณิชย์
                ดำเนินงานโดยทีมผู้เชี่ยวชาญที่มีประสบการณ์มากกว่า 10 ปี
                ภายใต้การกำกับดูแลอย่างถูกกฎหมาย
              </Text>

              <List spacing={3} w="100%">
                {features.map((feature, i) => (
                  <ListItem key={i} display="flex" alignItems="center">
                    <ListIcon as={FaCheckCircle} color="accent.500" fontSize="md" />
                    <Text color="gray.600" fontSize="sm">
                      {feature}
                    </Text>
                  </ListItem>
                ))}
              </List>
            </VStack>
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  );
}
