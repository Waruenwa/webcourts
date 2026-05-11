'use client';

import { useEffect, useState } from 'react';
import { Box, Button, Container, Flex, Link, Text } from '@chakra-ui/react';

const COOKIE_CONSENT_KEY = 'courtsCookieConsentAcceptedAt';
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const acceptedAt = Number(localStorage.getItem(COOKIE_CONSENT_KEY));
    const isAccepted = acceptedAt && Date.now() - acceptedAt < ONE_DAY_MS;

    if (!isAccepted) {
      localStorage.removeItem(COOKIE_CONSENT_KEY);
      const timer = window.setTimeout(() => setIsVisible(true), 0);

      return () => window.clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, String(Date.now()));
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Box
      position="fixed"
      left={0}
      right={0}
      bottom={0}
      zIndex={10000}
      bg="#2D1155"
      borderTop="1px solid"
      borderColor="whiteAlpha.100"
      boxShadow="0 -12px 40px rgba(16, 7, 43, 0.28)"
      py={{ base: 4, md: 5 }}
    >
      <Container maxW="1100px">
        <Flex
          align={{ base: 'stretch', md: 'center' }}
          justify="space-between"
          direction={{ base: 'column', md: 'row' }}
          gap={4}
        >
          <Text
            color="whiteAlpha.900"
            fontSize={{ base: 'sm', md: 'md' }}
            lineHeight="1.8"
          >
            เว็บไซต์นี้มีการจัดเก็บคุกกี้เพื่อเพิ่มประสิทธิภาพในการใช้งานของท่าน
            และการมอบบริการที่ดีที่สุดจากเรา กรุณากดยอมรับเพื่อใช้งานต่อ
            สามารถอ่านรายละเอียดเพิ่มเติมได้ที่{' '}
            <Link
              href="/20250627-chase-notice-cookies-th.pdf"
              target="_blank"
              color="accent.400"
              fontWeight="700"
              textDecoration="underline"
              textUnderlineOffset="3px"
              _hover={{ color: 'accent.300' }}
            >
              นโยบายการใช้คุกกี้
            </Link>
          </Text>

          <Button
            onClick={handleAccept}
            bg="#E53935"
            color="white"
            px={{ base: 6, md: 8 }}
            py={6}
            borderRadius="lg"
            fontWeight="700"
            flexShrink={0}
            _hover={{
              bg: '#D32F2F',
              transform: 'translateY(-2px)',
              boxShadow: '0 10px 26px rgba(229, 57, 53, 0.35)',
            }}
            transition="all 0.25s ease"
          >
            ยอมรับ
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}
