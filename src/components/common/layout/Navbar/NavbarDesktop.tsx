"use client";

import Link from "next/link";
import { LogIn, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAVBAR_LINKS } from "@/constants/NAVBAR_LINKS";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { SearchBox } from "./SearchBox";
import { LoginDialog } from "../../../features/LoginDialog/LoginDialog";
import { useState } from "react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

export function NavbarDesktop() {
    const pathname = usePathname();
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <nav className="hidden md:flex items-center justify-center gap-3 flex-1">
                {NAVBAR_LINKS.map(({ href, label, icon: Icon, children }) => (
                    children && children.length > 0 ? (
                        <NavigationMenu key={href} dir="rtl">
                            <NavigationMenuItem>
                                <Link href={href}>
                                    <NavigationMenuTrigger className={cn("nav-link-desktop relative", pathname === href ? "nav-link-active" : "nav-link-inactive")}>
                                        <Icon className="w-5 h-5 ml-2" />
                                        {label}
                                        {pathname === href && <span className="absolute bottom-0 right-0 left-0 h-[2px] bg-primary rounded-full animate-expand-x" />}
                                    </NavigationMenuTrigger>
                                </Link>
                                <NavigationMenuContent>
                                    <ul className="w-[200px] ">
                                        {children.map(({ href, label, icon: Icon }) => (
                                            <li key={href}>
                                                <NavigationMenuLink asChild>
                                                    <Link href={href} className={cn("nav-link-desktop relative my-1", pathname === href ? "nav-link-active" : "nav-link-inactive")}>
                                                        <div className="flex gap-3 items-center justify-start w-full py-1">
                                                            <span><Icon /></span>
                                                            <span>{label}</span>
                                                        </div>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenu>
                    ) : (
                        <Link key={href} href={href} className={cn("nav-link-desktop relative", pathname === href ? "nav-link-active" : "nav-link-inactive")}>
                            <Icon className="w-5 h-5 ml-2" />
                            {label}
                            {pathname === href && <span className="absolute bottom-0 right-0 left-0 h-[2px] bg-primary rounded-full animate-expand-x" />}
                        </Link>
                    )
                ))}
            </nav>
            <div className="hidden md:flex items-center gap-4">
                <SearchBox />
                <Button
                    variant="outline"
                    size="icon"
                    className="cursor-pointer"
                    aria-label="سبد خرید"
                >
                    <ShoppingCart className="h-4 w-4" />
                </Button>
                <Button
                    variant="outline"
                    size="default"
                    className="items-center gap-1 cursor-pointer"
                    aria-label="ورود یا ثبت نام"
                    onClick={() => setOpen(true)}
                >
                    <LogIn className="h-4 w-4" />
                    ورود / ثبت نام
                </Button>
                <LoginDialog open={open} onOpenChange={setOpen} />
            </div>
        </>
    );
}
