"use client";

import { useState, useMemo } from "react";
import { Product, ProductFilters } from "@/types/product";
import { MOCK_PRODUCTS, PRICE_RANGE } from "@/constants/PRODUCTS_DATA";

export const useProducts = () => {
  const [filters, setFilters] = useState<ProductFilters>({
    search: '',
    sortBy: 'popularity',
    priceRange: {
      min: PRICE_RANGE.min,
      max: PRICE_RANGE.max
    },
    models: [],
    colors: [],
    categories: []
  });

  const [loading, setLoading] = useState(false);

  // فیلتر و مرتب‌سازی محصولات
  const filteredProducts = useMemo(() => {
    let result = [...MOCK_PRODUCTS];

    // فیلتر جستجو
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      result = result.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
      );
    }

    // فیلتر محدوده قیمت
    result = result.filter(product =>
      product.price >= filters.priceRange.min &&
      product.price <= filters.priceRange.max
    );

    // فیلتر دسته‌بندی
    if (filters.categories.length > 0) {
      result = result.filter(product =>
        filters.categories.includes(product.category)
      );
    }

    // فیلتر مدل
    if (filters.models.length > 0) {
      result = result.filter(product =>
        filters.models.includes(product.model)
      );
    }

    // فیلتر رنگ
    if (filters.colors.length > 0) {
      result = result.filter(product =>
        filters.colors.includes(product.color)
      );
    }

    // مرتب‌سازی
    switch (filters.sortBy) {
      case 'price_asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'popularity':
        result.sort((a, b) => b.popularity - a.popularity);
        break;
      case 'newest':
        // برای جدیدترین، فرض می‌کنیم ID بزرگتر = جدیدتر
        result.sort((a, b) => parseInt(b.id) - parseInt(a.id));
        break;
      default:
        result.sort((a, b) => b.popularity - a.popularity);
    }

    return result;
  }, [filters]);

  const updateFilters = (newFilters: ProductFilters) => {
    setFilters(newFilters);
  };

  const updateSearch = (search: string) => {
    setFilters(prev => ({ ...prev, search }));
  };

  const updateSort = (sortBy: ProductFilters['sortBy']) => {
    setFilters(prev => ({ ...prev, sortBy }));
  };

  const addToCart = (product: Product) => {
    // اینجا می‌توانید لاجیک اضافه کردن به سبد خرید را پیاده‌سازی کنید
    console.log('محصول به سبد خرید اضافه شد:', product.name);
    // می‌توانید از Context API یا state management دیگری استفاده کنید
  };

  return {
    products: filteredProducts,
    totalProducts: MOCK_PRODUCTS.length,
    filters,
    loading,
    updateFilters,
    updateSearch,
    updateSort,
    addToCart
  };
};
