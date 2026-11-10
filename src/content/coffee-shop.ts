import type { SiteContent } from '../types.ts';

export const coffeeShop: SiteContent = {
  id: 'coffee-shop',
  name: { fr: 'Le Grain Chaud', ar: 'الحَبّة الدافئة' },
  schemaType: 'CafeOrCoffeeShop',
  tagline: { fr: 'Café de spécialité, pâtisserie maison', ar: 'قهوة مختصة وحلويات منزلية' },
  hero: {
    title: { fr: 'Votre pause café, ralentie.', ar: 'استراحتكم مع القهوة، بلا عجلة.' },
    sub: {
      fr: 'Grains torréfiés en petites quantités, lait local, viennoiseries sorties du four chaque matin. Un coin calme pour travailler ou discuter.',
      ar: 'حبوب مُحمّصة بكميات صغيرة، وحليب محلي، ومعجنات طازجة كل صباح. ركن هادئ للعمل أو الدردشة.',
    },
    cta: { fr: 'Commander sur WhatsApp', ar: 'اطلب عبر واتساب' },
  },
  heroImage: {
    alt: {
      fr: 'Intérieur chaleureux du café avec suspensions en bois et vitrine de pâtisseries',
      ar: 'أجواء دافئة داخل المقهى مع إضاءة معلقة خشبية وواجهة للحلويات',
    },
  },
  about: {
    title: { fr: 'Un café de quartier, pas une chaîne', ar: 'مقهى الحي، لا سلسلة تجارية' },
    body: {
      fr: [
        'Le Grain Chaud a ouvert ses portes dans une ancienne droguerie du quartier, entre deux immeubles de brique. On y torréfie en petite quantité, chaque quinzaine, pour garder le café frais en tasse.',
        'Les pâtisseries sont faites sur place dès l’aube par notre boulangère, et le lait vient d’une ferme à trente minutes de la ville.',
      ],
      ar: [
        'افتتحت "الحَبّة الدافئة" أبوابها في محل عطارة قديم بالحي، بين عمارتين من الطوب. نقوم بتحميص القهوة بكميات صغيرة كل أسبوعين لتبقى طازجة في الكوب.',
        'تُحضَّر الحلويات في عين المكان منذ الفجر على يد خبازتنا، ويأتي الحليب من مزرعة تبعد ثلاثين دقيقة عن المدينة.',
      ],
    },
  },
  servicesTitle: { fr: 'La carte', ar: 'القائمة' },
  services: [
    {
      name: { fr: 'Espresso de la maison', ar: 'إسبريسو الدار' },
      desc: {
        fr: 'Mélange torréfié chaque semaine, notes de noisette et de caramel.',
        ar: 'مزيج يُحمّص أسبوعيًا بنكهات البندق والكراميل.',
      },
      priceMad: 18,
    },
    {
      name: { fr: 'Cappuccino', ar: 'كابوتشينو' },
      desc: {
        fr: 'Lait de ferme, mousse serrée, dessin latte.',
        ar: 'حليب من المزرعة، رغوة كثيفة، ورسم لاتيه.',
      },
      priceMad: 22,
    },
    {
      name: { fr: 'Café filtre (V60)', ar: 'قهوة مقطرة (V60)' },
      desc: {
        fr: 'Infusion lente, un grain différent chaque mois.',
        ar: 'تحضير بطيء، نوع حبوب مختلف كل شهر.',
      },
      priceMad: 28,
    },
    {
      name: { fr: 'Croissant au beurre maison', ar: 'كرواسون بالزبدة منزلي' },
      desc: {
        fr: 'Feuilletage de la veille, cuit à la commande.',
        ar: 'عجين مورق من اليوم السابق، يُخبز عند الطلب.',
      },
      priceMad: 15,
    },
    {
      name: { fr: 'Assiette brunch', ar: 'طبق فطور متأخر' },
      desc: {
        fr: 'Œufs, avocat, pain maison, légumes de saison.',
        ar: 'بيض وأفوكادو وخبز منزلي وخضر الموسم.',
      },
      priceMad: 55,
    },
  ],
  highlightsTitle: { fr: 'Pourquoi nous choisir', ar: 'لماذا نحن' },
  highlights: [
    { fr: 'Torréfaction artisanale', ar: 'تحميص حرفي' },
    { fr: 'Wifi gratuit', ar: 'واي فاي مجاني' },
    { fr: 'Options véganes', ar: 'خيارات نباتية صرفة' },
    { fr: 'Terrasse ensoleillée', ar: 'شرفة مشمسة' },
  ],
  testimonials: [
    {
      quote: {
        fr: 'Le meilleur café filtre de la ville, servi avec le sourire.',
        ar: 'أفضل قهوة مقطرة في المدينة، تُقدَّم بابتسامة.',
      },
      author: { fr: 'Salma, Casablanca', ar: 'سلمى، الدار البيضاء' },
    },
    {
      quote: {
        fr: 'Mon bureau du vendredi matin, sans hésiter.',
        ar: 'مكتبي صباح كل جمعة، بلا تردد.',
      },
      author: { fr: 'Adam, Rabat', ar: 'آدم، الرباط' },
    },
  ],
  contact: {
    phone: '+212 5 22 11 22 33',
    whatsapp: '212611223344',
    email: 'contact@example.com',
    address: {
      fr: '8 rue des Amandiers, Gauthier, Casablanca',
      ar: '8 زنقة اللوز، كوتييه، الدار البيضاء',
    },
    hours: {
      fr: ['Lundi – Samedi : 8h – 20h', 'Dimanche : 9h – 18h'],
      ar: ['الاثنين – السبت: 8:00 – 20:00', 'الأحد: 9:00 – 18:00'],
    },
    whatsappMessage: {
      fr: 'Bonjour, je voudrais commander ... pour ... personnes, à récupérer vers ...h.',
      ar: 'السلام عليكم، أود طلب ... لـ ... أشخاص، للاستلام على الساعة ...',
    },
  },
};
