import { LucideIcon } from "lucide-react";

interface ValueCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    bgColor?: string;
    borderColor?: string;
    titleColor?: string;
    iconColor?: string;
}

export default function ValueCard({
    icon: Icon,
    title,
    description,
    bgColor = "bg-blue-50 dark:bg-blue-950/30",
    borderColor = "border-blue-100 dark:border-blue-800/50",
    titleColor = "text-blue-800 dark:text-blue-300",
    iconColor = "text-blue-600 dark:text-blue-400"
}: ValueCardProps) {
    return (
        <div className={`${bgColor} rounded-xl p-6 border ${borderColor} transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer group`}>
            <div className="flex items-center mb-4">
                <Icon className={`w-8 h-8 ${iconColor} ml-3 transition-all duration-300 group-hover:scale-110`} />
                <h3 className={`text-xl font-bold ${titleColor} group-hover:scale-105 transition-transform duration-300`}>{title}</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                {description}
            </p>
        </div>
    );
}
