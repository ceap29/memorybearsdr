'use client';

import React from 'react';
import CloudinaryImage from './CloudinaryImage';

export default function CloudinaryTest() {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <h2 className="text-2xl font-bold mb-4 text-navy-800">Cloudinary Image Test</h2>
      
      {/* Example 1: Using full URL */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3 text-navy-700">Example 1: Full URL</h3>
        <div className="relative w-full max-w-lg h-80 rounded-lg overflow-hidden shadow-lg">
          <CloudinaryImage
            publicId="https://res.cloudinary.com/dhpzoiplq/image/upload/v1748099933/WhatsApp_Image_2025-05-23_at_7.09.10_PM_1_mqgiie.jpg"
            alt="Memory Bear Example"
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            priority
          />
        </div>
      </div>
      
      {/* Example 2: Using just the public ID */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3 text-navy-700">Example 2: Public ID Only</h3>
        <CloudinaryImage
          publicId="WhatsApp_Image_2025-05-23_at_7.09.10_PM_1_mqgiie"
          alt="Memory Bear Example"
          width={500}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
      
      {/* Example 3: With transformations */}
      <div>
        <h3 className="text-xl font-semibold mb-3 text-navy-700">Example 3: With Transformations</h3>
        <CloudinaryImage
          publicId="v1748099933/WhatsApp_Image_2025-05-23_at_7.09.10_PM_1_mqgiie.jpg"
          alt="Memory Bear Example with transformations"
          width={400}
          height={300}
          className="rounded-lg shadow-lg"
          quality={90}
        />
      </div>
      
      <p className="mt-8 text-navy-600 text-center max-w-md">
        These images are being served from Cloudinary with Next.js Image optimization.
      </p>
    </div>
  );
} 