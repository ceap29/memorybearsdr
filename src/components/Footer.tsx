'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import { cloudinaryImages, getCloudinaryUrl } from '@/utils/cloudinaryImages';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  // Generate the Cloudinary URL for the logo
  const logoUrl = getCloudinaryUrl(cloudinaryImages.logo);

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <div className="-mt-4 mb-2">
              <Image
                src={logoUrl}
                alt="Memory Bears Logo"
                width={1000}
                height={1000}
                className="w-auto h-32 brightness-0 invert"
                priority
              />
            </div>
            <p className="mb-4 text-blue-200">
              {t('footer.about')}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/memorybearsdr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.7 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85 0-3.2.01-3.58.07-4.85.15-3.23 1.67-4.77 4.92-4.92 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.7.07 7.05.01 8.33 0 8.74 0 12c0 3.26.01 3.67.07 4.95.2 4.36 2.62 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07 3.26 0 3.67-.01 4.95-.07 4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95 0-3.26-.01-3.67-.07-4.95-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84c-3.4 0-6.16 2.76-6.16 6.16 0 3.4 2.76 6.16 6.16 6.16 3.4 0 6.16-2.76 6.16-6.16 0-3.4-2.76-6.16-6.16-6.16zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm6.4-11.85c-.8 0-1.44.65-1.44 1.44 0 .8.65 1.44 1.44 1.44.8 0 1.44-.65 1.44-1.44 0-.8-.65-1.44-1.44-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-200 hover:text-white transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-200 hover:text-white transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-200 hover:text-white transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="text-blue-200 hover:text-white transition-colors">
                  {t('nav.gallery')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-200 hover:text-white transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-blue-200 hover:text-white transition-colors">
                  {t('services.bear1.title')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('nav.contact')}</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="w-5 h-5 mt-0.5 mr-2 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-blue-200">info@memorybearsdr.com</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mt-0.5 mr-2 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-blue-200">+1 (809) 555-1234</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-blue-800 text-center text-blue-300">
          <p>{t('footer.copyright').replace('{year}', currentYear.toString())}</p>
        </div>
      </div>
    </footer>
  );
} 