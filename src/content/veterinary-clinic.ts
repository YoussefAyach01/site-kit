import type { SiteContent } from '../types.ts';

export const veterinaryClinic: SiteContent = {
  id: 'veterinary-clinic',
  name: { fr: 'Clinique Vétérinaire Patte Douce', ar: 'عيادة الحيوانات الأليفة قدم رفيقة' },
  schemaType: 'VeterinaryCare',
  tagline: {
    fr: 'Soins vétérinaires pour chiens, chats et NAC',
    ar: 'رعاية بيطرية للكلاب والقطط والحيوانات الأليفة الصغيرة',
  },
  hero: {
    title: {
      fr: 'Votre compagnon, entre de bonnes mains.',
      ar: 'رفيقكم الأليف، في أيدٍ أمينة.',
    },
    sub: {
      fr: 'Consultations, vaccins, chirurgie et urgences pour vos animaux, dans un cabinet calme pensé pour limiter leur stress.',
      ar: 'استشارات وتلقيحات وجراحة واستعجالات لحيواناتكم، في عيادة هادئة صُممت لتقليل توترهم.',
    },
    cta: { fr: 'Prendre rendez-vous', ar: 'احجزوا موعداً' },
  },
  heroImage: {
    alt: {
      fr: 'Salle de consultation vétérinaire avec balance, plan de soins en bois et banquette d’attente',
      ar: 'غرفة استشارة بيطرية بميزان وطاولة علاج خشبية ومقعد انتظار',
    },
  },
  about: {
    title: { fr: 'Pensée pour rassurer vos animaux', ar: 'مصممة لطمأنة حيواناتكم' },
    body: {
      fr: [
        'Patte Douce accueille chiens, chats et petits animaux de compagnie dans des salles séparées, pour éviter le stress des croisements d’espèces en salle d’attente.',
        'Chaque consultation prend le temps nécessaire : nos vétérinaires expliquent le diagnostic et les options de traitement avant toute décision.',
      ],
      ar: [
        'تستقبل عيادة قدم رفيقة الكلاب والقطط والحيوانات الأليفة الصغيرة في قاعات منفصلة، لتفادي توتر التقاء الأنواع في صالة الانتظار.',
        'كل استشارة تأخذ وقتها اللازم: يشرح أطباؤنا البيطريون التشخيص وخيارات العلاج قبل أي قرار.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos soins', ar: 'عناياتنا' },
  services: [
    {
      name: { fr: 'Consultation générale', ar: 'استشارة عامة' },
      desc: {
        fr: 'Examen de routine, chiens, chats et NAC.',
        ar: 'فحص روتيني، كلاب، قطط وحيوانات صغيرة.',
      },
      priceMad: 200,
    },
    {
      name: { fr: 'Vaccination', ar: 'التلقيح' },
      desc: {
        fr: 'Protocole complet selon l’âge et l’espèce.',
        ar: 'برنامج تلقيح كامل حسب السن والنوع.',
      },
      priceMad: 250,
    },
    {
      name: { fr: 'Stérilisation', ar: 'التعقيم' },
      desc: {
        fr: 'Intervention chirurgicale, suivi post-opératoire inclus.',
        ar: 'عملية جراحية، مع متابعة ما بعد العملية.',
      },
      priceMad: 650,
    },
    {
      name: { fr: 'Identification (puce électronique)', ar: 'وضع الشريحة الإلكترونية' },
      desc: {
        fr: 'Pose de puce et enregistrement officiel.',
        ar: 'وضع الشريحة والتسجيل الرسمي.',
      },
      priceMad: 300,
    },
    {
      name: { fr: 'Urgences vétérinaires', ar: 'الاستعجالات البيطرية' },
      desc: {
        fr: 'Blessures, intoxications, détresse respiratoire.',
        ar: 'الإصابات، التسمم، صعوبات التنفس.',
      },
    },
  ],
  highlightsTitle: { fr: 'Pourquoi Patte Douce', ar: 'لماذا قدم رفيقة' },
  highlights: [
    { fr: 'Salles séparées chiens et chats', ar: 'قاعات منفصلة للكلاب والقطط' },
    { fr: 'Urgences 7j/7', ar: 'استعجالات طوال أيام الأسبوع' },
    { fr: 'Chirurgie et laboratoire sur place', ar: 'جراحة ومختبر في نفس المكان' },
    { fr: 'Carnet de santé numérique', ar: 'دفتر صحي رقمي' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Notre chat était terrifié chez l’ancien vétérinaire, ici il reste calme.',
        ar: 'كانت قطتنا مرعوبة عند الطبيب البيطري السابق، هنا تبقى هادئة.',
      },
      author: { fr: 'Salma, Kénitra', ar: 'سلمى، القنيطرة' },
    },
    {
      quote: {
        fr: 'Urgence un dimanche soir, ils nous ont rappelés en cinq minutes.',
        ar: 'حالة مستعجلة مساء يوم أحد، اتصلوا بنا مرة أخرى بعد خمس دقائق.',
      },
      author: { fr: 'Anas, Kénitra', ar: 'أنس، القنيطرة' },
    },
  ],
  contact: {
    phone: '+212 5 37 36 47 58',
    whatsapp: '212637364758',
    email: 'contact@example.com',
    address: {
      fr: '18 avenue Mohammed Diouri, Kénitra',
      ar: '18 شارع محمد ديوري، القنيطرة',
    },
    hours: {
      fr: ['Lundi – Samedi : 9h – 19h', 'Urgences : 7j/7 sur appel'],
      ar: ['الاثنين – السبت: 9:00 – 19:00', 'الاستعجالات: طوال الأسبوع عبر الاتصال'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je voudrais un rendez-vous pour mon animal (espèce : ...) le ... à ...h.',
      ar: 'السلام عليكم، أود حجز موعد لحيواني (النوع: ...) يوم ... على الساعة ...',
    },
  },
};
