'use client';

import { useState } from 'react';
import { Store, ShoppingCart, Truck, CreditCard } from 'lucide-react';
import { FAQ_DATA } from '../../../constants/FAQ_DATA';
import { FAQItemCard } from './FAQItemCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
    { key: 'all', label: 'همه سوالات', icon: null },
    { key: 'store', label: 'فروشگاه', icon: Store },
    { key: 'order', label: 'ثبت سفارش', icon: ShoppingCart },
    { key: 'shipping', label: 'ارسال', icon: Truck },
    { key: 'payment', label: 'پرداخت', icon: CreditCard },
] as const;

export const FAQSection = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const filteredFAQs = selectedCategory === 'all'
        ? FAQ_DATA
        : FAQ_DATA.filter(faq => faq.category === selectedCategory);

    return (
        <div className="space-y-8">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                        <Button
                            key={category.key}
                            variant={selectedCategory === category.key ? "default" : "outline"}
                            onClick={() => setSelectedCategory(category.key)}
                            className="flex items-center gap-2 font-medium cursor-pointer"
                        >
                            {Icon && <Icon className="w-4 h-4" />}
                            {category.label}
                        </Button>
                    );
                })}
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
                {filteredFAQs.length > 0 ? (
                    filteredFAQs.map((faq) => (
                        <FAQItemCard key={faq.id} faq={faq} />
                    ))
                ) : (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground text-lg">
                            سوالی در این دسته‌بندی یافت نشد.
                        </p>
                    </div>
                )}
            </div>

            {/* Contact Section */}
            <Card className="mt-12 border border-border">
                <CardContent className="p-6">
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-foreground mb-3">
                            سوال شما پاسخ داده نشد؟
                        </h3>
                        <p className="text-muted-foreground mb-4">
                            تیم پشتیبانی ما آماده پاسخگویی به سوالات شماست
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                            <Button asChild>
                                <a href="tel:02122334455" className="flex items-center gap-2">
                                    📞 تماس با پشتیبانی
                                </a>
                            </Button>
                            <Button variant="outline" asChild>
                                <a href="mailto:support@abutorab.com" className="flex items-center gap-2">
                                    ✉️ ارسال ایمیل
                                </a>
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
