'use client';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './globals.css';
import { usePathname } from 'next/navigation';
import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['600'], variable: '--font-playfair' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Care Plans', href: '/careplans' },
  { name: 'About', href: '/aboutus' },
  { name: 'Contact', href: '/contact' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Check if we are on the dedicated mockup page
  const isMockupPage = pathname === '/get-app';

  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {/* Only show the global Navbar if NOT on the mockup page */}
        {!isMockupPage && (
          <Navbar
            logo="/logo.png"
            navLinks={navLinks}
          />
        )}

        {children}

        {/* Only show the Footer if NOT on the mockup page */}
        {!isMockupPage && <Footer />}
      </body>
    </html>
  );
}