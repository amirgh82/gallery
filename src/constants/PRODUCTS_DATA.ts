import { Product } from '@/types/product';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'گوشی موبایل سامسونگ Galaxy S24',
    description: 'گوشی هوشمند پرچمدار سامسونگ با امکانات پیشرفته و کیفیت ساخت بالا',
    price: 25000000,
    discount: 10,
    imageUrl: '/images/IMG_2998-scaled.jpg',
    category: 'موبایل',
    model: 'Galaxy S24',
    color: 'مشکی',
    popularity: 95,
    stock: 15,
    brand: 'سامسونگ'
  },
  {
    id: '2',
    name: 'گوشی موبایل آیفون 15 پرو',
    description: 'جدیدترین گوشی اپل با چیپست A17 Pro و دوربین 48 مگاپیکسلی',
    price: 45000000,
    imageUrl: '/images/IMG_3224-scaled.jpg',
    category: 'موبایل',
    model: 'iPhone 15 Pro',
    color: 'طلایی',
    popularity: 98,
    stock: 8,
    brand: 'اپل'
  },
  {
    id: '3',
    name: 'گوشی موبایل شیائومی Redmi Note 13',
    description: 'گوشی میان‌رده با بهترین نسبت کیفیت به قیمت',
    price: 8500000,
    discount: 15,
    imageUrl: '/images/IMG_2998-scaled.jpg',
    category: 'موبایل',
    model: 'Redmi Note 13',
    color: 'آبی',
    popularity: 87,
    stock: 25,
    brand: 'شیائومی'
  },
  {
    id: '4',
    name: 'لپ‌تاپ ایسوس ROG Strix G15',
    description: 'لپ‌تاپ گیمینگ با پردازنده AMD Ryzen 7 و کارت گرافیک RTX 4060',
    price: 35000000,
    imageUrl: '/images/IMG_3224-scaled.jpg',
    category: 'لپ‌تاپ',
    model: 'ROG Strix G15',
    color: 'مشکی',
    popularity: 89,
    stock: 12,
    brand: 'ایسوس'
  },
  {
    id: '5',
    name: 'لپ‌تاپ مک‌بوک ایر M2',
    description: 'لپ‌تاپ فوق‌العاده سبک و قدرتمند اپل با چیپست M2',
    price: 52000000,
    discount: 5,
    imageUrl: '/images/IMG_2998-scaled.jpg',
    category: 'لپ‌تاپ',
    model: 'MacBook Air M2',
    color: 'نقره‌ای',
    popularity: 92,
    stock: 6,
    brand: 'اپل'
  },
  {
    id: '6',
    name: 'تبلت سامسونگ Galaxy Tab S9',
    description: 'تبلت پرمیوم با صفحه نمایش Super AMOLED و قلم S Pen',
    price: 18000000,
    imageUrl: '/images/IMG_3224-scaled.jpg',
    category: 'تبلت',
    model: 'Galaxy Tab S9',
    color: 'خاکستری',
    popularity: 84,
    stock: 18,
    brand: 'سامسونگ'
  },
  {
    id: '7',
    name: 'ساعت هوشمند اپل واچ سری 9',
    description: 'ساعت هوشمند پیشرفته با امکانات سلامتی و ورزشی',
    price: 15000000,
    discount: 8,
    imageUrl: '/images/IMG_2998-scaled.jpg',
    category: 'ساعت هوشمند',
    model: 'Apple Watch Series 9',
    color: 'قرمز',
    popularity: 91,
    stock: 22,
    brand: 'اپل'
  },
  {
    id: '8',
    name: 'هدفون بی‌سیم سونی WH-1000XM5',
    description: 'هدفون پریمیوم با کیفیت صدای بی‌نظیر و حذف نویز فعال',
    price: 12000000,
    imageUrl: '/images/IMG_3224-scaled.jpg',
    category: 'هدفون',
    model: 'WH-1000XM5',
    color: 'مشکی',
    popularity: 88,
    stock: 30,
    brand: 'سونی'
  },
  {
    id: '9',
    name: 'کیبورد مکانیکی لاجیتک MX Mechanical',
    description: 'کیبورد مکانیکی حرفه‌ای با بک‌لایت و اتصال بی‌سیم',
    price: 4500000,
    discount: 12,
    imageUrl: '/images/IMG_2998-scaled.jpg',
    category: 'لوازم جانبی',
    model: 'MX Mechanical',
    color: 'سفید',
    popularity: 79,
    stock: 40,
    brand: 'لاجیتک'
  },
  {
    id: '10',
    name: 'موس گیمینگ ریزر DeathAdder V3',
    description: 'موس گیمینگ پیشرفته با سنسور 30000 DPI',
    price: 2800000,
    imageUrl: '/images/IMG_3224-scaled.jpg',
    category: 'لوازم جانبی',
    model: 'DeathAdder V3',
    color: 'مشکی',
    popularity: 82,
    stock: 35,
    brand: 'ریزر'
  },
  {
    id: '11',
    name: 'گوشی موبایل هواوی P60 Pro',
    description: 'گوشی پیشرفته با دوربین Leica و شارژ سریع 88 وات',
    price: 28000000,
    imageUrl: '/images/IMG_2998-scaled.jpg',
    category: 'موبایل',
    model: 'P60 Pro',
    color: 'سبز',
    popularity: 86,
    stock: 14,
    brand: 'هواوی'
  },
  {
    id: '12',
    name: 'لپ‌تاپ لنوو ThinkPad X1 Carbon',
    description: 'لپ‌تاپ کسب و کار فوق‌العاده سبک و قدرتمند',
    price: 42000000,
    discount: 7,
    imageUrl: '/images/IMG_3224-scaled.jpg',
    category: 'لپ‌تاپ',
    model: 'ThinkPad X1 Carbon',
    color: 'مشکی',
    popularity: 90,
    stock: 9,
    brand: 'لنوو'
  }
];

// آپشن‌های فیلتر
export const FILTER_OPTIONS = {
  models: [
    { value: 'Galaxy S24', label: 'Galaxy S24' },
    { value: 'iPhone 15 Pro', label: 'iPhone 15 Pro' },
    { value: 'Redmi Note 13', label: 'Redmi Note 13' },
    { value: 'ROG Strix G15', label: 'ROG Strix G15' },
    { value: 'MacBook Air M2', label: 'MacBook Air M2' },
    { value: 'Galaxy Tab S9', label: 'Galaxy Tab S9' },
    { value: 'Apple Watch Series 9', label: 'Apple Watch Series 9' },
    { value: 'WH-1000XM5', label: 'WH-1000XM5' },
    { value: 'MX Mechanical', label: 'MX Mechanical' },
    { value: 'DeathAdder V3', label: 'DeathAdder V3' },
    { value: 'P60 Pro', label: 'P60 Pro' },
    { value: 'ThinkPad X1 Carbon', label: 'ThinkPad X1 Carbon' }
  ],
  colors: [
    { value: 'مشکی', label: 'مشکی' },
    { value: 'سفید', label: 'سفید' },
    { value: 'آبی', label: 'آبی' },
    { value: 'قرمز', label: 'قرمز' },
    { value: 'طلایی', label: 'طلایی' },
    { value: 'نقره‌ای', label: 'نقره‌ای' },
    { value: 'خاکستری', label: 'خاکستری' },
    { value: 'سبز', label: 'سبز' }
  ],
  categories: [
    { value: 'موبایل', label: 'موبایل' },
    { value: 'لپ‌تاپ', label: 'لپ‌تاپ' },
    { value: 'تبلت', label: 'تبلت' },
    { value: 'ساعت هوشمند', label: 'ساعت هوشمند' },
    { value: 'هدفون', label: 'هدفون' },
    { value: 'لوازم جانبی', label: 'لوازم جانبی' }
  ],
  sortOptions: [
    { value: 'popularity', label: 'محبوب‌ترین' },
    { value: 'price_asc', label: 'ارزان‌ترین' },
    { value: 'price_desc', label: 'گران‌ترین' },
    { value: 'newest', label: 'جدیدترین' }
  ]
};

// محدوده قیمت
export const PRICE_RANGE = {
  min: 0,
  max: 60000000,
  step: 1000000
};
