'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { cloudinaryImages, getCloudinaryUrl } from '@/utils/cloudinaryImages';

export default function MouseSilhouette() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Generate the Cloudinary URL for the cursor image
  const cursorImageUrl = getCloudinaryUrl(cloudinaryImages.bearCursor);

  useEffect(() => {
    // Check if it's a touch device
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    
    checkTouchDevice();

    // If it's a touch device, don't show the cursor
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Add mouse movement event listeners
    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    // Clean up event listeners
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, isTouchDevice]);

  // Don't render anything on touch devices
  if (isTouchDevice) {
    return null;
  }

  return (
    <div 
      className="mouse-silhouette"
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        opacity: isVisible ? 1 : 0,
        transform: `translate(-50%, -50%)`, 
      }}
    >
      <div className="bear-image-container">
        <Image
          src={cursorImageUrl}
          alt="Mouse cursor"
          width={40}
          height={40}
          className="bear-image"
          priority={true}
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  );
} 