import type { SiteContent } from '../types.ts';

export const insuranceBroker: SiteContent = {
  id: 'insurance-broker',
  name: { fr: 'Courtage Sérénité Assurances', ar: 'سيرينيتي للوساطة في التأمين' },
  schemaType: 'InsuranceAgency',
  tagline: { fr: 'Auto, habitation, santé et professionnels', ar: 'سيارات ومنازل وصحة وتأمين مهني' },
  hero: {
    title: { fr: 'Le bon contrat, pas le plus cher.', ar: 'العقد المناسب، لا الأغلى.' },
    sub: {
      fr: 'Nous comparons les offres de plusieurs compagnies, lisons les petites lignes à votre place et vous défendons au moment du sinistre.',
      ar: 'نقارن عروض عدة شركات، ونقرأ البنود الصغيرة نيابة عنكم، وندافع عنكم عند وقوع الحادث.',
    },
    cta: { fr: 'Comparer mes assurances', ar: 'قارنوا تأميناتكم' },
  },
  heroImage: {
    alt: {
      fr: 'Poignée de main entre un conseiller et un client au-dessus d’un bureau avec une maison miniature et un dossier d’assurance',
      ar: 'مصافحة بين مستشار وزبون فوق مكتب عليه بيت مصغّر وملف تأمين',
    },
  },
  about: {
    title: { fr: 'Courtier indépendant, donc de votre côté', ar: 'وسيط مستقل، أي في صفكم' },
    body: {
      fr: [
        'Sérénité est un cabinet de courtage indépendant de Casablanca, partenaire d’une dizaine de compagnies agréées. Nous ne sommes liés à aucune d’elles.',
        'Notre rémunération est une commission versée par la compagnie choisie : le conseil est gratuit pour vous, et vous pouvez comparer sans engagement.',
      ],
      ar: [
        '"سيرينيتي" مكتب وساطة مستقل بالدار البيضاء، يتعامل مع نحو عشر شركات معتمدة دون أن يرتبط بأي منها.',
        'أجرنا عمولة تدفعها الشركة المختارة: الاستشارة مجانية لكم، ويمكنكم المقارنة دون أي التزام.',
      ],
    },
  },
  servicesTitle: { fr: 'Ce que nous couvrons', ar: 'ما نؤمّنه' },
  services: [
    {
      name: { fr: 'Assurance automobile', ar: 'تأمين السيارات' },
      desc: {
        fr: 'Tous risques ou tiers, comparés sur trois compagnies.',
        ar: 'شامل أو ضد الغير، مع مقارنة بين ثلاث شركات.',
      },
      priceMad: 1800,
      priceFrom: true,
    },
    {
      name: { fr: 'Assurance habitation', ar: 'تأمين المنزل' },
      desc: {
        fr: 'Incendie, dégâts des eaux, vol et responsabilité civile.',
        ar: 'حريق وأضرار المياه وسرقة ومسؤولية مدنية.',
      },
      priceMad: 600,
      priceFrom: true,
    },
    {
      name: { fr: 'Mutuelle santé famille', ar: 'تغطية صحية للأسرة' },
      desc: {
        fr: 'Complémentaire à l’AMO, hospitalisation et soins dentaires.',
        ar: 'تكميلية للتأمين الإجباري، تشمل الاستشفاء وعلاج الأسنان.',
      },
      priceMad: 350,
      priceFrom: true,
    },
    {
      name: { fr: 'Assurance professionnelle', ar: 'تأمين المهنيين' },
      desc: {
        fr: 'Responsabilité civile, multirisque local, flotte de véhicules.',
        ar: 'مسؤولية مدنية وتأمين شامل للمحل وأسطول السيارات.',
      },
    },
    {
      name: { fr: 'Assistance sinistre', ar: 'مواكبة الحوادث' },
      desc: {
        fr: 'Déclaration, suivi de l’expertise et négociation de l’indemnisation.',
        ar: 'التصريح ومتابعة الخبرة والتفاوض على التعويض.',
      },
    },
  ],
  highlightsTitle: { fr: 'Nos atouts', ar: 'ما يميزنا' },
  highlights: [
    { fr: 'Courtier indépendant', ar: 'وسيط مستقل' },
    { fr: 'Comparaison gratuite', ar: 'مقارنة مجانية' },
    { fr: 'Suivi des sinistres', ar: 'متابعة الحوادث' },
    { fr: 'Compagnies agréées', ar: 'شركات معتمدة' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Ils ont trouvé une assurance auto 30 % moins chère, avec de meilleures garanties.',
        ar: 'وجدوا لي تأمين سيارة أرخص بـ 30 % وبضمانات أفضل.',
      },
      author: { fr: 'Mehdi, Casablanca', ar: 'مهدي، الدار البيضاء' },
    },
    {
      quote: {
        fr: 'Après un dégât des eaux, ils ont géré tout le dossier. J’ai été indemnisée en un mois.',
        ar: 'بعد ضرر مائي تكفلوا بالملف كله. وتم تعويضي في شهر.',
      },
      author: { fr: 'Soukaina, Mohammedia', ar: 'سكينة، المحمدية' },
    },
  ],
  contact: {
    phone: '+212 5 22 66 77 44',
    whatsapp: '212666774455',
    email: 'contact@example.com',
    address: {
      fr: '56 boulevard Zerktouni, Casablanca',
      ar: '56 شارع الزرقطوني، الدار البيضاء',
    },
    hours: {
      fr: ['Lundi – Vendredi : 9h – 18h', 'Samedi : 9h – 13h'],
      ar: ['الاثنين – الجمعة: 9:00 – 18:00', 'السبت: 9:00 – 13:00'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je souhaite comparer mon assurance ... (échéance : ...).',
      ar: 'السلام عليكم، أرغب في مقارنة تأمين ... (تاريخ الانتهاء: ...).',
    },
  },
};
