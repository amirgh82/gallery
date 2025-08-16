"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ShoppingCart,
    Heart,
    Eye,
    Package,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface ProductCardProps {
    imageUrl: string;
    name: string;
    description?: string;
    price?: number;
    discount?: number;
    showAddToCart?: boolean;
    onAddToCart?: () => void;
    href?: string;
    className?: string;
    label?: string;
}

export const ProductCard = ({
    imageUrl,
    name,
    description,
    price,
    discount,
    showAddToCart = true,
    onAddToCart,
    href,
    className = "",
}: ProductCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="flex items-center justify-center">
            <div
                className={cn(
                    "bg-background rounded-3xl shadow-lg dark:shadow-slate-900/20 overflow-hidden transition-all duration-300 w-80 mx-auto border border-border",
                    "hover:shadow-xl dark:hover:shadow-slate-900/40 hover:-translate-y-1",
                    className
                )}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative h-80 w-full bg-muted">
                    {imageUrl ? (
                        <Image
                            src={imageUrl}
                            alt={name}
                            width={320}
                            height={320}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                            <Package className="w-16 h-16 text-muted-foreground" />
                        </div>
                    )}

                    {/* <div className="absolute top-4 right-4">
                        <div className="bg-green-500  text-xs font-bold px-2 py-1 rounded-md">
                            {labe}
                        </div>
                    </div> */}

                    <div
                        className={cn(
                            "absolute top-4 left-4 flex flex-col gap-2 transition-all duration-300",
                            isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                        )}
                    >
                        <Button
                            size="icon"
                            variant="outline"
                            className="rounded-full bg-background/90 backdrop-blur-sm border-border shadow-md hover:scale-110 transition-transform cursor-pointer"
                        >
                            <Heart size={16} className="text-muted-foreground " />
                        </Button>
                        {href ? (
                            <Link href={href}>
                                <Button
                                    size="icon"
                                    variant="outline"
                                    className="rounded-full bg-background/90 backdrop-blur-sm border-border shadow-md hover:scale-110 transition-transform cursor-pointer"
                                >
                                    <Eye size={16} className="text-muted-foreground " />
                                </Button>
                            </Link>
                        ) : (
                            <Button
                                size="icon"
                                variant="outline"
                                className="rounded-full bg-background/90 backdrop-blur-sm border-border shadow-md hover:scale-110 transition-transform cursor-pointer"
                            >
                                <Eye size={16} className="text-muted-foreground" />
                            </Button>
                        )}
                    </div>

                    {showAddToCart && (
                        <div className="absolute -bottom-6 left-6">
                            <Button
                                onClick={onAddToCart}
                                className="w-12 h-12 bg-background hover:bg-muted text-foreground border border-border rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center hover:scale-105 cursor-pointer"
                                variant="outline"
                            >
                                <ShoppingCart size={18} />
                            </Button>
                        </div>
                    )}
                </div>

                <div className="p-6 pt-8 text-right" dir="rtl">
                    {href ? (
                        <Link href={href}>
                            <h3 className="text-lg font-bold text-foreground mb-2 text-right hover:text-primary transition-colors cursor-pointer">
                                {name || ""}
                            </h3>
                        </Link>
                    ) : (
                        <h3 className="text-lg font-bold text-foreground mb-2 text-right">
                            {name || ""}
                        </h3>
                    )}

                    <div className="text-muted-foreground text-sm mb-4 leading-relaxed text-right">
                        <p className="line-clamp-3 overflow-hidden" style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            textOverflow: 'ellipsis'
                        }}>
                            {description || ''}
                        </p>
                    </div>

                    <div className="flex items-center justify-end">
                        <div className="text-right">
                            <div className="text-xl font-bold text-foreground">
                                <span>{price ? price.toLocaleString("fa-IR") : "0"}</span>
                                <span className="text-sm font-normal text-muted-foreground mr-1">تومان</span>
                            </div>
                            {discount && price && (
                                <div className="text-sm text-muted-foreground line-through mt-1">
                                    {(price * (1 + discount / 100)).toLocaleString("fa-IR")} تومان
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
