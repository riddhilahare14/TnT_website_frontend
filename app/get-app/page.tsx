'use client';

import Navbar from '../Components/Navbar';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Care Plans', href: '/careplans' },
  { name: 'About', href: '/aboutus' },
    { name: 'Contact', href: '/contact' },
];

export default function GetAppPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* This is the only Navbar that will be visible on this page */}
      <Navbar 
        logo="/logo.png" 
        navLinks={navLinks} 
      />

      <main className="w-full">
        <div className="w-screen overflow-hidden">
          <Image 
            src="/images/app mockup for web.svg" 
            alt="Full Size App Mockup" 
            width={1920} 
            height={1080} 
            className="w-full h-auto block"
            priority
          />
        </div>
      </main>
    </div>
  );
}