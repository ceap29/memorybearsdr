'use client';

import Image from 'next/image';
import { useState } from 'react';

interface CloudinaryImageProps {
  publicId: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  style?: React.CSSProperties;
}

export default function CloudinaryImage({
  publicId,
  alt,
  width,
  height,
  className = '',
  fill = false,
  sizes,
  priority = false,
  quality = 80,
  style,
}: CloudinaryImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Cloudinary URL format
  const cloudName = 'dhpzoiplq';
  const baseUrl = `https://res.cloudinary.com/${cloudName}/image/upload`;
  
  // Optimization parameters
  const params = [
    'f_auto', // auto format
    'q_auto', // auto quality
    quality !== 80 ? `q_${quality}` : '',
  ].filter(Boolean).join(',');
  
  // Check if publicId is already a full URL
  const isFullUrl = typeof publicId === 'string' && (publicId.startsWith('http://') || publicId.startsWith('https://'));
  const src = !publicId ? '' : (isFullUrl 
    ? publicId 
    : `${baseUrl}/${params ? params + '/' : ''}${publicId}`);

  if (!publicId) {
    console.warn('CloudinaryImage: publicId is required but was not provided');
    return null;
  }

  return (
    <div 
      className={`relative overflow-hidden ${className} ${
        isLoading ? 'animate-pulse bg-gray-200' : ''
      }`}
      style={fill ? { width: '100%', height: '100%', ...style } : style}
    >
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : (width || 500)}
        height={fill ? undefined : (height || 300)}
        fill={fill}
        sizes={sizes}
        priority={priority}
        className={`transition-opacity duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
} 