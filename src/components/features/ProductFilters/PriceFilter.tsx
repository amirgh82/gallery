"use client";

import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { CustomInput } from "@/components/ui/form/CustomInput";
import { formatPersianNumber } from "@/utils/persianNumbers";

interface PriceFilterProps {
  min: number;
  max: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
  step?: number;
}

export const PriceFilter = ({
  min,
  max,
  value,
  onChange,
  step = 1000000
}: PriceFilterProps) => {
  const [localMin, setLocalMin] = useState(value[0].toString());
  const [localMax, setLocalMax] = useState(value[1].toString());

  useEffect(() => {
    setLocalMin(value[0].toString());
    setLocalMax(value[1].toString());
  }, [value]);

  const handleSliderChange = (newValue: number[]) => {
    const minVal = newValue[0];
    const maxVal = newValue[1];
    setLocalMin(minVal.toString());
    setLocalMax(maxVal.toString());
    onChange([minVal, maxVal]);
  };

  const handleMinInputChange = (val: string) => {
    setLocalMin(val);
    const numVal = parseInt(val) || min;
    if (numVal >= min && numVal <= value[1]) {
      onChange([numVal, value[1]]);
    }
  };

  const handleMaxInputChange = (val: string) => {
    setLocalMax(val);
    const numVal = parseInt(val) || max;
    if (numVal <= max && numVal >= value[0]) {
      onChange([value[0], numVal]);
    }
  };

  return (
    <div className="space-y-4" dir="rtl">
      <div className="text-sm font-medium text-foreground">
        محدوده قیمت
      </div>

      {/* Slider */}
      <div className="px-2">
        <Slider
          value={value}
          onValueChange={handleSliderChange}
          min={min}
          max={max}
          step={step}
          className="w-full"
        />
      </div>

      {/* Price Display */}
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>{formatPersianNumber(min)} تومان</span>
        <span>{formatPersianNumber(max)} تومان</span>
      </div>

      {/* Input Fields */}
      <div className="grid grid-cols-2 gap-2">
        <CustomInput
          name="minPrice"
          type="price"
          placeholder="حداقل قیمت"
          value={localMin}
          onChange={(e) => handleMinInputChange(e.target.value)}
          className="text-sm"
        />
        <CustomInput
          name="maxPrice"
          type="price"
          placeholder="حداکثر قیمت"
          value={localMax}
          onChange={(e) => handleMaxInputChange(e.target.value)}
          className="text-sm"
        />
      </div>

      {/* Current Range Display */}
      <div className="text-center text-sm text-muted-foreground bg-muted/50 rounded-lg p-2">
        از {formatPersianNumber(value[0])} تا {formatPersianNumber(value[1])} تومان
      </div>
    </div>
  );
};
