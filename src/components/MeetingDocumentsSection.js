'use client';

import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  LinkBox,
  LinkOverlay,
  Text,
  VStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaFilePdf } from 'react-icons/fa';

const MotionBox = motion(Box);

const meetingDocuments = [
  { title: 'หนังสือเชิญประชุมผู้ถือหุ้น', href: '#' },
  { title: 'เอกสารประกอบการประชุม', href: '#' },
  { title: 'รายงานการประชุมผู้ถือหุ้น', href: '#' },
  { title: 'แบบฟอร์มมอบฉันทะ', href: '#' },
  { title: 'หลักเกณฑ์การเข้าร่วมประชุม', href: '#' },
];

export default function MeetingDocumentsSection() {
  return (
    <Box
      id="meeting-documents"
      as="section"
      py={{ base: 16, md: 24 }}
      bg="#F7F9FC"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="-12%"
        left="-6%"
        w={{ base: '300px', md: '520px' }}
        h={{ base: '300px', md: '520px' }}
        bg="white"
        opacity={0.65}
        transform="rotate(45deg)"
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom="-22%"
        right="-12%"
        w={{ base: '420px', md: '820px' }}
        h={{ base: '420px', md: '820px' }}
        bg="white"
        opacity={0.45}
        transform="rotate(-30deg)"
        zIndex={0}
      />

      <Container maxW="800px" position="relative" zIndex={1}>
        <VStack spacing={12} w="100%">
          <VStack spacing={4}>
            <Heading
              as="h2"
              fontSize={{ base: '2xl', md: '3xl' }}
              fontWeight="800"
              color="navy.700"
              textAlign="center"
            >
              เอกสารประชุม
            </Heading>
            <Box w="60px" h="3px" bg="#FFA726" />
          </VStack>

          <VStack spacing={4} w="100%">
            {meetingDocuments.map((doc, index) => (
              <MotionBox
                key={doc.title}
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
                  <Flex justify="space-between" align="center" gap={4}>
                    <LinkOverlay href={doc.href} isExternal>
                      <Text
                        color="blue.600"
                        fontWeight="600"
                        fontSize={{ base: 'sm', md: 'md' }}
                      >
                        {doc.title}
                      </Text>
                    </LinkOverlay>
                    <Icon as={FaFilePdf} color="#E53935" w={6} h={6} flexShrink={0} />
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
