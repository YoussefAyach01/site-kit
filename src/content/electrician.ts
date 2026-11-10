import type { SiteContent } from '../types.ts';

export const electrician: SiteContent = {
  id: 'electrician',
  name: { fr: 'Elec Pro Casablanca', ar: 'إلكترو برو الدار البيضاء' },
  schemaType: 'Electrician',
  tagline: { fr: 'Installation et mise aux normes électriques', ar: 'تركيب وتحديث الشبكة الكهربائية' },
  hero: {
    title: { fr: 'Votre installation électrique, en sécurité.', ar: 'تمديداتكم الكهربائية في أمان تام.' },
    sub: {
      fr: 'Tableau électrique, prises, éclairage, bornes de recharge : des électriciens certifiés pour le neuf comme pour le dépannage.',
      ar: 'لوحة الكهرباء والمقابس والإنارة ومحطات الشحن: كهربائيون معتمدون للتركيبات الجديدة وإصلاح الأعطاب.',
    },
    cta: { fr: 'Demander un diagnostic', ar: 'اطلبوا تشخيصاً' },
  },
  heroImage: {
    alt: {
      fr: 'Électricien en combinaison bleue réparant un tableau électrique ouvert, tournevis isolé à la main, fils rouges bleus et marrons visibles',
      ar: 'كهربائي يرتدي بذلة زرقاء يصلح لوحة كهربائية مفتوحة، يمسك مفك براغي معزولاً، مع أسلاك حمراء وزرقاء وبنية ظاهرة',
    },
  },
  about: {
    title: { fr: 'La sécurité d’abord, toujours', ar: 'السلامة أولاً، دائماً' },
    body: {
      fr: [
        'Elec Pro Casablanca regroupe des électriciens formés aux normes NF C 15-100, intervenant sur les logements, commerces et petits locaux professionnels.',
        'Chaque intervention est testée et documentée : vous savez exactement ce qui a été fait et pourquoi.',
      ],
      ar: [
        'إلكترو برو الدار البيضاء فريق من الكهربائيين المكونين وفق معايير السلامة الكهربائية، يتدخل في المنازل والمحلات والمكاتب الصغيرة.',
        'كل تدخل يُختبر ويُوثَّق: تعرفون بالضبط ما تم إنجازه ولماذا.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos services', ar: 'خدماتنا' },
  services: [
    {
      name: { fr: 'Diagnostic du tableau électrique', ar: 'تشخيص اللوحة الكهربائية' },
      desc: {
        fr: 'Vérification des disjoncteurs, de la terre et des différentiels.',
        ar: 'فحص القواطع والأرضي ومفاتيح الحماية.',
      },
      priceMad: 250,
    },
    {
      name: { fr: 'Mise aux normes', ar: 'تحديث حسب المعايير' },
      desc: {
        fr: 'Remise en conformité complète d’une installation ancienne.',
        ar: 'تحديث كامل لتمديدات قديمة ليصبح متوافقاً مع المعايير.',
      },
    },
    {
      name: { fr: 'Installation prises et éclairage', ar: 'تركيب المقابس والإنارة' },
      desc: {
        fr: 'Ajout de points électriques, suspensions et spots sur mesure.',
        ar: 'إضافة نقاط كهربائية وثريات وإنارة مخصصة.',
      },
      priceMad: 180,
    },
    {
      name: { fr: 'Dépannage de panne électrique', ar: 'إصلاح الأعطاب الكهربائية' },
      desc: {
        fr: 'Coupures, disjonctions répétées, courts-circuits.',
        ar: 'انقطاع التيار وتكرر القطع الكهربائي والأعطاب المفاجئة.',
      },
      priceMad: 220,
    },
    {
      name: { fr: 'Pose de borne de recharge', ar: 'تركيب محطة شحن السيارات' },
      desc: {
        fr: 'Installation sécurisée pour véhicule électrique, garage ou parking.',
        ar: 'تركيب آمن لشحن السيارات الكهربائية في المرآب أو موقف السيارات.',
      },
      priceMad: 2800,
    },
  ],
  highlightsTitle: { fr: 'Ce qui nous distingue', ar: 'ما يميزنا' },
  highlights: [
    { fr: 'Électriciens certifiés', ar: 'كهربائيون معتمدون' },
    { fr: 'Test et rapport après chaque passage', ar: 'اختبار وتقرير بعد كل تدخل' },
    { fr: 'Dépannage le jour même', ar: 'إصلاح في نفس اليوم' },
    { fr: 'Garantie pièces et main d’œuvre', ar: 'ضمان على القطع واليد العاملة' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Tableau électrique refait aux normes en une journée, propre et sans coupure surprise depuis.',
        ar: 'أعادوا تهيئة اللوحة الكهربائية في يوم واحد، بشكل نظيف وبدون أي انقطاع مفاجئ منذ ذلك الحين.',
      },
      author: { fr: 'Omar, Maarif', ar: 'عمر، المعاريف' },
    },
    {
      quote: {
        fr: 'Ils ont trouvé la panne que deux autres électriciens n’avaient pas vue.',
        ar: 'اكتشفوا العطب الذي لم يتمكن كهربائيان آخران من إيجاده.',
      },
      author: { fr: 'Salma, Sidi Maarouf', ar: 'سلمى، سيدي معروف' },
    },
  ],
  contact: {
    phone: '+212 5 22 77 88 99',
    whatsapp: '212677889900',
    email: 'contact@example.com',
    address: {
      fr: '15 avenue des FAR, Sidi Maarouf, Casablanca',
      ar: '15 شارع القوات المسلحة الملكية، سيدي معروف، الدار البيضاء',
    },
    hours: {
      fr: ['Lundi – Vendredi : 8h – 19h', 'Samedi : 8h – 14h'],
      ar: ['الاثنين – الجمعة: 8:00 – 19:00', 'السبت: 8:00 – 14:00'],
    },
    whatsappMessage: {
      fr: 'Bonjour, j’ai besoin d’un électricien pour ... à l’adresse ...',
      ar: 'السلام عليكم، أحتاج كهربائياً من أجل ... بالعنوان ...',
    },
  },
};
