import type { SiteContent } from '../types.ts';

export const bookstore: SiteContent = {
  id: 'bookstore',
  name: { fr: 'Librairie Les Pages Dorées', ar: 'مكتبة الصفحات الذهبية' },
  schemaType: 'BookStore',
  tagline: {
    fr: 'Librairie indépendante, livres neufs et d’occasion',
    ar: 'مكتبة مستقلة، كتب جديدة ومستعملة',
  },
  hero: {
    title: { fr: 'Un fauteuil, une pile de livres, du temps.', ar: 'كرسي وكومة كتب ووقت.' },
    sub: {
      fr: 'Romans, essais, bandes dessinées et littérature jeunesse en français, en arabe et en anglais. Les libraires lisent ce qu’ils vous conseillent.',
      ar: 'روايات ودراسات وقصص مصورة وأدب الأطفال بالفرنسية والعربية والإنجليزية. كتبيّونا يقرؤون ما ينصحون به.',
    },
    cta: { fr: 'Demander un livre', ar: 'اطلبوا كتابًا' },
  },
  heroImage: {
    alt: {
      fr: 'Allée de librairie bordée de hautes étagères en bois, avec un fauteuil en cuir, un plaid écossais et une fenêtre ouverte sur un jardin',
      ar: 'ممر مكتبة تحيط به رفوف خشبية عالية، وفيه كرسي جلدي وغطاء مربعات ونافذة تطل على حديقة',
    },
  },
  about: {
    title: { fr: 'Une librairie où l’on a le droit de s’asseoir', ar: 'مكتبة يُسمح فيها بالجلوس' },
    body: {
      fr: [
        'Les Pages Dorées occupent depuis 2005 une ancienne maison de la médina de Tanger. Nous avons gardé les étagères d’origine et ajouté des fauteuils : on peut lire un chapitre avant d’acheter.',
        'Nous tenons un fonds de vingt mille titres, des livres d’occasion rachetés au poids de la curiosité, et organisons un club de lecture chaque premier jeudi du mois.',
      ],
      ar: [
        'تحتل "الصفحات الذهبية" منذ 2005 بيتًا قديمًا في مدينة طنجة العتيقة. أبقينا الرفوف الأصلية وأضفنا كراسي: يمكنكم قراءة فصل قبل الشراء.',
        'لدينا رصيد عشرين ألف عنوان، وكتب مستعملة نشتريها بدافع الفضول، وننظم نادي قراءة كل أول خميس من الشهر.',
      ],
    },
  },
  servicesTitle: { fr: 'Ce que vous trouverez', ar: 'ما ستجدونه' },
  services: [
    {
      name: { fr: 'Romans et essais', ar: 'روايات ودراسات' },
      desc: {
        fr: 'Littérature marocaine, arabe et internationale, neuf et poche.',
        ar: 'أدب مغربي وعربي وعالمي، جديد وبحجم الجيب.',
      },
    },
    {
      name: { fr: 'Livres d’occasion', ar: 'كتب مستعملة' },
      desc: {
        fr: 'À partir de 20 MAD, rachat de vos livres contre un bon d’achat.',
        ar: 'ابتداءً من 20 درهمًا، ونشتري كتبكم مقابل قسيمة شراء.',
      },
      priceMad: 20,
    },
    {
      name: { fr: 'Rayon jeunesse', ar: 'ركن الأطفال' },
      desc: {
        fr: 'Albums, premiers romans et bandes dessinées en trois langues.',
        ar: 'ألبومات وروايات أولى وقصص مصورة بثلاث لغات.',
      },
    },
    {
      name: { fr: 'Commande spéciale', ar: 'طلب خاص' },
      desc: {
        fr: 'Un titre introuvable ? Nous le commandons, réception sous une semaine.',
        ar: 'عنوان غير متوفر؟ نطلبه لكم ويصل خلال أسبوع.',
      },
      priceMad: 0,
    },
    {
      name: { fr: 'Club de lecture mensuel', ar: 'نادي القراءة الشهري' },
      desc: {
        fr: 'Un livre, une discussion, du thé. Premier jeudi de chaque mois, 18 h.',
        ar: 'كتاب ونقاش وشاي. كل أول خميس من الشهر، الساعة 18:00.',
      },
      priceMad: 0,
    },
  ],
  highlightsTitle: { fr: 'Pourquoi venir', ar: 'لماذا تزوروننا' },
  highlights: [
    { fr: '20 000 titres', ar: '20 000 عنوان' },
    { fr: 'Trois langues', ar: 'ثلاث لغات' },
    { fr: 'Fauteuils de lecture', ar: 'كراسي للقراءة' },
    { fr: 'Thé offert', ar: 'شاي مجاني' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'J’y suis entré pour dix minutes et j’y suis resté deux heures. J’y retourne chaque semaine.',
        ar: 'دخلتها لعشر دقائق وبقيت ساعتين. أعود إليها كل أسبوع.',
      },
      author: { fr: 'Othmane, Tanger', ar: 'عثمان، طنجة' },
    },
    {
      quote: {
        fr: 'Le libraire m’a conseillé un roman que je n’aurais jamais choisi. Coup de cœur.',
        ar: 'نصحني الكتبي برواية لم أكن لأختارها. أُعجبت بها كثيرًا.',
      },
      author: { fr: 'Leïla, Tétouan', ar: 'ليلى، تطوان' },
    },
  ],
  contact: {
    phone: '+212 5 39 94 12 60',
    whatsapp: '212655667788',
    email: 'contact@example.com',
    address: {
      fr: '9 rue Siaghine, médina, Tanger',
      ar: '9 زنقة الصياغين، المدينة العتيقة، طنجة',
    },
    hours: {
      fr: ['Mardi – Dimanche : 10h – 19h', 'Lundi : fermé'],
      ar: ['الثلاثاء – الأحد: 10:00 – 19:00', 'الاثنين: مغلق'],
    },
    whatsappMessage: {
      fr: 'Bonjour, auriez-vous le livre « ... » de ... ? Sinon, pouvez-vous le commander ?',
      ar: 'السلام عليكم، هل لديكم كتاب "..." لـ ... ؟ وإن لم يكن متوفرًا، هل يمكنكم طلبه؟',
    },
  },
};
