'use client';

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();
  
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#f9f0e1] py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-navy-900 mb-6">
              {t('services.hero.title')}
            </h1>
            <p className="text-xl text-navy-800 mb-8 max-w-2xl">
              {t('services.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-navy-900">{t('services.howItWorks.title')}</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-navy-800 mb-6">
                {t('services.description')}
              </p>
              
              <h3 className="text-2xl font-semibold mt-8 mb-4 text-navy-800">{t('services.process.title')}</h3>
              <ol className="space-y-4">
                <li className="text-navy-800">
                  <span className="font-semibold">{t('services.process.step1.title')}</span> {t('services.process.step1.description')}
                </li>
                <li className="text-navy-800">
                  <span className="font-semibold">{t('services.process.step2.title')}</span> {t('services.process.step2.description')}
                </li>
                <li className="text-navy-800">
                  <span className="font-semibold">{t('services.process.step3.title')}</span> {t('services.process.step3.description')}
                </li>
                <li className="text-navy-800">
                  <span className="font-semibold">{t('services.process.step4.title')}</span> {t('services.process.step4.description')}
                </li>
                <li className="text-navy-800">
                  <span className="font-semibold">{t('services.process.step5.title')}</span> {t('services.process.step5.description')}
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Service Options */}
      <section className="py-16 bg-[#f9f0e1]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-navy-900">{t('services.options.title')}</h2>
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-navy-200 py-4">
                <h3 className="text-xl font-bold text-center text-navy-900">{t('services.bear1.title')}</h3>
              </div>
              <div className="p-6">
                <p className="text-navy-800 mb-4">{t('services.bear1.description')}</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-navy-600 mr-2">✓</span>
                    <span className="text-navy-700">{t('services.bear1.feature1')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy-600 mr-2">✓</span>
                    <span className="text-navy-700">{t('services.bear1.feature2')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy-600 mr-2">✓</span>
                    <span className="text-navy-700">{t('services.bear1.feature3')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy-600 mr-2">✓</span>
                    <span className="text-navy-700">{t('services.bear1.feature4')}</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Link href="#contact" className="bg-[#f9f0e1] text-navy-900 border border-navy-600 px-6 py-2 rounded-lg hover:bg-[#f0e8d9] transition-colors inline-block font-medium">
                    {t('services.getStarted')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-navy-900">{t('services.addons.title')}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#f9f0e1] p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-navy-800">{t('services.addon1.title')}</h3>
                <p className="text-navy-700 mb-4">
                  {t('services.addon1.description')}
                </p>
              </div>
              <div className="bg-[#f9f0e1] p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-navy-800">{t('services.addon3.title')}</h3>
                <p className="text-navy-700 mb-4">
                  {t('services.addon3.description')}
                </p>
              </div>
              <div className="bg-[#f9f0e1] p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-navy-800">{t('services.addon4.title')}</h3>
                <p className="text-navy-700 mb-4">
                  {t('services.addon4.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Anchor */}
      <section id="contact" className="py-16 bg-[#f9f0e1]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-navy-900">{t('services.contact.title')}</h2>
          <p className="text-xl text-navy-800 mb-8 max-w-2xl mx-auto">
            {t('services.contact.description')}
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-navy-800">{t('services.contact.email.title')}</h3>
              <p className="text-navy-700">{t('services.contact.email.value')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-navy-800">{t('services.contact.phone.title')}</h3>
              <p className="text-navy-700">{t('services.contact.phone.value')}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 