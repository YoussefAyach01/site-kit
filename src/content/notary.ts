import type { SiteContent } from '../types.ts';

export const notary: SiteContent = {
  id: 'notary',
  name: { fr: 'Étude Notariale Bennani', ar: 'مكتب التوثيق بناني' },
  schemaType: 'Notary',
  tagline: { fr: 'Actes, successions et transactions immobilières', ar: 'عقود وإرث ومعاملات عقارية' },
  hero: {
    title: { fr: 'Vos actes importants, entre de bonnes mains.', ar: 'عقودكم المهمة بين أيدٍ أمينة.' },
    sub: {
      fr: 'Vente, donation, partage, constitution de société : un acte authentique clair, rédigé avec soin et signé dans un cadre serein.',
      ar: 'بيع وهبة وقسمة وتأسيس شركة: عقد رسمي واضح، محرّر بعناية، يُوقَّع في أجواء هادئة.',
    },
    cta: { fr: 'Prendre rendez-vous', ar: 'احجزوا موعدًا' },
  },
  heroImage: {
    alt: {
      fr: 'Notaire signant un acte à la plume sur un bureau en bois sombre, tampon et pile de dossiers à côté',
      ar: 'موثقة توقّع عقدًا بقلم حبر على مكتب خشبي داكن، وبجانبها ختم وكومة ملفات',
    },
  },
  about: {
    title: { fr: 'Une étude de confiance depuis 1998', ar: 'مكتب ثقة منذ 1998' },
    body: {
      fr: [
        'L’étude Bennani est dirigée à Casablanca par un notaire et deux collaborateurs, spécialisés en droit immobilier, droit de la famille et droit des sociétés.',
        'Nous prenons le temps d’expliquer chaque clause avant la signature, pour que vous sachiez exactement ce que vous engagez.',
      ],
      ar: [
        'يدير مكتب بناني بالدار البيضاء موثق ومعاونان متخصصون في القانون العقاري وقانون الأسرة وقانون الشركات.',
        'نأخذ الوقت لشرح كل بند قبل التوقيع، كي تعرفوا بدقة ما تلتزمون به.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos actes', ar: 'عقودنا' },
  services: [
    {
      name: { fr: 'Vente immobilière', ar: 'بيع عقار' },
      desc: {
        fr: 'Vérification du titre, rédaction de l’acte, enregistrement et conservation foncière.',
        ar: 'التحقق من الرسم العقاري وتحرير العقد والتسجيل والمحافظة العقارية.',
      },
    },
    {
      name: { fr: 'Donation entre proches', ar: 'هبة بين الأقارب' },
      desc: {
        fr: 'Acte de donation et conseils sur ses effets pour la succession.',
        ar: 'عقد الهبة ونصائح حول آثارها على الإرث.',
      },
      priceMad: 3000,
    },
    {
      name: { fr: 'Acte d’hérédité et partage', ar: 'رسم الإراثة والقسمة' },
      desc: {
        fr: 'Établissement des héritiers, inventaire et partage des biens.',
        ar: 'تحديد الورثة وجرد التركة وقسمتها.',
      },
    },
    {
      name: { fr: 'Constitution de société', ar: 'تأسيس شركة' },
      desc: {
        fr: 'Statuts authentiques, dépôt du capital et formalités d’immatriculation.',
        ar: 'قوانين أساسية رسمية وإيداع رأس المال وإجراءات التسجيل.',
      },
      priceMad: 3500,
    },
    {
      name: { fr: 'Procuration et attestation', ar: 'وكالة وشهادة' },
      desc: {
        fr: 'Procurations spéciales, attestations et certifications de signature.',
        ar: 'وكالات خاصة وشهادات وتصحيح الإمضاءات.',
      },
      priceMad: 400,
    },
  ],
  highlightsTitle: { fr: 'Notre approche', ar: 'نهجنا' },
  highlights: [
    { fr: 'Titres vérifiés avant signature', ar: 'رسوم مدققة قبل التوقيع' },
    { fr: 'Clauses expliquées', ar: 'شرح كل بند' },
    { fr: 'Tarifs réglementés affichés', ar: 'تعريفة قانونية معلنة' },
    { fr: 'Discrétion garantie', ar: 'كتمان مضمون' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Notre achat s’est déroulé sans accroc. Tout nous a été expliqué avant de signer.',
        ar: 'تمّ شراؤنا دون أي عقبة. شُرح لنا كل شيء قبل التوقيع.',
      },
      author: { fr: 'Aicha et Tarik, Casablanca', ar: 'عائشة وطارق، الدار البيضاء' },
    },
    {
      quote: {
        fr: 'Une succession compliquée réglée avec patience et clarté. Je recommande.',
        ar: 'تركة معقدة سُوّيت بصبر ووضوح. أنصح بهم.',
      },
      author: { fr: 'Fouad, Settat', ar: 'فؤاد، سطات' },
    },
  ],
  contact: {
    phone: '+212 5 22 99 00 55',
    whatsapp: '212699005566',
    email: 'contact@example.com',
    address: {
      fr: '8 rue Ibnou Sina, 2e étage, Casablanca',
      ar: '8 زنقة ابن سينا، الطابق الثاني، الدار البيضاء',
    },
    hours: {
      fr: ['Lundi – Vendredi : 9h – 17h', 'Fermé le week-end'],
      ar: ['الاثنين – الجمعة: 9:00 – 17:00', 'مغلق في عطلة نهاية الأسبوع'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je souhaite un rendez-vous pour un acte de ... Quels documents dois-je apporter ?',
      ar: 'السلام عليكم، أرغب في موعد لعقد ... ما هي الوثائق التي يجب إحضارها؟',
    },
  },
};
