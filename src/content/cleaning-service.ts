import type { SiteContent } from '../types.ts';

export const cleaningService: SiteContent = {
  id: 'cleaning-service',
  name: { fr: 'Maison Nette', ar: 'دار نظيفة' },
  schemaType: 'HousekeepingService',
  tagline: { fr: 'Ménage régulier pour particuliers et bureaux', ar: 'تنظيف دوري للمنازل والمكاتب' },
  hero: {
    title: {
      fr: 'Un intérieur impeccable, sans lever le petit doigt.',
      ar: 'منزل نظيف بالكامل، دون أن تحركوا ساكناً.',
    },
    sub: {
      fr: 'Agents de ménage formés et de confiance, produits fournis, passage hebdomadaire ou ponctuel selon vos besoins.',
      ar: 'عاملات وعمال تنظيف مدربون وموثوقون، مع توفير المنتجات، بزيارة أسبوعية أو حسب الحاجة.',
    },
    cta: { fr: 'Réserver un ménage', ar: 'احجزوا خدمة تنظيف' },
  },
  heroImage: {
    alt: {
      fr: 'Plan rapproché de produits de nettoyage sur un plan de travail de cuisine, agente de ménage en tablier bleu nettoyant l’évier à l’arrière-plan',
      ar: 'لقطة قريبة لمنتجات التنظيف على طاولة مطبخ، مع عاملة تنظيف ترتدي مئزراً أزرق تنظف الحوض في الخلفية',
    },
  },
  about: {
    title: { fr: 'Les mêmes mains chez vous à chaque passage', ar: 'نفس الأيدي في منزلكم في كل زيارة' },
    body: {
      fr: [
        'Maison Nette envoie la même personne de confiance à chaque passage, pas une équipe différente à chaque fois.',
        'Nos produits sont sélectionnés pour être efficaces et sans danger pour les enfants et les animaux.',
      ],
      ar: [
        'دار نظيفة ترسل نفس الشخص الموثوق في كل زيارة، وليس فريقاً مختلفاً في كل مرة.',
        'منتجاتنا مختارة لتكون فعالة وآمنة على الأطفال والحيوانات الأليفة.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos prestations', ar: 'خدماتنا' },
  services: [
    {
      name: { fr: 'Ménage régulier hebdomadaire', ar: 'تنظيف أسبوعي دوري' },
      desc: {
        fr: 'Cuisine, salles de bain, sols et dépoussiérage complet.',
        ar: 'المطبخ والحمامات والأرضيات وإزالة الغبار بشكل كامل.',
      },
      priceMad: 150,
    },
    {
      name: { fr: 'Grand nettoyage ponctuel', ar: 'تنظيف شامل لمرة واحدة' },
      desc: {
        fr: 'Nettoyage en profondeur avant ou après un événement.',
        ar: 'تنظيف معمق قبل أو بعد مناسبة.',
      },
      priceMad: 450,
    },
    {
      name: { fr: 'Nettoyage après travaux', ar: 'تنظيف بعد الأشغال' },
      desc: {
        fr: 'Évacuation de la poussière fine, vitres et sols compris.',
        ar: 'إزالة الغبار الدقيق، بما في ذلك النوافذ والأرضيات.',
      },
      priceMad: 550,
    },
    {
      name: { fr: 'Nettoyage de bureaux', ar: 'تنظيف المكاتب' },
      desc: {
        fr: 'Passage en dehors des heures de travail, contrat mensuel.',
        ar: 'زيارة خارج ساعات العمل، بعقد شهري.',
      },
    },
    {
      name: { fr: 'Vitres et sols en profondeur', ar: 'تنظيف معمق للنوافذ والأرضيات' },
      desc: {
        fr: 'Décapage et lustrage des sols, vitres intérieures et extérieures.',
        ar: 'جلي وتلميع الأرضيات وتنظيف النوافذ من الداخل والخارج.',
      },
      priceMad: 300,
    },
  ],
  highlightsTitle: { fr: 'Pourquoi nous choisir', ar: 'لماذا تختاروننا' },
  highlights: [
    { fr: 'Personnel vérifié et assuré', ar: 'عمال تم التحقق منهم ومؤمَّنون' },
    { fr: 'Produits fournis, sans danger', ar: 'منتجات موفرة وآمنة' },
    { fr: 'Même agent à chaque passage', ar: 'نفس العامل في كل زيارة' },
    { fr: 'Annulation flexible jusqu’à 24h avant', ar: 'إلغاء مرن حتى 24 ساعة قبل الموعد' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Même dame depuis un an, ponctuelle et vraiment minutieuse.',
        ar: 'نفس السيدة منذ سنة، دقيقة في المواعيد ودقيقة جداً في العمل.',
      },
      author: { fr: 'Meryem, Californie, Casablanca', ar: 'مريم، كاليفورنيا، الدار البيضاء' },
    },
    {
      quote: {
        fr: 'Grand nettoyage avant l’Aïd impeccable, jusque dans les moindres recoins.',
        ar: 'تنظيف شامل قبل العيد كان مثالياً، حتى في أدق الزوايا.',
      },
      author: { fr: 'Abdelkrim, Hay Hassani', ar: 'عبد الكريم، الحي الحسني' },
    },
  ],
  contact: {
    phone: '+212 5 22 00 11 22',
    whatsapp: '212600112233',
    email: 'contact@example.com',
    address: {
      fr: '9 rue Soumaya, Hay Hassani, Casablanca',
      ar: '9 زنقة سمية، الحي الحسني، الدار البيضاء',
    },
    hours: {
      fr: ['Lundi – Samedi : 8h – 19h'],
      ar: ['الاثنين – السبت: 8:00 – 19:00'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je souhaite réserver un ménage pour ... pièces le ...',
      ar: 'السلام عليكم، أرغب في حجز خدمة تنظيف لـ ... غرف يوم ...',
    },
  },
};
