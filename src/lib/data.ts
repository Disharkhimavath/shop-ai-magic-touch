
import { Product, Category, SortOption } from './types';

export const categories: Category[] = [
  {
    id: 'skincare',
    name: 'Skincare',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=300&auto=format&fit=crop',
    itemCount: 120
  },
  {
    id: 'makeup',
    name: 'Makeup',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=300&auto=format&fit=crop',
    itemCount: 85
  },
  {
    id: 'haircare',
    name: 'Hair Care',
    image: 'https://images.unsplash.com/photo-1626015455130-48656e992e8a?q=80&w=300&auto=format&fit=crop',
    itemCount: 64
  },
  {
    id: 'fragrance',
    name: 'Fragrance',
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=300&auto=format&fit=crop',
    itemCount: 42
  },
  {
    id: 'tools',
    name: 'Tools & Brushes',
    image: 'https://images.unsplash.com/photo-1631006091772-04de23eb7ff8?q=80&w=300&auto=format&fit=crop',
    itemCount: 37
  },
  {
    id: 'mens',
    name: 'Men\'s Grooming',
    image: 'https://images.unsplash.com/photo-1581071275949-5207e1d765ff?q=80&w=300&auto=format&fit=crop',
    itemCount: 29
  }
];

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Vitamin C Face Serum',
    brand: 'Glow Labs',
    category: 'skincare',
    subcategory: 'serums',
    price: 42.99,
    discountPercentage: 10,
    rating: 4.7,
    description: 'This powerful vitamin C serum brightens skin tone, reduces fine lines, and protects against environmental damage with a potent blend of antioxidants.',
    images: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=500&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611778591338-6bbd255a6276?q=80&w=500&auto=format&fit=crop'
    ],
    inStock: true,
    features: ['Brightens complexion', 'Reduces fine lines', 'Non-greasy formula', 'Paraben-free'],
    tags: ['vitamin c', 'serum', 'brightening', 'anti-aging']
  },
  {
    id: 'p2',
    name: 'Hydrating Face Moisturizer',
    brand: 'Pure Beauty',
    category: 'skincare',
    subcategory: 'moisturizers',
    price: 38.50,
    rating: 4.5,
    description: 'A deeply hydrating face moisturizer that provides 72-hour hydration with hyaluronic acid, ceramides, and natural plant extracts.',
    images: [
      'https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?q=80&w=500&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1631730359585-5e3fc7533f6e?q=80&w=500&auto=format&fit=crop'
    ],
    inStock: true,
    features: ['72-hour hydration', 'Non-comedogenic', 'Suitable for sensitive skin', 'Fragrance-free'],
    tags: ['moisturizer', 'hydration', 'dry skin', 'sensitive skin']
  },
  {
    id: 'p3',
    name: 'Matte Lipstick Collection',
    brand: 'Color Pop',
    category: 'makeup',
    subcategory: 'lips',
    price: 24.99,
    discountPercentage: 15,
    rating: 4.3,
    description: 'A set of 5 long-lasting matte lipsticks in versatile shades from nude to bold red, providing vibrant color with a comfortable wear.',
    images: [
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=500&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=500&auto=format&fit=crop'
    ],
    inStock: true,
    features: ['Long-lasting formula', '5 versatile shades', 'Cruelty-free', 'Vitamin E enriched'],
    tags: ['lipstick', 'matte', 'makeup', 'lips']
  },
  {
    id: 'p4',
    name: 'Repairing Hair Mask',
    brand: 'Lush Locks',
    category: 'haircare',
    subcategory: 'treatments',
    price: 32.00,
    rating: 4.8,
    description: 'A weekly treatment that deeply repairs damaged hair, restores moisture, and adds shine with argan oil and keratin protein.',
    images: [
      'https://images.unsplash.com/photo-1567721913486-6585f069b332?q=80&w=500&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=500&auto=format&fit=crop'
    ],
    inStock: true,
    features: ['Deep conditioning', 'Repairs split ends', 'Heat protection', 'Color-safe'],
    tags: ['hair mask', 'repair', 'damaged hair', 'conditioning']
  },
  {
    id: 'p5',
    name: 'Volumizing Mascara',
    brand: 'Lash Out',
    category: 'makeup',
    subcategory: 'eyes',
    price: 19.99,
    rating: 4.6,
    description: 'A volumizing mascara that provides dramatic lash volume without clumping, with a precision brush for easy application.',
    images: [
      'https://images.unsplash.com/photo-1571646034647-52e6ea84b28c?q=80&w=500&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1595521624992-48a59aef95e3?q=80&w=500&auto=format&fit=crop'
    ],
    inStock: true,
    features: ['Volumizing formula', 'Smudge-proof', 'Easy to remove', 'Precision brush'],
    tags: ['mascara', 'volumizing', 'eyes', 'lashes']
  },
  {
    id: 'p6',
    name: 'Exfoliating Face Scrub',
    brand: 'Glow Labs',
    category: 'skincare',
    subcategory: 'exfoliators',
    price: 28.50,
    discountPercentage: 5,
    rating: 4.4,
    description: 'A gentle exfoliating scrub that removes dead skin cells, unclogs pores, and reveals fresh, glowing skin with natural ingredients.',
    images: [
      'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=500&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=500&auto=format&fit=crop'
    ],
    inStock: true,
    features: ['Gentle exfoliation', 'Unclogs pores', 'Natural ingredients', 'Suitable for all skin types'],
    tags: ['exfoliator', 'scrub', 'skincare', 'pores']
  },
  {
    id: 'p7',
    name: 'Midnight Jasmine Perfume',
    brand: 'Scent & Co',
    category: 'fragrance',
    subcategory: 'women',
    price: 68.00,
    rating: 4.9,
    description: 'An enchanting floral fragrance with notes of jasmine, vanilla, and sandalwood that lasts all day for a sophisticated scent experience.',
    images: [
      'https://images.unsplash.com/photo-1616949755610-8c9bbc08f83e?q=80&w=500&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552644933-9b8ad7bfe84b?q=80&w=500&auto=format&fit=crop'
    ],
    inStock: true,
    features: ['Long-lasting', 'Floral notes', 'Elegant bottle', 'Travel-friendly size available'],
    tags: ['perfume', 'fragrance', 'jasmine', 'floral']
  },
  {
    id: 'p8',
    name: 'Makeup Brush Set',
    brand: 'Artistry',
    category: 'tools',
    subcategory: 'brushes',
    price: 45.99,
    discountPercentage: 20,
    rating: 4.7,
    description: 'A complete set of 12 professional makeup brushes for face and eyes, with soft synthetic bristles and elegant rose gold handles.',
    images: [
      'https://images.unsplash.com/photo-1631214503873-8e9719065d0e?q=80&w=500&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599324104421-17c2f64affd5?q=80&w=500&auto=format&fit=crop'
    ],
    inStock: true,
    features: ['12-piece set', 'Soft synthetic bristles', 'Rose gold handles', 'Storage case included'],
    tags: ['brushes', 'makeup tools', 'brush set', 'application']
  },
  {
    id: 'p9',
    name: 'Beard Grooming Kit',
    brand: 'Rugged Gentleman',
    category: 'mens',
    subcategory: 'beard care',
    price: 39.99,
    rating: 4.6,
    description: 'A complete beard grooming kit with beard oil, balm, comb, and scissors to maintain a well-groomed beard with ease.',
    images: [
      'https://images.unsplash.com/photo-1621607510007-61819aa4f937?q=80&w=500&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586964484161-648499ad1a19?q=80&w=500&auto=format&fit=crop'
    ],
    inStock: true,
    features: ['Complete grooming kit', 'Nourishing beard oil', 'Styling balm', 'Precision scissors'],
    tags: ['beard', 'men\'s grooming', 'beard care', 'grooming kit']
  },
  {
    id: 'p10',
    name: 'Retinol Night Cream',
    brand: 'Pure Beauty',
    category: 'skincare',
    subcategory: 'anti-aging',
    price: 54.99,
    rating: 4.5,
    description: 'A powerful anti-aging night cream with retinol that reduces the appearance of fine lines and wrinkles while you sleep.',
    images: [
      'https://images.unsplash.com/photo-1592092992712-2f2838455ec3?q=80&w=500&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1620766165457-a8125f44d6fd?q=80&w=500&auto=format&fit=crop'
    ],
    inStock: true,
    features: ['Anti-aging formula', 'Reduces fine lines', 'Overnight repair', 'Dermatologist tested'],
    tags: ['retinol', 'night cream', 'anti-aging', 'wrinkles']
  },
  {
    id: 'p11',
    name: 'Mineral Foundation',
    brand: 'Color Pop',
    category: 'makeup',
    subcategory: 'face',
    price: 36.00,
    discountPercentage: 10,
    rating: 4.4,
    description: 'A lightweight mineral foundation that provides medium to full coverage with a natural finish, available in 30 inclusive shades.',
    images: [
      'https://images.unsplash.com/photo-1643185450492-6ba77dea00f6?q=80&w=500&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599622423570-f9526ab77c92?q=80&w=500&auto=format&fit=crop'
    ],
    inStock: true,
    features: ['Medium to full coverage', '30 inclusive shades', 'Natural finish', 'Long-wearing'],
    tags: ['foundation', 'mineral', 'makeup', 'face']
  },
  {
    id: 'p12',
    name: 'Sulfate-Free Shampoo',
    brand: 'Lush Locks',
    category: 'haircare',
    subcategory: 'shampoo',
    price: 26.50,
    rating: 4.3,
    description: 'A gentle sulfate-free shampoo that cleanses without stripping natural oils, leaving hair soft, manageable, and healthy.',
    images: [
      'https://images.unsplash.com/photo-1619842502381-4ad8aaad7c41?q=80&w=500&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=500&auto=format&fit=crop'
    ],
    inStock: true,
    features: ['Sulfate-free formula', 'Gentle cleansing', 'Color-safe', 'Hydrating ingredients'],
    tags: ['shampoo', 'sulfate-free', 'haircare', 'cleansing']
  }
];

export const sortOptions: SortOption[] = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Rating: High to Low", value: "rating-desc" },
  { label: "Popular", value: "popular" },
];

export const brands = [...new Set(products.map(product => product.brand))];

export const getDiscountedPrice = (price: number, discountPercentage?: number): number => {
  if (!discountPercentage) return price;
  return price - (price * discountPercentage / 100);
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(amount);
};

export const getRelatedProducts = (productId: string, limit = 4): Product[] => {
  const currentProduct = products.find(p => p.id === productId);
  if (!currentProduct) return [];
  
  return products
    .filter(p => p.id !== productId && p.category === currentProduct.category)
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

export const getProductsByIds = (ids: string[]): Product[] => {
  return products.filter(product => ids.includes(product.id));
};
