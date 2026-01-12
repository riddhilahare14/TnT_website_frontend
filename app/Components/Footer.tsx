'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ImageCreditsModal from './ImageCreditsModal';

// Icons remain unchanged
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Care Plans', href: '/careplans' },
  { name: 'About Us', href: '/aboutus' },
  { name: 'Contact', href: '/contact' }
];

const services = [
  { name: 'Doorstep Grooming', href: '/services#doorstep-grooming' },
  { name: 'Health & Wellness', href: '/services#health-wellness' },
  { name: 'Training & Behaviour', href: '/services#training-behaviour' },
  { name: 'Boarding & Daycare', href: '/services#boarding-daycare' },
  { name: 'Community & Experiences', href: '/services#community-experiences' }
];

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    Icon: InstagramIcon 
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    Icon: FacebookIcon
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    Icon: TwitterIcon
  }
];

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-white border-t border-gray-200 font-sans">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-16">
          
          {/* Desktop Layout (Hidden on Mobile) */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-12 mb-8">
            <div className="space-y-4">
              
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="Tails and Tales Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
                
                <div className="flex flex-col items-center">
                  {/* CHANGE: Reduced to text-[16px] for desktop title */}
                  <span className="font-['Trueno',_sans-serif] text-[#1E3A5F] font-semibold text-[16px] uppercase leading-none tracking-wide">
                    Tails and Tales
                  </span>
                  {/* CHANGE: Reduced to text-[10px] for desktop subtitle */}
                  <span className="font-sans text-[#1E3A5F] font-semibold text-[10px] uppercase leading-none tracking-wider mt-1.5">
                    A Pet Care Company
                  </span>
                </div>
              </div>

              {/* CHANGE: Font size -> text-[14px], Color -> Darker Gray (#374151) */}
              <p className="text-[14px] text-[#374151] leading-relaxed">
                Eternal pet care, from pup & kitten to senior.
              </p>
            </div>

            <div>
              {/* CHANGE: Header font size -> text-[16px] for hierarchy */}
              <h3 className="text-[16px] font-semibold text-[#1F2933] mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      // CHANGE: Font size -> text-[14px], Color -> Darker Gray (#374151)
                      className="text-[14px] text-[#374151] hover:text-[#2F5F88] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[16px] font-semibold text-[#1F2933] mb-4">
                Services
              </h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link 
                      href={service.href}
                      // CHANGE: Font size -> text-[14px], Color -> Darker Gray (#374151)
                      className="text-[14px] text-[#374151] hover:text-[#2F5F88] transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[16px] font-semibold text-[#1F2933] mb-4">
                Contact & Coverage
              </h3>
              <div className="space-y-2">
                <a 
                  href="mailto:support@petcare.com"
                  // CHANGE: Font size -> text-[14px], Color -> Darker Gray (#374151)
                  className="text-[14px] text-[#374151] hover:text-[#2F5F88] transition-colors block"
                >
                  support@petcare.com
                </a>
                <p className="text-[14px] text-[#374151]">
                  Serving London, Manchestern, and Birmingham.
                </p>
                
                <div className="flex gap-3 pt-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#2F5F88] rounded-full flex items-center justify-center hover:bg-[#1E3A5F] transition-colors"
                      aria-label={social.name}
                    >
                      <social.Icon className="w-5 h-5 text-white" />
                    </a>
                  ))}
                </div>
                
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="text-[14px] text-[#374151] hover:text-[#2F5F88] transition-colors inline-block"
                >
                  Image Credits
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Layout (Visible only on Mobile) */}
          <div className="lg:hidden space-y-6 mb-4">
            
            {/* Logo and Tagline */}
            <div className="text-center space-y-2">
              
              <div className="flex items-center justify-center gap-2">
                <Image
                  src="/logo.png"
                  alt="Tails and Tales Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
                
                <div className="flex flex-col items-center text-center">
                  <span className="font-['Trueno',_sans-serif] text-[#1E3A5F] font-semibold text-[16px] uppercase leading-none tracking-wide">
                    Tails and Tales
                  </span>
                  <span className="font-sans text-[#1E3A5F] font-semibold text-[9px] uppercase leading-none tracking-wider mt-1">
                    A Pet Care Company
                  </span>
                </div>
              </div>

              {/* CHANGE: Updated color to #374151 for consistency */}
              <p className="text-[14px] text-[#374151] leading-tight">
                Eternal pet care, from pup & kitten to senior.
              </p>
            </div>

            {/* Quick Links & Services Grid */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-6">
              {/* Left Column: Quick Links */}
              <div className="text-left pl-4">
                <h3 className="text-[14px] font-bold text-[#1F2933] mb-2 leading-tight">
                  Quick Links
                </h3>
                <ul className="space-y-1">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        // CHANGE: Updated color to #374151
                        className="text-[14px] text-[#374151] hover:text-[#2F5F88] transition-colors leading-tight block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Services */}
              <div className="text-left">
                <h3 className="text-[14px] font-bold text-[#1F2933] mb-2 leading-tight">
                  Services
                </h3>
                <ul className="space-y-1">
                  {services.map((service) => (
                    <li key={service.name}>
                      <Link 
                        href={service.href}
                        // CHANGE: Updated color to #374151
                        className="text-[14px] text-[#374151] hover:text-[#2F5F88] transition-colors leading-tight block"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact & Coverage - Centered */}
            <div className="text-center space-y-1">
              <h3 className="text-[14px] font-bold text-[#1F2933] mb-1 leading-tight">
                Contact & Coverage
              </h3>
              <a 
                href="mailto:support@petcare.com"
                // CHANGE: Updated color to #374151
                className="text-[14px] text-[#374151] hover:text-[#2F5F88] transition-colors block leading-tight"
              >
                support@petcare.com
              </a>
              
              <div className="flex justify-center gap-3 pt-3 pb-1">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#2F5F88] rounded-full flex items-center justify-center hover:bg-[#1E3A5F] transition-colors"
                    aria-label={social.name}
                  >
                    <social.Icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
              
              <button 
                onClick={() => setIsModalOpen(true)}
                // CHANGE: Updated color to #374151
                className="text-[14px] text-[#374151] hover:text-[#2F5F88] transition-colors inline-block leading-tight"
              >
                Image Credits
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300 my-4"></div>

          {/* Copyright */}
          <div className="text-center">
            {/* CHANGE: Updated color to #374151 */}
            <p className="text-[14px] text-[#374151] leading-tight">
              © {currentYear} Tails & Tales. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <ImageCreditsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}