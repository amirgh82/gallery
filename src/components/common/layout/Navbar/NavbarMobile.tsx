"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart, LogIn, ChevronDown, ChevronUp } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NAVBAR_LINKS } from "@/constants/NAVBAR_LINKS";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { LoginDialog } from "../../../features/LoginDialog/LoginDialog";
import { Basket } from "./Basket";


export function NavbarMobile() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

    const toggleExpanded = (href: string) => {
        setExpandedItems(prev => {
            const newSet = new Set(prev);
            if (newSet.has(href)) {
                newSet.delete(href);
            } else {
                newSet.add(href);
            }
            return newSet;
        });
    };

    return (
        <header className="md:hidden border-b w-full">
            <div className="flex flex-row items-center justify-between h-16">
                {/* Right side: Hamburger menu */}
                <div className="flex items-center">
                    <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>

                        <SheetTrigger asChild>
                            <Button className="cursor-pointer" variant="outline" size="icon" aria-label="Open menu">
                                <Menu />
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="right" className="px-6 py-8"  >
                            <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                            <div className="flex items-center justify-between mb-8">
                                <Link href="/" className="text-2xl font-extrabold text-primary">
                                    گالری ابوتراب
                                </Link>
                                <Button
                                    className="cursor-pointer"
                                    variant="outline"
                                    size="icon"
                                    onClick={() => setMobileOpen(false)}
                                    aria-label="Close menu"
                                >
                                    <X />
                                </Button>
                            </div>

                            <nav className="flex flex-col space-y-4">
                                {NAVBAR_LINKS.map(({ href, label, icon: Icon, children }) => (
                                    <div key={href} className="flex flex-col">
                                        {children && children.length > 0 ? (
                                            <div className="flex flex-col">
                                                <Button
                                                    variant={"ghost"}
                                                    onClick={() => toggleExpanded(href)}
                                                    className={cn(
                                                        "nav-link-mobile cursor-pointer flex items-center justify-between w-full",
                                                        pathname === href || children.some(child => pathname === child.href)
                                                            ? "nav-link-active"
                                                            : "nav-link-inactive"
                                                    )}
                                                >
                                                    <div className="flex items-center">
                                                        <Icon className="w-5 h-5 ml-2" />
                                                        {label}
                                                    </div>
                                                    {expandedItems.has(href) ? (
                                                        <ChevronUp className="w-4 h-4" />
                                                    ) : (
                                                        <ChevronDown className="w-4 h-4" />
                                                    )}
                                                </Button>

                                                {expandedItems.has(href) && (
                                                    <div className="mr-6 mt-2 flex flex-col space-y-2 animate-fade-in">
                                                        {children.map((child) => (
                                                            <Link
                                                                key={child.href}
                                                                href={child.href}
                                                                onClick={() => setMobileOpen(false)}
                                                                className={cn(
                                                                    "nav-link-mobile text-sm py-2 pr-4 border-r-2 border-gray-200 hover:border-primary transition-all duration-200",
                                                                    pathname === child.href
                                                                        ? "nav-link-active border-primary"
                                                                        : "nav-link-inactive hover:bg-primary/5"
                                                                )}
                                                            >
                                                                <child.icon className="w-4 h-4 ml-2" />
                                                                {child.label}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <Link
                                                href={href}
                                                onClick={() => setMobileOpen(false)}
                                                className={cn(
                                                    "nav-link-mobile",
                                                    pathname === href
                                                        ? "nav-link-active"
                                                        : "nav-link-inactive"
                                                )}
                                            >
                                                <Icon className="w-5 h-5 ml-2" />
                                                {label}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Center: Logo */}
                <div className="flex-1 flex justify-center">
                    <Link
                        href="/"
                        className="text-2xl font-extrabold tracking-tight text-primary select-none"
                    >
                        گالری ابوتراب
                    </Link>
                </div>

                {/* Left side: Cart + Login icon button */}
                <div className="flex items-center gap-4">
                  <Basket />
                    <Button
                        variant="outline"
                        size="icon"
                        className=" cursor-pointer"
                        aria-label="ورود یا ثبت نام"
                        onClick={() => setOpen(true)}
                    >
                        <LogIn className="h-4 w-4" />
                    </Button>

                    <LoginDialog open={open} onOpenChange={setOpen} />
                </div>
            </div>
        </header>
    );
}
