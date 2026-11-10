import type { SiteContent } from '../types.ts';

export const autoRepairShop: SiteContent = {
  id: 'auto-repair-shop',
  name: { fr: 'Garage Mécanique Bouazza', ar: 'مرآب بوعزة للميكانيك' },
  schemaType: 'AutoRepair',
  tagline: { fr: 'Mécanique, vidange, diagnostic électronique', ar: 'ميكانيك وتغيير الزيت وتشخيص إلكتروني' },
  hero: {
    title: { fr: 'On vous montre la panne avant de la réparer.', ar: 'نريكم العطل قبل أن نصلحه.' },
    sub: {
      fr: 'Diagnostic électronique, freins, distribution, climatisation. Devis détaillé par écrit, anciennes pièces rendues sur demande, voiture prête au jour annoncé.',
      ar: 'تشخيص إلكتروني وفرامل ونظام التوقيت وتكييف. عرض سعر مفصل كتابةً، وإرجاع القطع القديمة عند الطلب، وسيارة جاهزة في الموعد المعلن.',
    },
    cta: { fr: 'Prendre rendez-vous', ar: 'احجزوا موعدًا' },
  },
  heroImage: {
    alt: {
      fr: 'Mécanicien penché sous le capot ouvert d’une voiture dans un atelier clair, avec un chariot d’outils rouge au premier plan',
      ar: 'ميكانيكي منحنٍ تحت غطاء محرك سيارة مفتوح داخل ورشة مضيئة، وأمامه عربة أدوات حمراء',
    },
  },
  about: {
    title: { fr: 'Un garage de quartier depuis 1996', ar: 'مرآب حيّ منذ 1996' },
    body: {
      fr: [
        'Le Garage Bouazza est tenu par deux frères mécaniciens, formés chez des constructeurs et installés à Casablanca depuis près de trente ans. Six techniciens travaillent dans nos deux ponts et notre fosse.',
        'Nous préférons réparer proprement une pièce qui peut l’être plutôt que de vous faire changer tout un ensemble.',
      ],
      ar: [
        'يدير مرآب بوعزة أخوان ميكانيكيان تكوّنا لدى مصنّعي سيارات واستقرا بالدار البيضاء منذ قرابة ثلاثين سنة. يعمل ستة تقنيين على رافعتين وحفرة صيانة.',
        'نفضّل إصلاح قطعة صالحة للإصلاح على أن نجعلكم تبدلون مجموعة كاملة.',
      ],
    },
  },
  servicesTitle: { fr: 'Nos prestations', ar: 'خدماتنا' },
  services: [
    {
      name: { fr: 'Vidange complète', ar: 'تغيير زيت كامل' },
      desc: {
        fr: 'Huile 5W-30, filtre à huile et contrôle de 20 points.',
        ar: 'زيت 5W-30 ومرشّح زيت وفحص من 20 نقطة.',
      },
      priceMad: 450,
    },
    {
      name: { fr: 'Diagnostic électronique', ar: 'تشخيص إلكتروني' },
      desc: {
        fr: 'Lecture des codes défaut et rapport imprimé.',
        ar: 'قراءة رموز الأعطال وتقرير مطبوع.',
      },
      priceMad: 200,
    },
    {
      name: { fr: 'Freins avant (plaquettes et disques)', ar: 'فرامل أمامية (صفائح وأقراص)' },
      desc: {
        fr: 'Pièces de marque, main-d’œuvre incluse, garantie 12 mois.',
        ar: 'قطع من علامات معروفة مع اليد العاملة وضمان 12 شهرًا.',
      },
      priceMad: 1100,
    },
    {
      name: { fr: 'Kit de distribution', ar: 'طقم سير التوقيت' },
      desc: {
        fr: 'Courroie, galets et pompe à eau, devis selon le véhicule.',
        ar: 'سير وبكرات ومضخة ماء، عرض سعر حسب السيارة.',
      },
    },
    {
      name: { fr: 'Contrôle avant contrôle technique', ar: 'فحص قبل المراقبة التقنية' },
      desc: {
        fr: 'Nous vérifions les points qui font échouer la visite, avant que vous n’y alliez.',
        ar: 'نتحقق من النقاط التي تُسقط الفحص قبل ذهابكم إليه.',
      },
      priceMad: 150,
    },
  ],
  highlightsTitle: { fr: 'Nos engagements', ar: 'التزاماتنا' },
  highlights: [
    { fr: 'Devis écrit détaillé', ar: 'عرض سعر مفصل مكتوب' },
    { fr: 'Pièces anciennes rendues', ar: 'إرجاع القطع القديمة' },
    { fr: 'Garantie 12 mois', ar: 'ضمان 12 شهرًا' },
    { fr: 'Voiture de courtoisie', ar: 'سيارة بديلة' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'On m’a montré la pièce usée avant de la changer. Devis respecté au dirham près.',
        ar: 'أروني القطعة المهترئة قبل تغييرها. احترموا العرض حتى الدرهم الأخير.',
      },
      author: { fr: 'Said, Casablanca', ar: 'سعيد، الدار البيضاء' },
    },
    {
      quote: {
        fr: 'Ils ont trouvé la panne que deux autres garages n’avaient pas vue.',
        ar: 'وجدوا العطل الذي لم يلاحظه مرآبان آخران.',
      },
      author: { fr: 'Ilham, Berrechid', ar: 'إلهام، برشيد' },
    },
  ],
  contact: {
    phone: '+212 5 22 61 54 70',
    whatsapp: '212622330044',
    email: 'contact@example.com',
    address: {
      fr: 'Zone industrielle Sidi Bernoussi, lot 42, Casablanca',
      ar: 'المنطقة الصناعية سيدي البرنوصي، بقعة 42، الدار البيضاء',
    },
    hours: {
      fr: ['Lundi – Samedi : 8h – 18h', 'Dimanche : fermé'],
      ar: ['الاثنين – السبت: 8:00 – 18:00', 'الأحد: مغلق'],
    },
    whatsappMessage: {
      fr: 'Bonjour, ma voiture (... année ...) a un problème de ... Quand puis-je la déposer ?',
      ar: 'السلام عليكم، سيارتي (... موديل ...) بها مشكل في ... متى يمكنني إحضارها؟',
    },
  },
};
