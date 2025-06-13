'use client';

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext';
import { imagePathMap, cloudinaryImages, getCloudinaryUrl } from '@/utils/cloudinaryImages';
import CloudinaryImage from '@/components/CloudinaryImage';
import Image from 'next/image';

export default function About() {
  const { t } = useLanguage();
  
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#f9f0e1] py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-navy-900 mb-6">
              {t('about.hero.title')}
            </h1>
            <p className="text-xl text-navy-800 mb-8 max-w-2xl">
              {t('about.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-navy-900">{t('about.story.title')}</h2>
                <div className="prose prose-lg prose-navy">
                  <p className="text-navy-800 mb-4">
                    {t('about.story.paragraph1')}
                  </p>
                  <p className="text-navy-800 mb-4">
                    {t('about.story.paragraph2')}
                  </p>
                  <p className="text-navy-800 mb-4">
                    {t('about.story.paragraph3')}
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                  <Image 
                    src={getCloudinaryUrl(cloudinaryImages.aboutUsImage)}
                    alt="Memory Bears workspace" 
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-[#f9f0e1]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-navy-900">{t('about.values.title')}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-navy-800">{t('about.value1.title')}</h3>
                <p className="text-navy-700">
                  {t('about.value1.description')}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-navy-800">{t('about.value2.title')}</h3>
                <p className="text-navy-700">
                  {t('about.value2.description')}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-navy-800">{t('about.value3.title')}</h3>
                <p className="text-navy-700">
                  {t('about.value3.description')}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-navy-800">{t('about.value4.title')}</h3>
                <p className="text-navy-700">
                  {t('about.value4.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-navy-900">{t('about.team.title')}</h2>
            <div className="flex justify-center">
              <div className="text-center">
                <div className="w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full shadow-lg">
                  <CloudinaryImage 
                    publicId={imagePathMap['/images/team/team-maria.jpg']}
                    alt={t('about.team.maria.alt')} 
                    width={160} 
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy-800">{t('about.team.maria.name')}</h3>
                <p className="text-navy-700">{t('about.team.maria.role')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#f9f0e1]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-navy-900">{t('about.cta.title')}</h2>
          <p className="text-xl text-navy-800 mb-8 max-w-2xl mx-auto">{t('about.cta.subtitle')}</p>
          <Link href="/services" className="bg-[#f9f0e1] text-navy-900 border-2 border-navy-900 px-8 py-3 rounded-lg hover:bg-[#f0e8d9] transition-colors inline-block font-medium">
            {t('about.cta.button')}
          </Link>
        </div>
      </section>
    </main>
  )
} 