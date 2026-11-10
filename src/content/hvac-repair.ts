import type { SiteContent } from '../types.ts';

export const hvacRepair: SiteContent = {
  id: 'hvac-repair',
  name: { fr: 'Froid Express Atlas', ar: 'أطلس للتبريد السريع' },
  schemaType: 'HVACBusiness',
  tagline: { fr: 'Climatisation, chauffage, dépannage rapide', ar: 'تكييف وتدفئة وإصلاح سريع' },
  hero: {
    title: { fr: 'Votre clim tombe en panne ? On arrive.', ar: 'تعطّل مكيّفكم؟ نحن في الطريق.' },
    sub: {
      fr: 'Diagnostic sur place, pièces d’origine, intervention le jour même dans toute l’agglomération. Un devis clair avant de toucher à quoi que ce soit.',
      ar: 'تشخيص في عين المكان، وقطع غيار أصلية، وتدخّل في اليوم نفسه بكل أنحاء المدينة. عرض سعر واضح قبل أي عمل.',
    },
    cta: { fr: 'Demander un dépannage', ar: 'اطلبوا تدخّلاً عاجلاً' },
  },
  heroImage: {
    alt: {
      fr: 'Technicien en combinaison bleue réparant le câblage d’un groupe extérieur de climatisation avec un tournevis',
      ar: 'تقني بزيّ أزرق يصلح أسلاك وحدة تكييف خارجية بمفك براغي',
    },
  },
  about: {
    title: { fr: 'Des techniciens, pas des vendeurs', ar: 'تقنيون محترفون لا بائعون' },
    body: {
      fr: [
        'Froid Express Atlas est une équipe de quatre techniciens frigoristes formés à Casablanca, avec plus de quinze ans de terrain sur les splits, les gainables et les chaudières murales.',
        'Nous réparons avant de remplacer : si votre appareil a encore des années devant lui, on vous le dit et on le remet en marche.',
      ],
      ar: [
        '"أطلس للتبريد السريع" فريق من أربعة تقنيين متخصصين في التبريد تكوّنوا في الدار البيضاء، بخبرة تفوق خمس عشرة سنة في المكيّفات الجدارية والمركزية والمدافئ.',
        'نُصلح قبل أن نستبدل: إذا كان جهازكم قادرًا على العمل لسنوات أخرى، نخبركم بذلك ونعيده إلى العمل.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos interventions', ar: 'خدماتنا' },
  services: [
    {
      name: { fr: 'Diagnostic de panne', ar: 'تشخيص العطل' },
      desc: {
        fr: 'Déplacement et recherche de la cause, déduits de la réparation si vous acceptez.',
        ar: 'تنقّل وبحث عن سبب العطل، يُخصم من الإصلاح إذا وافقتم عليه.',
      },
      priceMad: 150,
    },
    {
      name: { fr: 'Recharge de gaz', ar: 'تعبئة الغاز' },
      desc: {
        fr: 'Contrôle d’étanchéité puis recharge du fluide frigorigène.',
        ar: 'فحص التسرّب ثم إعادة تعبئة سائل التبريد.',
      },
      priceMad: 450,
    },
    {
      name: { fr: 'Entretien annuel d’un split', ar: 'صيانة سنوية لمكيّف جداري' },
      desc: {
        fr: 'Nettoyage des filtres, de l’évaporateur et du groupe extérieur.',
        ar: 'تنظيف المرشّحات والمبخّر والوحدة الخارجية.',
      },
      priceMad: 350,
    },
    {
      name: { fr: 'Installation d’un split', ar: 'تركيب مكيّف جداري' },
      desc: {
        fr: 'Pose, liaison frigorifique jusqu’à 4 m et mise en service.',
        ar: 'تركيب ووصلة تبريد حتى 4 أمتار وتشغيل الجهاز.',
      },
      priceMad: 1200,
    },
    {
      name: { fr: 'Climatisation gainable', ar: 'تكييف مركزي بقنوات' },
      desc: {
        fr: 'Étude, fourniture et pose pour villa ou local commercial.',
        ar: 'دراسة وتوريد وتركيب لفيلا أو محل تجاري.',
      },
    },
  ],
  highlightsTitle: { fr: 'Pourquoi nous choisir', ar: 'لماذا نحن' },
  highlights: [
    { fr: 'Intervention le jour même', ar: 'تدخّل في اليوم نفسه' },
    { fr: 'Devis avant travaux', ar: 'عرض سعر قبل العمل' },
    { fr: 'Pièces garanties 6 mois', ar: 'قطع مضمونة 6 أشهر' },
    { fr: 'Toutes marques', ar: 'جميع العلامات' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Clim en panne un dimanche de canicule, réparée en deux heures. Prix annoncé, prix payé.',
        ar: 'تعطّل المكيّف يوم أحد حارّ، وأُصلح خلال ساعتين. السعر المعلن هو السعر المدفوع.',
      },
      author: { fr: 'Karim, Casablanca', ar: 'كريم، الدار البيضاء' },
    },
    {
      quote: {
        fr: 'Ils m’ont déconseillé de remplacer mon appareil et l’ont réparé. Honnêtes.',
        ar: 'نصحوني بعدم استبدال جهازي وأصلحوه. أناس صادقون.',
      },
      author: { fr: 'Nadia, Mohammedia', ar: 'نادية، المحمدية' },
    },
  ],
  contact: {
    phone: '+212 5 22 44 55 66',
    whatsapp: '212644556677',
    email: 'contact@example.com',
    address: {
      fr: '27 boulevard Ghandi, Maârif, Casablanca',
      ar: '27 شارع غاندي، المعاريف، الدار البيضاء',
    },
    hours: {
      fr: ['Lundi – Samedi : 8h – 19h', 'Urgences : 7j/7'],
      ar: ['الاثنين – السبت: 8:00 – 19:00', 'الطوارئ: طيلة أيام الأسبوع'],
    },
    whatsappMessage: {
      fr: 'Bonjour, ma climatisation (marque ...) ne fonctionne plus. Pouvez-vous passer à ... ?',
      ar: 'السلام عليكم، مكيّفي (ماركة ...) لا يعمل. هل يمكنكم المجيء إلى ... ؟',
    },
  },
};
