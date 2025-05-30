// Mapping of local image paths to Cloudinary images
// This makes it easy to replace all local images with Cloudinary URLs

const CLOUDINARY_CLOUD_NAME = 'dhpzoiplq';

// Function to generate a Cloudinary URL
export const getCloudinaryUrl = (publicId: string, transformations: string = 'f_auto,q_auto') => {
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transformations}/${publicId}`;
};

// Common images used throughout the site
export const cloudinaryImages = {
  // Hero and feature bears
  bears1: 'v1748574012/R0004439_pbover.jpg', // Main hero bear
  bears2: 'v1748573788/R0004475_blr8wq.jpg', // Feature bear
  bears3: 'v1748574809/R0004471_qtmifa.jpg', // Additional carousel bear
  bears4: 'v1748576290/IMG_7613_ielmsy.jpg', // New bear image
  bears5: 'v1748576682/R0005002_qrzyqw.jpg', // Additional bear image
  bears6: 'v1748576688/R0004471_copy_ga7567.jpg', // What are Memory Bears section image
  
  // Team member
  teamMaria: 'v1748574079/R0005019_oxep5b.jpg', // Owner photo
  
  // Mouse cursor
  bearCursor: 'v1748572463/FOTO_DEL_MOUSE_hjip7v.png',

  // Logo
  logo: 'v1748572966/Logo_wxpjg9.png',
};

// Map for replacing local paths with Cloudinary paths
export const imagePathMap: Record<string, string> = {
  '/images/bears1.jpeg': getCloudinaryUrl(cloudinaryImages.bears1),
  '/images/bears2.jpeg': getCloudinaryUrl(cloudinaryImages.bears2),
  '/images/team/team-maria.jpg': getCloudinaryUrl(cloudinaryImages.teamMaria),
};

export default imagePathMap; 