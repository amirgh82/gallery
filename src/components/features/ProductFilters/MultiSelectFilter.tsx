"use client";

import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { FilterOption } from "@/types/product";
import { Button } from "@/components/ui/button";

interface MultiSelectFilterProps {
  title: string;
  options: FilterOption[];
  selected: string[];
  onChange: (selected: string[]) => void;
  maxVisible?: number;
}

export const MultiSelectFilter = ({
  title,
  options,
  selected,
  onChange,
  maxVisible = 5
}: MultiSelectFilterProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleOptions = isExpanded ? options : options.slice(0, maxVisible);
  const hasMore = options.length > maxVisible;

  const handleToggle = (value: string) => {
    const newSelected = selected.includes(value)
      ? selected.filter(item => item !== value)
      : [...selected, value];
    onChange(newSelected);
  };

  const clearAll = () => {
    onChange([]);
  };

  return (
    <div className="space-y-3" dir="rtl">
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium text-foreground">
          {title}
        </div>
        {selected.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAll}
            className="text-xs text-muted-foreground hover:text-foreground p-1 h-auto"
          >
            پاک کردن
          </Button>
        )}
      </div>

      <div className="space-y-2">
        {visibleOptions.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div
              className={cn(
                "w-4 h-4 border rounded flex items-center justify-center transition-colors",
                selected.includes(option.value)
                  ? "bg-primary border-primary text-primary-foreground"
                  : "border-muted-foreground/30 group-hover:border-primary/50"
              )}
            >
              {selected.includes(option.value) && (
                <Check className="w-3 h-3" />
              )}
            </div>
            <span className="text-sm text-foreground group-hover:text-primary transition-colors flex-1">
              {option.label}
            </span>
            {option.count !== undefined && (
              <span className="text-xs text-muted-foreground">
                ({option.count})
              </span>
            )}
          </label>
        ))}
      </div>

      {hasMore && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full text-xs text-muted-foreground hover:text-foreground p-2 h-auto flex items-center justify-center gap-1"
        >
          {isExpanded ? 'نمایش کمتر' : `${options.length - maxVisible} مورد دیگر`}
          <ChevronDown
            className={cn(
              "w-3 h-3 transition-transform",
              isExpanded && "rotate-180"
            )}
          />
        </Button>
      )}
    </div>
  );
};
