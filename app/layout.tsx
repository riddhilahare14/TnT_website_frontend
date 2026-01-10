import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import './globals.css';

// 1. IMPORT PLAYFAIR DISPLAY 👇
import { Playfair_Display, Inter } from 'next/font/google';

// 2. CONFIGURE IT (Weight 600 is Semibold) 👇
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600'], // You can add '400', '700' here if you need other weights too
  variable: '--font-playfair',
});

// (Optional) Keep your body font like Inter if you want
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Care Plans', href: '/careplans' },
  { name: 'About', href: '/aboutus' },
  { name: 'Contact', href: '/contact' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 👇 APPLY THE FONT CLASSES HERE */}
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Navbar
          logo="/logo.png"
          logoText="/logo-text.png"
          navLinks={navLinks}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}