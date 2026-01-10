'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

type NavLink = { name: string; href: string };
type NavbarProps = {
  logo: string;
  logoText?: string;
  navLinks: NavLink[];
};

export default function Navbar({
  logo,
  logoText,
  navLinks,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // CHANGE 1: Updated Desktop Button to use #2F5F88
  const buttonClass =
    'px-6 py-2.5 border-2 border-[#2F5F88] text-[#2F5F88] rounded-lg hover:bg-[#2F5F88] hover:text-white transition-colors font-medium text-sm';

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 font-sans">
      <div className="w-full px-6 md:px-10">
        <div className="flex justify-between items-center h-20">
          
          {/* LEFT: Logo Section */}
          <div className="flex items-center gap-3">
            <Image
              src={logo}
              alt="Logo"
              width={48}
              height={48}
              className="object-contain"
            />
            {logoText && (
              <Image
                src={logoText}
                alt="Logo Text"
                width={120}
                height={40}
                className="hidden sm:block object-contain"
              />
            )}
          </div>

          {/* RIGHT: Desktop Navigation Links + Button */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm transition-colors ${
                    pathname === link.href
                      ? 'font-bold text-gray-900'
                      : 'font-medium text-gray-900 hover:text-[#2F5F88]'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <button className={buttonClass}>Download the App</button>
          </div>

          {/* MOBILE: Hamburger Menu */}
          <div className="flex md:hidden items-center gap-3">
            
            {/* CHANGE 2: Updated Mobile 'Get App' Button color to #2F5F88 */}
            <button className="px-6 py-2 border-2 border-[#2F5F88] text-[#2F5F88] rounded-full hover:bg-[#2F5F88] hover:text-white transition-colors font-medium text-sm">
              Get App
            </button>
            
            {/* CHANGE 3: Updated Menu Icon color to #2F5F88 */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#2F5F88] hover:text-[#1E3A5F] transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`block px-4 py-3 text-sm transition-colors ${
                    pathname === link.href
                      ? 'font-bold text-gray-900 bg-gray-50'
                      : 'font-medium text-gray-900 hover:bg-gray-50 hover:text-[#2F5F88]'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}