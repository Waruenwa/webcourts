'use client';

import {
  Box,
  Container,
  Flex,
  VStack,
  HStack,
  Text,
  Link,
  Image,
  Icon,
  SimpleGrid,
  Divider,
} from '@chakra-ui/react';
import {
  FaFacebookF,
  FaLine,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const footerLinks = {
  บริการ: [
    { label: 'รวมลดปลดหนี้', href: '#services' },
    { label: 'วิเคราะห์ภาระหนี้', href: '#services' },
    { label: 'ปรึกษาปัญหาหนี้', href: '#services' },
  ],
  เกี่ยวกับ: [
    // { label: 'บริการของเรา', href: '#services' },
    { label: 'เกี่ยวกับบริษัท', href: '#about' },
    { label: 'เอกสารการประชุม', href: '#meeting-documents' },
    { label: 'การคุ้มครองข้อมูลส่วนบุคคล', href: '#privacy' },
    { label: 'ติดต่อเรา', href: '#contact' },
  ],
};

// const socialLinks = [
//   { icon: FaFacebookF, href: '#', color: '#1877F2', label: 'Facebook' },
//   { icon: FaLine, href: '#', color: '#06C755', label: 'LINE' },
//   { icon: FaInstagram, href: '#', color: '#E4405F', label: 'Instagram' },
// ];

export default function Footer() {
  return (
    <Box as="footer" bg="navy.900" color="whiteAlpha.800" position="relative">
      {/* CTA Banner */}
      <Box
        bgGradient="linear(135deg, accent.500, accent.700)"
        py={{ base: 10, md: 14 }}
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top="-50%"
          right="-10%"
          w="400px"
          h="400px"
          borderRadius="full"
          bg="white"
          opacity={0.05}
        />
        <Container maxW="1200px">
          <Flex
            direction={{ base: 'column', md: 'row' }}
            align="center"
            justify="space-between"
            gap={6}
            textAlign={{ base: 'center', md: 'left' }}
          >
            <VStack align={{ base: 'center', md: 'start' }} spacing={2}>
              <Text
                fontSize={{ base: 'xl', md: '2xl' }}
                fontWeight="800"
                color="white"
              >
                พร้อมปลดหนี้แล้วหรือยัง?
              </Text>
              <Text color="whiteAlpha.800" fontSize="md">
                ปรึกษาฟรี ไม่มีค่าใช้จ่าย เริ่มต้นวันนี้!
              </Text>
            </VStack>
            <Link
              href="#contact"
              bg="white"
              color="accent.600"
              px={10}
              py={4}
              borderRadius="full"
              fontWeight="700"
              fontSize="lg"
              _hover={{
                bg: 'whiteAlpha.900',
                transform: 'translateY(-2px)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                textDecoration: 'none',
              }}
              transition="all 0.3s ease"
            >
              ปรึกษาเลย →
            </Link>
          </Flex>
        </Container>
      </Box>

      {/* Main Footer */}
      <Container maxW="1200px" py={{ base: 12, md: 16 }}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {/* Brand */}
          <VStack align={{ base: 'center', md: 'start' }} spacing={5}>
            <Image src="/cou-white.png" alt="COURTS Logo" h="30px" />
            <Text color="whiteAlpha.600" fontSize="sm" lineHeight="1.8">
              บริษัท คอร์ทส์ เม็กก้าสโตร์ (ประเทศไทย) จำกัด
            </Text>

            {/* Social Icons */}
            {/* <HStack spacing={3}>
              {socialLinks.map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  w="40px"
                  h="40px"
                  borderRadius="xl"
                  bg="whiteAlpha.100"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  _hover={{
                    bg: social.color,
                    transform: 'translateY(-3px)',
                  }}
                  transition="all 0.3s ease"
                >
                  <Icon as={social.icon} w={4} h={4} />
                </Link>
              ))}
            </HStack> */}
          </VStack>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <VStack
              key={title}
              align={{ base: 'center', md: 'start' }}
              spacing={4}
            >
              <Text fontWeight="700" color="white" fontSize="md">
                {title}
              </Text>
              {links.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  color="whiteAlpha.500"
                  fontSize="sm"
                  _hover={{
                    color: 'accent.400',
                    textDecoration: 'none',
                    paddingLeft: '4px',
                  }}
                  transition="all 0.2s ease"
                >
                  {link.label}
                </Link>
              ))}
            </VStack>
          ))}

          {/* Contact Info */}
          <VStack align={{ base: 'center', md: 'start' }} spacing={4}>
            <Text fontWeight="700" color="white" fontSize="md">
              ข้อมูลติดต่อ
            </Text>
            <HStack spacing={3}>
              <Icon as={FaPhoneAlt} color="accent.400" w={4} h={4} />
              <Text color="whiteAlpha.500" fontSize="sm">
                02 857 5188
              </Text>
            </HStack>
            <HStack spacing={3}>
              <Icon as={FaLine} color="accent.400" w={4} h={4} />
              <Text color="whiteAlpha.500" fontSize="sm">
                @rlpn
              </Text>
            </HStack>
            <HStack spacing={3} alignItems="flex-start">
              <Icon as={FaMapMarkerAlt} color="accent.400" w={4} h={4} mt={1} />
              <Text color="whiteAlpha.500" fontSize="sm">
                34/6 หมู่ที่ 1 ถนนแจ้งวัฒนะ ตำบลคลองเกลือ
                <br />
                อำเภอปากเกร็ด จังหวัดนนทบุรี 11120
              </Text>
            </HStack>
          </VStack>
        </SimpleGrid>

        <Divider borderColor="whiteAlpha.100" my={8} />

        {/* Bottom */}
        {/* <Flex
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify="space-between"
          gap={4}
        >
          <Text color="whiteAlpha.400" fontSize="xs">
            © {new Date().getFullYear()} COURTS. สงวนลิขสิทธิ์ทุกประการ
          </Text>
          <HStack spacing={6}>
            <Link
              href="#"
              color="whiteAlpha.400"
              fontSize="xs"
              _hover={{ color: 'accent.400' }}
            >
              นโยบายความเป็นส่วนตัว
            </Link>
            <Link
              href="#"
              color="whiteAlpha.400"
              fontSize="xs"
              _hover={{ color: 'accent.400' }}
            >
              เงื่อนไขการใช้บริการ
            </Link>
          </HStack>
        </Flex> */}
      </Container>
    </Box>
  );
}
