import type { SiteContent } from '../types.ts';

export const optometrist: SiteContent = {
  id: 'optometrist',
  name: { fr: 'Optique & Vision Clairvue', ar: 'كلارفيو للنظارات والبصريات' },
  schemaType: 'Optician',
  tagline: { fr: 'Examens de la vue et lunetterie', ar: 'فحص النظر والنظارات' },
  hero: {
    title: {
      fr: 'Voir net, choisir juste.',
      ar: 'رؤية واضحة، اختيار دقيق.',
    },
    sub: {
      fr: 'Examen de la vue par un optométriste, large choix de montures et verres adaptés, ajustage et petites réparations sur place.',
      ar: 'فحص النظر مع أخصائي بصريات، تشكيلة واسعة من الإطارات والعدسات المناسبة، وتعديل وإصلاحات بسيطة في نفس المكان.',
    },
    cta: { fr: 'Prendre rendez-vous', ar: 'احجزوا موعداً' },
  },
  heroImage: {
    alt: {
      fr: 'Boutique optique avec mur de lunettes en bois clair et cabine d’examen de la vue en fond',
      ar: 'محل بصريات بجدار خشبي للنظارات وغرفة فحص النظر في الخلفية',
    },
  },
  about: {
    title: { fr: 'L’examen avant la monture', ar: 'الفحص قبل اختيار الإطار' },
    body: {
      fr: [
        'Clairvue commence toujours par un examen complet de la vue, pour prescrire des verres adaptés et non simplement vendre une monture.',
        'Notre équipe aide ensuite à choisir une monture confortable et bien ajustée, avec des réglages gratuits à chaque visite.',
      ],
      ar: [
        'تبدأ كلارفيو دائماً بفحص شامل للنظر، لوصف عدسات مناسبة وليس فقط بيع إطار.',
        'يساعدكم فريقنا بعد ذلك على اختيار إطار مريح ومضبوط جيداً، مع تعديلات مجانية في كل زيارة.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos services', ar: 'خدماتنا' },
  services: [
    {
      name: { fr: 'Examen de la vue', ar: 'فحص النظر' },
      desc: {
        fr: 'Mesure de l’acuité visuelle et dépistage simple.',
        ar: 'قياس حدة النظر وفحص أولي.',
      },
      priceMad: 250,
    },
    {
      name: { fr: 'Lunettes de vue', ar: 'نظارات طبية' },
      desc: {
        fr: 'Monture et verres correcteurs, large choix de styles.',
        ar: 'إطار وعدسات طبية، بتشكيلة واسعة من الأنماط.',
      },
      priceMad: 900,
    },
    {
      name: { fr: 'Lentilles de contact', ar: 'عدسات لاصقة' },
      desc: {
        fr: 'Adaptation et essai, journalières ou mensuelles.',
        ar: 'تكييف وتجربة، يومية أو شهرية.',
      },
      priceMad: 350,
    },
    {
      name: { fr: 'Lunettes de soleil correctrices', ar: 'نظارات شمسية طبية' },
      desc: {
        fr: 'Verres teintés avec correction sur mesure.',
        ar: 'عدسات ملونة مع تصحيح حسب النظر.',
      },
      priceMad: 750,
    },
    {
      name: { fr: 'Ajustage et réparation', ar: 'تعديل وإصلاح' },
      desc: {
        fr: 'Nettoyage, resserrage et petites réparations, offert pour toute monture achetée chez nous.',
        ar: 'تنظيف، شد البراغي، وإصلاحات بسيطة، مجاناً لكل إطار مُقتنى عندنا.',
      },
    },
  ],
  highlightsTitle: { fr: 'Pourquoi Clairvue', ar: 'لماذا كلارفيو' },
  highlights: [
    { fr: 'Optométriste diplômé sur place', ar: 'أخصائي بصريات حاصل على الشهادة' },
    { fr: 'Ajustages gratuits à vie', ar: 'تعديلات مجانية مدى الحياة' },
    { fr: 'Livraison en 48h', ar: 'التسليم خلال 48 ساعة' },
    { fr: 'Garantie casse 1 an', ar: 'ضمان ضد الكسر لمدة سنة' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Premier opticien qui prend vraiment le temps de bien ajuster la monture.',
        ar: 'أول أخصائي بصريات يأخذ وقته فعلاً لضبط الإطار بشكل جيد.',
      },
      author: { fr: 'Loubna, Oujda', ar: 'لبنى، وجدة' },
    },
    {
      quote: {
        fr: 'Mes lunettes cassées ont été réparées en dix minutes, sans rendez-vous.',
        ar: 'تم إصلاح نظارتي المكسورة في عشر دقائق، بدون موعد.',
      },
      author: { fr: 'Tarik, Oujda', ar: 'طارق، وجدة' },
    },
  ],
  contact: {
    phone: '+212 5 36 60 70 80',
    whatsapp: '212636607080',
    email: 'contact@example.com',
    address: {
      fr: '14 boulevard Mohammed V, Centre-ville, Oujda',
      ar: '14 شارع محمد الخامس، وسط المدينة، وجدة',
    },
    hours: {
      fr: ['Lundi – Samedi : 9h – 19h30'],
      ar: ['الاثنين – السبت: 9:00 – 19:30'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je voudrais prendre rendez-vous pour un examen de la vue le ... à ...h.',
      ar: 'السلام عليكم، أود حجز موعد لفحص النظر يوم ... على الساعة ...',
    },
  },
};
