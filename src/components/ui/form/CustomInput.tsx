"use client";

import { forwardRef, InputHTMLAttributes, ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Controller, Control } from "react-hook-form";
import { toPersianNumbers, toEnglishNumbers } from "@/utils/persianNumbers";

type InputType = "text" | "number" | "password" | "price" | "email" | "phone";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    error?: string;
    icon?: ReactNode;
    addon?: ReactNode;
    type?: InputType;
    control?: Control<any>;
}

export const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
    ({ name, label, error, icon, addon, type = "text", control, ...props }, ref) => {
        const [innerValue, setInnerValue] = useState("");

        const formatPrice = (value: string) => {
            const numericValue = toEnglishNumbers(value).replace(/\D/g, "");
            if (numericValue) {
                const formatted = new Intl.NumberFormat().format(Number(numericValue));
                return toPersianNumbers(formatted);
            }
            return "";
        };

        const formatPhone = (value: string) => {
            const numericValue = toEnglishNumbers(value).replace(/\D/g, "");
            if (numericValue.length >= 11) {
                return toPersianNumbers(numericValue.slice(0, 11));
            }
            return toPersianNumbers(numericValue);
        };

        const handleChange = (value: string) => {
            if (type === "price") {
                setInnerValue(formatPrice(value));
            } else if (type === "phone") {
                setInnerValue(formatPhone(value));
            } else {
                setInnerValue(value);
            }
        };

        const renderInput = (fieldProps?: any) => (
            <div className="w-full">
                {label && (
                    <label htmlFor={name} className="block mb-1 text-sm font-medium">
                        {label}
                    </label>
                )}
                <div className="relative flex items-center">
                    {icon && <span className="absolute right-3 text-gray-400">{icon}</span>}
                    {addon && <span className="absolute left-3 text-gray-500">{addon}</span>}

                    <Input
                        id={name}
                        name={name}
                        type={type === "price" || type === "phone" ? "text" : type}
                        value={
                            type === "price"
                                ? formatPrice(fieldProps ? fieldProps.value ?? "" : innerValue)
                                : type === "phone"
                                    ? formatPhone(fieldProps ? fieldProps.value ?? "" : innerValue)
                                    : fieldProps
                                        ? fieldProps.value
                                        : innerValue
                        }
                        onChange={(e) => {
                            if (type === "price") {
                                const rawValue = toEnglishNumbers(e.target.value).replace(/\D/g, "");
                                if (fieldProps) {
                                    fieldProps.onChange(rawValue);
                                } else {
                                    setInnerValue(rawValue);
                                }
                            } else if (type === "phone") {
                                const rawValue = toEnglishNumbers(e.target.value).replace(/\D/g, "");
                                const limitedValue = rawValue.length >= 11 ? rawValue.slice(0, 11) : rawValue;
                                if (fieldProps) {
                                    fieldProps.onChange(limitedValue);
                                } else {
                                    setInnerValue(limitedValue);
                                }
                            } else {
                                if (fieldProps) {
                                    fieldProps.onChange(e.target.value);
                                } else {
                                    handleChange(e.target.value);
                                }
                            }
                        }}
                        className={cn(
                            "w-full rounded-lg border  border-gray-300  px-3 py-2 text-sm transition-all duration-200",
                            "focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 focus:outline-none",
                            "placeholder:text-gray-400",
                            icon ? "pr-10" : "",
                            addon ? "pl-10" : "",
                            (type === "number" || type === "phone") ? "text-left placeholder:text-left" : "",
                            error && "border-red-500 focus:border-red-500 focus:ring-red-100"
                        )}
                        ref={ref}
                        {...props}
                    />
                </div>
                {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
            </div>
        );

        if (control) {
            return (
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => renderInput(field)}
                />
            );
        }

        return renderInput();
    }
);

CustomInput.displayName = "CustomInput";
