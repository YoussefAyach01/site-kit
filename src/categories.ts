import type { Localized, TemplateId } from './types.ts';

export interface Category {
  id: string;
  name: Localized<string>;
  /** Template ids in display order. Every template must appear in exactly one category (tests enforce this). */
  ids: readonly TemplateId[];
}

/** How the index page groups the demos. Kept separate from the content files so a niche can move without touching its copy. */
export const CATEGORIES: readonly Category[] = [
  {
    id: 'food',
    name: { fr: 'Restauration & hôtellerie', ar: 'المطاعم والضيافة' },
    ids: ['restaurant', 'coffee-shop', 'bakery', 'pizzeria', 'food-truck', 'catering', 'boutique-hotel'],
  },
  {
    id: 'health',
    name: { fr: 'Santé', ar: 'الصحة' },
    ids: [
      'dentist',
      'family-clinic',
      'urgent-care',
      'hospital',
      'pediatrician',
      'dermatology-clinic',
      'orthodontist',
      'optometrist',
      'veterinary-clinic',
      'ob-gyn-clinic',
    ],
  },
  {
    id: 'wellness',
    name: { fr: 'Bien-être & beauté', ar: 'العافية والجمال' },
    ids: [
      'gym',
      'barber',
      'physiotherapist',
      'chiropractor',
      'nutritionist',
      'yoga-studio',
      'massage-spa',
      'hair-salon',
      'nail-studio',
      'tattoo-studio',
      'medspa',
    ],
  },
  {
    id: 'home',
    name: { fr: 'Maison & artisans', ar: 'المنزل والحرفيون' },
    ids: [
      'plumber',
      'electrician',
      'landscaping',
      'interior-designer',
      'painter-decorator',
      'moving-company',
      'cleaning-service',
      'hvac-repair',
    ],
  },
  {
    id: 'professional',
    name: { fr: 'Services professionnels', ar: 'الخدمات المهنية' },
    ids: [
      'law-firm',
      'accounting-firm',
      'real-estate-agency',
      'architecture-studio',
      'insurance-broker',
      'notary',
    ],
  },
  {
    id: 'retail',
    name: { fr: 'Commerce', ar: 'التجارة' },
    ids: [
      'clothing-boutique',
      'skincare-store',
      'makeup-store',
      'florist',
      'bookstore',
      'pet-store',
      'jewelry-store',
      'eyewear-store',
      'shoe-store',
      'furniture-store',
      'sporting-goods-store',
    ],
  },
  {
    id: 'auto',
    name: { fr: 'Automobile', ar: 'السيارات' },
    ids: ['auto-repair-shop', 'car-detailing', 'car-rental', 'used-car-dealership'],
  },
  {
    id: 'education',
    name: { fr: 'Éducation & création', ar: 'التعليم والإبداع' },
    ids: ['driving-school', 'music-school', 'photography-studio'],
  },
];
