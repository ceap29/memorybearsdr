// src/app/page.tsx
'use client';

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext';
import { useEffect, useState } from 'react';
import { imagePathMap } from '@/utils/cloudinaryImages';
import CloudinaryImage from '@/components/CloudinaryImage';

export default function Home() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Sample placeholder gallery images with Cloudinary URLs
  const galleryImages = [
    imagePathMap['/images/bears1.jpeg'],
    imagePathMap['/images/bears2.jpeg'],
    imagePathMap['/images/bears/bear-1.jpg'],
    imagePathMap['/images/bears/bear-2.jpg'],
    imagePathMap['/images/bears/470476924_1766568270767959_4439408825831558086_n.jpg'],
    // Add more images here to have more items in the carousel
    imagePathMap['/images/bears1.jpeg'],
    imagePathMap['/images/bears2.jpeg'],
    imagePathMap['/images/bears/bear-1.jpg'],
    imagePathMap['/images/bears/bear-2.jpg'],
  ];

  // Check for mobile screens
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const imagesPerSlide = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(galleryImages.length / imagesPerSlide);

  // Auto-advance the gallery slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [totalSlides]);

  // Function to navigate to a specific slide set
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <CloudinaryImage 
            publicId={imagePathMap['/images/bears1.jpeg']}
            alt="Memory Bear" 
            fill
            className="object-cover brightness-95"
            priority
          />
          <div className="absolute inset-0 bg-navy-900/30"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 relative text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-[#f9f0e1] mb-6">
              Tenerlos cerca por siempre
            </h1>
          </div>
        </div>
      </section>

      {/* What are Memory Bears Section - Moved up */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <CloudinaryImage 
                publicId={imagePathMap['/images/bears2.jpeg']}
                alt="Memory Bears collection" 
                width={600}
                height={500}
                className="rounded-lg shadow-md object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-navy-900">¿Qué son Memory Bears?</h2>
              <p className="text-lg text-navy-800">
                Los Memory Bears son peluches hechos a mano a partir de ropa o artículos especiales 
                de tus seres queridos, conservando así su memoria de forma tangible y reconfortante.
              </p>
              <p className="text-lg text-navy-800">
                Cada Memory Bear es único y personalizado, creado con cariño para preservar recuerdos 
                y proporcionar consuelo en momentos difíciles.
              </p>
              <Link href="/about" className="inline-block bg-navy-600 text-white px-8 py-3 rounded-lg hover:bg-navy-700 transition-colors mt-4">
                {t('home.learnMore')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Bear Images */}
      <section className="py-16 bg-[#f9f0e1]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-navy-900">Our Memory Bears</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-lg shadow-md h-80 relative group">
              <CloudinaryImage 
                publicId={imagePathMap['/images/bears/bear-1.jpg']}
                alt="Memory Bear made from blue fabric" 
                fill
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <p className="font-medium">Blue Memory Bear</p>
                  <p className="text-sm">Made from cherished fabric</p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-md h-80 relative group">
              <CloudinaryImage 
                publicId={imagePathMap['/images/bears/bear-2.jpg']}
                alt="Memory Bear made from special fabric" 
                fill
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <p className="font-medium">Patterned Memory Bear</p>
                  <p className="text-sm">Created from special clothing</p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-md h-80 relative group">
              <CloudinaryImage 
                publicId={imagePathMap['/images/bears/470476924_1766568270767959_4439408825831558086_n.jpg']}
                alt="Memory Bear made from special fabric" 
                fill
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <p className="font-medium">Custom Memory Bear</p>
                  <p className="text-sm">Handcrafted with love</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-navy-900">{t('home.howItWorks')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature cards */}
            <div className="p-6 bg-[#f9f0e1] rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-navy-600 text-center text-3xl mb-4">1</div>
              <h3 className="text-xl font-semibold mb-4 text-navy-900 text-center">{t('home.step1.title')}</h3>
              <p className="text-navy-700">{t('home.step1.description')}</p>
            </div>
            <div className="p-6 bg-[#f9f0e1] rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-navy-600 text-center text-3xl mb-4">2</div>
              <h3 className="text-xl font-semibold mb-4 text-navy-900 text-center">{t('home.step2.title')}</h3>
              <p className="text-navy-700">{t('home.step2.description')}</p>
            </div>
            <div className="p-6 bg-[#f9f0e1] rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-navy-600 text-center text-3xl mb-4">3</div>
              <h3 className="text-xl font-semibold mb-4 text-navy-900 text-center">{t('home.step3.title')}</h3>
              <p className="text-navy-700">{t('home.step3.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Full-screen Gallery Section - Using Cloudinary Images */}
      <section className="relative h-[70vh] w-full overflow-hidden bg-[#f9f0e1]">
        {/* Gallery Image Carousel - Multiple Images Visible */}
        <div className="relative h-full w-full overflow-hidden">
          <div 
            className="flex gallery-carousel h-full"
            style={{
              transform: `translateX(-${currentSlide * (100 / imagesPerSlide)}%)`,
              width: `${galleryImages.length * (100 / imagesPerSlide)}%`
            }}
          >
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="relative h-full"
                style={{ width: `${100 / imagesPerSlide}%` }}
              >
                <div className="relative h-full w-full overflow-hidden">
                  <Image 
                    src={image}
                    alt={`Memory Bear Gallery Image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={index < 3}
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Dots Only */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`gallery-dot ${currentSlide === index ? 'active' : ''}`}
                aria-label={`Go to slide set ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-navy-900">{t('home.testimonials')}</h2>
          <div className="max-w-3xl mx-auto p-8 bg-[#f9f0e1] rounded-lg shadow-md">
            <p className="text-navy-800 italic text-lg mb-4">&ldquo;After losing my dad, I wanted something special to remember him by. The Memory Bear made from his favorite flannel shirt brings me comfort every day. It&apos;s beautifully made and means the world to me.&rdquo;</p>
            <p className="text-navy-700 font-semibold">- Sarah Johnson</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#f9f0e1]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-navy-900">{t('home.cta.title')}</h2>
          <p className="text-xl text-navy-800 mb-8 max-w-2xl mx-auto">{t('home.cta.subtitle')}</p>
          <Link href="/services" className="bg-navy-900 text-[#f9f0e1] px-8 py-3 rounded-lg hover:bg-navy-700 transition-colors inline-block font-medium">
            {t('home.cta.button')}
          </Link>
        </div>
      </section>
    </main>
  )
}
