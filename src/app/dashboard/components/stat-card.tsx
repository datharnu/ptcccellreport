import { LucideIcon } from "lucide-react";

interface StatCardProps {
    title: string;
    value: string;
    change: string;
    isPositive: boolean;
    icon: LucideIcon;
    iconBgColor: string;
    iconColor: string;
}

export function StatCard({
    title,
    value,
    change,
    isPositive,
    icon: Icon,
    iconBgColor,
    iconColor,
}: StatCardProps) {
    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4">
            <div className="flex justify-between items-start">
                <div className="space-y-1">
                    <p className="text-gray-500 text-sm font-medium">{title}</p>
                    <h3 className="text-2xl font-bold">{value}</h3>
                </div>
                <div
                    className="p-2.5 rounded-xl flex items-center justify-center transition-transform hover:scale-110"
                    style={{ backgroundColor: iconBgColor }}
                >
                    <Icon size={22} style={{ color: iconColor }} />
                </div>
            </div>
            <div className="flex items-center gap-1.5">
                <div className={`flex items-center text-xs font-semibold ${isPositive ? 'text-[#00C48C]' : 'text-[#FF4D4D]'}`}>
                    <span className="mr-0.5">{isPositive ? '↗' : '↘'}</span>
                    {change}
                </div>
                <span className="text-gray-400 text-xs">vs. previous month</span>
            </div>
        </div>
    );
}
