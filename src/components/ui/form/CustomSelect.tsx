"use client";

import { forwardRef, ReactNode, useState } from "react";
import { Controller, Control } from "react-hook-form";
import { cn } from "@/lib/utils";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup,
    SelectScrollUpButton,
    SelectScrollDownButton
} from "@/components/ui/select";

type Option = {
    value: string;
    label: string;
};

interface CustomSelectProps {
    name: string;
    label?: string;
    error?: string;
    options: Option[];
    placeholder?: string;
    control?: Control<any>;
    value?: string;
    onChange?: (value: string) => void;
    icon?: ReactNode;
    disabled?: boolean;
}

export const CustomSelect = forwardRef<HTMLButtonElement, CustomSelectProps>(
    (
        {
            name,
            label,
            error,
            options,
            placeholder = "انتخاب کنید",
            control,
            value,
            onChange,
            icon,
            disabled,
        },
        ref
    ) => {
        const [innerValue, setInnerValue] = useState("");

        const handleChange = (val: string) => {
            if (onChange) {
                onChange(val);
            } else {
                setInnerValue(val);
            }
        };

        const renderSelect = (
            fieldValue?: string,
            fieldOnChange?: (val: string) => void
        ) => (
            <div className="w-full" dir="rtl">
                {label && (
                    <label
                        htmlFor={name}
                        className="block mb-1 text-sm font-medium text-right"
                    >
                        {label}
                    </label>
                )}

                <Select
                    value={fieldValue ?? value ?? innerValue}
                    onValueChange={(val) => {
                        if (fieldOnChange) {
                            fieldOnChange(val);
                        } else {
                            handleChange(val);
                        }
                    }}
                    disabled={disabled}
                >
                    <SelectTrigger
                        ref={ref}
                        className={cn(
                            "w-full rounded-lg border border-gray-300  px-3 py-2 text-sm transition-all duration-200",
                            "focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 focus:outline-none",
                            "flex-row-reverse justify-between text-right",
                            error && "border-red-500 focus:border-red-500 focus:ring-red-100"
                        )}
                    >
                        {icon && <span className="ml-2">{icon}</span>}
                        <SelectValue placeholder={placeholder} />
                    </SelectTrigger>

                    <SelectContent
                        className="max-h-60 overflow-y-auto text-right"
                        dir="rtl"
                    >
                        <SelectScrollUpButton />
                        <SelectGroup>
                            {options.map((opt) => (
                                <SelectItem
                                    key={opt.value}
                                    value={opt.value}
                                    className="text-right"
                                >
                                    {opt.label}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                        <SelectScrollDownButton />
                    </SelectContent>
                </Select>

                {error && (
                    <p className="mt-1 text-sm text-red-500 text-right">{error}</p>
                )}
            </div>
        );

        if (control) {
            return (
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) =>
                        renderSelect(field.value, field.onChange)
                    }
                />
            );
        }

        return renderSelect();
    }
);

CustomSelect.displayName = "CustomSelect";
