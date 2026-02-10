"use client";

import { LayoutDashboard, FileText, Users, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const navItems = [
        { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
        { label: "Report", href: "/dashboard/reports", icon: FileText },
        { label: "Cells", href: "/dashboard/cells", icon: Users },
    ];

    return (
        <div className="flex h-screen bg-[#F8F9FB]">
            {/* Sidebar */}
            <aside className="w-64 bg-[#155DFC] text-white flex flex-col pt-8">
                <div className="px-6 mb-10">
                    <h1 className="text-2xl font-bold">PTCC Cell</h1>
                </div>

                <nav className="flex-1 px-4 space-y-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                        ? "bg-white text-[#155DFC]"
                                        : "hover:bg-white/10 text-white font-normal"
                                    }`}
                            >
                                <item.icon size={20} />
                                <span className="font-medium">{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 mt-auto">
                    <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg hover:bg-white/10 transition-colors text-left">
                        <LogOut size={20} />
                        <span className="font-medium">Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}
