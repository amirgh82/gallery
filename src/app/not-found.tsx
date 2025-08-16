"use client";

import { Button } from "@/components/ui/button";
import { Home, ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

    const handleGoBack = () => {
        if (window.history.length > 1) {
            router.back();
        } else {
            router.push('/');
        }
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4" dir="rtl">
            <div className="text-center max-w-2xl mx-auto">
                {/* 404 Number */}
                <div className="mb-8">
                    <h1 className="text-9xl md:text-[12rem] font-bold  leading-none select-none">
                        ۴۰۴
                    </h1>
                </div>

                {/* Main Content */}
                <div className="bg-background border border-border rounded-3xl shadow-lg dark:shadow-slate-900/20 p-8 md:p-12 mb-8">
                    <div className="mb-6">
                        <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
                            <Search className="w-12 h-12 text-muted-foreground" />
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            صفحه مورد نظر یافت نشد
                        </h2>

                        <p className="text-lg text-muted-foreground leading-relaxed mb-2">
                            متأسفانه صفحه‌ای که به دنبال آن می‌گردید وجود ندارد یا منتقل شده است.
                        </p>

                        <p className="text-muted-foreground/80">
                            ممکن است آدرس اشتباه وارد شده باشد یا صفحه حذف شده باشد.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            onClick={handleGoBack}
                            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl font-medium text-lg transition-all duration-200 hover:shadow-lg cursor-pointer"
                        >
                            <ArrowRight className="w-5 h-5 mr-2" />
                            بازگشت به صفحه قبل
                        </Button>

                        <Link href="/" className="w-full sm:w-auto">
                            <Button
                                variant="outline"
                                className="w-full bg-background hover:bg-muted text-foreground border border-border px-8 py-3 rounded-xl font-medium text-lg transition-all duration-200 hover:shadow-md cursor-pointer"
                            >
                                <Home className="w-5 h-5 mr-2" />
                                صفحه اصلی
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Helpful Links */}
                <div className="bg-muted/50 rounded-2xl p-6 border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                        صفحات مفید
                    </h3>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <Link href="/" className="text-primary hover:text-primary/80 transition-colors">
                            خانه
                        </Link>
                        <span className="text-muted-foreground">|</span>
                        <Link href="/products" className="text-primary hover:text-primary/80 transition-colors">
                            محصولات
                        </Link>
                        <span className="text-muted-foreground">|</span>
                        <Link href="/about-me" className="text-primary hover:text-primary/80 transition-colors">
                            درباره ما
                        </Link>
                        <span className="text-muted-foreground">|</span>
                        <Link href="/questions" className="text-primary hover:text-primary/80 transition-colors">
                            سوالات متداول
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
