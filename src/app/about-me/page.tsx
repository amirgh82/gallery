import { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, Target, Eye, Heart } from "lucide-react";
import {
    HeroSection,
    WhyChooseUs,
    ValueCard,
    ContactCard
} from "@/components/common";

export const metadata: Metadata = {
    title: 'درباره ما - فروشگاه ابوتراب',
    description: 'آشنایی با فروشگاه ابوتراب، اهداف، چشم انداز و راه های ارتباطی ما',
    keywords: 'درباره ما، فروشگاه ابوتراب، اهداف، چشم انداز، تماس با ما',
};

export default function AboutPage() {
    return (
        <div className="space-y-12 py-8">
            {/* Hero Section */}
            <HeroSection
                imageUrl="/images/IMG_2998-scaled.jpg"
                title="درباره فروشگاه ابوتراب"
                subtitle="ارائه دهنده بهترین محصولات با کیفیت برتر"
                alt="فروشگاه ابوتراب"
            />

            {/* Introduction */}
            <section className="bg-white dark:bg-gray-900 rounded-xl p-6 md:p-8 shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-md">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200">
                        معرفی فروشگاه ابوتراب
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        فروشگاه ابوتراب با سابقه‌ای درخشان در زمینه ارائه محصولات باکیفیت و خدمات مطلوب،
                        همواره در تلاش برای رضایت مشتریان عزیز بوده است. ما با تکیه بر تجربه و دانش روز،
                        بهترین محصولات را با قیمت‌های مناسب و خدمات پس از فروش عالی به شما ارائه می‌دهیم.
                    </p>
                </div>
            </section>

            {/* Mission, Vision, Values */}
            <section className="grid md:grid-cols-3 gap-6">
                <ValueCard
                    icon={Target}
                    title="رسالت ما"
                    description="ارائه محصولات با کیفیت برتر و خدمات مشتری محور برای بهبود کیفیت زندگی مشتریان عزیز و ایجاد تجربه‌ای مطلوب از خرید آنلاین"
                    bgColor="bg-blue-50 dark:bg-blue-950/30"
                    borderColor="border-blue-100 dark:border-blue-800/50"
                    titleColor="text-blue-800 dark:text-blue-300"
                    iconColor="text-blue-600 dark:text-blue-400"
                />

                <ValueCard
                    icon={Eye}
                    title="چشم انداز ما"
                    description="تبدیل شدن به پیشرو در زمینه فروش آنلاین محصولات باکیفیت و کسب جایگاه برتر در بین فروشگاه‌های معتبر کشور"
                    bgColor="bg-green-50 dark:bg-green-950/30"
                    borderColor="border-green-100 dark:border-green-800/50"
                    titleColor="text-green-800 dark:text-green-300"
                    iconColor="text-green-600 dark:text-green-400"
                />

                <ValueCard
                    icon={Heart}
                    title="ارزش‌های ما"
                    description="صداقت، کیفیت، نوآوری، احترام به مشتری، تعهد به عهد و پیوستگی در ارائه خدمات بهتر از اصول ما محسوب می‌شوند"
                    bgColor="bg-purple-50 dark:bg-purple-950/30"
                    borderColor="border-purple-100 dark:border-purple-800/50"
                    titleColor="text-purple-800 dark:text-purple-300"
                    iconColor="text-purple-600 dark:text-purple-400"
                />
            </section>

            {/* Features */}
            <WhyChooseUs />

            {/* Contact Information */}
            <section className="bg-white dark:bg-gray-900 rounded-xl p-6 md:p-8 shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-md">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
                    راه‌های ارتباطی
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ContactCard
                        icon={Phone}
                        title="تلفن تماس"
                        info={["021-88776655", "0912-3456789"]}
                        bgColor="bg-blue-50 dark:bg-blue-950/30"
                        iconBgColor="bg-blue-100 dark:bg-blue-900/50"
                        iconColor="text-blue-600 dark:text-blue-400"
                    />

                    <ContactCard
                        icon={Mail}
                        title="ایمیل"
                        info={["info@abutorab.com", "support@abutorab.com"]}
                        bgColor="bg-green-50 dark:bg-green-950/30"
                        iconBgColor="bg-green-100 dark:bg-green-900/50"
                        iconColor="text-green-600 dark:text-green-400"
                    />

                    <ContactCard
                        icon={MapPin}
                        title="آدرس"
                        info={["تهران، خیابان ولیعصر", "پلاک ۱۲۳، واحد ۴"]}
                        bgColor="bg-purple-50 dark:bg-purple-950/30"
                        iconBgColor="bg-purple-100 dark:bg-purple-900/50"
                        iconColor="text-purple-600 dark:text-purple-400"
                    />

                    <ContactCard
                        icon={Clock}
                        title="ساعات کاری"
                        info={["شنبه تا پنج‌شنبه", "۸:۰۰ تا ۲۰:۰۰"]}
                        bgColor="bg-orange-50 dark:bg-orange-950/30"
                        iconBgColor="bg-orange-100 dark:bg-orange-900/50"
                        iconColor="text-orange-600 dark:text-orange-400"
                    />
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-xl p-6 md:p-8 text-white text-center transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    آماده همکاری با شما هستیم
                </h2>
                <p className="text-lg mb-6 opacity-90">
                    برای هرگونه سوال، پیشنهاد یا انتقاد با ما در تماس باشید
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="tel:02188776655"
                        className="bg-white text-blue-600 dark:bg-gray-100 dark:text-blue-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 dark:hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        تماس تلفنی
                    </a>
                    <a
                        href="mailto:info@abutorab.com"
                        className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 dark:hover:bg-gray-100 dark:hover:text-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        ارسال ایمیل
                    </a>
                </div>
            </section>
        </div>
    );
}
