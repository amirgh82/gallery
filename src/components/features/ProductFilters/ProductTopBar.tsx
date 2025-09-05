"use client";

import { Search } from "lucide-react";
import { CustomInput } from "@/components/ui/form/CustomInput";
import { CustomSelect } from "@/components/ui/form/CustomSelect";
import { FILTER_OPTIONS } from "@/constants/PRODUCTS_DATA";
import { ProductFilters } from "@/types/product";

interface ProductTopBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: string;
  onSortChange: (sort: ProductFilters['sortBy']) => void;
  totalProducts: number;
  filteredProducts: number;
}

export const ProductTopBar = ({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  totalProducts,
  filteredProducts
}: ProductTopBarProps) => {
  return (
    <div className="bg-background border border-border rounded-xl p-4 mb-6" dir="rtl">
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        {/* بخش جستجو */}
        <div className="flex-1 w-full lg:max-w-md">
          <CustomInput
            name="search"
            placeholder="جستجو در محصولات..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            icon={<Search className="w-4 h-4" />}
            className="w-full"
          />
        </div>

        {/* بخش مرتب‌سازی و آمار */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full lg:w-auto">
          {/* نمایش تعداد محصولات */}
          <div className="text-sm text-muted-foreground whitespace-nowrap">
            {filteredProducts === totalProducts ? (
              <span>نمایش {filteredProducts.toLocaleString('fa-IR')} محصول</span>
            ) : (
              <span>
                نمایش {filteredProducts.toLocaleString('fa-IR')} از {totalProducts.toLocaleString('fa-IR')} محصول
              </span>
            )}
          </div>

          {/* مرتب‌سازی */}
          <div className="w-full sm:w-48">
            <CustomSelect
              name="sort"
              value={sortBy}
              onChange={(value) => onSortChange(value as ProductFilters['sortBy'])}
              options={FILTER_OPTIONS.sortOptions}
              placeholder="مرتب‌سازی بر اساس"
            />
          </div>
        </div>
      </div>

      {/* نمایش کلمه جستجو */}
      {searchQuery && (
        <div className="mt-3 pt-3 border-t border-border">
          <div className="text-sm text-muted-foreground">
            نتایج جستجو برای:
            <span className="font-medium text-foreground mr-1">"{searchQuery}"</span>
          </div>
        </div>
      )}
    </div>
  );
};
