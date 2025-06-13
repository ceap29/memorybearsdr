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
              Acerca de
            </h1>
            <p className="text-xl text-navy-800 mb-8 max-w-2xl">
              Memory Bears comenzó con una idea simple pero poderosa: ayudar a las personas a preservar recuerdos valiosos de sus seres queridos y momentos importantes de la vida, de una manera tangible y reconfortante.
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
                <h2 className="text-3xl font-bold text-navy-900">Nuestra Historia</h2>
                <div className="prose prose-lg prose-navy">
                  <p className="text-navy-800 mb-4">
                    Nuestra fundadora, Maria Leroux, creó el primer Memory Bear en el año 2022, tras la pérdida de su querido abuelito Elidio. En medio del duelo, buscaba una forma de mantenerlo cerca y honrar su presencia en su vida. Así nació el primer osito, hecho a partir de una prenda que lo representaba, como un símbolo de amor, memoria y consuelo.
                  </p>
                  <p className="text-navy-800 mb-4">
                    Lo que comenzó como un acto personal lleno de significado, pronto se transformó en una misión. Familiares y amigos, conmovidos por el detalle y la historia detrás del osito, comenzaron a pedir los suyos. Pronto, Memory Bears se convirtió en una forma de acompañar a otros no solo en el duelo, sino también en la celebración de momentos únicos: nacimientos, primeras etapas de vida, despedidas, graduaciones o cualquier recuerdo que merezca ser atesorado.
                  </p>
                  <p className="text-navy-800 mb-4">
                    Hoy, Memory Bears es un proyecto lleno de corazón, donde cada osito es hecho a mano con amor y dedicación. Nuestro pequeño equipo transforma prendas llenas de historia en recuerdos que puedes abrazar, conmemorando tanto a quienes ya no están, como los momentos que queremos guardar para siempre. Porque detrás de cada costura hay una historia que merece ser honrada.
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
            <h2 className="text-3xl font-bold mb-8 text-navy-900">Nuestros Valores</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-navy-800">Memoria</h3>
                <p className="text-navy-700">
                  En el corazón de cada osito está una historia, una persona, un momento. Memory Bears nace del deseo de preservar recuerdos importantes de manera tangible, y convertirlos en un símbolo que perdura.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-navy-800">Cuidado</h3>
                <p className="text-navy-700">
                  Cada osito es confeccionado a mano con atención al detalle, respeto por cada historia y amor por lo que representa. Aquí no se trabaja en serie, se trabaja con el alma.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-navy-800">Conexión</h3>
                <p className="text-navy-700">
                  Memory Bears une generaciones, emociones y personas a través de objetos que hablan sin palabras. Es un puente entre lo que fue, lo que es, y lo que queremos mantener presente.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-navy-800">Esperanza</h3>
                <p className="text-navy-700">
                  Ya sea en medio del duelo o en la celebración de una nueva etapa, cada osito representa la certeza de que los recuerdos siguen vivos, y de que hay belleza incluso en los momentos difíciles.
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
            <h2 className="text-3xl font-bold mb-12 text-center text-navy-900">Nuestro Equipo</h2>
            <div className="flex justify-center">
              <div className="text-center">
                <div className="w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full shadow-lg">
                  <CloudinaryImage 
                    publicId={imagePathMap['/images/team/team-maria.jpg']}
                    alt="Maria - Fundadora de Memory Bears" 
                    width={160} 
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy-800">Maria</h3>
                <p className="text-navy-700">Fundadora</p>
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