'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ImageCreditsModal from './ImageCreditsModal';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Care Plans', href: '/care-plans' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' }
];

const services = [
  { name: 'Doorstep Grooming', href: '/services#doorstep-grooming' },
  { name: 'Health & Vet Care', href: '/services#health-wellness' },
  { name: 'Training & Behaviour', href: '/services#training-behaviour' },
  { name: 'Boarding & Daycare', href: '/services#boarding-daycare' }
];

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: '/icons/social/instagram.png'
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: '/icons/social/facebook.png'
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    icon: '/icons/social/twitter.png'
  }
];

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-white border-t border-gray-200 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          
          {/* Desktop Layout (Hidden on Mobile) */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-12 mb-8">
            {/* Logo and Tagline */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="Tails and Tales Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
                <Image
                  src="/logo-text.png"
                  alt="Tails and Tales"
                  className="h-10 object-contain"
                  width={150}
                  height={40}
                />
              </div>
              <p className="text-lg text-[#6B7280] leading-relaxed">
                Eternal pet care, from pup & kitten to senior.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-[#1F2933] mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2 ">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-lg text-[#6B7280] hover:text-[#2F5F88] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-[#1F2933] mb-4">
                Services
              </h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link 
                      href={service.href}
                      className="text-lg text-[#6B7280] hover:text-[#2F5F88] transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Coverage */}
            <div>
              <h3 className="text-lg font-semibold text-[#1F2933] mb-4">
                Contact & Coverage
              </h3>
              <div className="space-y-2">
                <a 
                  href="mailto:support@petcare.com"
                  className="text-lg text-[#6B7280] hover:text-[#2F5F88] transition-colors block"
                >
                  support@petcare.com
                </a>
                <p className="text-lg text-[#6B7280]">
                  Serving London, Manchestern, and Birmingham.
                </p>
                
                {/* Social Icons (Desktop) */}
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
                      <Image
                        src={social.icon}
                        alt={social.name}
                        width={30}
                        height={30}
                        className="object-contain"
                      />
                    </a>
                  ))}
                </div>
                
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="text-lg text-[#6B7280] hover:text-[#2F5F88] transition-colors inline-block"
                >
                  Image Credits
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Layout (Visible only on Mobile) */}
          {/* CHANGE 1: Removed 'pl-8' so it is centered relative to the screen */}
          <div className="lg:hidden space-y-8 mb-8">
            
            {/* Logo and Tagline */}
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center gap-3">
                <Image
                  src="/logo.png"
                  alt="Tails and Tales Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <Image
                  src="/logo-text.png"
                  alt="Tails and Tales"
                  className="h-8 object-contain"
                  width={120}
                  height={32}
                />
              </div>
              <p className="text-lg text-[#6B7280]">
                Eternal pet care, from pup & kitten to senior.
              </p>
            </div>

            {/* CHANGE 2: Added 'text-center' to centralized the headers and links */}
            <div className="grid grid-cols-2 gap-8 text-center">
              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold text-[#1F2933] mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-lg text-[#6B7280] hover:text-[#2F5F88] transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-lg font-semibold text-[#1F2933] mb-4">
                  Services
                </h3>
                <ul className="space-y-2">
                  {services.map((service) => (
                    <li key={service.name}>
                      <Link 
                        href={service.href}
                        className="text-lg text-[#6B7280] hover:text-[#2F5F88] transition-colors"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact & Coverage */}
            <div className="text-center space-y-2">
              <h3 className="text-lg font-semibold text-[#1F2933]">
                Contact & Coverage
              </h3>
              <a 
                href="mailto:support@petcare.com"
                className="text-lg text-[#6B7280] hover:text-[#2F5F88] transition-colors block"
              >
                support@petcare.com
              </a>
              <p className="text-lg text-[#6B7280]">
                Serving London, Manchestern, and Birmingham.
              </p>
              
              {/* Social Icons (Mobile) */}
              <div className="flex justify-center gap-3 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#2F5F88] rounded-full flex items-center justify-center hover:bg-[#1E3A5F] transition-colors"
                    aria-label={social.name}
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </a>
                ))}
              </div>
              
              <button 
                onClick={() => setIsModalOpen(true)}
                className="text-lg text-[#6B7280] hover:text-[#2F5F88] transition-colors inline-block"
              >
                Image Credits
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-black my-8"></div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-lg text-[#6B7280]">
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