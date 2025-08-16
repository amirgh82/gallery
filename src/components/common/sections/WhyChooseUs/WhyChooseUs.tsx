import { Package, Clock, Users, Heart } from "lucide-react";
import FeatureCard from "../../cards/FeatureCard/FeatureCard";

interface WhyChooseUsProps {
    title?: string;
    className?: string;
}

const features = [
    {
        icon: Package,
        title: "کیفیت برتر",
        description: "محصولات با کیفیت تضمین شده",
        bgColor: "bg-blue-100 dark:bg-blue-900/40",
        iconColor: "text-blue-600 dark:text-blue-400"
    },
    {
        icon: Clock,
        title: "ارسال سریع",
        description: "تحویل به موقع در سراسر کشور",
        bgColor: "bg-green-100 dark:bg-green-900/40",
        iconColor: "text-green-600 dark:text-green-400"
    },
    {
        icon: Users,
        title: "پشتیبانی ۲۴/۷",
        description: "پاسخگویی در تمام ساعات روز",
        bgColor: "bg-purple-100 dark:bg-purple-900/40",
        iconColor: "text-purple-600 dark:text-purple-400"
    },
    {
        icon: Heart,
        title: "رضایت مشتری",
        description: "اولویت اول ما رضایت شماست",
        bgColor: "bg-orange-100 dark:bg-orange-900/40",
        iconColor: "text-orange-600 dark:text-orange-400"
    }
];

export default function WhyChooseUs({
    title = "چرا فروشگاه ابوتراب؟",
    className = "bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700"
}: WhyChooseUsProps) {
    return (
        <section className={className}>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
                {title}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                        bgColor={feature.bgColor}
                        iconColor={feature.iconColor}
                    />
                ))}
            </div>
        </section>
    );
}
