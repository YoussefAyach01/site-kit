import type { SiteContent } from '../types.ts';

export const massageSpa: SiteContent = {
  id: 'massage-spa',
  name: { fr: 'Spa Ambre', ar: 'سبا العنبر' },
  schemaType: 'DaySpa',
  tagline: { fr: 'Massages et rituels de bien-être', ar: 'تدليك وطقوس استرخاء' },
  hero: {
    title: { fr: 'Un refuge pour ralentir.', ar: 'ملجأ لتبطئوا فيه الوقت.' },
    sub: {
      fr: 'Massages relaxants, rituels au gommage et soins du corps dans des salles voûtées, à la lumière des bougies.',
      ar: 'تدليك استرخائي وطقوس تقشير وعناية بالجسم في قاعات مقببة، على ضوء الشموع.',
    },
    cta: { fr: 'Réserver un soin', ar: 'احجزوا جلسة' },
  },
  heroImage: {
    alt: {
      fr: 'Salle de soin voûtée aux murs d’argile, table drapée de lin terracotta, niches éclairées à la bougie et jarres en poterie',
      ar: 'قاعة علاج مقببة بجدران طينية وطاولة مغطاة بكتان طيني وفتحات جدارية مضاءة بالشموع وجرار فخارية',
    },
  },
  about: {
    title: { fr: 'Le rythme d’un hammam, le calme d’un spa', ar: 'إيقاع الحمام، وهدوء السبا' },
    body: {
      fr: [
        'Spa Ambre a transformé une ancienne maison en un enchaînement de salles voûtées, pensées pour le silence et la lenteur.',
        'Nos thérapeutes travaillent à l’huile d’argan et aux essences locales, avec des gestes appris auprès de maîtres masseuses de la médina.',
      ],
      ar: [
        'حوّل سبا العنبر بيتاً قديماً إلى سلسلة من القاعات المقببة، مصممة للصمت والبطء.',
        'تعمل معالجاتنا بزيت الأركان والزيوت العطرية المحلية، بحركات تعلّمنها من معلمات التدليك في المدينة العتيقة.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos soins', ar: 'عناياتنا' },
  services: [
    {
      name: { fr: 'Massage relaxant 60 min', ar: 'تدليك استرخائي 60 دقيقة' },
      desc: {
        fr: 'Huiles chaudes, pression douce à modérée.',
        ar: 'زيوت دافئة وضغط خفيف إلى متوسط.',
      },
      priceMad: 350,
    },
    {
      name: { fr: 'Massage aux pierres chaudes', ar: 'تدليك بالحجارة الساخنة' },
      desc: {
        fr: 'Détente profonde des muscles contractés.',
        ar: 'استرخاء عميق للعضلات المشدودة.',
      },
      priceMad: 450,
    },
    {
      name: { fr: 'Rituel gommage et enveloppement', ar: 'طقس التقشير واللف' },
      desc: {
        fr: 'Gommage au savon noir puis masque hydratant.',
        ar: 'تقشير بالصابون الأسود ثم قناع مرطب.',
      },
      priceMad: 400,
    },
    {
      name: { fr: 'Soin visage apaisant', ar: 'عناية مهدئة للوجه' },
      desc: {
        fr: 'Nettoyage, massage et masque selon votre peau.',
        ar: 'تنظيف وتدليك وقناع حسب نوع بشرتكم.',
      },
      priceMad: 300,
    },
    {
      name: { fr: 'Rituel duo', ar: 'طقس ثنائي' },
      desc: {
        fr: 'Deux massages côte à côte, pour deux personnes.',
        ar: 'تدليكان جنباً إلى جنب، لشخصين.',
      },
      priceMad: 650,
    },
  ],
  highlightsTitle: { fr: 'Notre promesse', ar: 'التزامنا' },
  highlights: [
    { fr: 'Huile d’argan pressée localement', ar: 'زيت أركان معصور محلياً' },
    { fr: 'Salles voûtées silencieuses', ar: 'قاعات مقببة هادئة' },
    { fr: 'Thérapeutes diplômées', ar: 'معالجات مؤهلات' },
    { fr: 'Thé à la verveine offert', ar: 'شاي اللويزة مجاناً' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Je suis entrée stressée, je suis sortie flottante.',
        ar: 'دخلت متوترة، وخرجت وكأنني أطير.',
      },
      author: { fr: 'Meryem, Marrakech', ar: 'مريم، مراكش' },
    },
    {
      quote: {
        fr: 'Le massage aux pierres chaudes a réglé mon mal de dos mieux que trois séances de kiné.',
        ar: 'التدليك بالحجارة الساخنة عالج ألم ظهري أفضل من ثلاث جلسات علاج طبيعي.',
      },
      author: { fr: 'Fouad, Marrakech', ar: 'فؤاد، مراكش' },
    },
  ],
  contact: {
    phone: '+212 5 24 55 66 77',
    whatsapp: '212624556677',
    email: 'contact@example.com',
    address: {
      fr: '22 derb Sidi Bouloukat, Médina, Marrakech',
      ar: '22 درب سيدي بولوقات، المدينة القديمة، مراكش',
    },
    hours: {
      fr: ['Tous les jours : 10h – 20h'],
      ar: ['كل الأيام: 10:00 – 20:00'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je voudrais réserver un soin le ... à ...h pour ... personne(s).',
      ar: 'السلام عليكم، أود حجز جلسة يوم ... على الساعة ... لـ ... شخص/أشخاص.',
    },
  },
};
