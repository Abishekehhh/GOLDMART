// Mock data for Gold Jewellery Marketplace

import jewelleryNecklace from '@/assets/jewellery-necklace.jpg';
import jewelleryBangles from '@/assets/jewellery-bangles.jpg';
import jewelleryEarrings from '@/assets/jewellery-earrings.jpg';
import jewelleryChain from '@/assets/jewellery-chain.jpg';
import jewelleryRing from '@/assets/jewellery-ring.jpg';
import jewelleryBracelet from '@/assets/jewellery-bracelet.jpg';
import jewelleryPendant from '@/assets/jewellery-pendant.jpg';
import shopInterior from '@/assets/shop-interior.jpg';

export interface Shop {
  id: string;
  name: string;
  location: string;
  description: string;
  rating: number;
  image: string;
  phone: string;
  email: string;
}

export interface Jewellery {
  id: string;
  name: string;
  category: 'Ring' | 'Necklace' | 'Chain' | 'Bracelet' | 'Earrings' | 'Pendant' | 'Bangle';
  weight: number;
  pricePerGram: number;
  makingCharge: number;
  totalPrice: number;
  image: string;
  images: string[];
  shopId: string;
  shopName: string;
  description: string;
  purity: string;
  isSpecialOffer: boolean;
  discount?: number;
}

export interface GoldRate {
  purity: string;
  rate: number;
  change: number;
}

export const goldRates: GoldRate[] = [
  { purity: '24K Gold', rate: 6250, change: 50 },
  { purity: '22K Gold', rate: 5730, change: 45 },
  { purity: '18K Gold', rate: 4690, change: 35 },
  { purity: '14K Gold', rate: 3650, change: 28 },
];

export const shops: Shop[] = [
  {
    id: 'shop-1',
    name: 'Lakshmi Jewellers',
    location: 'T. Nagar, Chennai',
    description: 'Established in 1965, Lakshmi Jewellers is known for traditional South Indian gold jewellery with exquisite craftsmanship passed down through generations.',
    rating: 4.8,
    image: shopInterior,
    phone: '+91 98765 43210',
    email: 'contact@lakshmijewellers.com',
  },
  {
    id: 'shop-2',
    name: 'Krishna Gold House',
    location: 'Pondy Bazaar, Chennai',
    description: 'Specializing in antique and temple jewellery, Krishna Gold House offers unique pieces that blend tradition with modern aesthetics.',
    rating: 4.6,
    image: shopInterior,
    phone: '+91 98765 43211',
    email: 'info@krishnagold.com',
  },
  {
    id: 'shop-3',
    name: 'Radha Gold Palace',
    location: 'Anna Nagar, Chennai',
    description: 'A family-owned business offering contemporary gold designs with a focus on bridal collections and custom orders.',
    rating: 4.7,
    image: shopInterior,
    phone: '+91 98765 43212',
    email: 'radha@goldpalace.com',
  },
  {
    id: 'shop-4',
    name: 'Meena Jewellery Mart',
    location: 'Mylapore, Chennai',
    description: 'Known for lightweight daily wear gold jewellery at competitive prices. Perfect for everyday elegance.',
    rating: 4.5,
    image: shopInterior,
    phone: '+91 98765 43213',
    email: 'meena@jewellerymart.com',
  },
];

export const jewelleryItems: Jewellery[] = [
  {
    id: 'jwl-1',
    name: 'Traditional Temple Necklace',
    category: 'Necklace',
    weight: 45,
    pricePerGram: 5730,
    makingCharge: 25850,
    totalPrice: 283700,
    image: jewelleryNecklace,
    images: [jewelleryNecklace, jewelleryNecklace, jewelleryNecklace],
    shopId: 'shop-1',
    shopName: 'Lakshmi Jewellers',
    description: 'A magnificent temple necklace featuring intricate Lakshmi motifs and traditional South Indian craftsmanship. Perfect for weddings and special occasions.',
    purity: '22K',
    isSpecialOffer: true,
    discount: 10,
  },
  {
    id: 'jwl-2',
    name: 'Diamond Cut Gold Bangle Set',
    category: 'Bangle',
    weight: 32,
    pricePerGram: 5730,
    makingCharge: 18400,
    totalPrice: 201760,
    image: jewelleryBangles,
    images: [jewelleryBangles, jewelleryBangles],
    shopId: 'shop-1',
    shopName: 'Lakshmi Jewellers',
    description: 'Set of 4 elegant diamond-cut bangles with a stunning shimmer effect. Lightweight and comfortable for daily wear.',
    purity: '22K',
    isSpecialOffer: false,
  },
  {
    id: 'jwl-3',
    name: 'Antique Peacock Jhumkas',
    category: 'Earrings',
    weight: 18,
    pricePerGram: 5730,
    makingCharge: 12500,
    totalPrice: 115640,
    image: jewelleryEarrings,
    images: [jewelleryEarrings, jewelleryEarrings],
    shopId: 'shop-2',
    shopName: 'Krishna Gold House',
    description: 'Exquisite antique-finish jhumkas with peacock design and hanging pearl drops. A statement piece for traditional attire.',
    purity: '22K',
    isSpecialOffer: true,
    discount: 15,
  },
  {
    id: 'jwl-4',
    name: 'Bridal Choker Set',
    category: 'Necklace',
    weight: 65,
    pricePerGram: 5730,
    makingCharge: 45000,
    totalPrice: 417450,
    image: jewelleryNecklace,
    images: [jewelleryNecklace, jewelleryNecklace, jewelleryNecklace],
    shopId: 'shop-3',
    shopName: 'Radha Gold Palace',
    description: 'Complete bridal choker set with matching earrings. Features ruby and emerald stones set in intricate gold work.',
    purity: '22K',
    isSpecialOffer: false,
  },
  {
    id: 'jwl-5',
    name: 'Twisted Rope Chain',
    category: 'Chain',
    weight: 12,
    pricePerGram: 5730,
    makingCharge: 6800,
    totalPrice: 75560,
    image: jewelleryChain,
    images: [jewelleryChain],
    shopId: 'shop-4',
    shopName: 'Meena Jewellery Mart',
    description: 'Classic twisted rope design chain perfect for daily wear. Lightweight and durable.',
    purity: '22K',
    isSpecialOffer: false,
  },
  {
    id: 'jwl-6',
    name: 'Solitaire Gold Ring',
    category: 'Ring',
    weight: 4.5,
    pricePerGram: 5730,
    makingCharge: 3500,
    totalPrice: 29285,
    image: jewelleryRing,
    images: [jewelleryRing],
    shopId: 'shop-2',
    shopName: 'Krishna Gold House',
    description: 'Elegant solitaire-style ring with a raised setting. Perfect for engagements or as a gift.',
    purity: '22K',
    isSpecialOffer: true,
    discount: 5,
  },
  {
    id: 'jwl-7',
    name: 'Kundan Pendant',
    category: 'Pendant',
    weight: 8,
    pricePerGram: 5730,
    makingCharge: 8500,
    totalPrice: 54340,
    image: jewelleryPendant,
    images: [jewelleryPendant, jewelleryPendant],
    shopId: 'shop-3',
    shopName: 'Radha Gold Palace',
    description: 'Beautiful Kundan work pendant with polki diamonds and enamel work on the back.',
    purity: '22K',
    isSpecialOffer: false,
  },
  {
    id: 'jwl-8',
    name: 'Sleek Tennis Bracelet',
    category: 'Bracelet',
    weight: 15,
    pricePerGram: 5730,
    makingCharge: 12000,
    totalPrice: 97950,
    image: jewelleryBracelet,
    images: [jewelleryBracelet],
    shopId: 'shop-4',
    shopName: 'Meena Jewellery Mart',
    description: 'Modern tennis-style bracelet with interlocking links. Comfortable clasp for secure wear.',
    purity: '22K',
    isSpecialOffer: true,
    discount: 8,
  },
];

export const categories = [
  'All',
  'Ring',
  'Necklace',
  'Chain',
  'Bracelet',
  'Earrings',
  'Pendant',
  'Bangle',
] as const;

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};
