'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const defaultLanguage: Language = 'es';

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
            'nav.gallery': 'Gallery',
            
            // Home page
            'home.hero.title': 'Memories that embrace',
            'home.hero.subtitle': 'Preserving precious memories through handcrafted teddy bears made from your loved one\'s clothing',
            'home.services': 'Our Services',
            'home.learnMore': 'Learn More',
            'home.howItWorks': 'How It Works',
            'home.step1.title': 'Choose the special garment',
            'home.step1.description': 'Select a piece of clothing that has sentimental value to you: it can be from a loved one, from your baby, from someone who is far away or from a special stage.',
            'home.step2.title': 'Coordinate shipping',
            'home.step2.description': 'We tell you how to deliver or send the garment. Once we receive it, we talk with you about the design details and customization you want.',
            'home.step3.title': 'Receive Your Memory Bear',
            'home.step3.description': 'We handcraft your little bear with care and lots of love. In a few days you will receive a unique memory, made to hug and treasure forever. 🤍',
            'home.whatAreMemoryBears.title': 'What are Memory Bears?',
            'home.whatAreMemoryBears.paragraph1': 'Memory Bears are personalized little bears handmade from garments or objects that have sentimental value to you. They can be shirts, pajamas, uniforms, baby clothes or any special piece that reminds you of someone or an important moment.',
            'home.whatAreMemoryBears.paragraph2': 'Each little bear is unique, created with love and attention to every detail to preserve the essence of that garment. We transform memories into something tangible and comforting, providing comfort and connection in significant moments of life.',
            'home.whatAreMemoryBears.paragraph3': 'Whether to honor the memory of a loved one, keep a family memory or celebrate a special stage, a Memory Bear is a beautiful way to carry with you what you love... in the form of a hug.',
            'home.aboutMe.title': 'About me',
            'home.aboutMe.paragraph1': 'Hello, I\'m Maria Leroux. Since I was little I have been a person deeply connected with memories, details and emotional bonds. Memory Bears was born from the desire to transform garments full of history into something that could be hugged, looked at, and felt close. Each little bear I create is more than a stuffed animal: it is a tribute, a caress, a way to carry with you those you love, even when they are not physically present.',
            'home.aboutMe.paragraph2': 'This project started as a personal gesture and gradually became a mission: to help others preserve what they don\'t want to forget. I work each order with much love, respect and attention, because I know that behind each garment there is a story that deserves to be told and honored.',
            'home.aboutMe.paragraph3': 'Thank you for trusting me with something so valuable. It is an honor to be part of your memories.',
            'home.aboutMe.learnMore': 'Learn more about my story',
            'home.testimonials': 'What Our Customers Say',
            'home.cta.title': 'Ready to Create Your Memory Bear?',
            'home.cta.subtitle': 'Transform a cherished piece of clothing into a forever keepsake.',
            'home.cta.button': 'Get Started Today',
            
            // About page
            'about.hero.title': 'About',
            'about.hero.subtitle': 'Memory Bears began with a simple but powerful idea: to help people preserve valuable memories of their loved ones and important life moments in a tangible and comforting way.',
            'about.story.title': 'Our Story',
            'about.story.paragraph1': 'Our founder, Maria Leroux, created the first Memory Bear in 2022, after the loss of her beloved grandfather Elidio. In the midst of grief, she was looking for a way to keep him close and honor his presence in her life. Thus was born the first little bear, made from a garment that represented him, as a symbol of love, memory and comfort.',
            'about.story.paragraph2': 'What began as a personal act full of meaning soon transformed into a mission. Family and friends, moved by the detail and story behind the little bear, began to ask for their own. Soon, Memory Bears became a way to accompany others not only in grief, but also in celebrating unique moments: births, first stages of life, farewells, graduations or any memory that deserves to be treasured.',
            'about.story.paragraph3': 'Today, Memory Bears is a project full of heart, where each little bear is handmade with love and dedication. Our small team transforms garments full of history into memories you can hug, commemorating both those who are no longer with us and the moments we want to keep forever. Because behind each stitch there is a story that deserves to be honored.',
            'about.story.firstBearAlt': 'The first Memory Bear created by Maria',
            'about.gallery.title': 'Our Bear Gallery',
            'about.gallery.image1Alt': 'Memory Bear Gallery Image 1',
            'about.gallery.image2Alt': 'Memory Bear Gallery Image 2', 
            'about.gallery.image3Alt': 'Memory Bear Gallery Image 3',
            'about.gallery.image4Alt': 'Memory Bear Gallery Image 4',
            'about.values.title': 'Our Values',
            'about.value1.title': 'Memory',
            'about.value1.description': 'At the heart of each little bear is a story, a person, a moment. Memory Bears is born from the desire to preserve important memories in a tangible way, and turn them into a symbol that endures.',
            'about.value2.title': 'Care',
            'about.value2.description': 'Each little bear is handcrafted with attention to detail, respect for each story and love for what it represents. Here we don\'t work in series, we work with the soul.',
            'about.value3.title': 'Connection',
            'about.value3.description': 'Memory Bears unites generations, emotions and people through objects that speak without words. It is a bridge between what was, what is, and what we want to keep present.',
            'about.value4.title': 'Hope',
            'about.value4.description': 'Whether in the midst of grief or in celebrating a new stage, each little bear represents the certainty that memories remain alive, and that there is beauty even in difficult moments.',
            'about.team.title': 'Our Team',
            'about.team.maria.name': 'Maria',
            'about.team.maria.role': 'Founder',
            'about.team.maria.alt': 'Maria - Founder',
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
            'services.description': 'At Memory Bears we give new life to those special garments, transforming them into unique little bears that you can hug and treasure forever. Our process is simple but full of dedication, designed to care for every detail and ensure that each little bear reflects the story and love behind the garment.',
            'services.process.title': 'Our Process',
            'services.process.step1.title': 'We talk with you',
            'services.process.step1.description': 'Everything begins with a close conversation. You tell us about the garment you want to transform and what it represents to you. We talk about customizations, embroidery and all the important details to make your little bear unique.',
            'services.process.step2.title': 'We receive your garment',
            'services.process.step2.description': 'Once your order is confirmed, we coordinate how to get the garment to our workshop. We recommend using a shipping method with tracking for greater peace of mind.',
            'services.process.step3.title': 'We bring your little bear to life',
            'services.process.step3.description': 'With great care, we dismantle the garment and begin to transform it. We preserve significant details like pockets, buttons, labels or embroidery that make the little bear even more special.',
            'services.process.step4.title': 'We add the finishing touches',
            'services.process.step4.description': 'Each Memory Bear is hand-sewn with dedication, and receives eyes, nose and the personalized details you have chosen, such as names, dates or special typography.',
            'services.process.step5.title': 'We send it to you with love',
            'services.process.step5.description': 'Within 1 to 2 weeks, your little bear will be ready. We package it with care and send it to your home along with tracking information, ready to be hugged and treasured forever. 🤍',
            'services.options.title': 'Our Options',
            'services.bear1.title': 'Classic Bear',
            'services.bear1.description': 'Our standard Memory Bear created from your cherished clothing.',
            'services.bear1.feature1': '12" tall finished bear',
            'services.bear1.feature2': 'Created from one garment',
            'services.bear1.feature3': '2-3 week turnaround',
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
            'services.addon3.title': 'Memorial Tag',
            'services.addon3.description': 'Custom embroidered tag with name and dates that can be added to your bear.',
            'services.addon3.price': '$25',
            'services.addon4.title': 'Rush Service',
            'services.addon4.description': 'Expedited creation and shipping of your Memory Bear (1-2 week turnaround).',
            'services.addon4.price': 'Additional $35',
            'services.contact.title': 'Contact Us to Get Started',
            'services.contact.description': 'Ready to create your Memory Bear? Reach out to us via email or phone to discuss your project.',
            'services.contact.email.title': 'Email Us',
            'services.contact.email.value': 'info@memorybearsdr.com',
            'services.contact.phone.title': 'Call Us',
            'services.contact.phone.value': '+1 (809) 299-1620',
            
            // Contact page
            'contact.hero.title': 'Contact Us',
            'contact.hero.subtitle': 'We\'d love to hear from you and help create your special Memory Bear',
            'contact.form.title': 'Send Us a Message',
            'contact.form.name': 'Your Name',
            'contact.form.namePlaceholder': 'Full Name',
            'contact.form.email': 'Email Address',
            'contact.form.emailPlaceholder': 'example@email.com',
            'contact.form.phone': 'Phone Number (Optional)',
            'contact.form.phonePlaceholder': '+1 (809) 299-1620',
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
            'contact.methods.email.value': 'info@memorybearsdr.com',
            'contact.methods.phone.title': 'Phone',
            'contact.methods.phone.value': '+1 (809) 299-1620',
            'contact.methods.social.title': 'Social Media',
            
            // Footer
            'footer.about': 'Preserving precious memories through handcrafted teddy bears made from your loved one\'s clothing.',
            'footer.quickLinks': 'Quick Links',
            'footer.services': 'Our Services',
            'footer.copyright': '© {year} Memory Bears. All rights reserved.',
            
            // Gallery page
            'gallery.hero.title': 'Gallery',
            'gallery.hero.subtitle': 'Explore our collection of Memory Bears handcrafted with love and dedication.',
          },
          es: {
            // Navbar
            'nav.home': 'Inicio',
            'nav.about': 'Acerca de',
            'nav.services': 'Servicios',
            'nav.contact': 'Contacto',
            'nav.orderNow': 'Ordenar',
            'nav.gallery': 'Galería',
            
            // Home page
            'home.hero.title': 'Memory Bears',
            'home.hero.subtitle': 'Preservando recuerdos preciosos a través de osos de peluche hechos a mano con la ropa de tus seres queridos',
            'home.services': 'Nuestros Servicios',
            'home.learnMore': 'Más Información',
            'home.howItWorks': 'Cómo Funciona',
            'home.step1.title': 'Elige la prenda especial',
            'home.step1.description': 'Selecciona una pieza de ropa que tenga un valor sentimental para ti: puede ser de un ser querido, de tu bebé, de alguien que está lejos o de una etapa especial.',
            'home.step2.title': 'Coordina el envío',
            'home.step2.description': 'Te indicamos cómo entregar o enviar la prenda. Una vez la recibamos, conversamos contigo sobre los detalles del diseño y la personalización que deseas.',
            'home.step3.title': 'Recibe tu Memory Bear',
            'home.step3.description': 'Confeccionamos tu osito a mano, con cuidado y mucho amor. En unos días recibirás un recuerdo único, hecho para abrazar y atesorar por siempre. 🤍',
            'home.whatAreMemoryBears.title': '¿Qué son Memory Bears?',
            'home.whatAreMemoryBears.paragraph1': 'Los Memory Bears son ositos personalizados hechos a mano a partir de prendas u objetos que tienen un valor sentimental para ti. Pueden ser camisas, pijamas, uniformes, ropa de bebé o cualquier pieza especial que te recuerde a alguien o a un momento importante.',
            'home.whatAreMemoryBears.paragraph2': 'Cada osito es único, creado con cariño y atención a cada detalle para conservar la esencia de esa prenda. Transformamos recuerdos en algo tangible y reconfortante, brindando consuelo y conexión en momentos significativos de la vida.',
            'home.whatAreMemoryBears.paragraph3': 'Ya sea para honrar la memoria de un ser querido, guardar un recuerdo familiar o celebrar una etapa especial, un Memory Bear es una forma hermosa de llevar contigo aquello que amas... en forma de abrazo.',
            'home.aboutMe.title': 'Sobre mí',
            'home.aboutMe.paragraph1': 'Hola, soy Maria Leroux. Desde pequeña he sido una persona profundamente conectada con los recuerdos, los detalles y los vínculos emocionales. Memory Bears nació del deseo de transformar prendas llenas de historia en algo que se pudiera abrazar, mirar, y sentir cerca. Cada osito que creo es más que un peluche: es un homenaje, una caricia, una forma de llevar contigo a quienes amas, incluso cuando no están físicamente presentes.',
            'home.aboutMe.paragraph2': 'Este proyecto empezó como un gesto personal y poco a poco se convirtió en una misión: ayudar a otros a conservar lo que no se quiere olvidar. Trabajo cada pedido con mucho amor, respeto y atención, porque sé que detrás de cada prenda hay una historia que merece ser contada y honrada.',
            'home.aboutMe.paragraph3': 'Gracias por confiarme algo tan valioso. Es un honor formar parte de tus recuerdos.',
            'home.aboutMe.learnMore': 'Conoce más sobre mi historia',
            'home.testimonials': 'Lo Que Dicen Nuestros Clientes',
            'home.cta.title': '¿Listo para Crear Tu Memory Bear?',
            'home.cta.subtitle': 'Transforma una prenda querida en un recuerdo para siempre.',
            'home.cta.button': 'Comienza Hoy',
            
            // About page
            'about.hero.title': 'Acerca de',
            'about.hero.subtitle': 'Memory Bears comenzó con una idea simple pero poderosa: ayudar a las personas a preservar recuerdos valiosos de sus seres queridos y momentos importantes de la vida, de una manera tangible y reconfortante.',
            'about.story.title': 'Nuestra Historia',
            'about.story.paragraph1': 'Nuestra fundadora, Maria Leroux, creó el primer Memory Bear en el año 2022, tras la pérdida de su querido abuelito Elidio. En medio del duelo, buscaba una forma de mantenerlo cerca y honrar su presencia en su vida. Así nació el primer osito, hecho a partir de una prenda que lo representaba, como un símbolo de amor, memoria y consuelo.',
            'about.story.paragraph2': 'Lo que comenzó como un acto personal lleno de significado, pronto se transformó en una misión. Familiares y amigos, conmovidos por el detalle y la historia detrás del osito, comenzaron a pedir los suyos. Pronto, Memory Bears se convirtió en una forma de acompañar a otros no solo en el duelo, sino también en la celebración de momentos únicos: nacimientos, primeras etapas de vida, despedidas, graduaciones o cualquier recuerdo que merezca ser atesorado.',
            'about.story.paragraph3': 'Hoy, Memory Bears es un proyecto lleno de corazón, donde cada osito es hecho a mano con amor y dedicación. Nuestro pequeño equipo transforma prendas llenas de historia en recuerdos que puedes abrazar, conmemorando tanto a quienes ya no están, como los momentos que queremos guardar para siempre. Porque detrás de cada costura hay una historia que merece ser honrada.',
            'about.story.firstBearAlt': 'El primer Memory Bear creado por María',
            'about.gallery.title': 'Nuestra Galería de Osos',
            'about.gallery.image1Alt': 'Imagen 1 de la Galería de Memory Bears',
            'about.gallery.image2Alt': 'Imagen 2 de la Galería de Memory Bears', 
            'about.gallery.image3Alt': 'Imagen 3 de la Galería de Memory Bears',
            'about.gallery.image4Alt': 'Imagen 4 de la Galería de Memory Bears',
            'about.values.title': 'Nuestros Valores',
            'about.value1.title': 'Memoria',
            'about.value1.description': 'En el corazón de cada osito está una historia, una persona, un momento. Memory Bears nace del deseo de preservar recuerdos importantes de manera tangible, y convertirlos en un símbolo que perdura.',
            'about.value2.title': 'Cuidado',
            'about.value2.description': 'Cada osito es confeccionado a mano con atención al detalle, respeto por cada historia y amor por lo que representa. Aquí no se trabaja en serie, se trabaja con el alma.',
            'about.value3.title': 'Conexión',
            'about.value3.description': 'Memory Bears une generaciones, emociones y personas a través de objetos que hablan sin palabras. Es un puente entre lo que fue, lo que es, y lo que queremos mantener presente.',
            'about.value4.title': 'Esperanza',
            'about.value4.description': 'Ya sea en medio del duelo o en la celebración de una nueva etapa, cada osito representa la certeza de que los recuerdos siguen vivos, y de que hay belleza incluso en los momentos difíciles.',
            'about.team.title': 'Nuestro Equipo',
            'about.team.maria.name': 'Maria',
            'about.team.maria.role': 'Fundadora',
            'about.team.maria.alt': 'Maria - Fundadora de Memory Bears',
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
            'services.description': 'En Memory Bears damos nueva vida a esas prendas especiales, transformándolas en ositos únicos que puedes abrazar y atesorar por siempre. Nuestro proceso es sencillo pero lleno de dedicación, pensado para cuidar cada detalle y asegurar que cada osito refleje la historia y el amor detrás de la prenda.',
            'services.process.title': 'Nuestro Proceso',
            'services.process.step1.title': 'Conversamos contigo',
            'services.process.step1.description': 'Todo comienza con una conversación cercana. Nos cuentas sobre la prenda que deseas transformar y lo que representa para ti. Hablamos sobre personalizaciones, bordados y todos los detalles importantes para que tu osito sea único.',
            'services.process.step2.title': 'Recibimos tu prenda',
            'services.process.step2.description': 'Una vez confirmada tu orden, coordinamos cómo hacer llegar la prenda a nuestro taller. Recomendamos utilizar un método de envío con seguimiento para mayor tranquilidad.',
            'services.process.step3.title': 'Damos vida a tu osito',
            'services.process.step3.description': 'Con mucho cuidado, desmontamos la prenda y comenzamos a transformarla. Preservamos detalles significativos como bolsillos, botones, etiquetas o bordados que hagan al osito aún más especial.',
            'services.process.step4.title': 'Agregamos los toques finales',
            'services.process.step4.description': 'Cada Memory Bear se cose a mano con dedicación, y recibe ojos, nariz y los detalles personalizados que hayas elegido, como nombres, fechas o tipografía especial.',
            'services.process.step5.title': 'Te lo enviamos con amor',
            'services.process.step5.description': 'En un plazo de 1 a 2 semanas, tu osito estará listo. Lo empaquetamos con cariño y te lo enviamos a casa junto con la información de seguimiento, listo para ser abrazado y atesorado por siempre. 🤍',
            'services.options.title': 'Nuestras Opciones',
            'services.bear1.title': 'Oso Clásico',
            'services.bear1.description': 'Nuestro Memory Bear estándar creado a partir de tu prenda querida.',
            'services.bear1.feature1': 'Oso terminado de 12" de altura',
            'services.bear1.feature2': 'Creado a partir de una prenda',
            'services.bear1.feature3': 'Tiempo de entrega de 2-3 semanas',
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
            'services.addon3.title': 'Etiqueta Conmemorativa',
            'services.addon3.description': 'Etiqueta bordada personalizada con nombre y fechas que puede añadirse a tu oso.',
            'services.addon3.price': '$25',
            'services.addon4.title': 'Servicio Urgente',
            'services.addon4.description': 'Creación y envío acelerados de tu Memory Bear (tiempo de entrega de 1-2 semanas).',
            'services.addon4.price': 'Adicional $35',
            'services.contact.title': 'Contáctanos para Comenzar',
            'services.contact.description': '¿Listo para crear tu Memory Bear? Comunícate con nosotros por correo electrónico o teléfono para hablar sobre tu proyecto.',
            'services.contact.email.title': 'Envíanos un Email',
            'services.contact.email.value': 'info@memorybearsdr.com',
            'services.contact.phone.title': 'Contáctanos',
            'services.contact.phone.value': '+1 (809) 299-1620',
            
            // Contact page
            'contact.hero.title': 'Contáctanos',
            'contact.hero.subtitle': 'Nos encantaría saber de ti y ayudarte a crear tu Memory Bear especial',
            'contact.form.title': 'Envíanos un Mensaje',
            'contact.form.name': 'Tu Nombre',
            'contact.form.namePlaceholder': 'Nombre Completo',
            'contact.form.email': 'Correo Electrónico',
            'contact.form.emailPlaceholder': 'ejemplo@correo.com',
            'contact.form.phone': 'Número de Teléfono (Opcional)',
            'contact.form.phonePlaceholder': '+1 (809) 299-1620',
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
            'contact.methods.email.value': 'info@memorybearsdr.com',
            'contact.methods.phone.title': 'Teléfono',
            'contact.methods.phone.value': '+1 (809) 299-1620',
            'contact.methods.social.title': 'Redes Sociales',
            
            // Footer
            'footer.about': 'Preservando recuerdos preciosos a través de osos de peluche hechos a mano con la ropa de tus seres queridos.',
            'footer.quickLinks': 'Enlaces Rápidos',
            'footer.services': 'Nuestros Servicios',
            'footer.copyright': '© {year} Memory Bears. Todos los derechos reservados.',
            
            // Gallery page
            'gallery.hero.title': 'Galería',
            'gallery.hero.subtitle': 'Explora nuestra colección de Memory Bears hechos a mano con amor y dedicación.',
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