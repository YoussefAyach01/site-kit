import type { SiteContent } from '../types.ts';

export const boutiqueHotel: SiteContent = {
  id: 'boutique-hotel',
  name: { fr: 'Riad des Lanternes', ar: 'رياض الفوانيس' },
  schemaType: 'Hotel',
  tagline: { fr: 'Riad de charme au cœur de la médina', ar: 'رياض أنيق في قلب المدينة القديمة' },
  hero: {
    title: { fr: 'Dormir dans un vieux rêve marocain.', ar: 'نومٌ داخل حلم مغربي قديم.' },
    sub: {
      fr: 'Six chambres, un patio avec bassin, une terrasse sur les toits. À deux pas des souks, loin de leur bruit.',
      ar: 'ست غرف وفناء بحوض ماء وسطح مطل على المدينة. على بعد خطوات من الأسواق، بعيدًا عن ضجيجها.',
    },
    cta: { fr: 'Réserver sur WhatsApp', ar: 'احجز عبر واتساب' },
  },
  heroImage: {
    alt: {
      fr: 'Patio de riad avec bassin, lanternes en laiton, bougainvillées et salon extérieur sous des arcades',
      ar: 'فناء رياض بحوض ماء وفوانيس نحاسية وزهور الجهنمية وجلسة خارجية تحت الأقواس',
    },
  },
  about: {
    title: { fr: 'Une maison restaurée, pas un hôtel', ar: 'بيت تم ترميمه، لا فندق' },
    body: {
      fr: [
        'Le Riad des Lanternes occupait autrefois une grande famille de tisserands. Restauré pierre par pierre, il garde ses zelliges d’origine et son puits de lumière.',
        'Chaque chambre porte le nom d’une couleur de teinture traditionnelle, et le petit-déjeuner est servi sur la terrasse, face aux cigognes.',
      ],
      ar: [
        'كان "رياض الفوانيس" في الأصل بيتًا لعائلة كبيرة من الحاكة. رُمّم حجرًا حجرًا، محافظًا على زليجه الأصلي وفناء الضوء الذي يتوسطه.',
        'تحمل كل غرفة اسم لون من ألوان الصباغة التقليدية، ويُقدَّم الفطور على السطح أمام أعشاش اللقالق.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos chambres', ar: 'غرفنا' },
  services: [
    {
      name: { fr: 'Chambre Indigo', ar: 'غرفة النيلة' },
      desc: {
        fr: 'Lit double, vue sur le patio, salle de bain en marbre.',
        ar: 'سرير مزدوج، إطلالة على الفناء، حمام من الرخام.',
      },
      priceMad: 650,
    },
    {
      name: { fr: 'Chambre Safran', ar: 'غرفة الزعفران' },
      desc: {
        fr: 'Suite avec coin salon et terrasse privée.',
        ar: 'جناح مع ركن جلوس وشرفة خاصة.',
      },
      priceMad: 750,
    },
    {
      name: { fr: 'Suite Henné', ar: 'جناح الحناء' },
      desc: {
        fr: 'La plus grande chambre, baignoire marocaine, vue sur les toits.',
        ar: 'أكبر غرفة، بانيو مغربي تقليدي، إطلالة على الأسطح.',
      },
      priceMad: 950,
    },
    {
      name: { fr: 'Petit-déjeuner traditionnel', ar: 'فطور تقليدي' },
      desc: {
        fr: 'Msemen, confitures maison, jus d’orange pressé.',
        ar: 'مسمن ومربى منزلي وعصير برتقال طازج.',
      },
      priceMad: 80,
    },
  ],
  highlightsTitle: { fr: 'Ce qui nous distingue', ar: 'ما يميزنا' },
  highlights: [
    { fr: 'Bassin dans le patio', ar: 'حوض ماء في الفناء' },
    { fr: 'Terrasse sur les toits', ar: 'سطح مطل على المدينة' },
    { fr: 'Petit-déjeuner inclus', ar: 'الفطور مشمول' },
    { fr: 'Transferts aéroport sur demande', ar: 'نقل من المطار عند الطلب' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'On se croirait dans un film, mais avec un wifi impeccable.',
        ar: 'تشعر وكأنك في فيلم، لكن مع واي فاي ممتاز.',
      },
      author: { fr: 'Claire, France', ar: 'كلير، فرنسا' },
    },
    {
      quote: {
        fr: 'Le petit-déjeuner sur la terrasse restera notre meilleur souvenir.',
        ar: 'سيبقى فطور الصباح على السطح أجمل ذكرياتنا.',
      },
      author: { fr: 'Omar, Fès', ar: 'عمر، فاس' },
    },
  ],
  contact: {
    phone: '+212 5 24 38 29 10',
    whatsapp: '212638291011',
    email: 'contact@example.com',
    address: {
      fr: '17 derb El Ferrane, Médina, Marrakech',
      ar: '17 درب الفران، المدينة القديمة، مراكش',
    },
    hours: {
      fr: ['Réception : 24h/24'],
      ar: ['الاستقبال: على مدار الساعة'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je voudrais réserver une chambre du ... au ... pour ... personnes.',
      ar: 'السلام عليكم، أود حجز غرفة من ... إلى ... لـ ... أشخاص.',
    },
  },
};
