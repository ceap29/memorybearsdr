'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';
import { cloudinaryImages, getCloudinaryUrl } from '@/utils/cloudinaryImages';
import { usePathname } from 'next/navigation';

export default function DynamicNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isTopSection, setIsTopSection] = useState(true);
  const { t, language } = useLanguage();
  const navbarRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  
  // Check if we're on the homepage
  const isHomePage = pathname === '/';

  // Generate the Cloudinary URL for the logo
  const logoUrl = getCloudinaryUrl(cloudinaryImages.logo);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Only use the dynamic positioning on the homepage
    if (!isHomePage) {
      setIsSticky(true);
      setIsTopSection(false);
      return;
    }
    
    const heroSection = document.querySelector('section:first-of-type');
    if (heroSection) {
      heroSectionRef.current = heroSection as HTMLDivElement;
    }

    const handleScroll = () => {
      if (heroSectionRef.current && navbarRef.current) {
        const heroRect = heroSectionRef.current.getBoundingClientRect();
        const scrollPosition = window.scrollY;
        
        // Set isTopSection based on scroll position
        // Always true when at the top of the page
        setIsTopSection(scrollPosition <= 50);
        
        // Make navbar sticky when scrolled down
        setIsSticky(scrollPosition > 50);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage]);

  // Determine navbar class based on page type and scroll position
  const navbarClass = !isHomePage 
    ? 'nav-fixed' // Always fixed for inner pages
    : isSticky 
      ? 'nav-fixed' 
      : 'nav-absolute'; // Always positioned at top

  return (
    <div 
      ref={navbarRef}
      className={`w-full transition-all duration-300 ${navbarClass}`}
    >
      <nav className="bg-[#f9f0e1]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            {/* Logo */}
            <Link href="/" className="flex items-center -my-4">
              <Image
                src={logoUrl}
                alt="Memory Bears Logo"
                width={1000}
                height={1000}
                className="w-auto h-32"
                priority
              />
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
                href="/galeria" 
                className="text-navy-900 hover:text-navy-600 font-medium transition-colors"
              >
                {t('nav.gallery')}
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
                  href="/galeria" 
                  className="text-navy-900 hover:text-navy-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.gallery')}
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