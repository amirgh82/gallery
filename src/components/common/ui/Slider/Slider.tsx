"use client";

import { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface SliderBreakpoint {
    [key: string]: {
        slidesPerView: number;
        spaceBetween?: number;
    };
}

export interface SliderProps {
    children: ReactNode[];
    title?: string;
    showNavigation?: boolean;
    showPagination?: boolean;
    autoplay?: boolean | {
        delay?: number;
        disableOnInteraction?: boolean;
    };
    loop?: boolean;
    className?: string;
    breakpoints?: SliderBreakpoint;
    slidesPerView?: number;
    spaceBetween?: number;
}export const Slider = ({
    children,
    showNavigation = true,
    showPagination = false,
    autoplay = false,
    loop = true,
    className = "",
    breakpoints,
    slidesPerView = 1,
    spaceBetween = 20,
    title
}: SliderProps) => {
    const defaultBreakpoints: SliderBreakpoint = {
        0: { slidesPerView: 1, spaceBetween: 10 },
        640: { slidesPerView: 2, spaceBetween: 15 },
        768: { slidesPerView: 3, spaceBetween: 20 },
        1024: { slidesPerView: 4, spaceBetween: 20 },
    };

    return (
        <div className={className}>
            {title && (
                <div>
                    <div className="inline-flex flex-col items-start gap-2">
                        <h4 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
                            {title}
                        </h4>
                        <span className="h-1 w-24 rounded-full bg-gradient-to-l from-primary to-chart-2" />
                    </div>
                </div>
            )}
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={showNavigation}
                pagination={showPagination ? { clickable: true } : false}
                autoplay={
                    autoplay
                        ? {
                            delay: 3000,
                            disableOnInteraction: false,
                            ...(typeof autoplay === "object" ? autoplay : {}),
                        }
                        : false
                }
                loop={loop}
                breakpoints={breakpoints || defaultBreakpoints}
                slidesPerView={slidesPerView}
                spaceBetween={spaceBetween}
                className="w-full"
            >
                {children.map((child, index) => (
                    <SwiperSlide key={index}>
                        {child}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
