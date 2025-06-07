// src/app/page.tsx
'use client';

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext';
import { useEffect, useState } from 'react';
import { cloudinaryImages, getCloudinaryUrl } from '@/utils/cloudinaryImages';
import CloudinaryImage from '@/components/CloudinaryImage';

export default function Home() {
  const { t, language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Sample placeholder gallery images with Cloudinary URLs
  const galleryImages = [
    getCloudinaryUrl(cloudinaryImages.bears1),
    getCloudinaryUrl(cloudinaryImages.bears2),
    getCloudinaryUrl(cloudinaryImages.bears4),
    getCloudinaryUrl(cloudinaryImages.bears3),
    getCloudinaryUrl(cloudinaryImages.bears5),
    getCloudinaryUrl(cloudinaryImages.bears6)
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
    }, 8000);
    
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
            publicId={cloudinaryImages.bears1}
            alt="Memory Bear" 
            fill
            className="object-cover brightness-95"
            priority
          />
          <div className="absolute inset-0 bg-navy-900/30"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 relative text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl text-[#f9f0e1] mb-6">
              Tenerlos cerca por siempre
            </h1>
          </div>
        </div>
      </section>

      {/* What are Memory Bears Section - Moved up */}
      <section className="py-16 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center items-center mb-8 md:mb-0">
              <div className="w-full h-auto flex justify-center max-w-[400px] md:max-w-full mx-auto">
                <Image 
                  src={getCloudinaryUrl(cloudinaryImages.bears6)}
                  alt="Memory Bears collection" 
                  width={600}
                  height={800}
                  style={{ 
                    maxWidth: '100%', 
                    height: 'auto', 
                    objectFit: 'contain'
                  }}
                  priority
                />
              </div>
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
          <h2 className="text-3xl font-bold text-center mb-12 text-navy-900">{language === 'es' ? 'Nuestros Memory Bears' : 'Our Memory Bears'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="aspect-square w-full max-w-sm mx-auto overflow-hidden rounded-2xl shadow-xl transform hover:scale-[1.02] transition-transform duration-300 group">
              <div className="relative w-full h-full">
                <Image 
                  src={getCloudinaryUrl(cloudinaryImages.bears4)}
                  alt="Memory Bear made from custom fabric" 
                  width={500}
                  height={500}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-medium">Custom Memory Bear</p>
                    <p className="text-sm">Made with love and care</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="aspect-square w-full max-w-sm mx-auto overflow-hidden rounded-2xl shadow-xl transform hover:scale-[1.02] transition-transform duration-300 group">
              <div className="relative w-full h-full">
                <Image 
                  src={getCloudinaryUrl(cloudinaryImages.bears6)}
                  alt="Memory Bears in basket" 
                  width={500}
                  height={500}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-medium">Memory Bears Collection</p>
                    <p className="text-sm">Each one unique and special</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="aspect-square w-full max-w-sm mx-auto overflow-hidden rounded-2xl shadow-xl transform hover:scale-[1.02] transition-transform duration-300 group">
              <div className="relative w-full h-full">
                <Image 
                  src={getCloudinaryUrl(cloudinaryImages.bears5)}
                  alt="Memory Bear made from special fabric" 
                  width={500}
                  height={500}
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

      {/* About Me Section */}
      <section className="py-20 bg-[#f9f0e1]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <Image 
                src={getCloudinaryUrl(cloudinaryImages.teamMaria)}
                alt="Maria - Owner of Memory Bears" 
                width={600}
                height={800}
                className="object-cover object-center w-full h-full"
                priority
              />
            </div>
            <div className="space-y-8 px-4">
              <h2 className="text-5xl font-bold text-navy-900">Sobre Mí</h2>
              <p className="text-xl text-navy-800 leading-relaxed">
                Hola, soy María, la creadora detrás de Memory Bears. Mi pasión es ayudar a las personas 
                a mantener vivos sus recuerdos más preciados a través de estos osos hechos a mano con amor y dedicación.
              </p>
              <p className="text-xl text-navy-800 leading-relaxed">
                Cada Memory Bear que creo es único, como las historias y memorias que representan. 
                Me dedico a asegurar que cada detalle capture la esencia de tus recuerdos más queridos.
              </p>
              <Link 
                href="/about" 
                className="inline-block bg-navy-600 text-white px-10 py-4 rounded-lg hover:bg-navy-700 transition-colors mt-6 text-lg font-medium"
              >
                Conoce más sobre mi historia
              </Link>
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
