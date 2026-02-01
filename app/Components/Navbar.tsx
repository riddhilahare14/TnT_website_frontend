'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type NavLink = { name: string; href: string };
type NavbarProps = {
  logo: string;
  navLinks: NavLink[];
};

export default function Navbar({ logo, navLinks }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Detect if we are currently viewing the mockup page
  const isMockupPage = pathname === '/get-app';

  const buttonClass =
    'px-6 py-2.5 border-2 border-[#2F5F88] text-[#2F5F88] rounded-lg hover:bg-[#2F5F88] hover:text-white transition-colors font-medium text-sm inline-block';

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 font-sans">
      <div className="w-full px-4 md:px-10">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* LEFT: Logo Section */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={logo}
              alt="Logo"
              width={48}
              height={48}
              className="object-contain w-9 h-9 md:w-12 md:h-12"
            />
            <div className="flex flex-col items-center">
              <span className="font-['Trueno',_sans-serif] text-[#1E3A5F] font-semibold text-[14px] md:text-[16px] uppercase leading-none tracking-wide">
                Tails and Tales
              </span>
              <span className="font-sans text-[#1E3A5F] font-semibold text-[8px] md:text-[9px] uppercase leading-none tracking-wider mt-1">
                A Pet Care Company
              </span>
            </div>
          </Link>

          {/* RIGHT: Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {!isMockupPage && (
              <div className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm transition-colors ${
                      pathname === link.href
                        ? 'font-bold text-gray-900'
                        : 'font-medium text-gray-900 hover:text-[#2F5F88]'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
            
            <Link href={isMockupPage ? "/" : "/get-app"} className={buttonClass}>
              {isMockupPage ? 'Back to Website' : 'Download the App'}
            </Link>
          </div>

          {/* MOBILE: Menu */}
          <div className="flex md:hidden items-center gap-3">
            <Link 
              href={isMockupPage ? "/" : "/get-app"}
              className="px-4 py-1.5 border-2 border-[#2F5F88] text-[#2F5F88] rounded-full hover:bg-[#2F5F88] hover:text-white transition-colors font-medium font-sans text-xs"
            >
              {isMockupPage ? 'Close' : 'Get App'}
            </Link>
            
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#2F5F88]">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="py-2 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}