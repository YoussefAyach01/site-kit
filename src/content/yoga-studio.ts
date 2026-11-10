import type { SiteContent } from '../types.ts';

export const yogaStudio: SiteContent = {
  id: 'yoga-studio',
  name: { fr: 'Studio Yoga Horizon', ar: 'استوديو الأفق لليوغا' },
  schemaType: 'YogaStudio',
  tagline: { fr: 'Yoga, pilates et respiration', ar: 'يوغا وبيلاتيس وتنفس' },
  hero: {
    title: { fr: 'Respirer plus large.', ar: 'تنفّس أوسع.' },
    sub: {
      fr: 'Cours collectifs de yoga et pilates dans un espace baigné de lumière, pour tous les niveaux, du premier cours au perfectionnement.',
      ar: 'دروس جماعية لليوغا والبيلاتيس في فضاء مغمور بالضوء، لجميع المستويات، من أول حصة إلى الإتقان.',
    },
    cta: { fr: 'Réserver un cours', ar: 'احجزوا حصة' },
  },
  heroImage: {
    alt: {
      fr: 'Studio lumineux aux grandes fenêtres cintrées, tapis de yoga terracotta, blocs en liège et reformers en bois au sol',
      ar: 'استوديو مضيء بنوافذ مقوسة كبيرة وبسط يوغا طينية ومكعبات فلين وأجهزة بيلاتيس خشبية على الأرض',
    },
  },
  about: {
    title: { fr: 'Un studio, plusieurs rythmes', ar: 'استوديو واحد، إيقاعات متعددة' },
    body: {
      fr: [
        'Studio Yoga Horizon réunit yoga doux, vinyasa dynamique et pilates sur reformer dans un même lieu, pensé pour la lumière naturelle du matin au soir.',
        'Nos professeures accueillent aussi bien les débutants complets que les pratiquants réguliers, sans jugement sur la souplesse du jour.',
      ],
      ar: [
        'يجمع استوديو الأفق لليوغا بين اليوغا الهادئة والفينياسا الديناميكية والبيلاتيس على الريفورمر في مكان واحد، مصمم ليستقبل الضوء الطبيعي من الصباح إلى المساء.',
        'تستقبل معلماتنا المبتدئين تماماً وكذلك الممارسين المنتظمين، دون أي حكم على مرونة اليوم.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos cours', ar: 'حصصنا' },
  services: [
    {
      name: { fr: 'Cours découverte', ar: 'حصة تجريبية' },
      desc: {
        fr: 'Un premier cours collectif offert aux nouveaux, sans engagement.',
        ar: 'حصة جماعية أولى مجانية للقادمين الجدد، دون التزام.',
      },
    },
    {
      name: { fr: 'Yoga vinyasa', ar: 'يوغا فينياسا' },
      desc: {
        fr: 'Enchaînements dynamiques synchronisés à la respiration.',
        ar: 'سلاسل حركية ديناميكية متزامنة مع التنفس.',
      },
      priceMad: 120,
    },
    {
      name: { fr: 'Pilates reformer', ar: 'بيلاتيس ريفورمر' },
      desc: {
        fr: 'Renforcement en douceur sur machine, petit groupe.',
        ar: 'تقوية لطيفة على جهاز الريفورمر، بمجموعة صغيرة.',
      },
      priceMad: 150,
    },
    {
      name: { fr: 'Yoga doux et respiration', ar: 'يوغا هادئة وتنفس' },
      desc: {
        fr: 'Postures accessibles et travail du souffle.',
        ar: 'وضعيات ميسّرة وتمارين تنفس.',
      },
      priceMad: 110,
    },
    {
      name: { fr: 'Carte 10 cours', ar: 'بطاقة 10 حصص' },
      desc: { fr: 'Valable 3 mois, tous cours confondus.', ar: 'صالحة لمدة 3 أشهر، لكل الحصص.' },
      priceMad: 950,
    },
  ],
  highlightsTitle: { fr: 'Pourquoi venir ici', ar: 'لماذا تأتون إلى هنا' },
  highlights: [
    { fr: 'Petits groupes, 10 personnes max', ar: 'مجموعات صغيرة، 10 أشخاص كحد أقصى' },
    { fr: 'Tapis et accessoires fournis', ar: 'بسط وأدوات متوفرة' },
    { fr: 'Vestiaires et douches', ar: 'غرف تبديل ودُش' },
    { fr: 'Cours en français et arabe', ar: 'حصص بالفرنسية والعربية' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Le seul studio où je me sens progresser sans jamais me sentir jugée.',
        ar: 'الاستوديو الوحيد الذي أشعر فيه بالتقدم دون أن أشعر بأي حكم.',
      },
      author: { fr: 'Hind, Casablanca', ar: 'هند، الدار البيضاء' },
    },
    {
      quote: {
        fr: 'La lumière du matin dans la salle change complètement l’énergie du cours.',
        ar: 'ضوء الصباح في القاعة يغيّر طاقة الحصة بالكامل.',
      },
      author: { fr: 'Othmane, Casablanca', ar: 'عثمان، الدار البيضاء' },
    },
  ],
  contact: {
    phone: '+212 5 22 88 99 00',
    whatsapp: '212622889900',
    email: 'contact@example.com',
    address: { fr: '3 boulevard d’Anfa, Casablanca', ar: '3 شارع أنفا، الدار البيضاء' },
    hours: {
      fr: ['Lundi – Samedi : 7h – 21h', 'Dimanche : 9h – 13h'],
      ar: ['الاثنين – السبت: 7:00 – 21:00', 'الأحد: 9:00 – 13:00'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je voudrais réserver une place pour le cours de ... le ... à ...h.',
      ar: 'السلام عليكم، أود حجز مكان في حصة ... يوم ... على الساعة ...',
    },
  },
};
