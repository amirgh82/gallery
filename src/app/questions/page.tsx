import { FAQSection } from "@/components/features/FAQ/FAQSection";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'سوالات متداول - فروشگاه ابوتراب',
  description: 'پاسخ سوالات متداول در مورد خرید، ثبت سفارش، ارسال و درگاه پرداخت',
  keywords: 'سوالات متداول، FAQ، خرید، ارسال، پرداخت، فروشگاه ابوتراب',
};

export default function QuestionsPage() {
  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            سوالات متداول
          </h1>
          <p className="text-lg text-muted-foreground">
            پاسخ سوالات رایج شما در مورد خرید و خدمات فروشگاه
          </p>
        </div>
        
        <FAQSection />
      </div>
    </div>
  );
}
