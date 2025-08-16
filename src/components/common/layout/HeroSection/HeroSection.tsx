import Image from "next/image";

interface HeroSectionProps {
    imageUrl: string;
    title: string;
    subtitle: string;
    alt?: string;
}

export default function HeroSection({ imageUrl, title, subtitle, alt }: HeroSectionProps) {
    return (
        <section className="text-center space-y-6">
            <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={alt || title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-white text-center">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
                        <p className="text-lg md:text-xl">{subtitle}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
