import type { SiteContent } from '../types.ts';

export const eyewearStore: SiteContent = {
  id: 'eyewear-store',
  name: { fr: 'Monture & Lumière', ar: 'إطار وضوء' },
  schemaType: 'Optician',
  tagline: {
    fr: 'Lunettes de vue et de soleil, montures de créateurs',
    ar: 'نظارات طبية وشمسية وإطارات مصممين',
  },
  hero: {
    title: { fr: 'Des montures qui vous ressemblent.', ar: 'إطارات تشبهكم.' },
    sub: {
      fr: 'Plus de trois cents montures en boutique, verres ajustés à votre vue, essayage sans pression. Lunettes prêtes en 48 heures pour la plupart des corrections.',
      ar: 'أكثر من ثلاثمئة إطار في المتجر، وعدسات مضبوطة على نظركم، وتجربة بلا ضغط. نظارات جاهزة خلال 48 ساعة لأغلب الحالات.',
    },
    cta: { fr: 'Réserver un essayage', ar: 'احجزوا تجربة' },
  },
  heroImage: {
    alt: {
      fr: 'Montures de lunettes variées posées sur une étagère en bois clair dans une boutique lumineuse, avec une plante verte',
      ar: 'إطارات نظارات متنوعة موضوعة على رف خشبي فاتح في متجر مضيء، مع نبتة خضراء',
    },
  },
  about: {
    title: { fr: 'Opticiens indépendants', ar: 'أخصائيو بصريات مستقلون' },
    body: {
      fr: [
        'Monture & Lumière est une boutique d’optique indépendante de Rabat, tenue par deux opticiens diplômés. Nous choisissons nos montures auprès de petits créateurs européens et marocains.',
        'Chaque paire est ajustée sur votre visage. Un réglage gratuit est inclus pendant toute la vie de vos lunettes.',
      ],
      ar: [
        '"إطار وضوء" متجر بصريات مستقل بالرباط، يديره أخصائيا بصريات حاصلان على الدبلوم. نختار إطاراتنا من مصممين أوروبيين ومغاربة صغار.',
        'تُضبط كل نظارة على وجهكم. ضبط مجاني مضمون طوال عمر نظارتكم.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos prestations', ar: 'خدماتنا' },
  services: [
    {
      name: { fr: 'Examen de la vue', ar: 'فحص النظر' },
      desc: {
        fr: 'Contrôle de la réfraction par un opticien, trente minutes.',
        ar: 'قياس النظر على يد أخصائي بصريات، ثلاثون دقيقة.',
      },
      priceMad: 0,
    },
    {
      name: { fr: 'Lunettes de vue complètes', ar: 'نظارات طبية كاملة' },
      desc: {
        fr: 'Monture et deux verres amincis avec traitement anti-reflets, à partir de.',
        ar: 'إطار وعدستان رقيقتان مع طبقة مضادة للانعكاس، ابتداءً من.',
      },
      priceMad: 850,
    },
    {
      name: { fr: 'Lunettes de soleil', ar: 'نظارات شمسية' },
      desc: {
        fr: 'Verres polarisés, avec ou sans correction.',
        ar: 'عدسات مستقطبة، بتصحيح أو بدونه.',
      },
      priceMad: 600,
    },
    {
      name: { fr: 'Lentilles de contact', ar: 'العدسات اللاصقة' },
      desc: {
        fr: 'Essai, apprentissage de la pose et abonnement mensuel.',
        ar: 'تجربة وتعلّم الوضع واشتراك شهري.',
      },
      priceMad: 180,
    },
    {
      name: { fr: 'Réparation et réglage', ar: 'إصلاح وضبط' },
      desc: {
        fr: 'Plaquettes, branches, vis : le réglage de base est toujours gratuit.',
        ar: 'وسائد الأنف والأذرع والبراغي: الضبط الأساسي مجاني دائمًا.',
      },
      priceMad: 0,
    },
  ],
  highlightsTitle: { fr: 'Pourquoi nous choisir', ar: 'لماذا نحن' },
  highlights: [
    { fr: 'Opticiens diplômés', ar: 'أخصائيون حاصلون على الدبلوم' },
    { fr: 'Prêtes en 48 h', ar: 'جاهزة خلال 48 ساعة' },
    { fr: 'Réglage gratuit à vie', ar: 'ضبط مجاني مدى الحياة' },
    { fr: 'Plus de 300 montures', ar: 'أكثر من 300 إطار' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'J’ai essayé quinze montures sans que personne ne s’impatiente. Résultat parfait.',
        ar: 'جرّبت خمسة عشر إطارًا دون أن يتضجر أحد. النتيجة مثالية.',
      },
      author: { fr: 'Reda, Rabat', ar: 'رضى، الرباط' },
    },
    {
      quote: {
        fr: 'Mes lunettes étaient prêtes en deux jours, et le réglage est offert quand je veux.',
        ar: 'كانت نظارتي جاهزة في يومين، والضبط مجاني متى أردت.',
      },
      author: { fr: 'Yasmine, Kénitra', ar: 'ياسمين، القنيطرة' },
    },
  ],
  contact: {
    phone: '+212 5 37 70 45 60',
    whatsapp: '212688990011',
    email: 'contact@example.com',
    address: {
      fr: '14 rue Oued Ziz, Agdal, Rabat',
      ar: '14 زنقة واد زيز، أكدال، الرباط',
    },
    hours: {
      fr: ['Lundi – Samedi : 10h – 19h30', 'Dimanche : fermé'],
      ar: ['الاثنين – السبت: 10:00 – 19:30', 'الأحد: مغلق'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je voudrais réserver un examen de la vue et un essayage de montures. Quand puis-je venir ?',
      ar: 'السلام عليكم، أرغب في حجز فحص نظر وتجربة إطارات. متى يمكنني المجيء؟',
    },
  },
};
