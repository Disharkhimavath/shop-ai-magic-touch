
export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  subcategory: string;
  price: number;
  discountPercentage?: number;
  rating: number;
  description: string;
  images: string[];
  inStock: boolean;
  features: string[];
  tags: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  itemCount: number;
}

export interface FilterOptions {
  categories: string[];
  brands: string[];
  priceRange: {
    min: number;
    max: number;
  };
  rating?: number;
}

export interface SortOption {
  label: string;
  value: string;
}
