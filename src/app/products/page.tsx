"use client";

import React from 'react';
import { useProducts } from '@/hooks/useProducts';
import { ProductFiltersSidebar, ProductTopBar } from '@/components/features/ProductFilters';
import { ProductGrid } from '@/components/features/ProductGrid';

export default function ProductsPage() {
  const {
    products,
    totalProducts,
    filters,
    loading,
    updateFilters,
    updateSearch,
    updateSort,
    addToCart
  } = useProducts();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center" dir="rtl">
          <h1 className="text-3xl font-bold text-foreground mb-2">
         لیست محصولات
          </h1>
        </div>

        {/* نوار بالایی جستجو و مرتب‌سازی */}
        <ProductTopBar
          searchQuery={filters.search}
          onSearchChange={updateSearch}
          sortBy={filters.sortBy}
          onSortChange={updateSort}
          totalProducts={totalProducts}
          filteredProducts={products.length}
        />

        {/* محتوای اصلی */}
        <div className="flex gap-8">
          {/* فیلترهای سمت راست */}
          <div className="hidden lg:block">
            <ProductFiltersSidebar
              filters={filters}
              onFiltersChange={updateFilters}
            />
          </div>

          {/* گرید محصولات */}
          <div className="flex-1">
            <ProductGrid
              products={products}
              loading={loading}
              onAddToCart={addToCart}
            />
          </div>
        </div>

        {/* فیلترهای موبایل - برای آینده */}
        <div className="lg:hidden mt-6">
          <div className="text-center text-muted-foreground text-sm">
            نسخه موبایل فیلترها در حال توسعه است
          </div>
        </div>
      </div>
    </div>
  );
}
