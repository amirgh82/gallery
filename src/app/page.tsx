
import { Banner, ProductCardSkeleton, ProductSlider, WhyChooseUs } from "@/components/common";

const bestSellerProducts = [
  {
    id: 1,
    name: "محصول شماره ۱",
    description: "توضیحات مربوط به محصول شماره ۱",
    price: 250000,
    imageUrl: "/images/IMG_2998-scaled.jpg",
    href: "/products/1",
  },
  {
    id: 2,
    name: "محصول شماره ۲",
    description: "توضیحات مربوط به محصول شماره ۲",
    price: 350000,
    imageUrl: "/images/IMG_3224-scaled.jpg",
    href: "/products/2",
  },
  {
    id: 3,
    name: "محصول شماره ۳",
    description: "توضیحات مربوط به محصول شماره ۳",
    price: 350000,
    imageUrl: "/images/IMG_3224-scaled.jpg",
    href: "/products/3",
  },
  {
    id: 4,
    name: "محصول شماره ۴",
    description: "توضیحات مربوط به محصول شماره ۴",
    price: 350000,
    imageUrl: "/images/IMG_3224-scaled.jpg",
    href: "/products/4",
  },
  {
    id: 5,
    name: "محصول شماره ۵",
    description: "توضیحات مربوط به محصول شماره ۵",
    price: 350000,
    imageUrl: "/images/IMG_3224-scaled.jpg",
    href: "/products/5",
  },
];


export default async function Page() {
  return (
    <div className="space-y-8">
      <Banner
        imageUrl="/images/IMG_2998-scaled.jpg"
        title="به وبسایت ما خوش آمدید"
        description="ارائه دهنده بهترین خدمات و محصولات"
      />

      <ProductSlider
        products={bestSellerProducts}
        title="پرفروش‌ترین محصولات"
      />

      <WhyChooseUs
        title="چرا فروشگاه ابوتراب را انتخاب کنید؟"
        className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900/50 dark:to-blue-950/30 rounded-xl p-6 md:p-8 border border-blue-100 dark:border-blue-800/30"
      />

      <ProductSlider
        products={bestSellerProducts}
        title="محبوب‌ترین محصولات"
      />

    </div>
  );
}