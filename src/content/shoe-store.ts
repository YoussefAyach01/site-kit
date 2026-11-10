import type { SiteContent } from '../types.ts';

export const shoeStore: SiteContent = {
  id: 'shoe-store',
  name: { fr: 'Pas de Côté', ar: 'خطوة جانبية' },
  schemaType: 'ShoeStore',
  tagline: {
    fr: 'Baskets, mocassins et bottines, pointures du 35 au 47',
    ar: 'أحذية رياضية وموكاسان وجزمات، من المقاس 35 إلى 47',
  },
  hero: {
    title: { fr: 'La bonne paire, essayée, pas devinée.', ar: 'الحذاء المناسب، يُجرَّب لا يُخمَّن.' },
    sub: {
      fr: 'Cuir et daim sélectionnés, semelles résistantes, pointures du 35 au 47. Nos vendeurs mesurent vos pieds et vous disent honnêtement quelle paire vous convient.',
      ar: 'جلد وشامواه مختاران ونعال متينة ومقاسات من 35 إلى 47. بائعونا يقيسون أقدامكم ويخبرونكم بصدق أي حذاء يناسبكم.',
    },
    cta: { fr: 'Vérifier une pointure', ar: 'تحققوا من مقاس' },
  },
  heroImage: {
    alt: {
      fr: 'Rangée de baskets et de bottines en cuir et en daim, du beige au brun foncé, alignées sur une longue étagère en bois',
      ar: 'صف من الأحذية الرياضية والجزمات الجلدية والشامواه، من البيج إلى البني الداكن، مصطفة على رف خشبي طويل',
    },
  },
  about: {
    title: { fr: 'Des chaussures faites pour marcher', ar: 'أحذية صُنعت للمشي' },
    body: {
      fr: [
        'Pas de Côté est une boutique de chaussures de Casablanca qui travaille avec une dizaine de petites marques, portugaises et marocaines, choisies pour leur solidité.',
        'Nous mesurons le pied, sur deux dimensions, avant de proposer quoi que ce soit. Une chaussure qui serre au magasin serrera encore dans un mois.',
      ],
      ar: [
        '"خطوة جانبية" متجر أحذية بالدار البيضاء يتعامل مع نحو عشر علامات صغيرة برتغالية ومغربية، اخترناها لمتانتها.',
        'نقيس القدم في بُعدين قبل أن نقترح أي شيء. حذاء يضغط في المتجر سيضغط بعد شهر أيضًا.',
      ],
    },
  },
  servicesTitle: { fr: 'En rayon', ar: 'في الرفوف' },
  services: [
    {
      name: { fr: 'Baskets en cuir blanc', ar: 'أحذية رياضية من الجلد الأبيض' },
      desc: {
        fr: 'Semelle cousue, intérieur cuir, pointures 36 à 46.',
        ar: 'نعل مخيط وبطانة جلدية، من المقاس 36 إلى 46.',
      },
      priceMad: 890,
    },
    {
      name: { fr: 'Bottines en daim', ar: 'جزمات من الشامواه' },
      desc: {
        fr: 'Montage Goodyear, ressemelables, deux coloris.',
        ar: 'تركيب غودير قابل لتغيير النعل، بلونين.',
      },
      priceMad: 1290,
    },
    {
      name: { fr: 'Mocassins en cuir', ar: 'موكاسان من الجلد' },
      desc: {
        fr: 'Cuir pleine fleur, confortables dès la première sortie.',
        ar: 'جلد كامل الطبقة، مريحة من أول استعمال.',
      },
      priceMad: 780,
    },
    {
      name: { fr: 'Entretien et ressemelage', ar: 'العناية وتجديد النعل' },
      desc: {
        fr: 'Nettoyage, cirage et remplacement de semelle par notre cordonnier.',
        ar: 'تنظيف وتلميع وتغيير النعل على يد إسكافينا.',
      },
      priceMad: 150,
    },
    {
      name: { fr: 'Mesure du pied', ar: 'قياس القدم' },
      desc: {
        fr: 'Longueur et largeur, offerte, sans obligation d’achat.',
        ar: 'الطول والعرض، مجانًا ودون التزام بالشراء.',
      },
      priceMad: 0,
    },
  ],
  highlightsTitle: { fr: 'Notre promesse', ar: 'وعدنا' },
  highlights: [
    { fr: 'Pieds mesurés avant l’achat', ar: 'قياس القدم قبل الشراء' },
    { fr: 'Cuir pleine fleur', ar: 'جلد كامل الطبقة' },
    { fr: 'Ressemelage sur place', ar: 'تجديد النعل في عين المكان' },
    { fr: 'Échange sous 15 jours', ar: 'استبدال خلال 15 يومًا' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Mes bottines ont trois ans, ont été ressemelées une fois, et sont toujours impeccables.',
        ar: 'جزمتي عمرها ثلاث سنوات، جُدّد نعلها مرة واحدة، وما تزال أنيقة.',
      },
      author: { fr: 'Amine, Casablanca', ar: 'أمين، الدار البيضاء' },
    },
    {
      quote: {
        fr: 'On m’a mesuré les pieds et on m’a déconseillé la paire que je voulais. Ils avaient raison.',
        ar: 'قاسوا قدمي ونصحوني بعدم أخذ الحذاء الذي أردته. كانوا على حق.',
      },
      author: { fr: 'Nawal, Mohammedia', ar: 'نوال، المحمدية' },
    },
  ],
  contact: {
    phone: '+212 5 22 39 28 17',
    whatsapp: '212699001122',
    email: 'contact@example.com',
    address: {
      fr: '43 rue Allal Ben Abdellah, Casablanca',
      ar: '43 زنقة علال بن عبد الله، الدار البيضاء',
    },
    hours: {
      fr: ['Lundi – Samedi : 10h – 20h', 'Dimanche : 14h – 19h'],
      ar: ['الاثنين – السبت: 10:00 – 20:00', 'الأحد: 14:00 – 19:00'],
    },
    whatsappMessage: {
      fr: 'Bonjour, avez-vous le modèle ... en pointure ... ?',
      ar: 'السلام عليكم، هل لديكم الطراز ... بالمقاس ... ؟',
    },
  },
};
