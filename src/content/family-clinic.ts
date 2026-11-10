import type { SiteContent } from '../types.ts';

export const familyClinic: SiteContent = {
  id: 'family-clinic',
  name: { fr: 'Clinique Les Lilas', ar: 'عيادة الياسمين' },
  schemaType: 'MedicalClinic',
  tagline: { fr: 'Médecine de famille, pour chaque âge', ar: 'طب الأسرة، لكل الأعمار' },
  hero: {
    title: {
      fr: 'Une clinique de famille, pensée pour vous.',
      ar: 'عيادة عائلية، مصممة من أجلكم.',
    },
    sub: {
      fr: 'Médecins généralistes et pédiatre sur place, coin de jeu pour les enfants, rendez-vous le jour même selon disponibilité.',
      ar: 'أطباء عامون وطبيب أطفال في نفس المكان، وركن للعب، ومواعيد في نفس اليوم حسب التوفر.',
    },
    cta: { fr: 'Prendre rendez-vous', ar: 'احجزوا موعدكم' },
  },
  heroImage: {
    alt: {
      fr: 'Accueil chaleureux de la clinique avec coin de jeu pour enfants, bois clair et touches de vert sauge',
      ar: 'استقبال دافئ بالعيادة مع ركن للعب الأطفال وأخشاب فاتحة ولمسات أخضر مريح',
    },
  },
  about: {
    title: { fr: 'Le même médecin, année après année', ar: 'نفس الطبيب، سنة بعد سنة' },
    body: {
      fr: [
        'Clinique Les Lilas réunit des médecins généralistes et un pédiatre dans un même espace, pour que toute la famille soit suivie par des visages connus.',
        'Nos salles sont pensées pour mettre les enfants à l’aise, et nos médecins prennent le temps d’expliquer avant de prescrire.',
      ],
      ar: [
        'تجمع عيادة الياسمين أطباء عامين وطبيب أطفال في فضاء واحد، لتتابع العائلة كلها مع وجوه مألوفة.',
        'صُممت قاعاتنا لتطمئن الأطفال، ويأخذ أطباؤنا وقتهم للشرح قبل وصف أي علاج.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos consultations', ar: 'استشاراتنا' },
  services: [
    {
      name: { fr: 'Consultation généraliste', ar: 'استشارة طب عام' },
      desc: {
        fr: 'Pour adultes, sur rendez-vous ou en urgence légère.',
        ar: 'للكبار، بموعد أو في الحالات الطفيفة المستعجلة.',
      },
      priceMad: 200,
    },
    {
      name: { fr: 'Consultation pédiatrique', ar: 'استشارة طب الأطفال' },
      desc: {
        fr: 'Suivi de croissance et maladies courantes de l’enfant.',
        ar: 'متابعة النمو والأمراض الشائعة عند الأطفال.',
      },
      priceMad: 220,
    },
    {
      name: { fr: 'Bilan de santé complet', ar: 'فحص صحي شامل' },
      desc: {
        fr: 'Analyses, tension, poids et conseils personnalisés.',
        ar: 'تحاليل وقياس الضغط والوزن ونصائح شخصية.',
      },
      priceMad: 450,
    },
    {
      name: { fr: 'Vaccination', ar: 'التلقيح' },
      desc: {
        fr: 'Calendrier vaccinal enfants et adultes, carnet à jour.',
        ar: 'جدول التلقيحات للأطفال والكبار، مع تحديث الدفتر الصحي.',
      },
      priceMad: 150,
    },
    {
      name: { fr: 'Certificat médical', ar: 'شهادة طبية' },
      desc: {
        fr: 'Pour le sport, l’école ou le travail, remis sur place.',
        ar: 'للرياضة أو المدرسة أو العمل، تُسلَّم في نفس الزيارة.',
      },
      priceMad: 100,
    },
  ],
  highlightsTitle: { fr: 'Pourquoi nos familles restent', ar: 'لماذا تختارنا العائلات' },
  highlights: [
    { fr: 'Médecins disponibles 6j/7', ar: 'أطباء متواجدون 6 أيام في الأسبوع' },
    { fr: 'Coin de jeu pour enfants', ar: 'ركن للعب الأطفال' },
    { fr: 'Dossier médical numérique', ar: 'ملف طبي رقمي' },
    { fr: 'Parking gratuit', ar: 'موقف سيارات مجاني' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Nos trois enfants voient le même pédiatre depuis leur naissance, c’est précieux.',
        ar: 'أبناؤنا الثلاثة يتابعون مع نفس طبيب الأطفال منذ ولادتهم، وهذا شيء ثمين.',
      },
      author: { fr: 'Nadia, Casablanca', ar: 'نادية، الدار البيضاء' },
    },
    {
      quote: {
        fr: 'Toujours à l’écoute, jamais pressés malgré la salle d’attente pleine.',
        ar: 'دائماً يصغون جيداً، بدون استعجال حتى لو كانت صالة الانتظار ممتلئة.',
      },
      author: { fr: 'Hicham, Casablanca', ar: 'هشام، الدار البيضاء' },
    },
  ],
  contact: {
    phone: '+212 5 22 44 55 66',
    whatsapp: '212622445566',
    email: 'contact@example.com',
    address: {
      fr: '21 avenue des Lilas, Maarif, Casablanca',
      ar: '21 شارع الياسمين، المعاريف، الدار البيضاء',
    },
    hours: {
      fr: ['Lundi – Samedi : 8h30 – 19h', 'Dimanche : urgences uniquement'],
      ar: ['الاثنين – السبت: 8:30 – 19:00', 'الأحد: الحالات المستعجلة فقط'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je voudrais prendre rendez-vous pour ... le ... à ...h.',
      ar: 'السلام عليكم، أود حجز موعد لـ ... يوم ... على الساعة ...',
    },
  },
};
