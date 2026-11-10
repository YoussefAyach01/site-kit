import type { SiteContent } from '../types.ts';

export const lawFirm: SiteContent = {
  id: 'law-firm',
  name: { fr: 'Cabinet Benjelloun & Associés', ar: 'مكتب بنجلون وشركاؤه' },
  schemaType: 'LegalService',
  tagline: { fr: 'Droit des affaires, famille et immobilier', ar: 'قانون الأعمال والأسرة والعقار' },
  hero: {
    title: { fr: 'Le droit, expliqué avant d’être plaidé.', ar: 'القانون يُشرح قبل أن يُترافع به.' },
    sub: {
      fr: 'Contrats, litiges commerciaux, successions, baux : nous vous disent clairement où vous en êtes, ce que cela coûte et quelles sont vos options.',
      ar: 'عقود ونزاعات تجارية وإرث وإيجارات: نوضّح لكم بدقة وضعكم القانوني وكلفته وخياراتكم.',
    },
    cta: { fr: 'Prendre rendez-vous', ar: 'احجزوا موعدًا' },
  },
  heroImage: {
    alt: {
      fr: 'Avocate en tailleur bleu marine signant un document avec un stylo plume, vue sur les gratte-ciel derrière la baie vitrée',
      ar: 'محامية ببدلة زرقاء داكنة توقّع وثيقة بقلم حبر، وخلفها ناطحات سحاب من النافذة الزجاجية',
    },
  },
  about: {
    title: { fr: 'Un cabinet à taille humaine', ar: 'مكتب بحجم إنساني' },
    body: {
      fr: [
        'Fondé à Casablanca par trois avocats inscrits au barreau depuis plus de vingt ans, le cabinet accompagne entrepreneurs, familles et investisseurs, en français comme en arabe.',
        'Chaque dossier est suivi par un avocat associé, pas délégué. Vous savez toujours qui vous répond et où en est votre affaire.',
      ],
      ar: [
        'تأسس المكتب في الدار البيضاء على يد ثلاثة محامين مسجلين بالهيئة منذ أكثر من عشرين سنة، ويرافق المقاولين والأسر والمستثمرين بالفرنسية والعربية.',
        'يتابع كل ملف محامٍ شريك بنفسه دون تفويض. تعرفون دائمًا من يجيبكم وأين وصل ملفكم.',
      ],
    },
  },
  servicesTitle: { fr: 'Domaines et honoraires', ar: 'المجالات والأتعاب' },
  services: [
    {
      name: { fr: 'Première consultation', ar: 'الاستشارة الأولى' },
      desc: {
        fr: 'Une heure pour analyser votre situation et vous remettre un avis écrit.',
        ar: 'ساعة لدراسة وضعكم وتسليمكم رأيًا مكتوبًا.',
      },
      priceMad: 500,
    },
    {
      name: { fr: 'Rédaction ou revue de contrat', ar: 'صياغة أو مراجعة عقد' },
      desc: {
        fr: 'Bail commercial, contrat de travail, accord d’associés, compromis de vente.',
        ar: 'عقد كراء تجاري أو عقد شغل أو اتفاق شركاء أو وعد بالبيع.',
      },
      priceMad: 2500,
    },
    {
      name: { fr: 'Création de société', ar: 'تأسيس شركة' },
      desc: {
        fr: 'Statuts, immatriculation au registre du commerce et formalités fiscales.',
        ar: 'القانون الأساسي والتسجيل بالسجل التجاري والإجراءات الضريبية.',
      },
      priceMad: 4000,
    },
    {
      name: { fr: 'Succession et partage', ar: 'الإرث والقسمة' },
      desc: {
        fr: 'Actes d’hérédité, partage amiable ou judiciaire des biens.',
        ar: 'رسوم الإراثة والقسمة الودية أو القضائية للتركة.',
      },
    },
    {
      name: { fr: 'Contentieux commercial', ar: 'المنازعات التجارية' },
      desc: {
        fr: 'Recouvrement, litiges entre associés, représentation devant le tribunal de commerce.',
        ar: 'استخلاص الديون ونزاعات الشركاء والتمثيل أمام المحكمة التجارية.',
      },
    },
  ],
  highlightsTitle: { fr: 'Nos engagements', ar: 'التزاماتنا' },
  highlights: [
    { fr: 'Avocat associé sur chaque dossier', ar: 'محامٍ شريك في كل ملف' },
    { fr: 'Honoraires annoncés par écrit', ar: 'أتعاب معلنة كتابةً' },
    { fr: 'Français et arabe', ar: 'الفرنسية والعربية' },
    { fr: 'Confidentialité absolue', ar: 'سرية تامة' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Ils ont débloqué en deux mois un litige de bail qui traînait depuis deux ans.',
        ar: 'حلّوا في شهرين نزاع كراء ظل عالقًا لسنتين.',
      },
      author: { fr: 'Hicham, gérant, Casablanca', ar: 'هشام، مسير شركة، الدار البيضاء' },
    },
    {
      quote: {
        fr: 'Clairs sur les honoraires dès le premier rendez-vous. Pas de mauvaise surprise.',
        ar: 'كانوا واضحين بشأن الأتعاب منذ الموعد الأول. لا مفاجآت سيئة.',
      },
      author: { fr: 'Sanaa, Rabat', ar: 'سناء، الرباط' },
    },
  ],
  contact: {
    phone: '+212 5 22 77 88 99',
    whatsapp: '212677889900',
    email: 'contact@example.com',
    address: {
      fr: '14 avenue Hassan II, 4e étage, Casablanca',
      ar: '14 شارع الحسن الثاني، الطابق الرابع، الدار البيضاء',
    },
    hours: {
      fr: ['Lundi – Vendredi : 9h – 18h', 'Samedi : sur rendez-vous'],
      ar: ['الاثنين – الجمعة: 9:00 – 18:00', 'السبت: بموعد مسبق'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je souhaite un rendez-vous au sujet de ... Quelles sont vos disponibilités ?',
      ar: 'السلام عليكم، أرغب في موعد بخصوص ... ما هي الأوقات المتاحة لديكم؟',
    },
  },
};
