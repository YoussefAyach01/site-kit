import type { SiteContent } from '../types.ts';

export const chiropractor: SiteContent = {
  id: 'chiropractor',
  name: { fr: 'L’Épine Droite', ar: 'العمود المستقيم' },
  schemaType: 'Chiropractic',
  tagline: {
    fr: 'Chiropraxie et alignement vertébral',
    ar: 'تقويم فقري ومحاذاة العمود الفقري',
  },
  hero: {
    title: { fr: 'Une colonne alignée, un corps apaisé.', ar: 'عمود فقري متوازن، جسد مرتاح.' },
    sub: {
      fr: 'Ajustements manuels, bilan postural et conseils ergonomiques pour soulager maux de dos, cervicalgies et sciatiques.',
      ar: 'تعديلات يدوية وفحص للوضعية ونصائح لتحسين الجلسة لتخفيف آلام الظهر والرقبة وعرق النسا.',
    },
    cta: { fr: 'Prendre rendez-vous', ar: 'احجزوا موعدكم' },
  },
  heroImage: {
    alt: {
      fr: 'Table de chiropraxie en cuir brun dans une pièce chaleureuse avec lampe allumée et bibliothèque en bois',
      ar: 'طاولة تقويم فقري بجلد بني في غرفة دافئة مع مصباح مضاء ورفوف خشبية',
    },
  },
  about: {
    title: { fr: 'Soulager la cause, pas seulement la douleur', ar: 'علاج السبب، لا الألم فقط' },
    body: {
      fr: [
        'L’Épine Droite propose des ajustements chiropratiques doux pour redonner de la mobilité à la colonne vertébrale et au bassin.',
        'Chaque suivi commence par un bilan postural complet : position assise, gestes du quotidien et antécédents, pour comprendre d’où vient réellement la tension.',
      ],
      ar: [
        'يقدّم العمود المستقيم تعديلات تقويمية لطيفة لإعادة الحركة إلى العمود الفقري والحوض.',
        'تبدأ كل متابعة بفحص شامل للوضعية: الجلوس، الحركات اليومية، والتاريخ الصحي، لفهم مصدر التوتر الحقيقي.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos soins', ar: 'علاجاتنا' },
  services: [
    {
      name: { fr: 'Consultation + bilan postural', ar: 'استشارة وفحص الوضعية' },
      desc: {
        fr: 'Analyse complète de la colonne et du bassin.',
        ar: 'تحليل شامل للعمود الفقري والحوض.',
      },
      priceMad: 350,
    },
    {
      name: { fr: 'Séance d’ajustement', ar: 'جلسة تعديل' },
      desc: {
        fr: 'Manipulation vertébrale ciblée selon le bilan.',
        ar: 'تعديل فقري موجه حسب الفحص.',
      },
      priceMad: 280,
    },
    {
      name: { fr: 'Suivi lombalgie chronique', ar: 'متابعة آلام الظهر المزمنة' },
      desc: {
        fr: 'Protocole sur plusieurs séances avec exercices à domicile.',
        ar: 'برنامج عبر عدة جلسات مع تمارين منزلية.',
      },
      priceMad: 260,
    },
    {
      name: { fr: 'Chiropraxie sportive', ar: 'تقويم فقري للرياضيين' },
      desc: {
        fr: 'Optimisation de la posture et prévention des blessures.',
        ar: 'تحسين الوضعية والوقاية من الإصابات.',
      },
      priceMad: 280,
    },
    {
      name: { fr: 'Conseil ergonomie bureau', ar: 'استشارة بيئة العمل' },
      desc: {
        fr: 'Réglages du poste de travail et habitudes posturales.',
        ar: 'ضبط مكان العمل وتصحيح عادات الجلوس.',
      },
      priceMad: 200,
    },
  ],
  highlightsTitle: { fr: 'Ce qui nous distingue', ar: 'ما يميزنا' },
  highlights: [
    { fr: 'Chiropracteur diplômé', ar: 'معالج تقويم فقري معتمد' },
    { fr: 'Bilan avant chaque traitement', ar: 'فحص قبل كل علاج' },
    { fr: 'Rendez-vous le jour même', ar: 'مواعيد في نفس اليوم' },
    { fr: 'Salle d’attente calme', ar: 'صالة انتظار هادئة' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Trois séances ont suffi pour que ma sciatique disparaisse presque totalement.',
        ar: 'كفتني ثلاث جلسات ليختفي عرق النسا عندي تقريباً.',
      },
      author: { fr: 'Rachid, Rabat', ar: 'رشيد، الرباط' },
    },
    {
      quote: {
        fr: 'Enfin un praticien qui explique chaque geste avant de le faire.',
        ar: 'أخيراً معالج يشرح كل حركة قبل القيام بها.',
      },
      author: { fr: 'Leila, Rabat', ar: 'ليلى، الرباط' },
    },
  ],
  contact: {
    phone: '+212 5 37 44 55 66',
    whatsapp: '212637445566',
    email: 'contact@example.com',
    address: {
      fr: '14 avenue Fal Ould Oumeir, Agdal, Rabat',
      ar: '14 شارع فال ولد عمير، أكدال، الرباط',
    },
    hours: {
      fr: ['Lundi – Vendredi : 9h – 18h30', 'Samedi : 9h – 13h'],
      ar: ['الاثنين – الجمعة: 9:00 – 18:30', 'السبت: 9:00 – 13:00'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je voudrais prendre rendez-vous pour une consultation le ... à ...h.',
      ar: 'السلام عليكم، أود حجز موعد للاستشارة يوم ... على الساعة ...',
    },
  },
};
