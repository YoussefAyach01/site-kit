import type { SiteContent } from '../types.ts';

export const movingCompany: SiteContent = {
  id: 'moving-company',
  name: { fr: 'Atlas Express Déménagement', ar: 'أطلس إكسبريس للنقل' },
  schemaType: 'MovingCompany',
  tagline: { fr: 'Déménagement résidentiel et professionnel', ar: 'نقل المنازل والمكاتب' },
  hero: {
    title: { fr: 'Votre déménagement, sans la casse ni le stress.', ar: 'نقل أغراضكم، بدون كسر ولا توتر.' },
    sub: {
      fr: 'Emballage, transport et montage de meubles par une équipe formée à la manutention. Devis sur photos en 24h.',
      ar: 'تغليف ونقل وتركيب الأثاث من طرف فريق مدرب على المناولة. عرض سعر بالصور خلال 24 ساعة.',
    },
    cta: { fr: 'Demander un devis', ar: 'اطلبوا عرض سعر' },
  },
  heroImage: {
    alt: {
      fr: 'Camion de déménagement ouvert garé dans une rue résidentielle, cartons empilés marqués FRAGILE, meubles emballés et déménageur montant la rampe',
      ar: 'شاحنة نقل مفتوحة متوقفة في شارع سكني، صناديق مكدسة مكتوب عليها FRAGILE، أثاث مغلف وعامل نقل يصعد المنحدر',
    },
  },
  about: {
    title: {
      fr: 'Une équipe fixe, pas des intérimaires du jour',
      ar: 'فريق ثابت، لا عمال مؤقتون في اليوم نفسه',
    },
    body: {
      fr: [
        'Atlas Express Déménagement emploie ses propres déménageurs, formés à l’emballage et au portage, pas des équipes recrutées la veille.',
        'Chaque meuble est protégé avant chargement, et l’inventaire est vérifié au départ comme à l’arrivée.',
      ],
      ar: [
        'يوظف أطلس إكسبريس للنقل عمال نقل خاصين به، مدربين على التغليف والحمل، وليس فرقاً تُجند في اللحظة الأخيرة.',
        'يُحمى كل قطعة أثاث قبل التحميل، ويُراجع الجرد عند الانطلاق وعند الوصول.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos services', ar: 'خدماتنا' },
  services: [
    {
      name: { fr: 'Déménagement d’appartement', ar: 'نقل الشقق' },
      desc: {
        fr: 'Studio à villa, camion et équipe adaptés au volume.',
        ar: 'من الاستوديو إلى الفيلا، شاحنة وفريق حسب الحجم.',
      },
    },
    {
      name: { fr: 'Déménagement de bureau', ar: 'نقل المكاتب' },
      desc: {
        fr: 'Planification hors horaires de bureau, matériel informatique inclus.',
        ar: 'تخطيط خارج أوقات العمل، مع شمول المعدات المعلوماتية.',
      },
    },
    {
      name: { fr: 'Emballage professionnel', ar: 'تغليف احترافي' },
      desc: {
        fr: 'Cartons, papier bulle et housses fournis, vaisselle incluse.',
        ar: 'توفير الصناديق والورق الفقاعي والأغطية، بما في ذلك الأواني.',
      },
      priceMad: 1200,
    },
    {
      name: { fr: 'Garde-meuble', ar: 'تخزين الأثاث' },
      desc: {
        fr: 'Stockage sécurisé et sec, à la semaine ou au mois.',
        ar: 'تخزين آمن وجاف، بالأسبوع أو بالشهر.',
      },
      priceMad: 400,
    },
    {
      name: { fr: 'Montage et démontage de meubles', ar: 'فك وتركيب الأثاث' },
      desc: {
        fr: 'Armoires, lits et meubles en kit remontés sur place.',
        ar: 'إعادة تركيب الخزائن والأسرّة والأثاث الجاهز في المكان.',
      },
      priceMad: 350,
    },
  ],
  highlightsTitle: { fr: 'Ce qui nous distingue', ar: 'ما يميزنا' },
  highlights: [
    { fr: 'Devis sur photos en 24h', ar: 'عرض سعر بالصور خلال 24 ساعة' },
    { fr: 'Assurance transport incluse', ar: 'تأمين النقل مشمول' },
    { fr: 'Équipe salariée, pas de sous-traitance', ar: 'فريق أجير، بدون مناولة فرعية' },
    { fr: 'Déménagements weekend disponibles', ar: 'نقل متاح في عطلة نهاية الأسبوع' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Déménagement d’un 4 pièces en une demi-journée, rien de cassé.',
        ar: 'نقل شقة من 4 غرف في نصف يوم، بدون أي كسر.',
      },
      author: { fr: 'Khadija, Sidi Belyout', ar: 'خديجة، سيدي بليوط' },
    },
    {
      quote: {
        fr: 'Très professionnels, ils ont même remonté notre armoire compliquée.',
        ar: 'محترفون جداً، حتى أنهم أعادوا تركيب خزانتنا المعقدة.',
      },
      author: { fr: 'Anas, Beauséjour', ar: 'أنس، بوسيجور' },
    },
  ],
  contact: {
    phone: '+212 5 22 11 33 55',
    whatsapp: '212611335577',
    email: 'contact@example.com',
    address: {
      fr: '63 boulevard Ba Hmad, Beauséjour, Casablanca',
      ar: '63 شارع با احماد، بوسيجور، الدار البيضاء',
    },
    hours: {
      fr: ['Lundi – Dimanche : 7h – 19h'],
      ar: ['الاثنين – الأحد: 7:00 – 19:00'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je souhaite un devis pour un déménagement de ... vers ... le ...',
      ar: 'السلام عليكم، أرغب في عرض سعر لنقل من ... إلى ... يوم ...',
    },
  },
};
