"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface ProductCardSkeletonProps {
    className?: string;
}

export const ProductCardSkeleton = ({
    className = "",
}: ProductCardSkeletonProps) => {
    return (
        <div className="flex items-center justify-center">
            <div
                className={cn(
                    "bg-background rounded-3xl shadow-lg dark:shadow-slate-900/20 overflow-hidden w-80 mx-auto border border-border",
                    className
                )}
            >
                {/* Image Skeleton */}
                <div className="relative h-80 w-full bg-muted">
                    <Skeleton className="w-full h-full rounded-none" />

                    {/* Action Buttons Skeleton */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                        <Skeleton className="w-10 h-10 rounded-full" />
                        <Skeleton className="w-10 h-10 rounded-full" />
                    </div>

                    {/* Add to Cart Button Skeleton */}
                    <div className="absolute -bottom-6 left-6">
                        <Skeleton className="w-12 h-12 rounded-xl shadow-lg border border-border bg-background/80" />
                    </div>
                </div>

                {/* Content Skeleton */}
                <div className="p-6 pt-8 text-right" dir="rtl">
                    {/* Title Skeleton */}
                    <div className="mb-2">
                        <Skeleton className="h-6 w-3/4 mb-2" />
                    </div>

                    {/* Description Skeleton */}
                    <div className="mb-4 space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-5/6" />
                        <Skeleton className="h-4 w-4/5" />
                    </div>

                    {/* Price Section Skeleton */}
                    <div className="flex items-center justify-end">
                        <div className="text-right space-y-2">
                            <Skeleton className="h-6 w-24" />
                            <Skeleton className="h-4 w-20" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
