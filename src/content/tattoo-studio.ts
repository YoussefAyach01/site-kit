import type { SiteContent } from '../types.ts';

export const tattooStudio: SiteContent = {
  id: 'tattoo-studio',
  name: { fr: 'Encre & Racines', ar: 'استوديو الوشم الجذور' },
  schemaType: 'TattooParlor',
  tagline: { fr: 'Studio de tatouage', ar: 'استوديو الوشم' },
  hero: {
    title: { fr: 'Un dessin qui reste.', ar: 'رسمة تبقى إلى الأبد.' },
    sub: {
      fr: 'Tatouages sur-mesure, flash et retouches, dans un studio stérile pensé comme un atelier d’artiste plutôt qu’un cabinet.',
      ar: 'وشم مخصص وتصاميم جاهزة وتعديلات، في استوديو معقم مصمم كمرسم فنان لا كعيادة.',
    },
    cta: { fr: 'Réserver une consultation', ar: 'احجزوا استشارة' },
  },
  heroImage: {
    alt: {
      fr: 'Table de tatoueur avec flacons d’encre, machine posée sur un support, dessins encadrés et plantes vertes sous une lumière chaude',
      ar: 'طاولة وشم بقناني حبر وآلة على حامل ورسومات مؤطرة ونباتات خضراء تحت ضوء دافئ',
    },
  },
  about: {
    title: { fr: 'Chaque pièce est pensée avec vous', ar: 'كل وشم يُصمم معكم' },
    body: {
      fr: [
        'Encre & Racines rassemble trois tatoueurs spécialisés en fine line, réalisme et motifs berbères revisités.',
        'Avant chaque séance, un rendez-vous de consultation permet d’ajuster le dessin, la taille et l’emplacement jusqu’à ce qu’il vous convienne parfaitement.',
      ],
      ar: [
        'يجمع استوديو الوشم الجذور ثلاثة فنانين متخصصين في الخطوط الدقيقة والواقعية والزخارف الأمازيغية المعاد تصورها.',
        'قبل كل جلسة، يتيح موعد استشارة تعديل الرسمة والحجم والمكان حتى يناسبكم تماماً.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos prestations', ar: 'خدماتنا' },
  services: [
    {
      name: { fr: 'Consultation et dessin', ar: 'استشارة ورسم' },
      desc: {
        fr: 'Discussion du projet et croquis personnalisé.',
        ar: 'نقاش حول المشروع ورسم مخصص.',
      },
      priceMad: 150,
    },
    {
      name: { fr: 'Petit tatouage (fine line)', ar: 'وشم صغير (خط دقيق)' },
      desc: { fr: 'Jusqu’à 8 cm, une séance.', ar: 'حتى 8 سم، جلسة واحدة.' },
      priceMad: 500,
    },
    {
      name: { fr: 'Tatouage moyen format', ar: 'وشم متوسط الحجم' },
      desc: { fr: 'Entre 8 et 20 cm, une à deux séances.', ar: 'بين 8 و20 سم، جلسة إلى جلستين.' },
      priceMad: 1200,
    },
    {
      name: { fr: 'Pièce détaillée (réalisme)', ar: 'قطعة مفصلة (واقعية)' },
      desc: {
        fr: 'Plusieurs séances, devis établi selon le projet.',
        ar: 'عدة جلسات، يُحدد السعر حسب المشروع.',
      },
    },
    {
      name: { fr: 'Retouche de couleur', ar: 'تعديل الألوان' },
      desc: { fr: 'Rafraîchissement d’un tatouage existant.', ar: 'تجديد وشم موجود.' },
      priceMad: 300,
    },
  ],
  highlightsTitle: { fr: 'Nos engagements', ar: 'التزاماتنا' },
  highlights: [
    { fr: 'Matériel à usage unique', ar: 'أدوات للاستعمال مرة واحدة' },
    { fr: 'Trois artistes, styles différents', ar: 'ثلاثة فنانين، أساليب مختلفة' },
    { fr: 'Consultation gratuite', ar: 'استشارة مجانية' },
    { fr: 'Soin après-tatouage expliqué sur place', ar: 'شرح العناية بعد الوشم في المكان' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Le dessin final était encore plus beau que ce que j’avais imaginé.',
        ar: 'الرسمة النهائية كانت أجمل مما تخيلت.',
      },
      author: { fr: 'Youssef, Tanger', ar: 'يوسف، طنجة' },
    },
    {
      quote: {
        fr: 'Hygiène irréprochable et une vraie écoute avant de prendre l’aiguille.',
        ar: 'نظافة لا تشوبها شائبة واستماع حقيقي قبل استعمال الإبرة.',
      },
      author: { fr: 'Camille, Tanger', ar: 'كاميل، طنجة' },
    },
  ],
  contact: {
    phone: '+212 5 39 11 22 33',
    whatsapp: '212639112233',
    email: 'contact@example.com',
    address: { fr: '6 rue de la Liberté, Tanger', ar: '6 زنقة الحرية، طنجة' },
    hours: {
      fr: ['Mardi – Dimanche : 11h – 20h', 'Lundi : fermé'],
      ar: ['الثلاثاء – الأحد: 11:00 – 20:00', 'الاثنين: مغلق'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je voudrais réserver une consultation pour un tatouage le ... à ...h.',
      ar: 'السلام عليكم، أود حجز استشارة لوشم يوم ... على الساعة ...',
    },
  },
};
