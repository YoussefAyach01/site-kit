import type { SiteContent } from '../types.ts';

export const florist: SiteContent = {
  id: 'florist',
  name: { fr: 'Atelier Pétale', ar: 'مشغل البتلة' },
  schemaType: 'Florist',
  tagline: { fr: 'Bouquets de saison, compositions sur mesure', ar: 'باقات الموسم وتنسيقات حسب الطلب' },
  hero: {
    title: { fr: 'Des fleurs coupées ce matin, nouées à la main.', ar: 'زهور قُطفت هذا الصباح وربطت باليد.' },
    sub: {
      fr: 'Bouquets du jour, abonnements hebdomadaires, mariages et événements. Livraison le jour même dans toute la ville pour toute commande avant midi.',
      ar: 'باقات اليوم واشتراكات أسبوعية وحفلات زفاف ومناسبات. توصيل في اليوم نفسه بكل المدينة لكل طلب قبل الظهر.',
    },
    cta: { fr: 'Commander un bouquet', ar: 'اطلبوا باقة' },
  },
  heroImage: {
    alt: {
      fr: 'Fleuriste nouant un bouquet de roses, pivoines et feuillages sur un établi en bois couvert de pétales, avec des vases en arrière-plan',
      ar: 'بائعة زهور تربط باقة من الورد والفاوانيا والأوراق الخضراء فوق طاولة خشبية متناثر عليها البتلات، وخلفها أواني',
    },
  },
  about: {
    title: { fr: 'Fleuriste de quartier depuis 2012', ar: 'بائعة زهور الحي منذ 2012' },
    body: {
      fr: [
        'L’Atelier Pétale travaille avec des horticulteurs de la région de Meknès et de Larache. Les fleurs arrivent le matin même, jamais stockées plus de deux jours.',
        'Nous composons chaque bouquet selon les arrivages, pas selon un catalogue. Dites-nous votre budget et l’occasion, nous faisons le reste.',
      ],
      ar: [
        'يتعامل "مشغل البتلة" مع مزارعين بجهة مكناس والعرائش. تصل الزهور صباحًا ولا تُخزَّن أكثر من يومين.',
        'نركّب كل باقة حسب ما يصلنا لا حسب كتالوج. أخبرونا بميزانيتكم والمناسبة ونتكفل بالباقي.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos compositions', ar: 'تنسيقاتنا' },
  services: [
    {
      name: { fr: 'Bouquet du jour', ar: 'باقة اليوم' },
      desc: {
        fr: 'Fleurs de saison, papier kraft ou vase, selon les arrivages.',
        ar: 'زهور الموسم بورق كرافت أو مزهرية، حسب ما يصل.',
      },
      priceMad: 250,
    },
    {
      name: { fr: 'Grand bouquet de roses', ar: 'باقة ورد كبيرة' },
      desc: {
        fr: 'Trente roses à longues tiges, feuillages inclus.',
        ar: 'ثلاثون وردة بسيقان طويلة مع الأوراق الخضراء.',
      },
      priceMad: 500,
    },
    {
      name: { fr: 'Abonnement fleurs (mensuel)', ar: 'اشتراك زهور (شهري)' },
      desc: {
        fr: 'Un bouquet frais chaque semaine chez vous ou à votre bureau.',
        ar: 'باقة طازجة كل أسبوع في بيتكم أو مكتبكم.',
      },
      priceMad: 900,
    },
    {
      name: { fr: 'Décoration de mariage', ar: 'تزيين حفلات الزفاف' },
      desc: {
        fr: 'Bouquet de mariée, arche, centres de table, sur devis.',
        ar: 'باقة العروس وقوس وزينة الطاولات، بعرض سعر.',
      },
    },
    {
      name: { fr: 'Livraison dans la ville', ar: 'التوصيل داخل المدينة' },
      desc: {
        fr: 'Le jour même pour toute commande avant 12 h.',
        ar: 'في اليوم نفسه لكل طلب قبل الساعة 12 ظهرًا.',
      },
      priceMad: 40,
    },
  ],
  highlightsTitle: { fr: 'Pourquoi nos fleurs durent', ar: 'لماذا تدوم زهورنا' },
  highlights: [
    { fr: 'Arrivages quotidiens', ar: 'وصول يومي' },
    { fr: 'Producteurs locaux', ar: 'منتجون محليون' },
    { fr: 'Livraison le jour même', ar: 'توصيل في اليوم نفسه' },
    { fr: 'Fraîcheur garantie 5 jours', ar: 'نضارة مضمونة 5 أيام' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Le bouquet de ma mère a tenu deux semaines. Elle me demande encore l’adresse.',
        ar: 'باقة أمي بقيت أسبوعين. ما زالت تسألني عن العنوان.',
      },
      author: { fr: 'Zineb, Fès', ar: 'زينب، فاس' },
    },
    {
      quote: {
        fr: 'Ils ont décoré notre mariage dans la limite de notre budget, et c’était magnifique.',
        ar: 'زيّنوا حفل زفافنا ضمن ميزانيتنا وكان رائعًا.',
      },
      author: { fr: 'Ilyass et Dounia, Meknès', ar: 'إلياس ودنيا، مكناس' },
    },
  ],
  contact: {
    phone: '+212 5 35 62 41 30',
    whatsapp: '212644556677',
    email: 'contact@example.com',
    address: {
      fr: '12 avenue Hassan II, Ville Nouvelle, Fès',
      ar: '12 شارع الحسن الثاني، المدينة الجديدة، فاس',
    },
    hours: {
      fr: ['Lundi – Samedi : 9h – 19h', 'Dimanche : 9h – 13h'],
      ar: ['الاثنين – السبت: 9:00 – 19:00', 'الأحد: 9:00 – 13:00'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je voudrais un bouquet pour ... (budget : ...), à livrer à ... avant ...h.',
      ar: 'السلام عليكم، أريد باقة لمناسبة ... (الميزانية: ...) تُسلَّم إلى ... قبل الساعة ...',
    },
  },
};
