import type { SiteContent } from '../types.ts';

export const physiotherapist: SiteContent = {
  id: 'physiotherapist',
  name: { fr: 'Kiné de la Source', ar: 'كينزيو النبع' },
  schemaType: 'PhysicalTherapy',
  tagline: {
    fr: 'Kinésithérapie et rééducation du mouvement',
    ar: 'علاج طبيعي وإعادة تأهيل الحركة',
  },
  hero: {
    title: { fr: 'Remettre le corps en mouvement.', ar: 'إعادة الجسد إلى الحركة.' },
    sub: {
      fr: 'Bilan complet, séances individuelles et suivi sur mesure pour sportifs, post-opératoires et douleurs chroniques. Prenez rendez-vous en un message.',
      ar: 'فحص شامل وجلسات فردية ومتابعة مخصصة للرياضيين وحالات ما بعد الجراحة والآلام المزمنة. احجزوا موعدكم برسالة واحدة.',
    },
    cta: { fr: 'Prendre rendez-vous', ar: 'احجزوا موعدكم' },
  },
  heroImage: {
    alt: {
      fr: 'Salle de kinésithérapie aux murs terracotta, table de soin drapée de lin ocre et rouille, lumière tamisée par un voilage',
      ar: 'قاعة علاج طبيعي بجدران طينية، وطاولة علاج مغطاة بكتان عنبري وصدئي، وضوء خافت يتسلل عبر ستارة شفافة',
    },
  },
  about: {
    title: { fr: 'Un seul kiné, tout le parcours', ar: 'معالج واحد، طوال رحلتكم' },
    body: {
      fr: [
        'Kiné de la Source est né du constat que la rééducation fonctionne mieux quand un seul praticien suit tout le dossier, de la première douleur à la reprise du sport.',
        'Ici, chaque séance commence par une vraie discussion : d’où vient la douleur, ce qu’elle empêche de faire, et ce que vous voulez retrouver.',
      ],
      ar: [
        'وُلدت كينزيو النبع من ملاحظة بسيطة: إعادة التأهيل تنجح أكثر حين يتابع معالج واحد الملف كاملاً، من أول ألم إلى العودة للرياضة.',
        'هنا تبدأ كل جلسة بحوار حقيقي: من أين يأتي الألم، وما الذي يمنعكم من فعله، وما الذي تريدون استعادته.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos séances', ar: 'جلساتنا' },
  services: [
    {
      name: { fr: 'Bilan initial', ar: 'الفحص الأولي' },
      desc: {
        fr: 'Évaluation posturale et plan de rééducation personnalisé.',
        ar: 'تقييم للوضعية ووضع خطة إعادة تأهيل شخصية.',
      },
      priceMad: 300,
    },
    {
      name: { fr: 'Séance de kinésithérapie', ar: 'جلسة علاج طبيعي' },
      desc: {
        fr: 'Mobilisations, exercices actifs et conseils à la maison.',
        ar: 'تحريكات وتمارين نشطة ونصائح للمنزل.',
      },
      priceMad: 250,
    },
    {
      name: { fr: 'Rééducation post-opératoire', ar: 'إعادة تأهيل بعد الجراحة' },
      desc: {
        fr: 'Protocole adapté en lien avec votre chirurgien.',
        ar: 'بروتوكول مكيّف بالتنسيق مع جراحكم.',
      },
      priceMad: 280,
    },
    {
      name: { fr: 'Kinésithérapie du sport', ar: 'العلاج الطبيعي الرياضي' },
      desc: {
        fr: 'Prévention des blessures et retour au terrain encadré.',
        ar: 'الوقاية من الإصابات والعودة المؤطرة إلى الملاعب.',
      },
      priceMad: 280,
    },
    {
      name: { fr: 'Massage thérapeutique', ar: 'التدليك العلاجي' },
      desc: {
        fr: 'Relâchement musculaire ciblé, sur prescription ou non.',
        ar: 'إرخاء عضلي موجه، بوصفة طبية أو بدونها.',
      },
      priceMad: 220,
    },
  ],
  highlightsTitle: { fr: 'Pourquoi nos patients reviennent', ar: 'لماذا يعود مرضانا' },
  highlights: [
    { fr: 'Même kiné à chaque séance', ar: 'نفس المعالج في كل جلسة' },
    { fr: 'Plateau technique complet', ar: 'تجهيزات تقنية كاملة' },
    { fr: 'Suivi avec votre médecin', ar: 'متابعة بالتنسيق مع طبيبكم' },
    { fr: 'Créneaux tôt le matin', ar: 'مواعيد في الصباح الباكر' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Après six mois d’épaule bloquée, j’ai enfin retrouvé tous mes mouvements.',
        ar: 'بعد ستة أشهر من كتف معطل، استعدت أخيراً كل حركاتي.',
      },
      author: { fr: 'Yassine, Casablanca', ar: 'ياسين، الدار البيضاء' },
    },
    {
      quote: {
        fr: 'Le seul cabinet où on prend vraiment le temps d’expliquer les exercices.',
        ar: 'العيادة الوحيدة التي تأخذ وقتها فعلاً لشرح التمارين.',
      },
      author: { fr: 'Imane, Casablanca', ar: 'إيمان، الدار البيضاء' },
    },
  ],
  contact: {
    phone: '+212 5 22 11 22 33',
    whatsapp: '212611223344',
    email: 'contact@example.com',
    address: {
      fr: '8 rue Ibnou Sina, Gauthier, Casablanca',
      ar: '8 زنقة ابن سينا، غوتييه، الدار البيضاء',
    },
    hours: {
      fr: ['Lundi – Vendredi : 9h – 19h', 'Samedi : 9h – 13h'],
      ar: ['الاثنين – الجمعة: 9:00 – 19:00', 'السبت: 9:00 – 13:00'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je voudrais prendre rendez-vous pour une séance de kiné le ... à ...h.',
      ar: 'السلام عليكم، أود حجز موعد لجلسة علاج طبيعي يوم ... على الساعة ...',
    },
  },
};
