import type { SiteContent } from '../types.ts';

export const catering: SiteContent = {
  id: 'catering',
  name: { fr: 'La Table Itinérante', ar: 'المائدة المتجولة' },
  schemaType: 'FoodEstablishment',
  tagline: {
    fr: 'Traiteur pour mariages, séminaires et réceptions',
    ar: 'خدمات تموين للأعراس والندوات والحفلات',
  },
  hero: {
    title: { fr: 'Votre évènement, notre cuisine.', ar: 'مناسبتكم، مطبخنا.' },
    sub: {
      fr: 'Menus sur mesure pour 20 à 300 invités, service complet avec vaisselle, personnel et mise en place. Un devis en moins de 24 heures.',
      ar: 'قوائم مصمَّمة خصيصًا لـ 20 إلى 300 ضيف، مع خدمة كاملة تشمل الأواني والطاقم والتجهيز. عرض سعر في أقل من 24 ساعة.',
    },
    cta: { fr: 'Demander un devis sur WhatsApp', ar: 'اطلب عرض سعر عبر واتساب' },
  },
  heroImage: {
    alt: {
      fr: 'Table dressée vue de dessus avec pains plats, salades, houmous et petites assiettes pour un évènement',
      ar: 'منظر علوي لمائدة مجهزة بالخبز المسطح والسلطات والحمص وأطباق صغيرة لحدث خاص',
    },
  },
  about: {
    title: { fr: 'Un traiteur qui connaît vos invités', ar: 'ممون حفلات يعرف ضيوفكم' },
    body: {
      fr: [
        'La Table Itinérante a démarré avec les mariages de famille avant de devenir le traiteur de référence pour les entreprises de la région.',
        'Chaque menu est construit avec le client : allergies, préférences, budget. Rien n’est figé, tout est goûté avant validation.',
      ],
      ar: [
        'انطلقت "المائدة المتجولة" من حفلات زفاف عائلية قبل أن تصبح ممون الحفلات المرجعي لدى شركات المنطقة.',
        'تُبنى كل قائمة مع الزبون: الحساسيات والتفضيلات والميزانية. لا شيء ثابت، وكل شيء يُذاق قبل الاعتماد.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos formules', ar: 'عروضنا' },
  services: [
    {
      name: { fr: 'Formule cocktail', ar: 'عرض الكوكتيل' },
      desc: {
        fr: 'Bouchées froides et chaudes, service debout, 1h30 à 2h. Tarif par personne.',
        ar: 'مقبلات باردة وساخنة، خدمة واقفة، من ساعة ونصف إلى ساعتين. السعر للفرد الواحد.',
      },
      priceMad: 180,
    },
    {
      name: { fr: 'Formule mariage', ar: 'عرض الزفاف' },
      desc: {
        fr: 'Menu complet 5 services, vaisselle et personnel inclus. Tarif par personne.',
        ar: 'قائمة كاملة من 5 أطباق، مع الأواني والطاقم. السعر للفرد الواحد.',
      },
      priceMad: 450,
    },
    {
      name: { fr: 'Pause séminaire', ar: 'استراحة الندوة' },
      desc: {
        fr: 'Café, viennoiseries et jus pour réunions professionnelles. Tarif par personne.',
        ar: 'قهوة ومعجنات وعصائر للاجتماعات المهنية. السعر للفرد الواحد.',
      },
      priceMad: 90,
    },
    {
      name: { fr: 'Plateau repas entreprise', ar: 'صندوق غداء للشركات' },
      desc: {
        fr: 'Livré sur site, menu du jour équilibré. Minimum 15 plateaux.',
        ar: 'يُوصَّل إلى المكتب، قائمة يوم متوازنة. بحد أدنى 15 صندوقًا.',
      },
      priceMad: 70,
    },
  ],
  highlightsTitle: { fr: 'Nos garanties', ar: 'ضماناتنا' },
  highlights: [
    { fr: 'Devis sous 24h', ar: 'عرض سعر خلال 24 ساعة' },
    { fr: 'Service complet sur place', ar: 'خدمة كاملة في المكان' },
    { fr: 'Menus personnalisés', ar: 'قوائم مخصصة' },
    { fr: 'Expérience entreprises & mariages', ar: 'خبرة في الشركات والأعراس' },
  ],
  testimonials: [
    {
      quote: { fr: 'Ils ont géré 220 invités sans un accroc.', ar: 'تكفلوا بـ220 ضيفًا بدون أي خلل.' },
      author: { fr: 'Houda, Rabat', ar: 'هدى، الرباط' },
    },
    {
      quote: {
        fr: 'Notre pause café du séminaire annuel, c’est toujours eux.',
        ar: 'استراحة قهوة ندوتنا السنوية، هم دائمًا من يتكفل بها.',
      },
      author: { fr: 'Yassine, Casablanca', ar: 'ياسين، الدار البيضاء' },
    },
  ],
  contact: {
    phone: '+212 5 22 55 66 77',
    whatsapp: '212655667788',
    email: 'contact@example.com',
    address: {
      fr: 'Zone industrielle Sidi Maarouf, local 14, Casablanca',
      ar: 'المنطقة الصناعية سيدي معروف، المحل 14، الدار البيضاء',
    },
    hours: {
      fr: ['Lundi – Vendredi : 9h – 18h', 'Samedi : sur rendez-vous'],
      ar: ['الاثنين – الجمعة: 9:00 – 18:00', 'السبت: بموعد مسبق'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je prépare un évènement pour ... personnes le ..., pouvez-vous m’envoyer un devis ?',
      ar: 'السلام عليكم، أُحضّر لحدث يضم ... شخصًا يوم ...، هل يمكنكم إرسال عرض سعر؟',
    },
  },
};
