import type { SiteContent } from '../types.ts';
import { restaurant } from './restaurant.ts';
import { barber } from './barber.ts';
import { dentist } from './dentist.ts';
import { gym } from './gym.ts';

// Food & Hospitality
import { coffeeShop } from './coffee-shop.ts';
import { bakery } from './bakery.ts';
import { pizzeria } from './pizzeria.ts';
import { foodTruck } from './food-truck.ts';
import { catering } from './catering.ts';
import { boutiqueHotel } from './boutique-hotel.ts';

// Medical
import { familyClinic } from './family-clinic.ts';
import { urgentCare } from './urgent-care.ts';
import { hospital } from './hospital.ts';
import { pediatrician } from './pediatrician.ts';
import { dermatologyClinic } from './dermatology-clinic.ts';
import { orthodontist } from './orthodontist.ts';
import { optometrist } from './optometrist.ts';
import { veterinaryClinic } from './veterinary-clinic.ts';
import { obGynClinic } from './ob-gyn-clinic.ts';

// Wellness & Beauty Services
import { physiotherapist } from './physiotherapist.ts';
import { chiropractor } from './chiropractor.ts';
import { nutritionist } from './nutritionist.ts';
import { yogaStudio } from './yoga-studio.ts';
import { massageSpa } from './massage-spa.ts';
import { hairSalon } from './hair-salon.ts';
import { nailStudio } from './nail-studio.ts';
import { tattooStudio } from './tattoo-studio.ts';
import { medspa } from './medspa.ts';

// Home & Trades
import { plumber } from './plumber.ts';
import { electrician } from './electrician.ts';
import { landscaping } from './landscaping.ts';
import { interiorDesigner } from './interior-designer.ts';
import { painterDecorator } from './painter-decorator.ts';
import { movingCompany } from './moving-company.ts';
import { cleaningService } from './cleaning-service.ts';
import { hvacRepair } from './hvac-repair.ts';

// Professional Services
import { lawFirm } from './law-firm.ts';
import { accountingFirm } from './accounting-firm.ts';
import { realEstateAgency } from './real-estate-agency.ts';
import { architectureStudio } from './architecture-studio.ts';
import { insuranceBroker } from './insurance-broker.ts';
import { notary } from './notary.ts';

// Retail & Commerce
import { clothingBoutique } from './clothing-boutique.ts';
import { skincareStore } from './skincare-store.ts';
import { makeupStore } from './makeup-store.ts';
import { florist } from './florist.ts';
import { bookstore } from './bookstore.ts';
import { petStore } from './pet-store.ts';
import { jewelryStore } from './jewelry-store.ts';
import { eyewearStore } from './eyewear-store.ts';
import { shoeStore } from './shoe-store.ts';
import { furnitureStore } from './furniture-store.ts';
import { sportingGoodsStore } from './sporting-goods-store.ts';

// Automotive
import { autoRepairShop } from './auto-repair-shop.ts';
import { carDetailing } from './car-detailing.ts';
import { carRental } from './car-rental.ts';
import { usedCarDealership } from './used-car-dealership.ts';

export const TEMPLATES: readonly SiteContent[] = [
  // Original templates
  restaurant,
  barber,
  dentist,
  gym,
  // Food & Hospitality
  coffeeShop,
  bakery,
  pizzeria,
  foodTruck,
  catering,
  boutiqueHotel,
  // Medical
  familyClinic,
  urgentCare,
  hospital,
  pediatrician,
  dermatologyClinic,
  orthodontist,
  optometrist,
  veterinaryClinic,
  obGynClinic,
  // Wellness & Beauty Services
  physiotherapist,
  chiropractor,
  nutritionist,
  yogaStudio,
  massageSpa,
  hairSalon,
  nailStudio,
  tattooStudio,
  medspa,
  // Home & Trades
  plumber,
  electrician,
  landscaping,
  interiorDesigner,
  painterDecorator,
  movingCompany,
  cleaningService,
  hvacRepair,
  // Professional Services
  lawFirm,
  accountingFirm,
  realEstateAgency,
  architectureStudio,
  insuranceBroker,
  notary,
  // Retail & Commerce
  clothingBoutique,
  skincareStore,
  makeupStore,
  florist,
  bookstore,
  petStore,
  jewelryStore,
  eyewearStore,
  shoeStore,
  furnitureStore,
  sportingGoodsStore,
  // Automotive
  autoRepairShop,
  carDetailing,
  carRental,
  usedCarDealership,
];
