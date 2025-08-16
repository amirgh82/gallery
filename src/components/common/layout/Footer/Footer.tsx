import Link from "next/link";
import { NAVBAR_LINKS } from "@/constants/NAVBAR_LINKS";
import { Instagram, MessageCircleMore, Send } from "lucide-react";

type SocialLink = {
    href: string;
    label: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};
const SOCIAL_LINKS: SocialLink[] = [
    { href: "https://instagram.com", label: "اینستاگرام", icon: Instagram },
    { href: "https://t.me", label: "تلگرام", icon: Send },
    { href: "https://wa.me", label: "واتساپ", icon: MessageCircleMore },
];

export function Footer() {
    const year = new Intl.DateTimeFormat('fa-IR', { calendar: 'persian', numberingSystem: 'latn', year: 'numeric' }).format(new Date()).split('/')[0];

    return (
        <footer className="mt-10 border-t bg-muted/10 backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-primary">ابوتراب</h3>
                        <p className="text-sm text-muted-foreground leading-7">
                            به فروشگاه ابوتراب خوش آمدید. بهترین محصولات با کیفیت بالا و قیمت مناسب.
                        </p>
                    </div>

                    <div className="relative">
                        <h4 className="text-base font-semibold mb-6 after:content-[''] after:absolute after:top-8 after:right-0 after:w-12 after:h-0.5 after:bg-primary/70">لینک‌های مفید</h4>
                        <ul className="space-y-3.5">
                            {NAVBAR_LINKS.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 inline-flex items-center group"
                                        aria-label={item.label}
                                        title={item.label}
                                    >
                                        <span className="relative ml-2 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-px after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full">{item.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative">
                        <h4 className="text-base font-semibold mb-6 after:content-[''] after:absolute after:top-8 after:right-0 after:w-12 after:h-0.5 after:bg-primary/70">شبکه‌های اجتماعی</h4>
                        <div className="flex flex-wrap gap-4">
                            {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
                                <Link
                                    key={label}
                                    href={href}
                                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/40 bg-background/80 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 transition-all duration-300"
                                    aria-label={label}
                                    title={label}
                                    target={href.startsWith("http") ? "_blank" : undefined}
                                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                                >
                                    <Icon className="h-5 w-5" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-border/40 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-muted-foreground">
                        © {year} ابوتراب — کلیه حقوق محفوظ است.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
