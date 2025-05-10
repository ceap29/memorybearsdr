'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const defaultLanguage: Language = 'en';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(defaultLanguage);
  const [translations, setTranslations] = useState<Record<string, Record<string, string>>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        // In a real application, you might load this from an API or JSON files
        const translations = {
          en: {
            // Navbar
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.services': 'Services',
            'nav.contact': 'Contact',
            'nav.orderNow': 'Order Now',
            
            // Home page
            'home.hero.title': 'Memory Bears',
            'home.hero.subtitle': 'Preserving precious memories through handcrafted teddy bears made from your loved one\'s clothing',
            'home.services': 'Our Services',
            'home.learnMore': 'Learn More',
            'home.howItWorks': 'How It Works',
            'home.step1.title': 'Send Us Your Clothing',
            'home.step1.description': 'Ship us a piece of clothing that holds special meaning - a favorite shirt, dress, or other garment from your loved one.',
            'home.step2.title': 'Handcrafted Creation',
            'home.step2.description': 'Our skilled artisans carefully transform the fabric into a beautiful, huggable teddy bear, preserving the original material\'s memories.',
            'home.step3.title': 'Receive Your Memory Bear',
            'home.step3.description': 'Within a few weeks, you\'ll receive your one-of-a-kind Memory Bear, a special keepsake to hold and cherish for years to come.',
            'home.testimonials': 'What Our Customers Say',
            'home.cta.title': 'Ready to Create Your Memory Bear?',
            'home.cta.subtitle': 'Transform a cherished piece of clothing into a forever keepsake.',
            'home.cta.button': 'Get Started Today',
            
            // About page
            'about.hero.title': 'About Memory Bears',
            'about.hero.subtitle': 'Preserving memories and bringing comfort through handcrafted bears',
            'about.story.title': 'Our Story',
            'about.story.paragraph1': 'Memory Bears began with a simple idea: to help people preserve precious memories of their loved ones in a tangible, comforting way. Our founder, Maria, created the first Memory Bear after losing her grandmother in 2015. Unable to part with her grandmother\'s favorite dress but unsure what to do with it, she transformed the fabric into a teddy bear that she could hold and cherish.',
            'about.story.paragraph2': 'What started as a personal project soon became a passion. Friends and family members, touched by the sentiment behind Maria\'s creation, began requesting bears of their own. Word spread, and Memory Bears was born.',
            'about.story.paragraph3': 'Today, our small team of skilled artisans creates Memory Bears for people across the country, helping them transform clothing from loved ones who have passed or special occasions into lasting keepsakes. Each bear is handcrafted with care, preserving not just the fabric but the memories and emotions that make it special.',
            'about.story.firstBearAlt': 'The first Memory Bear created by Maria',
            'about.gallery.title': 'Our Bear Gallery',
            'about.gallery.image1Alt': 'Memory Bear Gallery Image 1',
            'about.gallery.image2Alt': 'Memory Bear Gallery Image 2', 
            'about.gallery.image3Alt': 'Memory Bear Gallery Image 3',
            'about.gallery.image4Alt': 'Memory Bear Gallery Image 4',
            'about.values.title': 'Our Values',
            'about.value1.title': 'Compassion',
            'about.value1.description': 'We understand that the clothing you send us holds deep emotional value. We treat each item with reverence and care, honoring the memories it represents.',
            'about.value2.title': 'Craftsmanship',
            'about.value2.description': 'Each Memory Bear is handcrafted with meticulous attention to detail. We take pride in creating heirloom-quality bears that will last for generations.',
            'about.value3.title': 'Connection',
            'about.value3.description': 'We believe in the power of physical objects to connect us with our memories and loved ones. Our bears provide tangible comfort during difficult times.',
            'about.value4.title': 'Community',
            'about.value4.description': 'We\'re honored to be part of your healing journey. The Memory Bears community includes everyone who has found comfort in our creations.',
            'about.team.title': 'Our Team',
            'about.team.maria.name': 'Maria',
            'about.team.maria.role': 'Founder & Lead Artisan',
            'about.team.maria.alt': 'Maria - Founder & Lead Artisan',
            'about.team.james.name': 'James',
            'about.team.james.role': 'Master Craftsman',
            'about.team.elena.name': 'Elena',
            'about.team.elena.role': 'Customer Care Specialist',
            'about.cta.title': 'Ready to Create Your Memory Bear?',
            'about.cta.subtitle': 'Let us help you preserve your special memories.',
            'about.cta.button': 'View Our Services',
            
            // Services page
            'services.hero.title': 'Our Services',
            'services.hero.subtitle': 'Handcrafted Memory Bears with care and attention to detail',
            'services.howItWorks.title': 'How It Works',
            'services.description': 'At Memory Bears, we transform cherished clothing into beautiful, huggable teddy bears that preserve your special memories for years to come. Our process is simple but meticulous, ensuring that each bear is crafted with the utmost care.',
            'services.process.title': 'Our Process',
            'services.process.step1.title': 'Consultation:',
            'services.process.step1.description': 'We begin with a conversation about your needs and the clothing item you\'d like to transform. We\'ll discuss size options, additional customizations, and answer any questions you may have.',
            'services.process.step2.title': 'Shipping:',
            'services.process.step2.description': 'Once you\'ve selected your service, you\'ll ship your clothing item to our workshop. We recommend using tracked shipping methods for your peace of mind.',
            'services.process.step3.title': 'Creation:',
            'services.process.step3.description': 'Our skilled artisans carefully deconstruct the garment and use the fabric to create your Memory Bear. We pay special attention to preserving unique features like pockets, buttons, or embroidery.',
            'services.process.step4.title': 'Finishing Touches:',
            'services.process.step4.description': 'Each bear receives careful stitching, secure eyes and nose, and optional personalized touches you\'ve requested.',
            'services.process.step5.title': 'Delivery:',
            'services.process.step5.description': 'When your Memory Bear is complete (typically 2-3 weeks after receiving your item), we\'ll carefully package and ship it back to you with tracking information.',
            'services.options.title': 'Our Options',
            'services.bear1.title': 'Classic Bear',
            'services.bear1.description': 'Our standard Memory Bear created from your cherished clothing.',
            'services.bear1.feature1': '12" tall finished bear',
            'services.bear1.feature2': 'Created from one garment',
            'services.bear1.feature3': 'Standard embroidered eyes & nose',
            'services.bear1.feature4': '2-3 week turnaround',
            'services.bear1.price': '$89',
            'services.bear2.title': 'Premium Bear',
            'services.bear2.description': 'Our enhanced Memory Bear with special details and features.',
            'services.bear2.feature1': '15" tall finished bear',
            'services.bear2.feature2': 'Created from up to two garments',
            'services.bear2.feature3': 'Preservation of special features (pockets, buttons)',
            'services.bear2.feature4': 'Custom embroidery options',
            'services.bear2.feature5': '2-3 week turnaround',
            'services.bear2.price': '$129',
            'services.bear3.title': 'Family Collection',
            'services.bear3.description': 'Multiple bears created from the same clothing items.',
            'services.bear3.feature1': 'Set of 3 or more 12" bears',
            'services.bear3.feature2': 'Created from the same garment(s)',
            'services.bear3.feature3': 'Perfect for sharing memories with family',
            'services.bear3.feature4': '3-4 week turnaround',
            'services.bear3.price': '$75/bear',
            'services.getStarted': 'Get Started',
            'services.mostPopular': 'MOST POPULAR',
            'services.addons.title': 'Additional Options',
            'services.addon1.title': 'Custom Embroidery',
            'services.addon1.description': 'Add names, dates, or short messages embroidered onto your Memory Bear.',
            'services.addon1.price': 'Starting at $15',
            'services.addon2.title': 'Scent Pouch',
            'services.addon2.description': 'Add a small pouch inside your bear that can hold a scent memory (perfume, cologne).',
            'services.addon2.price': '$10',
            'services.addon3.title': 'Memorial Patch',
            'services.addon3.description': 'Custom embroidered patch with name and dates that can be added to your bear.',
            'services.addon3.price': '$25',
            'services.addon4.title': 'Rush Service',
            'services.addon4.description': 'Expedited creation and shipping of your Memory Bear (1-2 week turnaround).',
            'services.addon4.price': 'Additional $35',
            'services.contact.title': 'Contact Us to Get Started',
            'services.contact.description': 'Ready to create your Memory Bear? Reach out to us via email or phone to discuss your project.',
            'services.contact.email.title': 'Email Us',
            'services.contact.email.value': 'info@memorybears.com',
            'services.contact.phone.title': 'Call Us',
            'services.contact.phone.value': '(555) 123-4567',
            
            // Contact page
            'contact.hero.title': 'Contact Us',
            'contact.hero.subtitle': 'We\'d love to hear from you and help create your special Memory Bear',
            'contact.form.title': 'Send Us a Message',
            'contact.form.name': 'Your Name',
            'contact.form.namePlaceholder': 'Full Name',
            'contact.form.email': 'Email Address',
            'contact.form.emailPlaceholder': 'example@email.com',
            'contact.form.phone': 'Phone Number (Optional)',
            'contact.form.phonePlaceholder': '(555) 123-4567',
            'contact.form.garmentType': 'Garment Type',
            'contact.form.garmentOptions.shirt': 'Shirt',
            'contact.form.garmentOptions.dress': 'Dress',
            'contact.form.garmentOptions.pants': 'Pants/Jeans',
            'contact.form.garmentOptions.jacket': 'Jacket/Coat',
            'contact.form.garmentOptions.other': 'Other (please specify in message)',
            'contact.form.message': 'Your Message',
            'contact.form.messagePlaceholder': 'Tell us about your Memory Bear project...',
            'contact.form.submit': 'Send Message',
            'contact.form.sending': 'Sending...',
            'contact.form.error': 'There was an error sending your message. Please try again.',
            'contact.success.title': 'Message Sent Successfully!',
            'contact.success.message': 'Thank you for contacting Memory Bears. We\'ll get back to you as soon as possible.',
            'contact.success.redirect': 'Redirecting you to the home page...',
            'contact.otherWays.title': 'Other Ways to Reach Us',
            'contact.methods.email.title': 'Email',
            'contact.methods.email.value': 'info@memorybears.com',
            'contact.methods.phone.title': 'Phone',
            'contact.methods.phone.value': '(555) 123-4567',
            'contact.methods.social.title': 'Social Media',
            
            // Footer
            'footer.about': 'Preserving precious memories through handcrafted teddy bears made from your loved one\'s clothing.',
            'footer.quickLinks': 'Quick Links',
            'footer.services': 'Our Services',
            'footer.copyright': '© {year} Memory Bears. All rights reserved.'
          },
          es: {
            // Navbar
            'nav.home': 'Inicio',
            'nav.about': 'Acerca de',
            'nav.services': 'Servicios',
            'nav.contact': 'Contacto',
            'nav.orderNow': 'Ordenar',
            
            // Home page
            'home.hero.title': 'Memory Bears',
            'home.hero.subtitle': 'Preservando recuerdos preciosos a través de osos de peluche hechos a mano con la ropa de tus seres queridos',
            'home.services': 'Nuestros Servicios',
            'home.learnMore': 'Más Información',
            'home.howItWorks': 'Cómo Funciona',
            'home.step1.title': 'Envíanos Tu Ropa',
            'home.step1.description': 'Envíanos una prenda que tenga un significado especial - una camisa favorita, vestido u otra prenda de tu ser querido.',
            'home.step2.title': 'Creación Artesanal',
            'home.step2.description': 'Nuestros artesanos transforman cuidadosamente la tela en un hermoso oso de peluche, preservando los recuerdos del material original.',
            'home.step3.title': 'Recibe Tu Memory Bear',
            'home.step3.description': 'En pocas semanas, recibirás tu Memory Bear único, un recuerdo especial para abrazar y atesorar durante años.',
            'home.testimonials': 'Lo Que Dicen Nuestros Clientes',
            'home.cta.title': '¿Listo para Crear Tu Memory Bear?',
            'home.cta.subtitle': 'Transforma una prenda querida en un recuerdo para siempre.',
            'home.cta.button': 'Comienza Hoy',
            
            // About page
            'about.hero.title': 'Acerca de Memory Bears',
            'about.hero.subtitle': 'Preservando recuerdos y brindando consuelo a través de osos artesanales',
            'about.story.title': 'Nuestra Historia',
            'about.story.paragraph1': 'Memory Bears comenzó con una idea simple: ayudar a las personas a preservar recuerdos preciosos de sus seres queridos de una manera tangible y reconfortante. Nuestra fundadora, María, creó el primer Memory Bear después de perder a su abuela en 2015. Sin poder separarse del vestido favorito de su abuela pero sin saber qué hacer con él, transformó la tela en un oso de peluche que podía sostener y apreciar.',
            'about.story.paragraph2': 'Lo que comenzó como un proyecto personal pronto se convirtió en una pasión. Amigos y familiares, conmovidos por el sentimiento detrás de la creación de María, comenzaron a solicitar osos propios. La noticia se difundió, y así nació Memory Bears.',
            'about.story.paragraph3': 'Hoy, nuestro pequeño equipo de artesanos crea Memory Bears para personas de todo el país, ayudándoles a transformar la ropa de seres queridos que han fallecido o de ocasiones especiales en recuerdos duraderos. Cada oso está hecho a mano con cuidado, preservando no solo la tela sino los recuerdos y emociones que la hacen especial.',
            'about.story.firstBearAlt': 'El primer Memory Bear creado por María',
            'about.gallery.title': 'Nuestra Galería de Osos',
            'about.gallery.image1Alt': 'Imagen 1 de la Galería de Memory Bears',
            'about.gallery.image2Alt': 'Imagen 2 de la Galería de Memory Bears', 
            'about.gallery.image3Alt': 'Imagen 3 de la Galería de Memory Bears',
            'about.gallery.image4Alt': 'Imagen 4 de la Galería de Memory Bears',
            'about.values.title': 'Nuestros Valores',
            'about.value1.title': 'Compasión',
            'about.value1.description': 'Entendemos que la ropa que nos envía tiene un profundo valor emocional. Tratamos cada prenda con reverencia y cuidado, honrando los recuerdos que representa.',
            'about.value2.title': 'Artesanía',
            'about.value2.description': 'Cada Memory Bear está hecho a mano con meticulosa atención al detalle. Nos enorgullecemos de crear osos de calidad que durarán generaciones.',
            'about.value3.title': 'Conexión',
            'about.value3.description': 'Creemos en el poder de los objetos físicos para conectarnos con nuestros recuerdos y seres queridos. Nuestros osos proporcionan un consuelo tangible durante tiempos difíciles.',
            'about.value4.title': 'Comunidad',
            'about.value4.description': 'Nos sentimos honrados de ser parte de su viaje de sanación. La comunidad de Memory Bears incluye a todos los que han encontrado consuelo en nuestras creaciones.',
            'about.team.title': 'Nuestro Equipo',
            'about.team.maria.name': 'María',
            'about.team.maria.role': 'Fundadora y Artesana Principal',
            'about.team.maria.alt': 'María - Fundadora y Artesana Principal',
            'about.team.james.name': 'James',
            'about.team.james.role': 'Maestro Artesano',
            'about.team.elena.name': 'Elena',
            'about.team.elena.role': 'Especialista en Atención al Cliente',
            'about.cta.title': '¿Listo para Crear tu Memory Bear?',
            'about.cta.subtitle': 'Permítanos ayudarle a preservar sus recuerdos especiales.',
            'about.cta.button': 'Ver Nuestros Servicios',
            
            // Services page
            'services.hero.title': 'Nuestros Servicios',
            'services.hero.subtitle': 'Memory Bears hechos a mano con cuidado y atención al detalle',
            'services.howItWorks.title': 'Cómo Funciona',
            'services.description': 'En Memory Bears, transformamos prendas queridas en hermosos osos de peluche abrazables que preservan tus recuerdos especiales por años. Nuestro proceso es simple pero meticuloso, asegurando que cada oso sea elaborado con el máximo cuidado.',
            'services.process.title': 'Nuestro Proceso',
            'services.process.step1.title': 'Consulta:',
            'services.process.step1.description': 'Comenzamos con una conversación sobre tus necesidades y la prenda que te gustaría transformar. Discutiremos opciones de tamaño, personalizaciones adicionales y responderemos cualquier pregunta que puedas tener.',
            'services.process.step2.title': 'Envío:',
            'services.process.step2.description': 'Una vez que hayas seleccionado tu servicio, enviarás tu prenda a nuestro taller. Recomendamos usar métodos de envío con seguimiento para tu tranquilidad.',
            'services.process.step3.title': 'Creación:',
            'services.process.step3.description': 'Nuestros artesanos desmontan cuidadosamente la prenda y usan la tela para crear tu Memory Bear. Prestamos especial atención a preservar características únicas como bolsillos, botones o bordados.',
            'services.process.step4.title': 'Toques Finales:',
            'services.process.step4.description': 'Cada oso recibe un cuidadoso cosido, ojos y nariz seguros, y los toques personalizados opcionales que hayas solicitado.',
            'services.process.step5.title': 'Entrega:',
            'services.process.step5.description': 'Cuando tu Memory Bear esté completo (generalmente 2-3 semanas después de recibir tu prenda), lo empaquetaremos cuidadosamente y te lo enviaremos con información de seguimiento.',
            'services.options.title': 'Nuestras Opciones',
            'services.bear1.title': 'Oso Clásico',
            'services.bear1.description': 'Nuestro Memory Bear estándar creado a partir de tu prenda querida.',
            'services.bear1.feature1': 'Oso terminado de 12" de altura',
            'services.bear1.feature2': 'Creado a partir de una prenda',
            'services.bear1.feature3': 'Ojos y nariz bordados estándar',
            'services.bear1.feature4': 'Tiempo de entrega de 2-3 semanas',
            'services.bear1.price': '$89',
            'services.bear2.title': 'Oso Premium',
            'services.bear2.description': 'Nuestro Memory Bear mejorado con detalles y características especiales.',
            'services.bear2.feature1': 'Oso terminado de 15" de altura',
            'services.bear2.feature2': 'Creado a partir de hasta dos prendas',
            'services.bear2.feature3': 'Preservación de características especiales (bolsillos, botones)',
            'services.bear2.feature4': 'Opciones de bordado personalizado',
            'services.bear2.feature5': 'Tiempo de entrega de 2-3 semanas',
            'services.bear2.price': '$129',
            'services.bear3.title': 'Colección Familiar',
            'services.bear3.description': 'Múltiples osos creados a partir de las mismas prendas.',
            'services.bear3.feature1': 'Conjunto de 3 o más osos de 12"',
            'services.bear3.feature2': 'Creados a partir de la(s) misma(s) prenda(s)',
            'services.bear3.feature3': 'Perfecto para compartir recuerdos con la familia',
            'services.bear3.feature4': 'Tiempo de entrega de 3-4 semanas',
            'services.bear3.price': '$75/oso',
            'services.getStarted': 'Comenzar',
            'services.mostPopular': 'MÁS POPULAR',
            'services.addons.title': 'Opciones Adicionales',
            'services.addon1.title': 'Bordado Personalizado',
            'services.addon1.description': 'Añade nombres, fechas o mensajes cortos bordados en tu Memory Bear.',
            'services.addon1.price': 'Desde $15',
            'services.addon2.title': 'Bolsa de Aroma',
            'services.addon2.description': 'Añade una pequeña bolsa dentro de tu oso que puede contener un recuerdo de aroma (perfume, colonia).',
            'services.addon2.price': '$10',
            'services.addon3.title': 'Parche Conmemorativo',
            'services.addon3.description': 'Parche bordado personalizado con nombre y fechas que puede añadirse a tu oso.',
            'services.addon3.price': '$25',
            'services.addon4.title': 'Servicio Urgente',
            'services.addon4.description': 'Creación y envío acelerados de tu Memory Bear (tiempo de entrega de 1-2 semanas).',
            'services.addon4.price': 'Adicional $35',
            'services.contact.title': 'Contáctanos para Comenzar',
            'services.contact.description': '¿Listo para crear tu Memory Bear? Comunícate con nosotros por correo electrónico o teléfono para hablar sobre tu proyecto.',
            'services.contact.email.title': 'Envíanos un Email',
            'services.contact.email.value': 'info@memorybears.com',
            'services.contact.phone.title': 'Llámanos',
            'services.contact.phone.value': '(555) 123-4567',
            
            // Contact page
            'contact.hero.title': 'Contáctanos',
            'contact.hero.subtitle': 'Nos encantaría saber de ti y ayudarte a crear tu Memory Bear especial',
            'contact.form.title': 'Envíanos un Mensaje',
            'contact.form.name': 'Tu Nombre',
            'contact.form.namePlaceholder': 'Nombre Completo',
            'contact.form.email': 'Correo Electrónico',
            'contact.form.emailPlaceholder': 'ejemplo@correo.com',
            'contact.form.phone': 'Número de Teléfono (Opcional)',
            'contact.form.phonePlaceholder': '(555) 123-4567',
            'contact.form.garmentType': 'Tipo de Prenda',
            'contact.form.garmentOptions.shirt': 'Camisa',
            'contact.form.garmentOptions.dress': 'Vestido',
            'contact.form.garmentOptions.pants': 'Pantalones/Jeans',
            'contact.form.garmentOptions.jacket': 'Chaqueta/Abrigo',
            'contact.form.garmentOptions.other': 'Otro (por favor especifica en el mensaje)',
            'contact.form.message': 'Tu Mensaje',
            'contact.form.messagePlaceholder': 'Cuéntanos sobre tu proyecto de Memory Bear...',
            'contact.form.submit': 'Enviar Mensaje',
            'contact.form.sending': 'Enviando...',
            'contact.form.error': 'Hubo un error al enviar tu mensaje. Por favor intenta de nuevo.',
            'contact.success.title': '¡Mensaje Enviado Exitosamente!',
            'contact.success.message': 'Gracias por contactar a Memory Bears. Te responderemos lo antes posible.',
            'contact.success.redirect': 'Redirigiendo a la página de inicio...',
            'contact.otherWays.title': 'Otras Formas de Contactarnos',
            'contact.methods.email.title': 'Correo Electrónico',
            'contact.methods.email.value': 'info@memorybears.com',
            'contact.methods.phone.title': 'Teléfono',
            'contact.methods.phone.value': '(555) 123-4567',
            'contact.methods.social.title': 'Redes Sociales',
            
            // Footer
            'footer.about': 'Preservando recuerdos preciosos a través de osos de peluche hechos a mano con la ropa de tus seres queridos.',
            'footer.quickLinks': 'Enlaces Rápidos',
            'footer.services': 'Nuestros Servicios',
            'footer.copyright': '© {year} Memory Bears. Todos los derechos reservados.'
          }
        };
        
        setTranslations(translations);
        
        // Get language from localStorage if available
        const savedLanguage = typeof window !== 'undefined' ? 
          localStorage.getItem('language') as Language : defaultLanguage;
          
        if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
          setLanguage(savedLanguage);
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error loading translations:', error);
        setLoading(false);
      }
    };

    loadTranslations();
  }, []);

  // Save language preference to localStorage when it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    }
  }, [language]);

  const t = (key: string): string => {
    if (loading) return key;
    
    const currentTranslations = translations[language] || {};
    return currentTranslations[key] || translations['en']?.[key] || key;
  };

  const value = {
    language,
    setLanguage,
    t
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading translations...</div>;
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 