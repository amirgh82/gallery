"use client";

import { ProductCard } from "../../cards/ProductCard/ProductCard";
import { Slider } from "../../ui/Slider/Slider";


interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    href?: string;
}

interface ProductSliderProps {
    products: Product[];
    title: string;
}

export const ProductSlider = ({ products, title }: ProductSliderProps) => {
    return (
        <Slider
            title={title}
            autoplay
            breakpoints={{
                "0": { slidesPerView: 1 },
                "640": { slidesPerView: 2 },
                "768": { slidesPerView: 3 },
                "1024": { slidesPerView: 4 }
            }}
        >
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    imageUrl={product.imageUrl}
                    href={product.href}
                    onAddToCart={() => console.log(`Added product ${product.id} to cart`)}
                />
            ))}
        </Slider>
    );
};
