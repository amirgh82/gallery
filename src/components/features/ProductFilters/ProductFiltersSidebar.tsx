"use client";

import { ProductFilters } from "@/types/product";
import { FILTER_OPTIONS, PRICE_RANGE } from "@/constants/PRODUCTS_DATA";
import { PriceFilter } from "./PriceFilter";
import { MultiSelectFilter } from "./MultiSelectFilter";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface ProductFiltersProps {
  filters: ProductFilters;
  onFiltersChange: (filters: ProductFilters) => void;
}

export const ProductFiltersSidebar = ({
  filters,
  onFiltersChange
}: ProductFiltersProps) => {

  const updateFilter = <K extends keyof ProductFilters>(
    key: K,
    value: ProductFilters[K]
  ) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  const resetFilters = () => {
    onFiltersChange({
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
  };

  const hasActiveFilters =
    filters.models.length > 0 ||
    filters.colors.length > 0 ||
    filters.categories.length > 0 ||
    filters.priceRange.min > PRICE_RANGE.min ||
    filters.priceRange.max < PRICE_RANGE.max;

  return (
    <div className="w-80 h-fit bg-background border border-border rounded-xl p-6 sticky top-6" dir="rtl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">
          فیلترها
        </h3>
        {hasActiveFilters && (
          <Button
            variant="outline"
            size="sm"
            onClick={resetFilters}
            className="text-xs gap-1"
          >
            <RotateCcw className="w-3 h-3" />
            پاک کردن همه
          </Button>
        )}
      </div>

      <div className="space-y-6">
        {/* فیلتر قیمت */}
        <div>
          <PriceFilter
            min={PRICE_RANGE.min}
            max={PRICE_RANGE.max}
            value={[filters.priceRange.min, filters.priceRange.max]}
            onChange={(value) => updateFilter('priceRange', { min: value[0], max: value[1] })}
            step={PRICE_RANGE.step}
          />
        </div>

        <Separator />

        {/* فیلتر دسته‌بندی */}
        <div>
          <MultiSelectFilter
            title="دسته‌بندی"
            options={FILTER_OPTIONS.categories}
            selected={filters.categories}
            onChange={(value) => updateFilter('categories', value)}
          />
        </div>

        <Separator />

        {/* فیلتر مدل */}
        <div>
          <MultiSelectFilter
            title="مدل"
            options={FILTER_OPTIONS.models}
            selected={filters.models}
            onChange={(value) => updateFilter('models', value)}
            maxVisible={6}
          />
        </div>

        <Separator />

        {/* فیلتر رنگ */}
        <div>
          <MultiSelectFilter
            title="رنگ"
            options={FILTER_OPTIONS.colors}
            selected={filters.colors}
            onChange={(value) => updateFilter('colors', value)}
          />
        </div>
      </div>

      {/* نمایش تعداد فیلترهای فعال */}
      {hasActiveFilters && (
        <div className="mt-6 p-3 bg-primary/10 rounded-lg">
          <div className="text-sm text-primary text-center">
            {[
              ...filters.categories,
              ...filters.models,
              ...filters.colors
            ].length + (
                filters.priceRange.min > PRICE_RANGE.min ||
                  filters.priceRange.max < PRICE_RANGE.max ? 1 : 0
              )} فیلتر فعال
          </div>
        </div>
      )}
    </div>
  );
};
