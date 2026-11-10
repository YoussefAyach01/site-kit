import type { SiteContent } from '../types.ts';

export const urgentCare: SiteContent = {
  id: 'urgent-care',
  name: { fr: 'Centre Atlas Soins Immédiats', ar: 'مركز أطلس للعناية الفورية' },
  schemaType: 'MedicalClinic',
  tagline: { fr: 'Consultations sans rendez-vous, 7j/7', ar: 'استشارات بدون موعد، طوال أيام الأسبوع' },
  hero: {
    title: {
      fr: 'Besoin d’être vu aujourd’hui ? Passez, c’est ouvert.',
      ar: 'تحتاجون لطبيب اليوم؟ تفضلوا، نحن هنا.',
    },
    sub: {
      fr: 'Blessures légères, fièvre, douleurs soudaines : une équipe médicale vous reçoit sans rendez-vous, avec radiologie et analyses sur place.',
      ar: 'إصابات خفيفة، حمى، آلام مفاجئة: فريق طبي يستقبلكم بدون موعد، مع أشعة وتحاليل في نفس المكان.',
    },
    cta: { fr: 'Contacter sur WhatsApp', ar: 'تواصلوا عبر واتساب' },
  },
  heroImage: {
    alt: {
      fr: 'Salle de soins moderne avec cabine d’examen vert sauge et équipement médical mobile',
      ar: 'غرفة عناية عصرية بمقصورة فحص خضراء هادئة وتجهيزات طبية متنقلة',
    },
  },
  about: {
    title: {
      fr: 'Pensé pour les urgences qui n’en sont pas tout à fait',
      ar: 'مُصمَّم للحالات المستعجلة التي لا تستدعي المستشفى',
    },
    body: {
      fr: [
        'Le Centre Atlas accueille sans rendez-vous les soucis de santé qui ne peuvent pas attendre une semaine, mais qui ne justifient pas forcément les urgences hospitalières.',
        'Médecins généralistes, infirmiers et plateau technique léger (radio, analyses) sont réunis sur place pour un diagnostic rapide, dans un cadre calme et clair.',
      ],
      ar: [
        'يستقبل مركز أطلس بدون موعد المشاكل الصحية التي لا تحتمل الانتظار أسبوعاً، لكنها لا تستدعي بالضرورة مستعجلات المستشفى.',
        'أطباء عامون وممرضون وتجهيزات طبية خفيفة (أشعة وتحاليل) مجتمعون في نفس المكان لتشخيص سريع، في أجواء هادئة وواضحة.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos soins', ar: 'خدماتنا' },
  services: [
    {
      name: { fr: 'Consultation sans rendez-vous', ar: 'استشارة بدون موعد' },
      desc: {
        fr: 'Fièvre, douleurs, infections, prise en charge rapide.',
        ar: 'حمى، آلام، التهابات، تكفل سريع.',
      },
      priceMad: 250,
    },
    {
      name: { fr: 'Suture de plaie', ar: 'خياطة الجروح' },
      desc: {
        fr: 'Nettoyage, points de suture et pansement.',
        ar: 'تنظيف الجرح، غرز الخياطة، وتضميد.',
      },
      priceMad: 350,
    },
    {
      name: { fr: 'Radiographie', ar: 'تصوير بالأشعة' },
      desc: {
        fr: 'Entorses et fractures suspectées, lecture immédiate.',
        ar: 'الالتواءات والكسور المحتملة، مع قراءة فورية.',
      },
      priceMad: 300,
    },
    {
      name: { fr: 'Analyses express', ar: 'تحاليل سريعة' },
      desc: {
        fr: 'Prélèvements courants, résultats en moins d’une heure.',
        ar: 'أخذ العينات الشائعة ونتائج في أقل من ساعة.',
      },
      priceMad: 200,
    },
    {
      name: { fr: 'Soins et pansements', ar: 'عناية وتضميد' },
      desc: {
        fr: 'Brûlures légères, entorses, suivi de plaie.',
        ar: 'حروق خفيفة، التواءات، متابعة الجروح.',
      },
      priceMad: 150,
    },
  ],
  highlightsTitle: { fr: 'Pourquoi venir ici', ar: 'لماذا تختارون المركز' },
  highlights: [
    { fr: 'Ouvert 7j/7, jusqu’à 22h', ar: 'مفتوح 7 أيام على 7 حتى 22:00' },
    { fr: 'Radiologie sur place', ar: 'أشعة في نفس المكان' },
    { fr: 'Sans rendez-vous', ar: 'بدون موعد مسبق' },
    { fr: 'Paiement par carte accepté', ar: 'الأداء بالبطاقة البنكية متاح' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Mon fils s’est blessé un dimanche soir, on a été pris en charge en vingt minutes.',
        ar: 'تأذى ابني مساء يوم أحد، وتم التكفل بنا في عشرين دقيقة.',
      },
      author: { fr: 'Younes, Rabat', ar: 'يونس، الرباط' },
    },
    {
      quote: {
        fr: 'Pas besoin d’aller aux urgences de l’hôpital pour une simple entorse.',
        ar: 'لا حاجة للذهاب لمستعجلات المستشفى من أجل التواء بسيط.',
      },
      author: { fr: 'Ilham, Rabat', ar: 'إلهام، الرباط' },
    },
  ],
  contact: {
    phone: '+212 5 37 70 80 90',
    whatsapp: '212637708090',
    email: 'contact@example.com',
    address: {
      fr: '45 avenue Ibn Sina, Agdal, Rabat',
      ar: '45 شارع ابن سينا، أكدال، الرباط',
    },
    hours: {
      fr: ['Tous les jours : 8h – 22h'],
      ar: ['كل أيام الأسبوع: 8:00 – 22:00'],
    },
    whatsappMessage: {
      fr: 'Bonjour, nous arrivons pour une consultation sans rendez-vous, nous sommes ... personne(s).',
      ar: 'السلام عليكم، سنصل لاستشارة بدون موعد، نحن ... شخص/أشخاص.',
    },
  },
};
