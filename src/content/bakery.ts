import type { SiteContent } from '../types.ts';

export const bakery: SiteContent = {
  id: 'bakery',
  name: { fr: 'La Mie Dorée', ar: 'الفُتات الذهبي' },
  schemaType: 'Bakery',
  tagline: {
    fr: 'Pains, viennoiseries et pâtisseries faits à la main',
    ar: 'خبز ومعجنات وحلويات تُصنع يدويًا',
  },
  hero: {
    title: { fr: 'Le pain qui sent encore le four.', ar: 'خبزٌ ما زالت رائحة الفرن فيه.' },
    sub: {
      fr: 'Farines locales, longue fermentation, viennoiseries pliées à la main chaque matin avant l’ouverture. Commandez vos gâteaux pour les grandes occasions.',
      ar: 'دقيق محلي وتخمير بطيء ومعجنات تُطوى يدويًا كل صباح قبل الفتح. اطلبوا كعكاتكم للمناسبات الكبرى.',
    },
    cta: { fr: 'Commander sur WhatsApp', ar: 'اطلب عبر واتساب' },
  },
  heroImage: {
    alt: {
      fr: 'Vitrine de viennoiseries fraîches sous un comptoir en pierre, avec étagères de pain en arrière-plan',
      ar: 'واجهة معجنات طازجة فوق منضدة حجرية، ورفوف خبز في الخلفية',
    },
  },
  about: {
    title: { fr: 'Une boulangerie de quartier, à l’ancienne', ar: 'مخبزة حي على الطريقة القديمة' },
    body: {
      fr: [
        'La Mie Dorée pétrit sa pâte la veille et la laisse reposer toute la nuit : c’est ce qui donne ce goût et cette mie aérée que nos clients reconnaissent les yeux fermés.',
        'Chaque pièce est façonnée à la main par notre équipe de trois boulangers, dès quatre heures du matin.',
      ],
      ar: [
        'في "الفتات الذهبي" تُعجن العجينة في المساء وتُترك لترتاح طوال الليل، وهذا ما يمنحها ذلك الطعم واللباب الهش الذي يعرفه زبائننا بعيونٍ مغمضة.',
        'كل قطعة تُشكَّل يدويًا من طرف فريقنا المكوّن من ثلاثة خبازين، ابتداءً من الرابعة فجرًا.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos pains et pâtisseries', ar: 'خبزنا وحلوياتنا' },
  services: [
    {
      name: { fr: 'Croissant au beurre', ar: 'كرواسون بالزبدة' },
      desc: { fr: 'Beurre fermier, 36 heures de pousse.', ar: 'زبدة فلاحية و36 ساعة من التخمير.' },
      priceMad: 14,
    },
    {
      name: { fr: 'Pain au levain', ar: 'خبز الخميرة البرية' },
      desc: {
        fr: 'Farine complète, croûte épaisse, mie dense.',
        ar: 'دقيق كامل وقشرة سميكة ولباب كثيف.',
      },
      priceMad: 22,
    },
    {
      name: { fr: 'Tarte aux fruits de saison', ar: 'تارت بفواكه الموسم' },
      desc: {
        fr: 'Pâte sablée, crème pâtissière, fruits du marché.',
        ar: 'عجين مقرمش وكريمة باتيسيير وفواكه من السوق.',
      },
      priceMad: 35,
    },
    {
      name: { fr: 'Gâteau sur commande', ar: 'كعكة حسب الطلب' },
      desc: {
        fr: 'Décor sur mesure pour anniversaires et mariages, à commander 48h à l’avance.',
        ar: 'تزيين حسب الطلب لأعياد الميلاد والأعراس، يُحجز قبل 48 ساعة.',
      },
    },
    {
      name: { fr: 'Msemen et batbout maison', ar: 'مسمن وباطبوط منزلي' },
      desc: { fr: 'Pliés et cuits à la commande, à la plaque.', ar: 'تُطوى وتُطهى عند الطلب على الصاج.' },
      priceMad: 18,
    },
  ],
  highlightsTitle: { fr: 'Nos engagements', ar: 'التزاماتنا' },
  highlights: [
    { fr: 'Fermentation lente', ar: 'تخمير بطيء' },
    { fr: 'Sans additifs', ar: 'بدون مواد مضافة' },
    { fr: 'Commandes sur mesure', ar: 'طلبيات خاصة' },
    { fr: 'Livraison le matin', ar: 'توصيل صباحي' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Le pain au levain ne dure jamais plus d’un jour chez nous.',
        ar: 'خبز الخميرة البرية لا يدوم عندنا أكثر من يوم واحد.',
      },
      author: { fr: 'Imane, Rabat', ar: 'إيمان، الرباط' },
    },
    {
      quote: {
        fr: 'Le gâteau de mariage était encore meilleur que sur les photos.',
        ar: 'كانت كعكة الزفاف ألذ حتى من الصور.',
      },
      author: { fr: 'Youssef, Tanger', ar: 'يوسف، طنجة' },
    },
  ],
  contact: {
    phone: '+212 5 37 44 55 66',
    whatsapp: '212644556677',
    email: 'contact@example.com',
    address: {
      fr: '21 avenue des Palmiers, Agdal, Rabat',
      ar: '21 شارع النخيل، أكدال، الرباط',
    },
    hours: {
      fr: ['Lundi – Samedi : 7h – 19h30', 'Dimanche : 7h – 13h'],
      ar: ['الاثنين – السبت: 7:00 – 19:30', 'الأحد: 7:00 – 13:00'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je voudrais commander ... pour le ...',
      ar: 'السلام عليكم، أود طلب ... ليوم ...',
    },
  },
};
