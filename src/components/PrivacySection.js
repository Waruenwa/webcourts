'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Flex,
  Icon,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaFilePdf } from 'react-icons/fa';

const MotionBox = motion(Box);

const privacyDocuments = [
  {
    title: 'นโยบายคุ้มครองข้อมูลส่วนบุคคล',
    href: '/20250305-chase-privacy-policy-th.pdf',
  },
  {
    title: 'ประกาศเกี่ยวกับการใช้คุกกี้',
    href: '20250627-chase-notice-cookies-th.pdf',
  },
  {
    title: 'ประกาศความเป็นส่วนตัวสำหรับลูกหนี้',
    href: 'chase-privacy-notice-for-debtors-th.pdf',
  },
  {
    title: 'ประกาศความเป็นส่วนตัวสำหรับผู้โอนสินทรัพย์ด้อยคุณภาพ',
    href: '20250627-chase-privacy-notice-for-non-performing-th.pdf',
  },
  {
    title: 'ประกาศความเป็นส่วนตัวสำหรับผู้เข้ามาภายในพื้นที่ของกลุ่มบริษัทฯ',
    href: '20250211-chase-privacy-notice-company-th.pdf',
  },
];

export default function PrivacySection() {
  return (
    <Box
      id="privacy"
      as="section"
      py={{ base: 16, md: 24 }}
      bg="#F7F9FC"
      position="relative"
      overflow="hidden"
    >
      {/* Decorative background shapes mimicking the reference image */}
      <Box
        position="absolute"
        top="-10%"
        left="-5%"
        w="500px"
        h="500px"
        bg="white"
        opacity={0.6}
        transform="rotate(45deg)"
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom="-20%"
        right="-10%"
        w="800px"
        h="800px"
        bg="white"
        opacity={0.4}
        transform="rotate(-30deg)"
        zIndex={0}
      />

      <Container maxW="800px" position="relative" zIndex={1}>
        <VStack spacing={12} w="100%">
          {/* Header */}
          <VStack spacing={4}>
            <Heading
              as="h2"
              fontSize={{ base: '2xl', md: '3xl' }}
              fontWeight="800"
              color="navy.700"
              textAlign="center"
            >
              การคุ้มครองข้อมูลส่วนบุคคล
            </Heading>
            <Box w="60px" h="3px" bg="#FFA726" />
          </VStack>

          {/* Document List */}
          <VStack spacing={4} w="100%">
            {privacyDocuments.map((doc, index) => (
              <MotionBox
                key={index}
                w="100%"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <LinkBox
                  as="article"
                  bg="white"
                  p={{ base: 4, md: 5 }}
                  borderRadius="lg"
                  boxShadow="sm"
                  border="1px solid"
                  borderColor="gray.100"
                  _hover={{
                    boxShadow: 'md',
                    transform: 'translateY(-2px)',
                    borderColor: 'blue.100',
                  }}
                  transition="all 0.3s ease"
                >
                  <Flex justify="space-between" align="center">
                    <LinkOverlay href={doc.href} isExternal>
                      <Text
                        color="blue.600"
                        fontWeight="500"
                        fontSize={{ base: 'sm', md: 'md' }}
                      >
                        {doc.title}
                      </Text>
                    </LinkOverlay>
                    <Icon as={FaFilePdf} color="#E53935" w={6} h={6} ml={4} />
                  </Flex>
                </LinkBox>
              </MotionBox>
            ))}
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
