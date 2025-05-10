'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lang: 'en' | 'es') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center text-white hover:text-blue-200 transition-colors focus:outline-none"
        aria-label="Toggle language"
      >
        <span className="mr-1">{language === 'en' ? '🇺🇸' : '🇪🇸'}</span>
        <span className="font-medium">{language === 'en' ? 'EN' : 'ES'}</span>
        <svg
          className={`w-4 h-4 ml-1 transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-50">
          <button
            onClick={() => changeLanguage('en')}
            className={`flex items-center w-full px-4 py-2 text-left ${
              language === 'en'
                ? 'bg-navy-100 text-navy-900'
                : 'text-gray-700 hover:bg-navy-50'
            }`}
          >
            <span className="mr-2">🇺🇸</span>
            <span>English</span>
          </button>
          <button
            onClick={() => changeLanguage('es')}
            className={`flex items-center w-full px-4 py-2 text-left ${
              language === 'es'
                ? 'bg-navy-100 text-navy-900'
                : 'text-gray-700 hover:bg-navy-50'
            }`}
          >
            <span className="mr-2">🇪🇸</span>
            <span>Español</span>
          </button>
        </div>
      )}
    </div>
  );
} 