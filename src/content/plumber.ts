import type { SiteContent } from '../types.ts';

export const plumber: SiteContent = {
  id: 'plumber',
  name: { fr: 'Plomberie Atlas', ar: 'سباكة الأطلس' },
  schemaType: 'Plumber',
  tagline: { fr: 'Dépannage et installation sanitaire', ar: 'إصلاح وتركيب الأدوات الصحية' },
  hero: {
    title: {
      fr: 'Une fuite ? On est chez vous en moins d’une heure.',
      ar: 'تسريب ماء؟ نصل إلى منزلكم في أقل من ساعة.',
    },
    sub: {
      fr: 'Diagnostic précis, pièces de qualité et devis clair avant toute intervention. Dépannage urgent 7j/7, installations neuves sur rendez-vous.',
      ar: 'تشخيص دقيق وقطع غيار جيدة وعرض سعر واضح قبل أي تدخل. إصلاح طارئ طوال الأسبوع وتركيبات جديدة بموعد.',
    },
    cta: { fr: 'Demander un dépannage', ar: 'اطلبوا تدخلاً عاجلاً' },
  },
  heroImage: {
    alt: {
      fr: 'Plombier en intervention sous un évier de cuisine, pince à eau à la main, réparant un siphon en PVC blanc, lampe de travail et sac à outils au sol',
      ar: 'سباك يعمل تحت حوض مطبخ، يمسك بزردية مياه ويصلح وصلة أنابيب PVC بيضاء، مع مصباح عمل وحقيبة أدوات على الأرض',
    },
  },
  about: {
    title: { fr: 'Un plombier qui répond quand ça urge', ar: 'سباك يجيب عند الحاجة الملحة' },
    body: {
      fr: [
        'Plomberie Atlas est une petite équipe de plombiers qualifiés qui couvre Casablanca et sa périphérie, pour les pannes urgentes comme pour les chantiers planifiés.',
        'Nous expliquons toujours ce qui ne va pas, ce que ça va coûter, et combien de temps ça prendra, avant de commencer.',
      ],
      ar: [
        'سباكة الأطلس فريق صغير من السباكين المؤهلين يغطي الدار البيضاء وضواحيها، للأعطاب العاجلة والأشغال المبرمجة على حد سواء.',
        'نشرح دائماً ما هي المشكلة وكم ستكلف وكم من الوقت ستستغرق، قبل أن نبدأ أي عمل.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos interventions', ar: 'تدخلاتنا' },
  services: [
    {
      name: { fr: 'Diagnostic de fuite', ar: 'تشخيص التسريب' },
      desc: {
        fr: 'Détection précise, sans casser les murs inutilement.',
        ar: 'كشف دقيق دون تكسير الجدران بلا داعٍ.',
      },
      priceMad: 200,
    },
    {
      name: { fr: 'Débouchage de canalisation', ar: 'تسليك قنوات الصرف' },
      desc: {
        fr: 'Évier, WC, douche : furet professionnel ou haute pression.',
        ar: 'مغسلة أو مرحاض أو دوش: بالسلك اللولبي المهني أو الضغط العالي.',
      },
      priceMad: 250,
    },
    {
      name: { fr: 'Installation de chauffe-eau', ar: 'تركيب سخان الماء' },
      desc: {
        fr: 'Pose, raccordement et mise en service garantis.',
        ar: 'تركيب وربط وتشغيل مضمون.',
      },
      priceMad: 450,
    },
    {
      name: { fr: 'Rénovation de salle de bain', ar: 'تجديد الحمام' },
      desc: {
        fr: 'Robinetterie, évacuations et étanchéité refaites à neuf.',
        ar: 'تجديد كامل للحنفيات والتصريف والعزل المائي.',
      },
    },
    {
      name: { fr: 'Contrat d’entretien annuel', ar: 'عقد صيانة سنوي' },
      desc: {
        fr: 'Vérification des points sensibles avant qu’ils ne lâchent.',
        ar: 'فحص النقاط الحساسة قبل أن تتعطل.',
      },
      priceMad: 600,
    },
  ],
  highlightsTitle: { fr: 'Pourquoi nous appeler', ar: 'لماذا تتصلون بنا' },
  highlights: [
    { fr: 'Intervention sous 1h en urgence', ar: 'تدخل في أقل من ساعة للحالات العاجلة' },
    { fr: 'Devis avant travaux', ar: 'عرض سعر قبل البدء' },
    { fr: 'Pièces garanties 2 ans', ar: 'قطع مضمونة لمدة سنتين' },
    { fr: 'Disponible 7j/7', ar: 'متوفرون طوال أيام الأسبوع' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Fuite sous l’évier réparée en 40 minutes un dimanche soir. Du sérieux.',
        ar: 'تسريب تحت المغسلة تم إصلاحه في 40 دقيقة ليلة أحد. عمل جدي.',
      },
      author: { fr: 'Hicham, Aïn Diab', ar: 'هشام، عين الذئاب' },
    },
    {
      quote: {
        fr: 'Devis clair, pas de mauvaise surprise sur la facture.',
        ar: 'عرض سعر واضح، بدون مفاجآت في الفاتورة.',
      },
      author: { fr: 'Nadia, Bourgogne', ar: 'نادية، بورغون' },
    },
  ],
  contact: {
    phone: '+212 5 22 44 55 66',
    whatsapp: '212655443322',
    email: 'contact@example.com',
    address: {
      fr: '24 rue Ibnou Khaldoun, Bourgogne, Casablanca',
      ar: '24 زنقة ابن خلدون، بورغون، الدار البيضاء',
    },
    hours: {
      fr: ['Lundi – Samedi : 7h – 20h', 'Urgences : 7j/7, 24h/24'],
      ar: ['الاثنين – السبت: 7:00 – 20:00', 'الحالات العاجلة: على مدار الأسبوع والساعة'],
    },
    whatsappMessage: {
      fr: 'Bonjour, j’ai un problème de plomberie à l’adresse ... Pouvez-vous intervenir ?',
      ar: 'السلام عليكم، لدي مشكل في السباكة بالعنوان ... هل يمكنكم التدخل؟',
    },
  },
};
