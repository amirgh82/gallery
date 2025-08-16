
import { Home, Package, Info, HelpCircle, LucideIcon, CircleSmall } from "lucide-react";

export interface NavbarLink {
    href: string;
    label: string;
    icon: LucideIcon;
    children?: NavbarLink[];
}

export const NAVBAR_LINKS: NavbarLink[] = [
    { href: "/", label: "خانه", icon: Home },
    {
        href: "/products", label: "محصولات", icon: Package,
        children: [
            { href: "/products/new1", label: "محصولات جدید", icon: CircleSmall },
            { href: "/products/new2", label: "محصولات جدید", icon: CircleSmall },
            { href: "/products/new3", label: "محصولات جدید", icon: CircleSmall },
        ]
    },
    { href: "/about-me", label: "درباره ما", icon: Info },
    { href: "/questions", label: "سوالات متداول", icon: HelpCircle },
];
