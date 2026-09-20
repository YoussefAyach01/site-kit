import type { SiteContent } from '../types.ts';

export const gym: SiteContent = {
  id: 'gym',
  name: { fr: 'Atlas Fitness', ar: 'أطلس فيتنس' },
  schemaType: 'HealthClub',
  tagline: { fr: 'Salle de sport, Marrakech', ar: 'قاعة رياضة، مراكش' },
  hero: {
    title: { fr: 'Soulève. Recommence.', ar: 'ارفع. وأعد.' },
    sub: {
      fr: 'Haltères, cardio, cours collectifs et coachs présents à chaque séance. Premier essai gratuit, sans engagement.',
      ar: 'أوزان وكارديو وحصص جماعية ومدربون حاضرون في كل حصة. تجربة أولى مجانية بلا التزام.',
    },
    cta: { fr: 'Réserver mon essai gratuit', ar: 'احجز تجربتي المجانية' },
  },
  about: {
    title: { fr: '600 m² pour s’entraîner sérieusement', ar: '600 متر مربع للتمرين الجاد' },
    body: {
      fr: [
        'Zone poids libres, machines guidées, espace cardio et studio de cours collectifs. Vestiaires et douches séparés hommes et femmes.',
        'Nos coachs construisent avec vous un programme de 8 semaines, puis le font évoluer.',
      ],
      ar: [
        'منطقة أوزان حرة وأجهزة موجهة وقاعة كارديو واستوديو للحصص الجماعية. غرف تبديل ودُوش منفصلة للرجال والنساء.',
        'يبني معكم مدربونا برنامجاً من 8 أسابيع ثم يطورونه معكم.',
      ],
    },
  },
  servicesTitle: { fr: 'Abonnements', ar: 'الاشتراكات' },
  services: [
    {
      name: { fr: 'Séance à l’unité', ar: 'حصة واحدة' },
      desc: { fr: 'Accès libre toute la journée.', ar: 'دخول حر طوال اليوم.' },
      priceMad: 40,
    },
    {
      name: { fr: 'Mensuel', ar: 'شهري' },
      desc: { fr: 'Salle + cours collectifs illimités.', ar: 'القاعة مع حصص جماعية غير محدودة.' },
      priceMad: 250,
    },
    {
      name: { fr: 'Trimestre', ar: 'ثلاثة أشهر' },
      desc: {
        fr: 'Le mois à 210 MAD, coaching de démarrage inclus.',
        ar: 'الشهر بـ 210 درهم مع حصة تدريب تمهيدية.',
      },
      priceMad: 630,
    },
    {
      name: { fr: 'Annuel', ar: 'سنوي' },
      desc: {
        fr: 'Le mois à 165 MAD, une invitation par mois.',
        ar: 'الشهر بـ 165 درهماً مع دعوة شهرية لصديق.',
      },
      priceMad: 1990,
    },
    {
      name: { fr: 'Coaching personnel', ar: 'تدريب شخصي' },
      desc: { fr: 'Séance d’une heure avec un coach diplômé.', ar: 'حصة ساعة مع مدرب معتمد.' },
      priceMad: 150,
    },
  ],
  highlightsTitle: { fr: 'Inclus', ar: 'ما يشمله الاشتراك' },
  highlights: [
    { fr: 'Ouvert 6h – 23h', ar: 'مفتوح من 6 صباحاً إلى 11 ليلاً' },
    { fr: 'Cours collectifs', ar: 'حصص جماعية' },
    { fr: 'Vestiaires séparés', ar: 'غرف تبديل منفصلة' },
    { fr: 'Parking gratuit', ar: 'موقف سيارات مجاني' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Moins 9 kg en 4 mois avec le programme du coach Omar.',
        ar: 'نقصت 9 كيلوغرامات في 4 أشهر مع برنامج المدرب عمر.',
      },
      author: { fr: 'Ilham', ar: 'إلهام' },
    },
    {
      quote: {
        fr: 'Du matériel propre et jamais bondé à 7h.',
        ar: 'معدات نظيفة وبدون ازدحام على الساعة السابعة.',
      },
      author: { fr: 'Reda', ar: 'رضى' },
    },
  ],
  contact: {
    phone: '+212 5 24 00 00 00',
    whatsapp: '212663000000',
    email: 'contact@example.com',
    address: { fr: '27 avenue Mohammed VI, Guéliz, Marrakech', ar: '27 شارع محمد السادس، جيليز، مراكش' },
    hours: {
      fr: ['Lundi – Samedi : 6h – 23h', 'Dimanche : 8h – 20h'],
      ar: ['الاثنين – السبت: 06:00 – 23:00', 'الأحد: 08:00 – 20:00'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je voudrais réserver mon essai gratuit le ...',
      ar: 'السلام عليكم، أريد حجز تجربتي المجانية يوم ...',
    },
  },
};
