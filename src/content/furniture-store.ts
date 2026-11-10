import type { SiteContent } from '../types.ts';

export const furnitureStore: SiteContent = {
  id: 'furniture-store',
  name: { fr: 'Maison Atlas Mobilier', ar: 'دار أطلس للأثاث' },
  schemaType: 'FurnitureStore',
  tagline: { fr: 'Mobilier contemporain, cuir et bois massif', ar: 'أثاث عصري من الجلد والخشب الصلب' },
  hero: {
    title: { fr: 'Un salon qui donne envie de rester.', ar: 'صالون يجعلكم تريدون البقاء.' },
    sub: {
      fr: 'Canapés en cuir, tables en bois massif et tapis tissés, présentés en ambiances complètes. Livraison, montage et reprise de l’ancien mobilier inclus.',
      ar: 'أرائك جلدية وطاولات من الخشب الصلب وزرابي منسوجة، معروضة في أجواء كاملة. التوصيل والتركيب واسترجاع الأثاث القديم مشمولة.',
    },
    cta: { fr: 'Visiter le showroom', ar: 'زوروا المعرض' },
  },
  heroImage: {
    alt: {
      fr: 'Salon aménagé avec un canapé en cuir cognac, une table basse ronde en bois, un tapis épais et de grandes fenêtres vitrées',
      ar: 'صالون مجهّز بأريكة جلدية بلون الكونياك وطاولة قهوة دائرية خشبية وزربية سميكة ونوافذ زجاجية كبيرة',
    },
  },
  about: {
    title: { fr: 'Du mobilier pensé pour durer', ar: 'أثاث صُمم ليدوم' },
    body: {
      fr: [
        'Maison Atlas Mobilier est un showroom de 600 m² à Casablanca. Nos canapés sont montés sur des structures en hêtre massif et garantis dix ans.',
        'Nous présentons chaque meuble dans une pièce reconstituée, avec les dimensions réelles, pour que vous puissiez imaginer le résultat chez vous.',
      ],
      ar: [
        '"دار أطلس للأثاث" معرض مساحته 600 متر مربع بالدار البيضاء. أرائكنا مبنية على هياكل من خشب الزان الصلب ومضمونة عشر سنوات.',
        'نعرض كل قطعة داخل غرفة مركّبة بأبعادها الحقيقية، لتتخيلوا النتيجة في بيتكم.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos gammes', ar: 'مجموعاتنا' },
  services: [
    {
      name: { fr: 'Canapé 3 places en cuir', ar: 'أريكة بثلاثة مقاعد من الجلد' },
      desc: {
        fr: 'Cuir pleine fleur, structure en hêtre, garantie 10 ans.',
        ar: 'جلد كامل الطبقة وهيكل من الزان وضمان 10 سنوات.',
      },
      priceMad: 9800,
    },
    {
      name: { fr: 'Table basse en bois massif', ar: 'طاولة قهوة من الخشب الصلب' },
      desc: {
        fr: 'Chêne huilé, pieds fuselés, diamètre 90 cm.',
        ar: 'بلوط مزيّت وأرجل مخروطية وقطر 90 سم.',
      },
      priceMad: 2400,
    },
    {
      name: { fr: 'Tapis berbère tissé main', ar: 'زربية أمازيغية منسوجة يدويًا' },
      desc: {
        fr: 'Laine épaisse, 2 × 3 m, tissé dans l’Atlas.',
        ar: 'صوف سميك، 2 × 3 أمتار، منسوجة في الأطلس.',
      },
      priceMad: 3600,
    },
    {
      name: { fr: 'Livraison et montage', ar: 'التوصيل والتركيب' },
      desc: {
        fr: 'Offerts à Casablanca, reprise de l’ancien mobilier incluse.',
        ar: 'مجانية بالدار البيضاء مع استرجاع الأثاث القديم.',
      },
      priceMad: 0,
    },
    {
      name: { fr: 'Conseil en aménagement', ar: 'استشارة في التهيئة' },
      desc: {
        fr: 'Plan de votre pièce et sélection de meubles, offerts avec un achat.',
        ar: 'مخطط لغرفتكم واختيار القطع، مجاني مع الشراء.',
      },
      priceMad: 0,
    },
  ],
  highlightsTitle: { fr: 'Pourquoi nous choisir', ar: 'لماذا نحن' },
  highlights: [
    { fr: 'Structures en bois massif', ar: 'هياكل من الخشب الصلب' },
    { fr: 'Garantie 10 ans', ar: 'ضمان 10 سنوات' },
    { fr: 'Livraison et montage offerts', ar: 'توصيل وتركيب مجانيان' },
    { fr: 'Paiement en 6 fois', ar: 'أداء على 6 دفعات' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Le canapé est arrivé monté, l’ancien a été repris. Rien à faire de notre côté.',
        ar: 'وصلت الأريكة مركّبة واسترجعوا القديمة. لم نفعل شيئًا من جهتنا.',
      },
      author: { fr: 'Fatima Zahra, Casablanca', ar: 'فاطمة الزهراء، الدار البيضاء' },
    },
    {
      quote: {
        fr: 'Un vrai conseil, pas un discours de vendeur. Notre salon est exactement comme sur le plan.',
        ar: 'استشارة حقيقية لا خطاب بائع. صالوننا تمامًا كما في المخطط.',
      },
      author: { fr: 'Younes, Bouskoura', ar: 'يونس، بوسكورة' },
    },
  ],
  contact: {
    phone: '+212 5 22 90 12 34',
    whatsapp: '212600112233',
    email: 'contact@example.com',
    address: {
      fr: 'Route de Bouskoura, km 3, Casablanca',
      ar: 'طريق بوسكورة، الكيلومتر 3، الدار البيضاء',
    },
    hours: {
      fr: ['Lundi – Samedi : 10h – 20h', 'Dimanche : 11h – 18h'],
      ar: ['الاثنين – السبت: 10:00 – 20:00', 'الأحد: 11:00 – 18:00'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je cherche un/une ... pour un salon de ... m². Puis-je passer au showroom ?',
      ar: 'السلام عليكم، أبحث عن ... لصالون مساحته ... م². هل يمكنني زيارة المعرض؟',
    },
  },
};
