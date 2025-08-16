import { LucideIcon } from "lucide-react";

interface ContactCardProps {
    icon: LucideIcon;
    title: string;
    info: string[];
    bgColor?: string;
    iconBgColor?: string;
    iconColor?: string;
}

export default function ContactCard({
    icon: Icon,
    title,
    info,
    bgColor = "bg-blue-50 dark:bg-blue-950/30",
    iconBgColor = "bg-blue-100 dark:bg-blue-900/50",
    iconColor = "text-blue-600 dark:text-blue-400"
}: ContactCardProps) {
    return (
        <div className={`flex items-center gap-4 space-x-4 space-x-reverse ${bgColor} p-4 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer border border-blue-200/50 dark:border-blue-800/30`}>
            <div className={`w-12 h-12 ${iconBgColor} rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                <Icon className={`w-6 h-6 ${iconColor} transition-all duration-300 group-hover:scale-110`} />
            </div>
            <div>
                <h3 className="font-bold text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">{title}</h3>
                {info.map((item, index) => (
                    <p key={index} className="text-sm text-gray-600 dark:text-gray-400 ltr group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                        {item}
                    </p>
                ))}
            </div>
        </div>
    );
}
