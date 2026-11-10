import type { SiteContent } from '../types.ts';

export const drivingSchool: SiteContent = {
  id: 'driving-school',
  name: { fr: 'Auto-École Chemin Sûr', ar: 'مدرسة الطريق الآمن لتعليم السياقة' },
  schemaType: 'DrivingSchool',
  tagline: { fr: 'Permis B, code et conduite accompagnée', ar: 'رخصة السياقة صنف ب، والقانون والتدريب' },
  hero: {
    title: { fr: 'Votre permis, sans stress et sans surprise.', ar: 'رخصتكم، بلا توتر ولا مفاجآت.' },
    sub: {
      fr: 'Moniteurs patients, voitures récentes à double commande, planning adapté à vos horaires. Cours de code en français et en arabe, et séances d’examen blanc.',
      ar: 'مدربون صبورون وسيارات حديثة بتحكم مزدوج وجدول يلائم أوقاتكم. دروس قانون السير بالفرنسية والعربية وامتحانات تجريبية.',
    },
    cta: { fr: 'S’inscrire', ar: 'سجّلوا الآن' },
  },
  heroImage: {
    alt: {
      fr: 'Mains d’un élève sur le volant, vue depuis l’intérieur de la voiture, avec une rue résidentielle calme à travers le pare-brise',
      ar: 'يدا متعلم على المقود، من داخل السيارة، ويظهر عبر الزجاج الأمامي شارع سكني هادئ',
    },
  },
  about: {
    title: {
      fr: 'Apprendre à conduire, pas seulement à réussir l’examen',
      ar: 'تعلّم السياقة لا النجاح في الامتحان فقط',
    },
    body: {
      fr: [
        'Chemin Sûr forme des conducteurs à Rabat depuis 2003. Nos six moniteurs agréés accompagnent chaque élève jusqu’à ce qu’il soit à l’aise, pas seulement jusqu’à la date d’examen.',
        'Nos voitures sont révisées chaque mois. Les séances commencent sur circuit fermé avant de passer à la circulation réelle.',
      ],
      ar: [
        'تكوّن "الطريق الآمن" السائقين بالرباط منذ 2003. يرافق مدربونا الستة المعتمدون كل متعلم حتى يشعر بالارتياح لا حتى موعد الامتحان فقط.',
        'تُفحص سياراتنا كل شهر. تبدأ الحصص على حلبة مغلقة قبل الانتقال إلى السير الفعلي.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos formules', ar: 'صيغنا' },
  services: [
    {
      name: { fr: 'Code de la route (en salle)', ar: 'قانون السير (في القاعة)' },
      desc: {
        fr: 'Vingt heures de cours en français ou en arabe et accès aux tests en ligne.',
        ar: 'عشرون ساعة دروس بالفرنسية أو العربية مع الولوج للاختبارات على الإنترنت.',
      },
      priceMad: 600,
    },
    {
      name: { fr: 'Forfait permis B (20 heures de conduite)', ar: 'باقة رخصة ب (20 ساعة سياقة)' },
      desc: {
        fr: 'Vingt séances d’une heure, moniteur dédié, inscription à l’examen incluse.',
        ar: 'عشرون حصة بمدة ساعة مع مدرب خاص والتسجيل في الامتحان مشمول.',
      },
      priceMad: 2800,
    },
    {
      name: { fr: 'Heure de conduite supplémentaire', ar: 'ساعة سياقة إضافية' },
      desc: {
        fr: 'À la carte, selon vos besoins avant l’examen.',
        ar: 'حسب الطلب، وفق حاجتكم قبل الامتحان.',
      },
      priceMad: 140,
    },
    {
      name: { fr: 'Remise à niveau (conducteurs anxieux)', ar: 'استعادة الثقة (للسائقين القلقين)' },
      desc: {
        fr: 'Pour reprendre le volant après une longue pause ou un accident.',
        ar: 'لاستئناف السياقة بعد انقطاع طويل أو حادث.',
      },
      priceMad: 200,
    },
    {
      name: { fr: 'Examen blanc', ar: 'امتحان تجريبي' },
      desc: {
        fr: 'Simulation complète dans les conditions réelles de l’épreuve.',
        ar: 'محاكاة كاملة بظروف الامتحان الحقيقية.',
      },
      priceMad: 150,
    },
  ],
  highlightsTitle: { fr: 'Nos atouts', ar: 'ما يميزنا' },
  highlights: [
    { fr: 'Moniteurs agréés', ar: 'مدربون معتمدون' },
    { fr: 'Voitures à double commande', ar: 'سيارات بتحكم مزدوج' },
    { fr: 'Code en français et en arabe', ar: 'القانون بالفرنسية والعربية' },
    { fr: 'Planning flexible', ar: 'جدول مرن' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Je paniquais au volant. Mon moniteur a su me rassurer, et j’ai eu mon permis du premier coup.',
        ar: 'كنت أرتبك أمام المقود. طمأنني مدربي ونجحت من أول محاولة.',
      },
      author: { fr: 'Oumaima, Rabat', ar: 'أميمة، الرباط' },
    },
    {
      quote: {
        fr: 'Planning calé sur mes horaires de travail, moniteur toujours ponctuel.',
        ar: 'جدول مرتب حسب أوقات عملي ومدرب دائم الالتزام بالمواعيد.',
      },
      author: { fr: 'Khalid, Salé', ar: 'خالد، سلا' },
    },
  ],
  contact: {
    phone: '+212 5 37 65 21 43',
    whatsapp: '212666774488',
    email: 'contact@example.com',
    address: {
      fr: '8 avenue Allal Ben Abdellah, Rabat',
      ar: '8 شارع علال بن عبد الله، الرباط',
    },
    hours: {
      fr: ['Lundi – Samedi : 8h – 19h', 'Dimanche : fermé'],
      ar: ['الاثنين – السبت: 8:00 – 19:00', 'الأحد: مغلق'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je souhaite m’inscrire au permis B. Quels sont vos horaires de cours et vos tarifs ?',
      ar: 'السلام عليكم، أرغب في التسجيل لرخصة السياقة صنف ب. ما هي أوقات الدروس والأثمنة؟',
    },
  },
};
