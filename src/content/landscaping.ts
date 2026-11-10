import type { SiteContent } from '../types.ts';

export const landscaping: SiteContent = {
  id: 'landscaping',
  name: { fr: 'Jardins de l’Atlas', ar: 'حدائق الأطلس' },
  schemaType: 'LandscapingBusiness',
  tagline: { fr: 'Entretien et création de jardins', ar: 'صيانة وتصميم الحدائق' },
  hero: {
    title: {
      fr: 'Un jardin qui vous ressemble, entretenu toute l’année.',
      ar: 'حديقة تشبهكم، تُصان طوال السنة.',
    },
    sub: {
      fr: 'Tonte, taille, création d’espaces verts et arrosage automatique. Une équipe de jardiniers qui connaît chaque recoin de votre terrain.',
      ar: 'جز العشب والتقليم وتصميم المساحات الخضراء والسقي الآلي. فريق بستانيين يعرف كل زاوية من أرضكم.',
    },
    cta: { fr: 'Demander un devis gratuit', ar: 'اطلبوا عرض سعر مجاني' },
  },
  heroImage: {
    alt: {
      fr: 'Jardinier taillant une haie de buis dans un jardin verdoyant et structuré, brouette remplie de résidus de taille et sac à outils au premier plan',
      ar: 'بستاني يقلّم سياجاً من شجيرات البقس في حديقة خضراء منظمة، مع عربة يدوية مليئة ببقايا التقليم وحقيبة أدوات في الواجهة',
    },
  },
  about: {
    title: { fr: 'Des jardiniers, pas des saisonniers', ar: 'بستانيون دائمون، لا موسميون' },
    body: {
      fr: [
        'Jardins de l’Atlas suit vos espaces verts toute l’année, pas seulement au printemps : c’est ce qui garde un jardin en bonne santé.',
        'Nous travaillons avec des plantes adaptées au climat local, pour limiter l’arrosage et l’entretien sur le long terme.',
      ],
      ar: [
        'حدائق الأطلس تتابع مساحاتكم الخضراء طوال السنة، وليس فقط في الربيع: هذا ما يحافظ على صحة الحديقة.',
        'نعمل بنباتات ملائمة للمناخ المحلي لتقليل الحاجة إلى السقي والصيانة على المدى الطويل.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos prestations', ar: 'خدماتنا' },
  services: [
    {
      name: { fr: 'Tonte et entretien régulier', ar: 'جز العشب والصيانة الدورية' },
      desc: {
        fr: 'Passage hebdomadaire ou bimensuel, pelouse et massifs.',
        ar: 'زيارة أسبوعية أو كل أسبوعين للعشب والأحواض.',
      },
      priceMad: 350,
    },
    {
      name: { fr: 'Création de jardin', ar: 'تصميم حديقة جديدة' },
      desc: {
        fr: 'Plan paysager, choix des plantes, mise en œuvre complète.',
        ar: 'تصميم المشهد الطبيعي واختيار النباتات والتنفيذ الكامل.',
      },
    },
    {
      name: { fr: 'Taille de haies et d’arbres', ar: 'تقليم الأسيجة والأشجار' },
      desc: {
        fr: 'Taille de forme ou d’entretien, évacuation des déchets incluse.',
        ar: 'تقليم تشكيلي أو دوري، مع إخلاء النفايات.',
      },
      priceMad: 400,
    },
    {
      name: { fr: 'Arrosage automatique', ar: 'تركيب نظام سقي آلي' },
      desc: {
        fr: 'Étude, pose et programmation d’un réseau goutte-à-goutte.',
        ar: 'دراسة وتركيب وبرمجة شبكة ري بالتنقيط.',
      },
      priceMad: 2200,
    },
    {
      name: { fr: 'Nettoyage de printemps', ar: 'تنظيف الربيع' },
      desc: {
        fr: 'Désherbage, aération de la pelouse, remise en état des massifs.',
        ar: 'إزالة الأعشاب الضارة وتهوية العشب وإعادة تهيئة الأحواض.',
      },
      priceMad: 600,
    },
  ],
  highlightsTitle: { fr: 'Pourquoi nous faire confiance', ar: 'لماذا تثقون بنا' },
  highlights: [
    { fr: 'Même équipe à chaque passage', ar: 'نفس الفريق في كل زيارة' },
    { fr: 'Devis gratuit et sans engagement', ar: 'عرض سعر مجاني وبدون التزام' },
    { fr: 'Plantes adaptées au climat local', ar: 'نباتات ملائمة للمناخ المحلي' },
    { fr: 'Évacuation des déchets verts incluse', ar: 'إخلاء النفايات الخضراء مشمول' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Notre jardin n’a jamais été aussi beau, et on ne s’en occupe plus du tout.',
        ar: 'حديقتنا لم تكن يوماً بهذا الجمال، ولم نعد نهتم بها إطلاقاً بأنفسنا.',
      },
      author: { fr: 'Fatima-Zahra, Californie, Casablanca', ar: 'فاطمة الزهراء، كاليفورنيا، الدار البيضاء' },
    },
    {
      quote: {
        fr: 'Équipe ponctuelle, soignée, et de bons conseils sur les plantations.',
        ar: 'فريق ملتزم بالمواعيد ودقيق في العمل ويقدم نصائح جيدة حول الغرس.',
      },
      author: { fr: 'Driss, Bouskoura', ar: 'إدريس، بوسكورة' },
    },
  ],
  contact: {
    phone: '+212 5 22 33 44 55',
    whatsapp: '212633445566',
    email: 'contact@example.com',
    address: {
      fr: '7 lotissement Les Jardins, Bouskoura, Casablanca',
      ar: '7 تجزئة الحدائق، بوسكورة، الدار البيضاء',
    },
    hours: {
      fr: ['Lundi – Samedi : 7h30 – 18h'],
      ar: ['الاثنين – السبت: 7:30 – 18:00'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je souhaite un devis pour l’entretien de mon jardin à ...',
      ar: 'السلام عليكم، أرغب في عرض سعر لصيانة حديقتي في ...',
    },
  },
};
