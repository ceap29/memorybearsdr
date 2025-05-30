'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';
import { cloudinaryImages, getCloudinaryUrl } from '@/utils/cloudinaryImages';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  // Generate the Cloudinary URL for the logo
  const logoUrl = getCloudinaryUrl(cloudinaryImages.logo);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-navy-900 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center -my-4">
            <Image
              src={logoUrl}
              alt="Memory Bears Logo"
              width={1000}
              height={1000}
              className="w-auto h-32 brightness-0 invert"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="/" 
              className="text-white hover:text-blue-200 font-medium transition-colors"
            >
              {t('nav.home')}
            </Link>
            <Link 
              href="/about" 
              className="text-white hover:text-blue-200 font-medium transition-colors"
            >
              {t('nav.about')}
            </Link>
            <Link 
              href="/services" 
              className="text-white hover:text-blue-200 font-medium transition-colors"
            >
              {t('nav.services')}
            </Link>
            <Link 
              href="/contact" 
              className="text-white hover:text-blue-200 font-medium transition-colors"
            >
              {t('nav.contact')}
            </Link>
            <Link 
              href="/contact" 
              className="bg-[#f9f0e1] text-navy-900 px-4 py-2 rounded-lg hover:bg-[#f0e8d9] font-medium transition-colors"
            >
              {t('nav.orderNow')}
            </Link>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button 
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {!isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 pb-6">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-white hover:text-blue-200 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link 
                href="/about" 
                className="text-white hover:text-blue-200 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
              <Link 
                href="/services" 
                className="text-white hover:text-blue-200 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.services')}
              </Link>
              <Link 
                href="/contact" 
                className="text-white hover:text-blue-200 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>
              <Link 
                href="/contact" 
                className="bg-[#f9f0e1] text-navy-900 px-4 py-2 rounded-lg hover:bg-[#f0e8d9] font-medium transition-colors inline-block"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.orderNow')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 