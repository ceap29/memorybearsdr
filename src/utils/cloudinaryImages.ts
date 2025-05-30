// Mapping of local image paths to Cloudinary images
// This makes it easy to replace all local images with Cloudinary URLs

const CLOUDINARY_CLOUD_NAME = 'dhpzoiplq';

// Function to generate a Cloudinary URL
export const getCloudinaryUrl = (publicId: string, transformations: string = 'f_auto,q_auto') => {
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transformations}/${publicId}`;
};

// Common images used throughout the site
export const cloudinaryImages = {
  // The main WhatsApp bear image from your example
  bearExample: 'v1748099933/WhatsApp_Image_2025-05-23_at_7.09.10_PM_1_mqgiie.jpg',
  
  // Hero and feature bears
  bears1: 'v1748099933/WhatsApp_Image_2025-05-23_at_7.09.10_PM_1_mqgiie.jpg', // Main hero bear
  bears2: 'v1748099933/WhatsApp_Image_2025-05-23_at_7.09.10_PM_1_mqgiie.jpg', // Feature bear
  
  // Individual bears
  bear1: 'v1748099933/WhatsApp_Image_2025-05-23_at_7.09.10_PM_1_mqgiie.jpg', // Blue bear
  bear2: 'v1748099933/WhatsApp_Image_2025-05-23_at_7.09.10_PM_1_mqgiie.jpg', // Patterned bear
  bearWithName: 'v1748099933/WhatsApp_Image_2025-05-23_at_7.09.10_PM_1_mqgiie.jpg', // Bear with longer filename
  
  // Team member
  teamMaria: 'v1748099933/WhatsApp_Image_2025-05-23_at_7.09.10_PM_1_mqgiie.jpg',
  
  // Mouse cursor
  bearCursor: 'v1748572463/FOTO_DEL_MOUSE_hjip7v.png',
};

// Map for replacing local paths with Cloudinary paths
export const imagePathMap: Record<string, string> = {
  '/images/bears1.jpeg': getCloudinaryUrl(cloudinaryImages.bears1),
  '/images/bears2.jpeg': getCloudinaryUrl(cloudinaryImages.bears2),
  '/images/bears/bear-1.jpg': getCloudinaryUrl(cloudinaryImages.bear1),
  '/images/bears/bear-2.jpg': getCloudinaryUrl(cloudinaryImages.bear2),
  '/images/bears/470476924_1766568270767959_4439408825831558086_n.jpg': getCloudinaryUrl(cloudinaryImages.bearWithName),
  '/images/bears/416496745_415495587670378_2906139019863539328_n.jpg': getCloudinaryUrl(cloudinaryImages.bearWithName),
  '/images/team/team-maria.jpg': getCloudinaryUrl(cloudinaryImages.teamMaria),
};

export default imagePathMap; 