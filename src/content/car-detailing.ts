import type { SiteContent } from '../types.ts';

export const carDetailing: SiteContent = {
  id: 'car-detailing',
  name: { fr: 'Éclat Auto Detailing', ar: 'بريق لتلميع السيارات' },
  schemaType: 'AutoBodyShop',
  tagline: { fr: 'Nettoyage, polissage et protection céramique', ar: 'تنظيف وتلميع وحماية بالسيراميك' },
  hero: {
    title: { fr: 'Votre voiture, comme le premier jour.', ar: 'سيارتكم كأنها في يومها الأول.' },
    sub: {
      fr: 'Lavage à la main, polissage, traitement céramique et rénovation intérieure. Chaque voiture est traitée dans un atelier couvert, sur rendez-vous.',
      ar: 'غسيل يدوي وتلميع ومعالجة بالسيراميك وتجديد الداخل. تُعالج كل سيارة داخل ورشة مغطاة وبموعد مسبق.',
    },
    cta: { fr: 'Demander un devis', ar: 'اطلبوا عرض سعر' },
  },
  heroImage: {
    alt: {
      fr: 'Mains gantées polissant le capot noir brillant d’une voiture avec un chiffon bleu en microfibre, gouttes d’eau sur la carrosserie',
      ar: 'يدان بقفازين تلمعان غطاء محرك سيارة سوداء لامعة بقطعة قماش زرقاء من الميكروفايبر، وعلى الهيكل قطرات ماء',
    },
  },
  about: {
    title: { fr: 'Le détail fait la différence', ar: 'التفاصيل تصنع الفرق' },
    body: {
      fr: [
        'Éclat est un atelier de detailing de Casablanca fondé par un carrossier passionné. Nous travaillons à la main, avec des produits professionnels et des chiffons microfibre neufs pour chaque voiture.',
        'Un lavage express ne suffit pas à protéger une peinture. Nous vous expliquons ce dont votre voiture a vraiment besoin, et ce qui peut attendre.',
      ],
      ar: [
        '"بريق" ورشة تلميع بالدار البيضاء أسسها مختص في هياكل السيارات شغوف بعمله. نعمل باليد بمنتجات احترافية وبأقمشة ميكروفايبر جديدة لكل سيارة.',
        'غسيل سريع لا يكفي لحماية الطلاء. نشرح لكم ما تحتاجه سيارتكم فعلاً وما يمكن تأجيله.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos formules', ar: 'صيغنا' },
  services: [
    {
      name: { fr: 'Lavage complet à la main', ar: 'غسيل كامل يدوي' },
      desc: {
        fr: 'Carrosserie, jantes, vitres et aspiration intérieure.',
        ar: 'الهيكل والجنوط والزجاج وتنظيف الداخل بالمكنسة.',
      },
      priceMad: 150,
    },
    {
      name: { fr: 'Rénovation intérieure', ar: 'تجديد الداخل' },
      desc: {
        fr: 'Nettoyage des sièges, plastiques et ciel de toit, traitement des odeurs.',
        ar: 'تنظيف المقاعد والبلاستيك والسقف ومعالجة الروائح.',
      },
      priceMad: 600,
    },
    {
      name: { fr: 'Polissage carrosserie', ar: 'تلميع الهيكل' },
      desc: {
        fr: 'Élimination des micro-rayures et ternissures en deux passes.',
        ar: 'إزالة الخدوش الدقيقة والبهتان على مرحلتين.',
      },
      priceMad: 1500,
    },
    {
      name: { fr: 'Traitement céramique', ar: 'معالجة بالسيراميك' },
      desc: {
        fr: 'Protection de la peinture pendant deux ans, brillance et effet hydrophobe.',
        ar: 'حماية للطلاء لمدة سنتين مع لمعان وخاصية طرد الماء.',
      },
      priceMad: 4500,
    },
    {
      name: { fr: 'Rénovation des phares', ar: 'تجديد المصابيح الأمامية' },
      desc: {
        fr: 'Polissage et vernis de protection UV, la paire.',
        ar: 'تلميع وطلاء واقٍ من الأشعة فوق البنفسجية، للزوج.',
      },
      priceMad: 400,
    },
  ],
  highlightsTitle: { fr: 'Notre méthode', ar: 'طريقتنا' },
  highlights: [
    { fr: 'Travail 100 % à la main', ar: 'عمل يدوي بالكامل' },
    { fr: 'Atelier couvert', ar: 'ورشة مغطاة' },
    { fr: 'Photos avant et après', ar: 'صور قبل وبعد' },
    { fr: 'Céramique garantie 2 ans', ar: 'سيراميك مضمون سنتين' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Ma voiture de dix ans a retrouvé une peinture neuve. Les photos avant et après parlent d’elles-mêmes.',
        ar: 'استعادت سيارتي ذات العشر سنوات طلاءً جديدًا. صور قبل وبعد تتحدث عن نفسها.',
      },
      author: { fr: 'Adil, Casablanca', ar: 'عادل، الدار البيضاء' },
    },
    {
      quote: {
        fr: 'Un travail minutieux et honnête. On m’a déconseillé la céramique, trop chère pour ma voiture.',
        ar: 'عمل دقيق وصادق. نصحوني بعدم السيراميك لأنه غالٍ على سيارتي.',
      },
      author: { fr: 'Sofia, Mohammedia', ar: 'صوفيا، المحمدية' },
    },
  ],
  contact: {
    phone: '+212 5 22 50 63 18',
    whatsapp: '212633441155',
    email: 'contact@example.com',
    address: {
      fr: 'Quartier industriel Ain Sebaâ, rue 9, Casablanca',
      ar: 'الحي الصناعي عين السبع، زنقة 9، الدار البيضاء',
    },
    hours: {
      fr: ['Lundi – Samedi : 9h – 18h', 'Dimanche : fermé'],
      ar: ['الاثنين – السبت: 9:00 – 18:00', 'الأحد: مغلق'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je souhaite un devis pour ... sur une voiture (marque ..., couleur ...).',
      ar: 'السلام عليكم، أرغب في عرض سعر لـ ... لسيارة (الماركة ...، اللون ...).',
    },
  },
};
