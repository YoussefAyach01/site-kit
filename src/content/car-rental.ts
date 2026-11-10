import type { SiteContent } from '../types.ts';

export const carRental: SiteContent = {
  id: 'car-rental',
  name: { fr: 'Route Libre Location', ar: 'الطريق الحر لكراء السيارات' },
  schemaType: 'AutomotiveBusiness',
  tagline: { fr: 'Location de voitures à Marrakech et Agadir', ar: 'كراء السيارات بمراكش وأكادير' },
  hero: {
    title: { fr: 'Les clés dans la main en dix minutes.', ar: 'المفاتيح في يدكم خلال عشر دقائق.' },
    sub: {
      fr: 'Citadines, berlines et SUV récents, assurance tous risques incluse, kilométrage illimité. Livraison à l’aéroport ou à votre hôtel, sans frais cachés.',
      ar: 'سيارات صغيرة وسيدان ودفع رباعي حديثة، وتأمين شامل مشمول وكيلومترات غير محدودة. تسليم بالمطار أو الفندق دون تكاليف خفية.',
    },
    cta: { fr: 'Réserver une voiture', ar: 'احجزوا سيارة' },
  },
  heroImage: {
    alt: {
      fr: 'Main tenant une clé de voiture devant une rangée de voitures propres garées sur un parking au coucher du soleil',
      ar: 'يد تمسك مفتاح سيارة أمام صف من السيارات النظيفة المصطفة في موقف وقت الغروب',
    },
  },
  about: {
    title: { fr: 'Une agence locale, des prix clairs', ar: 'وكالة محلية وأثمنة واضحة' },
    body: {
      fr: [
        'Route Libre est une agence familiale installée à Marrakech depuis 2011. Notre flotte de quarante véhicules a moins de trois ans, révisée avant chaque location.',
        'Le prix annoncé est le prix payé : assurance, kilométrage et second conducteur sont inclus. Caution restituée à la reprise du véhicule.',
      ],
      ar: [
        '"الطريق الحر" وكالة عائلية بمراكش منذ 2011. أسطولنا من أربعين سيارة عمرها أقل من ثلاث سنوات، تُفحص قبل كل كراء.',
        'السعر المعلن هو السعر المدفوع: التأمين والكيلومترات والسائق الثاني مشمولة. تُرد الضمانة عند إرجاع السيارة.',
      ],
    },
  },
  servicesTitle: { fr: 'Notre flotte, prix par jour', ar: 'أسطولنا، الثمن لليوم' },
  services: [
    {
      name: { fr: 'Citadine (Dacia Sandero, Peugeot 208)', ar: 'سيارة صغيرة (داسيا ساندرو، بيجو 208)' },
      desc: {
        fr: 'Économique, climatisée, cinq places.',
        ar: 'اقتصادية ومكيّفة بخمسة مقاعد.',
      },
      priceMad: 300,
    },
    {
      name: { fr: 'Berline (Renault Clio, VW Golf)', ar: 'سيدان (رونو كليو، فولكسفاغن غولف)' },
      desc: {
        fr: 'Plus d’espace pour les longs trajets.',
        ar: 'مساحة أكبر للرحلات الطويلة.',
      },
      priceMad: 400,
    },
    {
      name: { fr: 'SUV 5 places (Hyundai Tucson)', ar: 'سيارة دفع رباعي بخمسة مقاعد (هيونداي توسان)' },
      desc: {
        fr: 'Idéal pour la route de l’Atlas et le désert.',
        ar: 'مثالية لطريق الأطلس والصحراء.',
      },
      priceMad: 650,
    },
    {
      name: { fr: 'Livraison aéroport ou hôtel', ar: 'التسليم بالمطار أو الفندق' },
      desc: {
        fr: 'Votre voiture vous attend à l’arrivée, sur Marrakech et Agadir.',
        ar: 'تنتظركم سيارتكم عند الوصول بمراكش وأكادير.',
      },
      priceMad: 100,
    },
    {
      name: { fr: 'Location longue durée (mensuelle)', ar: 'كراء طويل الأمد (شهري)' },
      desc: {
        fr: 'Tarif dégressif dès sept jours, devis sur demande.',
        ar: 'ثمن تنازلي ابتداءً من سبعة أيام، عرض سعر عند الطلب.',
      },
    },
  ],
  highlightsTitle: { fr: 'Inclus dans chaque location', ar: 'مشمول في كل كراء' },
  highlights: [
    { fr: 'Assurance tous risques', ar: 'تأمين شامل' },
    { fr: 'Kilométrage illimité', ar: 'كيلومترات غير محدودة' },
    { fr: 'Second conducteur offert', ar: 'سائق ثانٍ مجاني' },
    { fr: 'Assistance 24 h/24', ar: 'مساعدة طيلة اليوم' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Voiture récente livrée à l’aéroport, restitution en cinq minutes. Aucune surprise sur la facture.',
        ar: 'سيارة حديثة سُلّمت بالمطار وأُرجعت في خمس دقائق. لا مفاجآت في الفاتورة.',
      },
      author: { fr: 'Claire, visiteuse de France', ar: 'كلير، زائرة من فرنسا' },
    },
    {
      quote: {
        fr: 'Pneu crevé en pleine montagne : ils ont envoyé de l’aide en une heure.',
        ar: 'انفجر إطار في الجبل، فأرسلوا المساعدة خلال ساعة.',
      },
      author: { fr: 'Marc, Belgique', ar: 'مارك، بلجيكا' },
    },
  ],
  contact: {
    phone: '+212 5 24 44 33 22',
    whatsapp: '212644552266',
    email: 'contact@example.com',
    address: {
      fr: 'Avenue Mohammed VI, Marrakech',
      ar: 'شارع محمد السادس، مراكش',
    },
    hours: {
      fr: ['Tous les jours : 8h – 21h', 'Retours de nuit sur demande'],
      ar: ['كل أيام الأسبوع: 8:00 – 21:00', 'الإرجاع ليلًا عند الطلب'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je souhaite louer une voiture du ... au ..., livraison à ... Quels sont vos tarifs ?',
      ar: 'السلام عليكم، أرغب في كراء سيارة من ... إلى ... مع التسليم في ... ما هي أثمنتكم؟',
    },
  },
};
