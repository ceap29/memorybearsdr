'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function DynamicNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isTopSection, setIsTopSection] = useState(true);
  const { t } = useLanguage();
  const navbarRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const heroSection = document.querySelector('section:first-of-type');
    if (heroSection) {
      heroSectionRef.current = heroSection as HTMLDivElement;
    }

    const handleScroll = () => {
      if (heroSectionRef.current && navbarRef.current) {
        const heroRect = heroSectionRef.current.getBoundingClientRect();
        const heroBottomVisible = heroRect.bottom > 0;
        
        // Check if any part of the hero section is still visible
        setIsTopSection(heroBottomVisible);
        
        // Make navbar sticky only when hero section is completely out of view
        setIsSticky(!heroBottomVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      ref={navbarRef}
      className={`w-full transition-all duration-300 ${
        isSticky 
          ? 'nav-fixed shadow-md' 
          : isTopSection 
            ? 'nav-absolute' 
            : ''
      }`}
    >
      <nav className="bg-[#f9f0e1]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-navy-900">Memory Bears</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link 
                href="/" 
                className="text-navy-900 hover:text-navy-600 font-medium transition-colors"
              >
                {t('nav.home')}
              </Link>
              <Link 
                href="/about" 
                className="text-navy-900 hover:text-navy-600 font-medium transition-colors"
              >
                {t('nav.about')}
              </Link>
              <Link 
                href="/services" 
                className="text-navy-900 hover:text-navy-600 font-medium transition-colors"
              >
                {t('nav.services')}
              </Link>
              <Link 
                href="/contact" 
                className="text-navy-900 hover:text-navy-600 font-medium transition-colors"
              >
                {t('nav.contact')}
              </Link>
              <Link 
                href="/contact" 
                className="bg-navy-900 text-[#f9f0e1] px-4 py-2 rounded-lg hover:bg-navy-700 font-medium transition-colors"
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
                className="text-navy-900 focus:outline-none"
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
                  className="text-navy-900 hover:text-navy-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.home')}
                </Link>
                <Link 
                  href="/about" 
                  className="text-navy-900 hover:text-navy-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.about')}
                </Link>
                <Link 
                  href="/services" 
                  className="text-navy-900 hover:text-navy-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.services')}
                </Link>
                <Link 
                  href="/contact" 
                  className="text-navy-900 hover:text-navy-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.contact')}
                </Link>
                <Link 
                  href="/contact" 
                  className="bg-navy-900 text-[#f9f0e1] px-4 py-2 rounded-lg hover:bg-navy-700 font-medium transition-colors inline-block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.orderNow')}
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
} 