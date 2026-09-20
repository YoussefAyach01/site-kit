import type { SiteContent } from '../types.ts';

export const dentist: SiteContent = {
  id: 'dentist',
  name: { fr: 'Cabinet Dentaire Amrani', ar: 'عيادة العمراني لطب الأسنان' },
  schemaType: 'Dentist',
  tagline: { fr: 'Soins dentaires pour toute la famille', ar: 'عناية بالأسنان لكل العائلة' },
  hero: {
    title: { fr: 'Des soins sans douleur, expliqués pas à pas.', ar: 'علاج بلا ألم، مع شرح كل خطوة.' },
    sub: {
      fr: 'Consultation, détartrage, soins conservateurs, orthodontie et implants. Le Dr Amrani vous explique chaque étape avant de commencer.',
      ar: 'فحص، تنظيف، علاج تحفظي، تقويم وزرع أسنان. توضح لكم الدكتورة العمراني كل خطوة قبل البدء.',
    },
    cta: { fr: 'Demander un rendez-vous', ar: 'اطلب موعداً' },
  },
  about: {
    title: { fr: 'Un cabinet calme, du matériel moderne', ar: 'عيادة هادئة وتجهيزات حديثة' },
    body: {
      fr: [
        'Le Dr Salma Amrani, diplômée de la faculté de médecine dentaire de Casablanca, reçoit adultes et enfants sur rendez-vous.',
        'Radiographie numérique, stérilisation en autoclave et devis écrit avant tout traitement.',
      ],
      ar: [
        'تستقبل الدكتورة سلمى العمراني، خريجة كلية طب الأسنان بالدار البيضاء، الكبار والصغار بموعد مسبق.',
        'أشعة رقمية وتعقيم بالأوتوكلاف وعرض أسعار مكتوب قبل أي علاج.',
      ],
    },
  },
  servicesTitle: { fr: 'Soins et tarifs indicatifs', ar: 'العلاجات والأسعار التقريبية' },
  services: [
    {
      name: { fr: 'Consultation', ar: 'فحص' },
      desc: { fr: 'Bilan complet et plan de soins.', ar: 'فحص شامل وخطة علاج.' },
      priceMad: 200,
    },
    {
      name: { fr: 'Détartrage', ar: 'تنظيف الجير' },
      desc: { fr: 'Nettoyage et polissage.', ar: 'تنظيف وتلميع.' },
      priceMad: 300,
    },
    {
      name: { fr: 'Soin de carie', ar: 'علاج التسوس' },
      desc: { fr: 'Composite de la couleur de la dent.', ar: 'حشو بلون السن.' },
      priceMad: 350,
    },
    {
      name: { fr: 'Blanchiment', ar: 'تبييض الأسنان' },
      desc: { fr: 'Séance en cabinet, résultat immédiat.', ar: 'جلسة بالعيادة بنتيجة فورية.' },
      priceMad: 1500,
    },
    {
      name: { fr: 'Couronne céramique', ar: 'تاج خزفي' },
      desc: { fr: 'Sur mesure, garantie deux ans.', ar: 'حسب المقاس مع ضمان سنتين.' },
      priceMad: 2500,
    },
    {
      name: { fr: 'Implant dentaire', ar: 'زرع الأسنان' },
      desc: { fr: 'Devis après radiographie.', ar: 'عرض سعر بعد الأشعة.' },
    },
  ],
  highlightsTitle: { fr: 'Pourquoi nous', ar: 'لماذا نحن' },
  highlights: [
    { fr: 'Devis écrit avant les soins', ar: 'عرض مكتوب قبل العلاج' },
    { fr: 'Accueil des enfants', ar: 'استقبال الأطفال' },
    { fr: 'Urgences le jour même', ar: 'حالات مستعجلة في اليوم نفسه' },
    { fr: 'Stérilisation en autoclave', ar: 'تعقيم بالأوتوكلاف' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Ma fille avait peur du dentiste. Elle demande à y retourner.',
        ar: 'ابنتي كانت تخاف من طبيب الأسنان والآن تطلب العودة.',
      },
      author: { fr: 'Nadia, maman', ar: 'نادية، أم' },
    },
    {
      quote: {
        fr: 'Tout est expliqué, le prix est annoncé d’avance. Rare.',
        ar: 'كل شيء مشروح والثمن معلن مسبقاً. وهذا نادر.',
      },
      author: { fr: 'Hamza', ar: 'حمزة' },
    },
  ],
  contact: {
    phone: '+212 5 37 00 00 00',
    whatsapp: '212662000000',
    email: 'contact@example.com',
    address: {
      fr: '3 boulevard Hassan II, 2e étage, Rabat',
      ar: '3 شارع الحسن الثاني، الطابق الثاني، الرباط',
    },
    hours: {
      fr: ['Lundi – Vendredi : 9h – 18h', 'Samedi : 9h – 13h'],
      ar: ['الاثنين – الجمعة: 09:00 – 18:00', 'السبت: 09:00 – 13:00'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je souhaite un rendez-vous pour une consultation. Motif : ...',
      ar: 'السلام عليكم، أريد موعداً لفحص. السبب: ...',
    },
  },
};
