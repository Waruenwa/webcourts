import { Providers } from './providers';

export const metadata = {
  title: 'COURTS | รวมลดปลดหนี้ สินเชื่อ ปรึกษาปัญหาหนี้ ฟรี',
  description:
    'COURTS บริษัทผู้เชี่ยวชาญด้านการรวมลดปลดหนี้ สินเชื่อ ให้คำปรึกษาปัญหาหนี้ครบวงจร แก้ไขหนี้อย่างถูกกฎหมาย ช่วยลดภาระหนี้สิน ปรึกษาฟรี ไม่มีค่าใช้จ่าย',
  keywords: [
    'รวมลดปลดหนี้',
    'สินเชื่อ',
    'ปรึกษาปัญหาหนี้',
    'แก้ไขหนี้',
    'ลดภาระหนี้',
    'รวมหนี้',
    'ปรึกษาหนี้ฟรี',
    'COURTS',
    'บริหารจัดการหนี้',
    'ปลดหนี้',
    'สินเชื่อส่วนบุคคล',
    'หนี้บัตรเครดิต',
    'หนี้นอกระบบ',
  ],
  openGraph: {
    title: 'COURTS | รวมลดปลดหนี้ สินเชื่อ ปรึกษาปัญหาหนี้ ฟรี',
    description:
      'COURTS ผู้เชี่ยวชาญด้านการรวมลดปลดหนี้ ให้คำปรึกษาปัญหาหนี้ครบวงจร แก้ไขหนี้อย่างถูกกฎหมาย',
    type: 'website',
    locale: 'th_TH',
    siteName: 'COURTS',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="th" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#1e0a3c" />
      </head>
      <body style={{ margin: 0, padding: 0 }} suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
