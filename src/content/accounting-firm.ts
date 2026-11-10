import type { SiteContent } from '../types.ts';

export const accountingFirm: SiteContent = {
  id: 'accounting-firm',
  name: { fr: 'Cabinet Comptable Chiffres Clairs', ar: 'مكتب المحاسبة أرقام واضحة' },
  schemaType: 'AccountingService',
  tagline: {
    fr: 'Comptabilité, fiscalité, paie pour TPE et indépendants',
    ar: 'محاسبة وجبايات وأجور للمقاولات الصغيرة والمستقلين',
  },
  hero: {
    title: { fr: 'Vos comptes en ordre, votre esprit libre.', ar: 'حساباتكم مرتبة، وبالكم مرتاح.' },
    sub: {
      fr: 'Tenue comptable, déclarations fiscales et CNSS, bilans : un interlocuteur unique qui vous explique vos chiffres en langage simple.',
      ar: 'مسك الحسابات والتصريحات الضريبية والضمان الاجتماعي والميزانيات: محاور واحد يشرح لكم أرقامكم بلغة بسيطة.',
    },
    cta: { fr: 'Demander un devis', ar: 'اطلبوا عرض سعر' },
  },
  heroImage: {
    alt: {
      fr: 'Comptable tapant sur un ordinateur portable affichant des graphiques, à côté d’une calculatrice et de relevés financiers',
      ar: 'محاسب يكتب على حاسوب محمول يعرض رسومًا بيانية، بجانب آلة حاسبة وكشوف مالية',
    },
  },
  about: {
    title: { fr: 'Des chiffres qui servent votre activité', ar: 'أرقام في خدمة نشاطكم' },
    body: {
      fr: [
        'Chiffres Clairs accompagne depuis dix ans une centaine de commerçants, artisans et professions libérales à Casablanca et Mohammedia.',
        'Nous travaillons sur un logiciel partagé : vous voyez votre situation en temps réel, sans attendre le bilan annuel pour savoir où vous en êtes.',
      ],
      ar: [
        'يرافق "أرقام واضحة" منذ عشر سنوات حوالي مئة تاجر وحرفي ومهني حر بالدار البيضاء والمحمدية.',
        'نعمل ببرنامج مشترك: ترون وضعكم في الوقت الحقيقي دون انتظار الميزانية السنوية لمعرفة أين وصلتم.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos formules', ar: 'صيغ خدماتنا' },
  services: [
    {
      name: { fr: 'Comptabilité mensuelle (auto-entrepreneur)', ar: 'محاسبة شهرية (مقاول ذاتي)' },
      desc: {
        fr: 'Saisie, déclarations trimestrielles et suivi du plafond de chiffre d’affaires.',
        ar: 'تسجيل وتصريحات فصلية ومراقبة سقف رقم المعاملات.',
      },
      priceMad: 400,
    },
    {
      name: { fr: 'Comptabilité mensuelle (SARL)', ar: 'محاسبة شهرية (شركة ذات مسؤولية محدودة)' },
      desc: {
        fr: 'Tenue complète, TVA, acomptes d’IS et tableau de bord mensuel.',
        ar: 'مسك كامل للحسابات والضريبة على القيمة المضافة وتسبيقات الضريبة على الشركات ولوحة قيادة شهرية.',
      },
      priceMad: 1200,
    },
    {
      name: { fr: 'Gestion de la paie', ar: 'تدبير الأجور' },
      desc: {
        fr: 'Bulletins, déclarations CNSS et AMO, par salarié et par mois.',
        ar: 'كشوف الأجور وتصريحات الضمان الاجتماعي والتأمين الإجباري، لكل أجير في الشهر.',
      },
      priceMad: 90,
    },
    {
      name: { fr: 'Bilan annuel et liasse fiscale', ar: 'الميزانية السنوية والبيان الجبائي' },
      desc: {
        fr: 'Arrêté des comptes, liasse fiscale et déclaration de l’impôt sur les sociétés.',
        ar: 'إقفال الحسابات والبيان الجبائي وتصريح الضريبة على الشركات.',
      },
      priceMad: 3500,
    },
    {
      name: { fr: 'Conseil et optimisation fiscale', ar: 'استشارة وتحسين جبائي' },
      desc: {
        fr: 'Choix du statut, rémunération du dirigeant, contrôle fiscal.',
        ar: 'اختيار الوضع القانوني وأجر المسير والمراقبة الجبائية.',
      },
    },
  ],
  highlightsTitle: { fr: 'Pourquoi nous choisir', ar: 'لماذا نحن' },
  highlights: [
    { fr: 'Tableau de bord en ligne', ar: 'لوحة قيادة على الإنترنت' },
    { fr: 'Prix mensuel fixe', ar: 'سعر شهري ثابت' },
    { fr: 'Un seul interlocuteur', ar: 'محاور واحد' },
    { fr: 'Réponse sous 24 h', ar: 'جواب خلال 24 ساعة' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Pour la première fois, je comprends mon bilan. Et je ne paie plus de pénalités de retard.',
        ar: 'لأول مرة أفهم ميزانيتي. ولم أعد أدفع غرامات التأخير.',
      },
      author: { fr: 'Rachid, restaurateur, Casablanca', ar: 'رشيد، صاحب مطعم، الدار البيضاء' },
    },
    {
      quote: {
        fr: 'Ils ont repris ma comptabilité en désordre en un mois. Sérieux et abordables.',
        ar: 'استلموا محاسبتي المبعثرة وأعادوا ترتيبها في شهر. جادّون وأثمنتهم معقولة.',
      },
      author: { fr: 'Imane, architecte d’intérieur, Mohammedia', ar: 'إيمان، مهندسة ديكور، المحمدية' },
    },
  ],
  contact: {
    phone: '+212 5 22 33 44 77',
    whatsapp: '212633445577',
    email: 'contact@example.com',
    address: {
      fr: '9 rue Abou Bakr Seddik, Racine, Casablanca',
      ar: '9 زنقة أبو بكر الصديق، راسين، الدار البيضاء',
    },
    hours: {
      fr: ['Lundi – Vendredi : 9h – 17h30', 'Fermé le week-end'],
      ar: ['الاثنين – الجمعة: 9:00 – 17:30', 'مغلق في عطلة نهاية الأسبوع'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je souhaite un devis de comptabilité pour mon activité (statut : ...).',
      ar: 'السلام عليكم، أرغب في عرض سعر لمسك محاسبة نشاطي (الوضع القانوني: ...).',
    },
  },
};
