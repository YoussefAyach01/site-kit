import type { SiteContent } from '../types.ts';

export const architectureStudio: SiteContent = {
  id: 'architecture-studio',
  name: { fr: 'Atelier Zellige Architectes', ar: 'مشغل الزليج للهندسة المعمارية' },
  schemaType: 'ProfessionalService',
  tagline: { fr: 'Architecture résidentielle et commerciale', ar: 'هندسة معمارية سكنية وتجارية' },
  hero: {
    title: { fr: 'Dessiner la maison que vous habiterez vraiment.', ar: 'نرسم البيت الذي ستسكنونه فعلاً.' },
    sub: {
      fr: 'Villas, immeubles, rénovations et locaux commerciaux. Du premier croquis au suivi de chantier, une équipe qui dessine à la main avant de modéliser.',
      ar: 'فيلات وعمارات وترميمات ومحلات تجارية. من أول رسم إلى متابعة الورش، فريق يرسم باليد قبل أن ينمذج.',
    },
    cta: { fr: 'Parler de votre projet', ar: 'حدثونا عن مشروعكم' },
  },
  heroImage: {
    alt: {
      fr: 'Architecte esquissant une façade au crayon sur du papier calque posé sur un plan bleu, règle à échelle à côté',
      ar: 'مهندس معماري يرسم واجهة بقلم رصاص على ورق شفاف فوق مخطط أزرق، وبجانبه مسطرة مقياس',
    },
  },
  about: {
    title: { fr: 'Un atelier, pas une usine à plans', ar: 'مشغل لا معمل مخططات' },
    body: {
      fr: [
        'L’Atelier Zellige réunit quatre architectes à Casablanca, formés à Rabat et à Barcelone, avec une quinzaine d’années de chantiers derrière eux.',
        'Nous dessinons pour le climat, la lumière et le budget réels du client, en travaillant les matériaux locaux : zellige, tadelakt, bois de cèdre.',
      ],
      ar: [
        'يجمع "مشغل الزليج" أربعة مهندسين معماريين بالدار البيضاء، تكوّنوا في الرباط وبرشلونة، بخبرة نحو خمس عشرة سنة في الأوراش.',
        'نرسم وفق المناخ والضوء وميزانية الزبون الفعلية، مع الاشتغال على المواد المحلية: الزليج والتادلاكت وخشب الأرز.',
      ],
    },
  },
  servicesTitle: { fr: 'Missions et honoraires', ar: 'المهام والأتعاب' },
  services: [
    {
      name: { fr: 'Étude de faisabilité', ar: 'دراسة الجدوى' },
      desc: {
        fr: 'Analyse du terrain, règlement d’urbanisme, premières esquisses et enveloppe budgétaire.',
        ar: 'تحليل الأرض وضوابط التعمير وأولى المقترحات والغلاف المالي.',
      },
      priceMad: 3000,
    },
    {
      name: { fr: 'Permis de construire', ar: 'رخصة البناء' },
      desc: {
        fr: 'Plans, dossier administratif et suivi jusqu’à l’obtention du permis.',
        ar: 'المخططات والملف الإداري والمتابعة حتى الحصول على الرخصة.',
      },
      priceMad: 12000,
    },
    {
      name: { fr: 'Conception complète de villa', ar: 'تصميم كامل لفيلا' },
      desc: {
        fr: 'Esquisse, avant-projet, plans d’exécution et détails techniques.',
        ar: 'رسم أولي ومشروع تمهيدي ومخططات تنفيذية وتفاصيل تقنية.',
      },
    },
    {
      name: { fr: 'Suivi de chantier', ar: 'متابعة الورش' },
      desc: {
        fr: 'Visites hebdomadaires, contrôle de qualité et validation des situations de travaux.',
        ar: 'زيارات أسبوعية ومراقبة الجودة والمصادقة على كشوف الأشغال.',
      },
    },
    {
      name: { fr: 'Rénovation et réaménagement', ar: 'ترميم وإعادة تهيئة' },
      desc: {
        fr: 'Relevé de l’existant, nouveaux volumes et mise aux normes.',
        ar: 'معاينة الوضع القائم وحجوم جديدة ومطابقة المعايير.',
      },
      priceMad: 6000,
    },
  ],
  highlightsTitle: { fr: 'Notre manière de travailler', ar: 'طريقتنا في العمل' },
  highlights: [
    { fr: 'Croquis à la main avant la 3D', ar: 'رسم باليد قبل ثلاثية الأبعاد' },
    { fr: 'Matériaux locaux', ar: 'مواد محلية' },
    { fr: 'Budget tenu', ar: 'احترام الميزانية' },
    { fr: 'Permis suivi de bout en bout', ar: 'متابعة الرخصة من البداية للنهاية' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Notre villa est lumineuse même en plein été, et le chantier est resté dans le budget.',
        ar: 'فيلتنا مضيئة حتى في عزّ الصيف، وظل الورش داخل الميزانية.',
      },
      author: { fr: 'Meryem et Anas, Casablanca', ar: 'مريم وأنس، الدار البيضاء' },
    },
    {
      quote: {
        fr: 'Ils ont transformé un vieil appartement sombre en espace ouvert sans toucher aux murs porteurs.',
        ar: 'حوّلوا شقة قديمة مظلمة إلى فضاء مفتوح دون المساس بالجدران الحاملة.',
      },
      author: { fr: 'Youssef, Mohammedia', ar: 'يوسف، المحمدية' },
    },
  ],
  contact: {
    phone: '+212 5 22 55 66 33',
    whatsapp: '212655663344',
    email: 'contact@example.com',
    address: {
      fr: '21 rue Mustapha El Maani, Casablanca',
      ar: '21 زنقة مصطفى المعاني، الدار البيضاء',
    },
    hours: {
      fr: ['Lundi – Vendredi : 9h – 18h', 'Samedi : sur rendez-vous'],
      ar: ['الاثنين – الجمعة: 9:00 – 18:00', 'السبت: بموعد مسبق'],
    },
    whatsappMessage: {
      fr: 'Bonjour, j’ai un projet de ... sur un terrain de ... m². Pouvons-nous en discuter ?',
      ar: 'السلام عليكم، لدي مشروع ... فوق أرض مساحتها ... م². هل يمكننا الحديث عنه؟',
    },
  },
};
