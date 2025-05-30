'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { cloudinaryImages, getCloudinaryUrl } from '@/utils/cloudinaryImages';

// Number of trail elements
const TRAIL_LENGTH = 6;

export default function MouseSilhouette() {
  const [positions, setPositions] = useState(Array(TRAIL_LENGTH).fill({ x: 0, y: 0 }));
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const requestRef = useRef<number>(0);
  const mousePosition = useRef({ x: 0, y: 0 });

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
      mousePosition.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Animation loop for smooth trails
    const animate = () => {
      // Update positions with delayed effect
      setPositions(prevPositions => {
        const newPositions = [...prevPositions];
        
        // Update first position directly with current mouse position
        newPositions[0] = { ...mousePosition.current };
        
        // Update following positions with delay (easing towards the position ahead of them)
        for (let i = 1; i < TRAIL_LENGTH; i++) {
          newPositions[i] = {
            x: newPositions[i].x + (newPositions[i-1].x - newPositions[i].x) * 0.18,
            y: newPositions[i].y + (newPositions[i-1].y - newPositions[i].y) * 0.18
          };
        }
        
        return newPositions;
      });
      
      requestRef.current = requestAnimationFrame(animate);
    };

    // Add mouse movement event listeners
    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    requestRef.current = requestAnimationFrame(animate);

    // Clean up event listeners and animation
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isVisible, isTouchDevice]);

  // Don't render anything on touch devices
  if (isTouchDevice) {
    return null;
  }

  const getSize = (index: number) => {
    const baseSize = 40;
    const minSize = 20;
    const reduction = (baseSize - minSize) / TRAIL_LENGTH;
    return Math.max(minSize, baseSize - (index * reduction));
  };

  return (
    <>
      {positions.map((position, index) => {
        const size = getSize(index);
        
        return (
          <div 
            key={index}
            className="mouse-silhouette"
            style={{ 
              left: `${position.x}px`, 
              top: `${position.y}px`,
              opacity: isVisible ? Math.max(0, 1 - (index * 0.18)) : 0, // Fade out older trail elements
              transform: `translate(-50%, -50%)`, 
              transitionDuration: `${0.1 + index * 0.05}s`,
            }}
          >
            <div 
              className="bear-image-container"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                animationDelay: `-${index * 0.3}s` // Offset animation for trail elements
              }}
            >
              <Image
                src={cursorImageUrl}
                alt="Mouse cursor"
                width={size}
                height={size}
                className="bear-image"
                priority={index === 0}
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        );
      })}
    </>
  );
} 