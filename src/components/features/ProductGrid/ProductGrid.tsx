"use client";

import { Product } from "@/types/product";
import { ProductCard } from "@/components/common/cards/ProductCard/ProductCard";
import { ProductCardSkeleton } from "@/components/common/cards/ProductCard/ProductCardSkeleton";

interface ProductGridProps {
  products: Product[];
  loading?: boolean;
  onAddToCart?: (product: Product) => void;
}

export const ProductGrid = ({
  products,
  loading = false,
  onAddToCart
}: ProductGridProps) => {

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
          <svg
            className="w-12 h-12 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-5.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293H9.414a1 1 0 01-.707-.293L6.293 13.293A1 1 0 005.586 13H20z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">
          محصولی یافت نشد
        </h3>
        <p className="text-muted-foreground text-sm max-w-md">
          متأسفانه محصولی با فیلترهای انتخابی شما یافت نشد. لطفاً فیلترهای خود را تغییر دهید یا کلمه جستجوی دیگری امتحان کنید.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          imageUrl={product.imageUrl}
          name={product.name}
          description={product.description}
          price={product.price}
          discount={product.discount}
          href={`/products/${product.id}`}
          onAddToCart={() => onAddToCart?.(product)}
          className="w-full max-w-none"
        />
      ))}
    </div>
  );
};
