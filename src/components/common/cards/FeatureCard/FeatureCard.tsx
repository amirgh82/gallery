import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    bgColor?: string;
    iconColor?: string;
}

export default function FeatureCard({
    icon: Icon,
    title,
    description,
    bgColor = "bg-blue-100 dark:bg-blue-900/40",
    iconColor = "text-blue-600 dark:text-blue-400"
}: FeatureCardProps) {
    return (
        <div className="text-center space-y-3 group ">
            <div className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mx-auto border border-blue-200/30 dark:border-blue-700/30`}>
                <Icon className={`w-8 h-8 ${iconColor}`} />
            </div>
            <h3 className="font-bold text-gray-800 dark:text-gray-200">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 ">{description}</p>
        </div>
    );
}
