"use client";

import { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import { CustomInput } from "@/components/ui/form/CustomInput";
import { Button } from "@/components/ui/button";

interface SearchBoxProps {
    placeholder?: string;
}

export function SearchBox({ placeholder = "جستجو محصول ..." }: SearchBoxProps) {
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const wrapperRef = useRef<HTMLDivElement>(null);
    const iconRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target as Node) &&
                iconRef.current &&
                !iconRef.current.contains(event.target as Node)
            ) {
                setSearchOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative items-center max-md:hidden min-md:flex">
            <Button
                className="cursor-pointer"
                variant="outline"
                size="icon"
                aria-label="Close menu"
                onClick={() => setSearchOpen((prev) => !prev)}
            >
                <Search
                    className="h-5 w-5"
                    aria-label="Search products"
                    ref={iconRef}
                />
            </Button>


            {searchOpen && (
                <div
                    ref={wrapperRef}
                    className="absolute top-full mt-3 left-1/2 -translate-x-1/2 animate-fade-in"
                >
                    {/* Small arrow indicator */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-l-transparent border-r-6 border-r-transparent border-b-6 border-b-white shadow-sm"></div>

                    {/* Search input */}
                    <CustomInput
                        name="search"
                        placeholder={placeholder}
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className="w-64 rounded-xl border border-primary/40  shadow-lg focus:border-primary focus:ring-2 focus:ring-primary/40 transition-all duration-200"
                    />

                </div>
            )}
        </div>
    );
}
