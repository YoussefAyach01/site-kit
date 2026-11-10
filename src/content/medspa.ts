import type { SiteContent } from '../types.ts';

export const medspa: SiteContent = {
  id: 'medspa',
  name: { fr: 'Medspa Zellige', ar: 'ميدسبا الزليج' },
  schemaType: 'MedicalSpa',
  tagline: {
    fr: 'Médecine esthétique et soins du visage',
    ar: 'طب تجميلي وعناية بالبشرة',
  },
  hero: {
    title: { fr: 'Une peau qui vous ressemble, en mieux.', ar: 'بشرة تشبهكم، لكن بشكل أفضل.' },
    sub: {
      fr: 'Soins du visage médicaux, injections et traitements anti-âge réalisés par une équipe médicale, dans un cadre aussi apaisant qu’un spa.',
      ar: 'عناية طبية بالوجه وحقن وعلاجات مضادة للشيخوخة من طرف فريق طبي، في أجواء هادئة أشبه بالسبا.',
    },
    cta: { fr: 'Réserver une consultation', ar: 'احجزوا استشارة' },
  },
  heroImage: {
    alt: {
      fr: 'Lit de soin avec coussins et traversin terracotta, bougies allumées et niches murales garnies de flacons ambrés',
      ar: 'سرير عناية بوسائد ومخدة أسطوانية طينية وشموع مضاءة وفتحات جدارية بها قناني عنبرية',
    },
  },
  about: {
    title: { fr: 'L’exigence médicale, l’accueil d’un spa', ar: 'دقة طبية، واستقبال أشبه بالسبا' },
    body: {
      fr: [
        'Medspa Zellige est dirigé par une équipe de médecins esthétiques, pour des soins qui allient sécurité médicale et expérience sensorielle.',
        'Chaque protocole commence par une consultation gratuite où l’on vous explique les options, leurs résultats réalistes et leur délai, sans survente.',
      ],
      ar: [
        'يُدار ميدسبا الزليج من طرف فريق من أطباء التجميل، لعناية تجمع بين الأمان الطبي والتجربة الحسية.',
        'يبدأ كل بروتوكول باستشارة مجانية يُشرح فيها الخيارات ونتائجها الواقعية ومدتها، دون أي مبالغة في البيع.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos soins', ar: 'عناياتنا' },
  services: [
    {
      name: { fr: 'Consultation esthétique', ar: 'استشارة تجميلية' },
      desc: {
        fr: 'Diagnostic de peau et plan de traitement, offerte avant tout soin.',
        ar: 'تشخيص البشرة ووضع خطة علاج، مجانية قبل أي جلسة.',
      },
    },
    {
      name: { fr: 'Soin hydrafacial', ar: 'عناية هيدرافيشل' },
      desc: {
        fr: 'Nettoyage en profondeur et hydratation intense.',
        ar: 'تنظيف عميق وترطيب مكثف.',
      },
      priceMad: 600,
    },
    {
      name: { fr: 'Injections acide hyaluronique', ar: 'حقن حمض الهيالورونيك' },
      desc: {
        fr: 'Comblement des rides et volumes du visage.',
        ar: 'ملء التجاعيد وإضافة الحجم للوجه.',
      },
      priceMad: 1800,
    },
    {
      name: { fr: 'Mésothérapie visage', ar: 'ميزوثيرابي للوجه' },
      desc: {
        fr: 'Relance de l’éclat et de l’hydratation cutanée.',
        ar: 'إعادة الإشراق والترطيب للبشرة.',
      },
      priceMad: 900,
    },
    {
      name: { fr: 'Peeling doux', ar: 'تقشير لطيف' },
      desc: {
        fr: 'Affine le grain de peau, cure recommandée en 3 séances.',
        ar: 'ينعّم ملمس البشرة، يُنصح بثلاث جلسات.',
      },
      priceMad: 500,
    },
  ],
  highlightsTitle: { fr: 'Nos garanties', ar: 'ضماناتنا' },
  highlights: [
    { fr: 'Équipe encadrée par des médecins', ar: 'فريق تحت إشراف أطباء' },
    { fr: 'Consultation gratuite avant tout soin', ar: 'استشارة مجانية قبل أي علاج' },
    { fr: 'Produits certifiés', ar: 'منتجات معتمدة' },
    { fr: 'Discrétion totale', ar: 'سرية تامة' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Les résultats sont naturels, personne n’a deviné que j’avais fait un soin.',
        ar: 'النتائج طبيعية، لم يلاحظ أحد أنني خضعت لعلاج.',
      },
      author: { fr: 'Zineb, Casablanca', ar: 'زينب، الدار البيضاء' },
    },
    {
      quote: {
        fr: 'La consultation honnête m’a évité de dépenser pour un soin dont je n’avais pas besoin.',
        ar: 'الاستشارة الصادقة جنّبتني إنفاق المال على علاج لم أكن بحاجة إليه.',
      },
      author: { fr: 'Karim, Casablanca', ar: 'كريم، الدار البيضاء' },
    },
  ],
  contact: {
    phone: '+212 5 22 99 00 11',
    whatsapp: '212622990011',
    email: 'contact@example.com',
    address: { fr: '18 boulevard Zerktouni, Casablanca', ar: '18 شارع الزرقطوني، الدار البيضاء' },
    hours: {
      fr: ['Lundi – Samedi : 10h – 19h'],
      ar: ['الاثنين – السبت: 10:00 – 19:00'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je voudrais réserver une consultation esthétique le ... à ...h.',
      ar: 'السلام عليكم، أود حجز استشارة تجميلية يوم ... على الساعة ...',
    },
  },
};
