import type { SiteContent } from '../types.ts';

export const usedCarDealership: SiteContent = {
  id: 'used-car-dealership',
  name: { fr: 'Auto Confiance Occasion', ar: 'أوتو كونفيانس للسيارات المستعملة' },
  schemaType: 'AutoDealer',
  tagline: { fr: 'Voitures d’occasion contrôlées et garanties', ar: 'سيارات مستعملة مفحوصة ومضمونة' },
  hero: {
    title: { fr: 'Une occasion dont on connaît toute l’histoire.', ar: 'سيارة مستعملة نعرف تاريخها كله.' },
    sub: {
      fr: 'Chaque véhicule est contrôlé en 120 points, son kilométrage vérifié et son historique remis par écrit. Garantie mécanique de six mois et reprise de votre ancienne voiture.',
      ar: 'تُفحص كل سيارة في 120 نقطة، ويُتحقق من كيلومتراتها ويُسلَّم تاريخها كتابةً. ضمان ميكانيكي لستة أشهر واستبدال سيارتكم القديمة.',
    },
    cta: { fr: 'Voir les véhicules', ar: 'شاهدوا السيارات' },
  },
  heroImage: {
    alt: {
      fr: 'Rangée de voitures d’occasion propres garées devant un bâtiment de concession, sous un ciel bleu',
      ar: 'صف من السيارات المستعملة النظيفة مصطفة أمام مبنى معرض تحت سماء زرقاء',
    },
  },
  about: {
    title: { fr: 'Un concessionnaire qui n’a rien à cacher', ar: 'وكيل لا يخفي شيئًا' },
    body: {
      fr: [
        'Auto Confiance est installé à Casablanca depuis 2007. Nous achetons peu, et seulement des voitures que nous pouvons garantir : entretien suivi, aucun accident grave, kilométrage cohérent.',
        'Le prix affiché inclut la préparation, le lavage et le changement des pièces d’usure. Aucun supplément au moment de signer.',
      ],
      ar: [
        'يعمل "أوتو كونفيانس" بالدار البيضاء منذ 2007. نشتري القليل ولا نختار إلا سيارات يمكننا ضمانها: صيانة منتظمة وبلا حوادث خطيرة وكيلومترات متناسقة.',
        'يشمل الثمن المعلن التجهيز والغسيل وتغيير قطع الاستهلاك. لا مصاريف إضافية عند التوقيع.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos services', ar: 'خدماتنا' },
  services: [
    {
      name: { fr: 'Citadine d’occasion (à partir de)', ar: 'سيارة صغيرة مستعملة (ابتداءً من)' },
      desc: {
        fr: 'Moins de 80 000 km, entretien complet, garantie six mois.',
        ar: 'أقل من 80 ألف كلم وصيانة كاملة وضمان ستة أشهر.',
      },
      priceMad: 85000,
    },
    {
      name: { fr: 'SUV et familiales (à partir de)', ar: 'سيارات دفع رباعي وعائلية (ابتداءً من)' },
      desc: {
        fr: 'Diesel et essence, contrôle 120 points inclus.',
        ar: 'ديزل وبنزين مع فحص من 120 نقطة.',
      },
      priceMad: 160000,
    },
    {
      name: { fr: 'Reprise de votre ancienne voiture', ar: 'استبدال سيارتكم القديمة' },
      desc: {
        fr: 'Estimation gratuite sous une heure, déduite du prix du nouveau véhicule.',
        ar: 'تقدير مجاني خلال ساعة، يُخصم من ثمن السيارة الجديدة.',
      },
      priceMad: 0,
    },
    {
      name: { fr: 'Financement', ar: 'التمويل' },
      desc: {
        fr: 'Dossier de crédit monté avec nos partenaires bancaires, réponse sous 48 heures.',
        ar: 'إعداد ملف القرض مع شركائنا من البنوك، والجواب خلال 48 ساعة.',
      },
    },
    {
      name: { fr: 'Rapport d’historique du véhicule', ar: 'تقرير تاريخ السيارة' },
      desc: {
        fr: 'Entretiens, kilométrage et accidents éventuels, remis avant tout engagement.',
        ar: 'الصيانة والكيلومترات والحوادث إن وُجدت، يُسلَّم قبل أي التزام.',
      },
      priceMad: 0,
    },
  ],
  highlightsTitle: { fr: 'Pourquoi nous faire confiance', ar: 'لماذا تثقون بنا' },
  highlights: [
    { fr: 'Contrôle en 120 points', ar: 'فحص من 120 نقطة' },
    { fr: 'Garantie 6 mois', ar: 'ضمان 6 أشهر' },
    { fr: 'Historique remis par écrit', ar: 'تاريخ مسلَّم كتابةً' },
    { fr: 'Reprise de votre voiture', ar: 'استبدال سيارتكم' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Historique complet remis avant l’achat. Un an plus tard, aucun souci mécanique.',
        ar: 'سُلّم لي التاريخ كاملًا قبل الشراء. بعد سنة، لا أي مشكل ميكانيكي.',
      },
      author: { fr: 'Brahim, Casablanca', ar: 'إبراهيم، الدار البيضاء' },
    },
    {
      quote: {
        fr: 'Ils ont repris ma vieille voiture à un prix honnête et simplifié tout le crédit.',
        ar: 'أخذوا سيارتي القديمة بثمن عادل وسهّلوا كل إجراءات القرض.',
      },
      author: { fr: 'Samira, Settat', ar: 'سميرة، سطات' },
    },
  ],
  contact: {
    phone: '+212 5 22 35 76 90',
    whatsapp: '212655663377',
    email: 'contact@example.com',
    address: {
      fr: 'Route de Rabat, km 7, Aïn Sebaâ, Casablanca',
      ar: 'طريق الرباط، الكيلومتر 7، عين السبع، الدار البيضاء',
    },
    hours: {
      fr: ['Lundi – Samedi : 9h – 19h', 'Dimanche : 10h – 14h'],
      ar: ['الاثنين – السبت: 9:00 – 19:00', 'الأحد: 10:00 – 14:00'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je cherche une voiture (budget ... MAD, type ...). Que me proposez-vous ?',
      ar: 'السلام عليكم، أبحث عن سيارة (الميزانية ... درهم، النوع ...). ماذا تقترحون؟',
    },
  },
};
