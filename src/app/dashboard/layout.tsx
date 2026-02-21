"use client";

import { useState, useEffect } from "react";
import { LayoutDashboard, FileText, Users, LogOut, ShieldAlert } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const router = useRouter();
    const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

    useEffect(() => {
        const userStr = localStorage.getItem("user");
        if (!userStr) {
            toast.error("Please login first");
            router.push("/sign-in");
            return;
        }

        try {
            const user = JSON.parse(userStr);
            if (user.role !== "admin") {
                toast.error("Access Denied: You do not have admin privileges");
                router.push("/sign-in");
                return;
            }
            setIsAuthorized(true);
        } catch (e) {
            router.push("/sign-in");
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        toast.success("Logged out successfully");
        router.push("/sign-in");
    };

    const navItems = [
        { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
        { label: "Report", href: "/dashboard/reports", icon: FileText },
        { label: "Cells", href: "/dashboard/cells", icon: Users },
    ];

    if (isAuthorized === null) {
        return (
            <div className="flex h-screen items-center justify-center bg-[#F8F9FB]">
                <div className="animate-pulse flex flex-col items-center gap-4">
                    <div className="w-12 h-12 bg-[#155DFC]/20 rounded-full flex items-center justify-center">
                        <ShieldAlert className="text-[#155DFC]" size={24} />
                    </div>
                    <p className="text-sm font-bold text-gray-400">Verifying access...</p>
                </div>
            </div>
        );
    }

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
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 w-full rounded-lg hover:bg-white/10 transition-colors text-left"
                    >
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
