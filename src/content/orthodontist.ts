import type { SiteContent } from '../types.ts';

export const orthodontist: SiteContent = {
  id: 'orthodontist',
  name: { fr: 'Centre d’Orthodontie Sourire Clair', ar: 'مركز تقويم الأسنان الابتسامة الصافية' },
  schemaType: 'Dentist',
  tagline: { fr: 'Orthodontie pour enfants et adultes', ar: 'تقويم الأسنان للأطفال والكبار' },
  hero: {
    title: {
      fr: 'Un sourire aligné, à votre rythme.',
      ar: 'ابتسامة مستقيمة، على إيقاعكم.',
    },
    sub: {
      fr: 'Bagues, gouttières invisibles et suivi personnalisé, dans des cabinets clairs équipés des dernières technologies.',
      ar: 'تقويم معدني وشفاف ومتابعة شخصية، في عيادات مضيئة مجهزة بأحدث التقنيات.',
    },
    cta: { fr: 'Prendre rendez-vous', ar: 'احجزوا موعداً' },
  },
  heroImage: {
    alt: {
      fr: 'Cabinet d’orthodontie avec fauteuil de soin, équipement dentaire et cloisons vert sauge',
      ar: 'عيادة تقويم أسنان بكرسي علاج وتجهيزات طبية وفواصل بلون أخضر مريح',
    },
  },
  about: {
    title: { fr: 'L’orthodontie expliquée simplement', ar: 'تقويم الأسنان بشرح مبسط' },
    body: {
      fr: [
        'Sourire Clair accompagne enfants, adolescents et adultes vers un sourire aligné, avec un plan de traitement expliqué dès la première visite, coûts compris.',
        'Bagues métalliques, céramiques ou gouttières transparentes : chaque solution est proposée selon l’âge, le budget et le mode de vie du patient.',
      ],
      ar: [
        'يرافق مركز الابتسامة الصافية الأطفال والمراهقين والكبار نحو ابتسامة مستقيمة، مع خطة علاج تُشرح منذ الزيارة الأولى بما فيها التكلفة.',
        'تقويم معدني أو خزفي أو شفاف: كل حل يُقترح حسب سن المريض وميزانيته ونمط حياته.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos traitements', ar: 'علاجاتنا' },
  services: [
    {
      name: { fr: 'Bilan orthodontique', ar: 'فحص تقويمي' },
      desc: {
        fr: 'Examen, radiographie et plan de traitement détaillé.',
        ar: 'فحص وتصوير بالأشعة وخطة علاج مفصلة.',
      },
      priceMad: 350,
    },
    {
      name: { fr: 'Appareil métallique', ar: 'تقويم معدني' },
      desc: {
        fr: 'Traitement complet, suivi mensuel inclus.',
        ar: 'علاج كامل، مع متابعة شهرية مشمولة.',
      },
    },
    {
      name: { fr: 'Gouttières invisibles', ar: 'تقويم شفاف' },
      desc: {
        fr: 'Discret, amovible, idéal pour les adultes actifs.',
        ar: 'غير ملحوظ وقابل للإزالة، مناسب للكبار النشيطين.',
      },
    },
    {
      name: { fr: 'Contention après traitement', ar: 'جهاز التثبيت بعد العلاج' },
      desc: {
        fr: 'Gouttière ou fil de contention pour garder le résultat.',
        ar: 'جهاز شفاف أو سلك تثبيت للحفاظ على النتيجة.',
      },
      priceMad: 800,
    },
    {
      name: { fr: 'Contrôle mensuel', ar: 'فحص شهري' },
      desc: {
        fr: 'Ajustements et suivi de l’évolution du traitement.',
        ar: 'تعديلات ومتابعة تطور العلاج.',
      },
      priceMad: 250,
    },
  ],
  highlightsTitle: { fr: 'Pourquoi nous faire confiance', ar: 'لماذا تثقون بنا' },
  highlights: [
    { fr: 'Devis clair dès le premier jour', ar: 'تقدير واضح للتكلفة منذ اليوم الأول' },
    { fr: 'Facilités de paiement', ar: 'تسهيلات في الأداء' },
    { fr: 'Rendez-vous après l’école', ar: 'مواعيد بعد الخروج من المدرسة' },
    { fr: 'Cabinets climatisés et calmes', ar: 'عيادات مكيفة وهادئة' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Deux ans de traitement pour mon fils, suivi sérieux et sans surprise sur le prix.',
        ar: 'سنتان من العلاج لابني، متابعة جادة وبدون مفاجآت في الثمن.',
      },
      author: { fr: 'Khadija, Agadir', ar: 'خديجة، أكادير' },
    },
    {
      quote: {
        fr: 'Les gouttières invisibles ont changé mon quotidien, personne ne remarque rien.',
        ar: 'التقويم الشفاف غيّر يومياتي، لا أحد يلاحظ شيئاً.',
      },
      author: { fr: 'Yassine, Agadir', ar: 'ياسين، أكادير' },
    },
  ],
  contact: {
    phone: '+212 5 28 11 22 33',
    whatsapp: '212628112233',
    email: 'contact@example.com',
    address: {
      fr: '3 boulevard Hassan II, Secteur Talborjt, Agadir',
      ar: '3 شارع الحسن الثاني، قطاع تالبرجت، أكادير',
    },
    hours: {
      fr: ['Lundi – Vendredi : 9h – 18h30', 'Samedi : 9h – 13h'],
      ar: ['الاثنين – الجمعة: 9:00 – 18:30', 'السبت: 9:00 – 13:00'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je voudrais un bilan orthodontique pour ... (moi / mon enfant de ... ans).',
      ar: 'السلام عليكم، أود حجز فحص تقويمي لـ ... (نفسي / طفلي البالغ ... سنوات).',
    },
  },
};
