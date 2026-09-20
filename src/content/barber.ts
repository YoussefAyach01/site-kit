import type { SiteContent } from '../types.ts';

export const barber: SiteContent = {
  id: 'barber',
  name: { fr: 'Le Rasoir d’Or', ar: 'موس الذهب' },
  schemaType: 'HairSalon',
  tagline: { fr: 'Barbier, depuis 2009', ar: 'حلاق منذ 2009' },
  hero: {
    title: { fr: 'Une coupe nette. Une barbe droite.', ar: 'قصة نظيفة. لحية مرتبة.' },
    sub: {
      fr: 'Coupe, dégradé, taille de barbe et rasage à la serviette chaude. Sans attendre : prenez votre créneau sur WhatsApp.',
      ar: 'قصّة، تدرّج، تشذيب اللحية وحلاقة بالمنشفة الساخنة. بدون انتظار: احجزوا موعدكم عبر واتساب.',
    },
    cta: { fr: 'Prendre rendez-vous', ar: 'احجز موعدك' },
  },
  about: {
    title: { fr: 'Le fauteuil est à vous', ar: 'الكرسي لك' },
    body: {
      fr: [
        'Trois fauteuils, trois barbiers, une règle : on écoute avant de couper.',
        'Outils désinfectés après chaque client, lames neuves pour chaque rasage.',
      ],
      ar: [
        'ثلاثة كراسي وثلاثة حلاقين وقاعدة واحدة: نستمع قبل أن نقص.',
        'الأدوات معقمة بعد كل زبون وشفرة جديدة لكل حلاقة.',
      ],
    },
  },
  servicesTitle: { fr: 'Tarifs', ar: 'الأسعار' },
  services: [
    {
      name: { fr: 'Coupe homme', ar: 'قصّة رجالية' },
      desc: { fr: 'Ciseaux ou tondeuse, finitions au rasoir.', ar: 'بالمقص أو الآلة مع لمسات بالموس.' },
      priceMad: 50,
    },
    {
      name: { fr: 'Dégradé', ar: 'تدرّج' },
      desc: { fr: 'Dégradé américain, peau ou classique.', ar: 'تدرّج أمريكي، صفر أو كلاسيكي.' },
      priceMad: 60,
    },
    {
      name: { fr: 'Taille de barbe', ar: 'تشذيب اللحية' },
      desc: { fr: 'Contours, huile et serviette chaude.', ar: 'تحديد الخطوط وزيت ومنشفة ساخنة.' },
      priceMad: 40,
    },
    {
      name: { fr: 'Rasage traditionnel', ar: 'حلاقة تقليدية' },
      desc: { fr: 'Au coupe-chou, mousse chaude.', ar: 'بالموس التقليدي ورغوة دافئة.' },
      priceMad: 45,
    },
    {
      name: { fr: 'Coupe + barbe', ar: 'قصّة + لحية' },
      desc: { fr: 'Le combo le plus demandé.', ar: 'الباقة الأكثر طلباً.' },
      priceMad: 85,
    },
    {
      name: { fr: 'Coupe enfant', ar: 'قصّة أطفال' },
      desc: { fr: 'Jusqu’à 12 ans.', ar: 'حتى 12 سنة.' },
      priceMad: 35,
    },
  ],
  highlightsTitle: { fr: 'Ce qu’on garantit', ar: 'ما نضمنه' },
  highlights: [
    { fr: 'Sur rendez-vous, sans attente', ar: 'بموعد وبدون انتظار' },
    { fr: 'Matériel stérilisé', ar: 'أدوات معقمة' },
    { fr: 'Paiement en espèces ou carte', ar: 'الدفع نقداً أو بالبطاقة' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Le seul endroit où je ressors exactement comme je voulais.',
        ar: 'المكان الوحيد الذي أخرج منه كما أريد بالضبط.',
      },
      author: { fr: 'Amine', ar: 'أمين' },
    },
    {
      quote: {
        fr: 'Ponctuel, propre, et le rasage à l’ancienne est incroyable.',
        ar: 'دقيق في المواعيد ونظيف والحلاقة القديمة رائعة.',
      },
      author: { fr: 'Yassine', ar: 'ياسين' },
    },
  ],
  contact: {
    phone: '+212 6 61 00 00 00',
    whatsapp: '212661000000',
    email: 'contact@example.com',
    address: { fr: '5 avenue Mohammed V, Fès', ar: '5 شارع محمد الخامس، فاس' },
    hours: {
      fr: ['Mardi – Dimanche : 10h – 21h', 'Lundi : fermé'],
      ar: ['الثلاثاء – الأحد: 10:00 – 21:00', 'الاثنين: مغلق'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je voudrais un rendez-vous pour une coupe le ... vers ...',
      ar: 'السلام عليكم، أريد موعداً لقصّة يوم ... حوالي الساعة ...',
    },
  },
};
