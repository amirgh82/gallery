export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discount?: number;
  imageUrl: string;
  category: string;
  model: string;
  color: string;
  popularity: number; // برای مرتب‌سازی محبوب‌ترین
  stock: number;
  brand: string;
}

export interface ProductFilters {
  search: string;
  sortBy: 'price_asc' | 'price_desc' | 'popularity' | 'newest';
  priceRange: {
    min: number;
    max: number;
  };
  models: string[];
  colors: string[];
  categories: string[];
}

export interface FilterOption {
  value: string;
  label: string;
  count?: number;
}
