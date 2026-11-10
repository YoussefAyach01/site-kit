import type { SiteContent } from '../types.ts';

export const dermatologyClinic: SiteContent = {
  id: 'dermatology-clinic',
  name: { fr: 'Clinique Dermatologique Soline', ar: 'عيادة الجلدية سولين' },
  schemaType: 'MedicalClinic',
  tagline: { fr: 'Dermatologie médicale et esthétique', ar: 'طب جلدي علاجي وتجميلي' },
  hero: {
    title: {
      fr: 'La peau comprise, traitée avec précision.',
      ar: 'بشرتكم، مفهومة ومعالجة بدقة.',
    },
    sub: {
      fr: 'Diagnostic de la peau, traitement de l’acné et des grains de beauté, soins esthétiques encadrés par des dermatologues.',
      ar: 'تشخيص دقيق للبشرة، وعلاج حب الشباب والشامات، وعناية تجميلية بإشراف أطباء جلدية.',
    },
    cta: { fr: 'Prendre rendez-vous', ar: 'احجزوا موعداً' },
  },
  heroImage: {
    alt: {
      fr: 'Cabinet de soins dermatologiques avec fauteuil crème, vasque en marbre et lumière douce',
      ar: 'غرفة عناية جلدية بكرسي كريمي ومغسلة رخامية وإضاءة هادئة',
    },
  },
  about: {
    title: { fr: 'Une peau suivie dans la durée', ar: 'بشرة تُتابَع على المدى الطويل' },
    body: {
      fr: [
        'Soline propose un diagnostic dermatologique précis avant toute proposition de soin, qu’il s’agisse d’acné, d’eczéma ou de grains de beauté à surveiller.',
        'Les soins esthétiques (peelings, injections) sont toujours réalisés par des médecins dermatologues, jamais sous-traités.',
      ],
      ar: [
        'تقدم عيادة سولين تشخيصاً جلدياً دقيقاً قبل أي اقتراح للعلاج، سواء تعلق الأمر بحب الشباب أو الإكزيما أو الشامات التي تستوجب المراقبة.',
        'العناية التجميلية (التقشير، الحقن) تُجرى دائماً من طرف أطباء جلدية، ولا تُسند أبداً لغير مختصين.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos soins', ar: 'عناياتنا' },
  services: [
    {
      name: { fr: 'Consultation dermatologique', ar: 'استشارة جلدية' },
      desc: {
        fr: 'Diagnostic de la peau, acné, eczéma, psoriasis.',
        ar: 'تشخيص البشرة، حب الشباب، الإكزيما، الصدفية.',
      },
      priceMad: 400,
    },
    {
      name: { fr: 'Dermoscopie', ar: 'الفحص بالمجهر الجلدي' },
      desc: {
        fr: 'Examen des grains de beauté et dépistage précoce.',
        ar: 'فحص الشامات والكشف المبكر.',
      },
      priceMad: 350,
    },
    {
      name: { fr: 'Traitement de l’acné', ar: 'علاج حب الشباب' },
      desc: {
        fr: 'Protocole personnalisé selon la sévérité.',
        ar: 'بروتوكول شخصي حسب شدة الحالة.',
      },
      priceMad: 450,
    },
    {
      name: { fr: 'Peeling médical', ar: 'التقشير الطبي' },
      desc: {
        fr: 'Pour le teint terne, les cicatrices d’acné et les taches.',
        ar: 'للبشرة الباهتة، آثار حب الشباب والبقع الجلدية.',
      },
      priceMad: 600,
    },
    {
      name: { fr: 'Suivi des grains de beauté', ar: 'متابعة الشامات' },
      desc: {
        fr: 'Cartographie photo et contrôle annuel.',
        ar: 'توثيق بالصور ومراقبة سنوية.',
      },
      priceMad: 500,
    },
  ],
  highlightsTitle: { fr: 'Pourquoi Soline', ar: 'لماذا سولين' },
  highlights: [
    { fr: 'Dermatologues diplômés uniquement', ar: 'أطباء جلدية حاصلون على الشهادة فقط' },
    { fr: 'Dermoscopie numérique', ar: 'فحص جلدي رقمي' },
    { fr: 'Confidentialité assurée', ar: 'سرية تامة' },
    { fr: 'Rendez-vous en ligne', ar: 'حجز عبر الإنترنت' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Un diagnostic clair, sans me pousser vers des soins dont je n’avais pas besoin.',
        ar: 'تشخيص واضح، دون أن يدفعوني نحو عناية لم أكن بحاجة إليها.',
      },
      author: { fr: 'Rania, Fès', ar: 'رانية، فاس' },
    },
    {
      quote: {
        fr: 'Mon acné est enfin maîtrisée après des années d’essais.',
        ar: 'أخيراً تمكنت من السيطرة على حب الشباب بعد سنوات من المحاولات.',
      },
      author: { fr: 'Omar, Fès', ar: 'عمر، فاس' },
    },
  ],
  contact: {
    phone: '+212 5 35 55 66 77',
    whatsapp: '212635556677',
    email: 'contact@example.com',
    address: {
      fr: '7 rue Mozart, Ville Nouvelle, Fès',
      ar: '7 زنقة موزار، المدينة الجديدة، فاس',
    },
    hours: {
      fr: ['Lundi – Vendredi : 9h – 18h', 'Samedi : 9h – 13h'],
      ar: ['الاثنين – الجمعة: 9:00 – 18:00', 'السبت: 9:00 – 13:00'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je voudrais un rendez-vous pour ... le ... à ...h.',
      ar: 'السلام عليكم، أود حجز موعد من أجل ... يوم ... على الساعة ...',
    },
  },
};
