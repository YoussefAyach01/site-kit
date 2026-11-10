import type { SiteContent } from '../types.ts';

export const painterDecorator: SiteContent = {
  id: 'painter-decorator',
  name: { fr: 'Atelier Couleurs', ar: 'أتيليه الألوان' },
  schemaType: 'HousePainter',
  tagline: { fr: 'Peinture intérieure et extérieure soignée', ar: 'طلاء داخلي وخارجي متقن' },
  hero: {
    title: {
      fr: 'Des murs impeccables, sans la poussière qui traîne.',
      ar: 'جدران متقنة، دون أن يتناثر الغبار في كل مكان.',
    },
    sub: {
      fr: 'Peinture, enduits décoratifs et finitions propres, protection complète du logement pendant les travaux.',
      ar: 'طلاء وتزيينات جدارية وتشطيبات نظيفة، مع حماية كاملة للمنزل أثناء الأشغال.',
    },
    cta: { fr: 'Demander un devis', ar: 'اطلبوا عرض سعر' },
  },
  heroImage: {
    alt: {
      fr: 'Peintre vu de dos appliquant une peinture vert sage sur un mur avec un rouleau télescopique, bâche de protection au sol, pots de peinture et échelle en bois',
      ar: 'نقاش من الخلف يطبق صبغة خضراء فاتحة على جدار باستخدام رلّو طويل، مع غطاء حماية على الأرض وعلب صبغة وسلم خشبي',
    },
  },
  about: {
    title: { fr: 'Un métier de précision, pas de rapidité', ar: 'حرفة دقة، لا حرفة سرعة' },
    body: {
      fr: [
        'Atelier Couleurs intervient chez les particuliers et les commerces pour des travaux de peinture propres, bien préparés et sans surprise.',
        'Chaque pièce est protégée avant de commencer : sols, meubles, poignées. On nettoie en partant, pas avant.',
      ],
      ar: [
        'يتدخل أتيليه الألوان عند الأفراد والمحلات التجارية لإنجاز أشغال طلاء نظيفة ومُحضَّرة جيداً وبدون مفاجآت.',
        'تُحمى كل غرفة قبل البدء: الأرضيات والأثاث والمقابض. ننظف عند المغادرة، لا قبلها.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos prestations', ar: 'خدماتنا' },
  services: [
    {
      name: { fr: 'Peinture intérieure', ar: 'طلاء داخلي' },
      desc: {
        fr: 'Murs et plafonds, finition mate ou satinée au choix.',
        ar: 'الجدران والأسقف، بلمسة نهائية مطفية أو ساتان حسب الاختيار.',
      },
      priceMad: 60,
    },
    {
      name: { fr: 'Peinture de façade extérieure', ar: 'طلاء الواجهة الخارجية' },
      desc: {
        fr: 'Nettoyage haute pression, traitement anti-humidité et peinture.',
        ar: 'تنظيف بالضغط العالي ومعالجة ضد الرطوبة وطلاء.',
      },
    },
    {
      name: { fr: 'Enduits décoratifs', ar: 'تزيينات جدارية' },
      desc: {
        fr: 'Effet tadelakt, béton ciré ou enduit à la chaux.',
        ar: 'تأثير الطادلاكت أو الباطون المصقول أو طلاء الجير.',
      },
      priceMad: 180,
    },
    {
      name: { fr: 'Pose de papier peint', ar: 'تركيب ورق الجدران' },
      desc: {
        fr: 'Fourniture ou pose de papier peint fourni par le client.',
        ar: 'توريد أو تركيب ورق جدران يوفره الزبون.',
      },
      priceMad: 90,
    },
    {
      name: { fr: 'Petits travaux de finition', ar: 'أشغال التشطيب الصغيرة' },
      desc: {
        fr: 'Rebouchage, ponçage et retouches avant emménagement.',
        ar: 'سد الشقوق والصنفرة واللمسات الأخيرة قبل السكن.',
      },
    },
  ],
  highlightsTitle: { fr: 'Pourquoi nous choisir', ar: 'لماذا تختاروننا' },
  highlights: [
    { fr: 'Protection complète du logement', ar: 'حماية كاملة للمنزل' },
    { fr: 'Peintures sans odeur forte disponibles', ar: 'صبغات متوفرة بدون رائحة قوية' },
    { fr: 'Chantier nettoyé chaque soir', ar: 'تنظيف الورش كل مساء' },
    { fr: 'Devis détaillé par pièce', ar: 'عرض سعر مفصل لكل غرفة' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Travail soigné, et appartement remis exactement comme avant chaque fin de journée.',
        ar: 'عمل متقن، وأعادوا الشقة بالضبط كما كانت في نهاية كل يوم.',
      },
      author: { fr: 'Mounia, Oasis', ar: 'منية، الواحة' },
    },
    {
      quote: {
        fr: 'Le tadelakt de la salle de bain est exactement ce qu’on voulait.',
        ar: 'الطادلاكت في الحمام جاء بالضبط كما أردنا.',
      },
      author: { fr: 'Rachid, Bourgogne', ar: 'رشيد، بورغون' },
    },
  ],
  contact: {
    phone: '+212 5 22 88 99 00',
    whatsapp: '212688990011',
    email: 'contact@example.com',
    address: {
      fr: '41 rue de Foucauld, Oasis, Casablanca',
      ar: '41 زنقة دو فوكو، الواحة، الدار البيضاء',
    },
    hours: {
      fr: ['Lundi – Samedi : 8h – 18h30'],
      ar: ['الاثنين – السبت: 8:00 – 18:30'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je souhaite un devis de peinture pour ... m², à l’adresse ...',
      ar: 'السلام عليكم، أرغب في عرض سعر لطلاء ... متر مربع، بالعنوان ...',
    },
  },
};
