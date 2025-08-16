"use client";

import Image from "next/image";

interface BannerProps {
    imageUrl: string;
    title: string;
    description: string;
}

export const Banner = ({ imageUrl, title, description }: BannerProps) => {
    return (
        <div className="w-full max-w-[1400px] mx-auto">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl my-8">
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
                <Image
                    src={imageUrl}
                    fill
                    alt="banner"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    priority
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent">
                    <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
                    <p className="text-gray-200 max-w-2xl">{description}</p>
                </div>
            </div>
        </div>
    );
};
