import type { SiteContent } from '../types.ts';

export const hospital: SiteContent = {
  id: 'hospital',
  name: { fr: 'Clinique Hospitalière Al Manar', ar: 'مستشفى المنار الخاص' },
  schemaType: 'Hospital',
  tagline: { fr: 'Hôpital privé multidisciplinaire', ar: 'مستشفى خاص متعدد التخصصات' },
  hero: {
    title: {
      fr: 'Des soins hospitaliers complets, proches de chez vous.',
      ar: 'رعاية استشفائية شاملة، قريبة منكم.',
    },
    sub: {
      fr: 'Urgences, chirurgie, maternité et consultations spécialisées réunies sous un même toit, avec une équipe disponible jour et nuit.',
      ar: 'استعجالات وجراحة وولادة واستشارات متخصصة تحت سقف واحد، مع فريق متواجد ليلاً ونهاراً.',
    },
    cta: { fr: 'Contacter l’accueil', ar: 'تواصلوا مع الاستقبال' },
  },
  heroImage: {
    alt: {
      fr: 'Hall lumineux de la clinique avec mezzanine en bois, colonnes courbes et espace d’attente verdoyant',
      ar: 'بهو مضيء بالمستشفى مع شرفة خشبية وأعمدة منحنية وفضاء انتظار بلمسة خضراء',
    },
  },
  about: {
    title: { fr: 'Un hôpital à taille humaine', ar: 'مستشفى بحجم إنساني' },
    body: {
      fr: [
        'Al Manar réunit un service d’urgences, un bloc opératoire, une maternité et des consultations spécialisées, pensés pour que les patients ne soient jamais perdus dans de longs couloirs.',
        'Nos équipes médicales et paramédicales travaillent en binôme pour chaque dossier, avec un suivi personnalisé du premier appel jusqu’à la sortie.',
      ],
      ar: [
        'يجمع المنار قسم المستعجلات وقاعة العمليات وقسم الولادة واستشارات متخصصة، مُصممة حتى لا يضيع المرضى في ممرات طويلة.',
        'تعمل فرقنا الطبية وشبه الطبية في ثنائيات لكل ملف، مع متابعة شخصية من أول اتصال إلى غاية الخروج.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos services', ar: 'خدماتنا' },
  services: [
    {
      name: { fr: 'Urgences 24h/24', ar: 'المستعجلات على مدار الساعة' },
      desc: {
        fr: 'Équipe médicale et chirurgicale de garde en permanence.',
        ar: 'فريق طبي وجراحي متواجد باستمرار.',
      },
    },
    {
      name: { fr: 'Maternité', ar: 'قسم الولادة' },
      desc: {
        fr: 'Accouchement, suivi post-natal et chambres individuelles.',
        ar: 'الولادة والمتابعة بعد الوضع وغرف فردية.',
      },
      priceMad: 6500,
    },
    {
      name: { fr: 'Chirurgie générale', ar: 'الجراحة العامة' },
      desc: {
        fr: 'Interventions programmées, bloc opératoire équipé.',
        ar: 'عمليات مبرمجة، قاعة عمليات مجهزة.',
      },
    },
    {
      name: { fr: 'Consultations spécialisées', ar: 'استشارات متخصصة' },
      desc: {
        fr: 'Cardiologie, orthopédie, gastro-entérologie et plus.',
        ar: 'طب القلب، العظام، أمراض الجهاز الهضمي وغيرها.',
      },
      priceMad: 400,
    },
    {
      name: { fr: 'Imagerie médicale', ar: 'الفحوصات بالتصوير' },
      desc: {
        fr: 'Scanner, échographie et radiologie sur place.',
        ar: 'سكانير وموجات فوق صوتية وأشعة في نفس المكان.',
      },
    },
  ],
  highlightsTitle: { fr: 'Pourquoi choisir Al Manar', ar: 'لماذا تختارون المنار' },
  highlights: [
    { fr: 'Urgences ouvertes 24h/24', ar: 'مستعجلات مفتوحة على مدار الساعة' },
    { fr: 'Chambres individuelles', ar: 'غرف فردية' },
    { fr: 'Conventionné avec les assurances', ar: 'متعامد مع شركات التأمين' },
    { fr: 'Plateau technique complet', ar: 'تجهيزات طبية متكاملة' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Mon opération s’est passée sans stress, l’équipe nous a tout expliqué avant et après.',
        ar: 'جرت عمليتي بدون أي قلق، وشرح لنا الفريق كل شيء قبل وبعد.',
      },
      author: { fr: 'Fatima-Zahra, Marrakech', ar: 'فاطمة الزهراء، مراكش' },
    },
    {
      quote: {
        fr: 'Accouchement suivi de près, personnel disponible à toute heure.',
        ar: 'ولادة تمت متابعتها عن قرب، والطاقم متواجد في أي وقت.',
      },
      author: { fr: 'Meryem, Marrakech', ar: 'مريم، مراكش' },
    },
  ],
  contact: {
    phone: '+212 5 24 33 44 55',
    whatsapp: '212624334455',
    email: 'contact@example.com',
    address: {
      fr: '12 boulevard Mohammed VI, Guéliz, Marrakech',
      ar: '12 شارع محمد السادس، جليز، مراكش',
    },
    hours: {
      fr: ['Urgences : 24h/24, 7j/7', 'Consultations : Lundi – Samedi, 8h – 20h'],
      ar: ['المستعجلات: 24 ساعة على 24، طوال الأسبوع', 'الاستشارات: الاثنين – السبت، 8:00 – 20:00'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je souhaite des informations sur ... (consultation, hospitalisation, maternité...).',
      ar: 'السلام عليكم، أود معلومات حول ... (استشارة، تنويم، ولادة...).',
    },
  },
};
