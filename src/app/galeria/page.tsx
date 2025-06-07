'use client';

import { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import { cloudinaryImages } from '@/utils/cloudinaryImages';

interface ImageDimensions {
  [key: string]: { width: number; height: number };
}

export default function Galeria() {
  const { t } = useLanguage();
  const [imageDimensions, setImageDimensions] = useState<ImageDimensions>({});
  const [loading, setLoading] = useState(true);
  
  // Gallery images with direct Cloudinary URLs
  const galleryImages = useMemo(() => [
    // The provided images
    {
      url: 'v1748576706/R0005390_kogzs9.jpg',
      alt: 'Memory Bear Gallery Image 1'
    },
    {
      url: 'v1748576706/R0005387_neojth.jpg',
      alt: 'Memory Bear Gallery Image 2'
    },
    {
      url: 'v1748576701/R0004479_dtorhj.jpg',
      alt: 'Memory Bear Gallery Image 3'
    },
    // Adding more images from the existing cloudinaryImages
    {
      url: cloudinaryImages.bears1,
      alt: 'Memory Bear Gallery Image 4'
    },
    {
      url: cloudinaryImages.bears2,
      alt: 'Memory Bear Gallery Image 5'
    },
    {
      url: cloudinaryImages.bears3,
      alt: 'Memory Bear Gallery Image 6'
    },
    {
      url: cloudinaryImages.bears4,
      alt: 'Memory Bear Gallery Image 7'
    },
    {
      url: cloudinaryImages.bears5,
      alt: 'Memory Bear Gallery Image 8'
    },
    {
      url: cloudinaryImages.bears6,
      alt: 'Memory Bear Gallery Image 9'
    }
  ], []);

  // Fetch image dimensions from Cloudinary using their API
  useEffect(() => {
    const fetchImageDimensions = async () => {
      const dimensions: ImageDimensions = {};
      
      // Create a cloud name variable for Cloudinary
      const cloudName = 'dhpzoiplq';
      
      // Fetch dimensions for each image
      for (const image of galleryImages) {
        try {
          // Fetch image info from Cloudinary
          const response = await fetch(
            `https://res.cloudinary.com/${cloudName}/image/upload/w_0.5/${image.url}`
          );
          
          // Create temporary image to get dimensions
          const img = document.createElement('img');
          img.src = URL.createObjectURL(await response.blob());
          
          await new Promise<void>((resolve) => {
            img.onload = () => {
              dimensions[image.url] = {
                width: img.naturalWidth * 2, // Multiply by 2 since we're fetching at half size
                height: img.naturalHeight * 2,
              };
              resolve();
            };
          });
        } catch (error) {
          console.error(`Error fetching dimensions for ${image.url}:`, error);
          // Provide default dimensions if fetching fails
          dimensions[image.url] = { width: 800, height: 600 };
        }
      }
      
      setImageDimensions(dimensions);
      setLoading(false);
    };
    
    fetchImageDimensions();
  }, [galleryImages]);
  
  // State for lightbox/modal
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f9f0e1]">
        <div className="text-navy-900 text-xl">Loading gallery...</div>
      </div>
    );
  }
  
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#f9f0e1] py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-navy-900 mb-6">
              {t('gallery.hero.title')}
            </h1>
            <p className="text-xl text-navy-800 mb-8 max-w-2xl">
              {t('gallery.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section with Natural Sizes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Masonry-like grid layout */}
            <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
              {galleryImages.map((image, index) => {
                const dimensions = imageDimensions[image.url] || { width: 400, height: 300 };
                return (
                  <div 
                    key={index}
                    className="break-inside-avoid mb-4 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                    onClick={() => setSelectedImage(image.url)}
                  >
                    <div className="relative">
                      <Image 
                        src={`https://res.cloudinary.com/dhpzoiplq/image/upload/f_auto,q_auto/${image.url}`}
                        alt={image.alt}
                        width={dimensions.width}
                        height={dimensions.height}
                        className="w-full h-auto hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox/Modal for enlarged view */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-full">
            <button 
              className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center text-navy-900 z-10 text-xl"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              ✕
            </button>
            <div className="relative w-full max-h-[90vh]">
              <Image 
                src={`https://res.cloudinary.com/dhpzoiplq/image/upload/f_auto,q_auto/${selectedImage}`}
                alt="Enlarged gallery image"
                width={imageDimensions[selectedImage]?.width || 1600}
                height={imageDimensions[selectedImage]?.height || 1200}
                className="object-contain max-h-[90vh] w-auto mx-auto"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
} 