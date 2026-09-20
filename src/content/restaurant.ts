import type { SiteContent } from '../types.ts';

export const restaurant: SiteContent = {
  id: 'restaurant',
  name: { fr: 'Dar Zitoun', ar: 'دار الزيتون' },
  schemaType: 'Restaurant',
  tagline: { fr: 'Cuisine marocaine de famille', ar: 'مطبخ مغربي عائلي' },
  hero: {
    title: { fr: 'Le tajine comme chez grand-mère.', ar: 'الطاجين كما تعده الجدة.' },
    sub: {
      fr: 'Recettes de famille, épices moulues chaque semaine et pain cuit au four du quartier. Réservez votre table en un message.',
      ar: 'وصفات عائلية، وتوابل تُطحن كل أسبوع، وخبز من فرن الحي. احجزوا طاولتكم برسالة واحدة.',
    },
    cta: { fr: 'Réserver sur WhatsApp', ar: 'احجز عبر واتساب' },
  },
  about: {
    title: { fr: 'Une maison, pas une chaîne', ar: 'بيت وليس سلسلة مطاعم' },
    body: {
      fr: [
        'Dar Zitoun est née dans la cuisine de Lalla Fatima, il y a vingt ans. Aujourd’hui, ses filles cuisinent les mêmes plats, à la même vitesse : lentement.',
        'Nous travaillons avec des maraîchers de la région et cuisinons chaque jour selon le marché.',
      ],
      ar: [
        'وُلد دار الزيتون في مطبخ لالة فاطمة قبل عشرين سنة. اليوم تطبخ بناتها نفس الأطباق بنفس الإيقاع: على مهل.',
        'نتعامل مع فلاحين من المنطقة ونطبخ كل يوم حسب ما يجود به السوق.',
      ],
    },
  },
  servicesTitle: { fr: 'La carte', ar: 'قائمة الطعام' },
  services: [
    {
      name: { fr: 'Tajine d’agneau aux pruneaux', ar: 'طاجين لحم بالبرقوق' },
      desc: {
        fr: 'Amandes grillées, graines de sésame, pain maison.',
        ar: 'باللوز المحمص والسمسم مع خبز الدار.',
      },
      priceMad: 95,
    },
    {
      name: { fr: 'Couscous du vendredi', ar: 'كسكس الجمعة' },
      desc: {
        fr: 'Sept légumes, poulet fermier ou viande, bouillon parfumé.',
        ar: 'بسبع خضر مع دجاج بلدي أو لحم ومرق عطر.',
      },
      priceMad: 85,
    },
    {
      name: { fr: 'Pastilla au poulet', ar: 'بسطيلة بالدجاج' },
      desc: {
        fr: 'Feuilletée, cannelle et sucre glace, faite à la commande.',
        ar: 'مورقة بالقرفة والسكر، تُحضّر عند الطلب.',
      },
      priceMad: 70,
    },
    {
      name: { fr: 'Harira et dattes', ar: 'حريرة وتمر' },
      desc: { fr: 'La soupe du soir, servie avec chebakia.', ar: 'حساء المساء مع الشباكية.' },
      priceMad: 25,
    },
    {
      name: { fr: 'Thé à la menthe', ar: 'أتاي بالنعناع' },
      desc: { fr: 'Théière pour deux, menthe fraîche du jour.', ar: 'براد لشخصين بنعناع طازج.' },
      priceMad: 20,
    },
  ],
  highlightsTitle: { fr: 'Nos engagements', ar: 'التزاماتنا' },
  highlights: [
    { fr: 'Cuisine 100 % maison', ar: 'طبخ منزلي 100٪' },
    { fr: 'Menu enfant', ar: 'قائمة للأطفال' },
    { fr: 'Options végétariennes', ar: 'أطباق نباتية' },
    { fr: 'Terrasse ombragée', ar: 'شرفة مظللة' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Le meilleur tajine de la ville, et un accueil chaleureux.',
        ar: 'أحسن طاجين في المدينة واستقبال دافئ.',
      },
      author: { fr: 'Sara, Casablanca', ar: 'سارة، الدار البيضاء' },
    },
    {
      quote: { fr: 'On y va en famille tous les dimanches.', ar: 'نذهب إليه كل أحد مع العائلة.' },
      author: { fr: 'Karim, Rabat', ar: 'كريم، الرباط' },
    },
  ],
  contact: {
    phone: '+212 5 22 00 00 00',
    whatsapp: '212600000000',
    email: 'contact@example.com',
    address: {
      fr: '12 rue des Oliviers, Médina, Casablanca',
      ar: '12 زنقة الزيتون، المدينة القديمة، الدار البيضاء',
    },
    hours: {
      fr: ['Lundi – Samedi : 12h – 23h', 'Dimanche : 12h – 17h'],
      ar: ['الاثنين – السبت: 12:00 – 23:00', 'الأحد: 12:00 – 17:00'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je voudrais réserver une table pour ... personnes le ... à ...',
      ar: 'السلام عليكم، أود حجز طاولة لـ ... أشخاص يوم ... على الساعة ...',
    },
  },
};
