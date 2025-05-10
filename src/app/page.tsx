// src/app/page.tsx
'use client';

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext';
import { useRef, useEffect, useState } from 'react';

export default function Home() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Load video when component mounts
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      const handleVideoLoaded = () => {
        setIsVideoLoaded(true);
      };
      video.addEventListener('loadeddata', handleVideoLoaded);
      return () => {
        video.removeEventListener('loadeddata', handleVideoLoaded);
      };
    }
  }, []);
  
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#f9f0e1] py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-navy-900 mb-6">
              {t('home.hero.title')}
            </h1>
            <p className="text-xl text-navy-800 mb-8 max-w-2xl">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex gap-4">
              <Link href="/services" className="bg-navy-600 text-white px-8 py-3 rounded-lg hover:bg-navy-700 transition-colors">
                {t('home.services')}
              </Link>
              <Link href="/about" className="bg-white text-navy-600 border border-navy-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                {t('home.learnMore')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Bear Images */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-navy-900">Our Memory Bears</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-lg shadow-md h-80 relative group">
              <Image 
                src="/images/bears/bear-1.jpg" 
                alt="Memory Bear made from blue fabric" 
                width={500} 
                height={500}
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
              <Image 
                src="/images/bears/bear-2.jpg" 
                alt="Memory Bear made from special fabric" 
                width={500} 
                height={500}
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
              <Image 
                src="/images/bears/470476924_1766568270767959_4439408825831558086_n.jpg" 
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
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#f9f0e1]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-navy-900">{t('home.howItWorks')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature cards */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-navy-600 text-center text-3xl mb-4">1</div>
              <h3 className="text-xl font-semibold mb-4 text-navy-900 text-center">{t('home.step1.title')}</h3>
              <p className="text-navy-700">{t('home.step1.description')}</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-navy-600 text-center text-3xl mb-4">2</div>
              <h3 className="text-xl font-semibold mb-4 text-navy-900 text-center">{t('home.step2.title')}</h3>
              <p className="text-navy-700">{t('home.step2.description')}</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-navy-600 text-center text-3xl mb-4">3</div>
              <h3 className="text-xl font-semibold mb-4 text-navy-900 text-center">{t('home.step3.title')}</h3>
              <p className="text-navy-700">{t('home.step3.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-navy-900">See How We Create Memory Bears</h2>
            <div className="relative overflow-hidden rounded-lg shadow-xl bg-[#f9f0e1]">
              {!isVideoLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-navy-600"></div>
                </div>
              )}
              <div className="relative pt-[56.25%]">
                <Image 
                  src="/images/video-thumbnail.jpg" 
                  alt="Memory Bear Creation Video" 
                  fill
                  className="object-cover"
                />
                {/* Note: The video file is currently a placeholder. 
                    Uncomment this when you have a real video file:
                <video 
                  ref={videoRef}
                  controls 
                  className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
                  poster="/images/video-thumbnail.jpg"
                >
                  <source src="/videos/process-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                */}
              </div>
              <div className="p-6 text-center">
                <p className="text-navy-800 italic">Watch our artisans transform cherished clothing into beautiful memory bears.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-[#f9f0e1]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-navy-900">{t('home.testimonials')}</h2>
          <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-md">
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
          <Link href="/services" className="bg-[#f9f0e1] text-navy-900 border-2 border-navy-900 px-8 py-3 rounded-lg hover:bg-[#f0e8d9] transition-colors inline-block font-medium">
            {t('home.cta.button')}
          </Link>
        </div>
      </section>
    </main>
  )
}
