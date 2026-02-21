"use client";

import { useState, useEffect } from "react";
import { Users, UserPlus, Heart, Wallet, Loader2 } from "lucide-react";
import { Header } from "./components/header";
import { StatCard } from "./components/stat-card";
import { GrowthTrends } from "./components/growth-trends";
import { RecognitionCard } from "./components/recognition-card";
import { RecentReports } from "./components/recent-reports";
import api from "@/lib/api";
import { toast } from "react-hot-toast";

export default function DashboardPage() {
    const [stats, setStats] = useState<any>(null);
    const [trends, setTrends] = useState<any[]>([]);
    const [recognition, setRecognition] = useState<any>(null);
    const [recentReports, setRecentReports] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const [statsRes, reportsRes, trendsRes, recognitionRes] = await Promise.all([
                api.get("/dashboard/stats"),
                api.get("/cell-reports"),
                api.get("/dashboard/trends"),
                api.get("/dashboard/recognition")
            ]);
            setStats(statsRes.data.data);
            setRecentReports(reportsRes.data.data.slice(0, 5)); // Get top 5
            setTrends(trendsRes.data.data);
            setRecognition(recognitionRes.data.data);
        } catch (error) {
            toast.error("Failed to load dashboard data");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col">
                <Header />
                <div className="flex-1 flex flex-col items-center justify-center gap-4">
                    <Loader2 className="animate-spin text-[#155DFC]" size={48} />
                    <p className="text-gray-500 font-medium">Loading Dashboard...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-[#F8F9FB]">
            <Header />

            <div className="p-8 space-y-8 max-w-[1600px] mx-auto w-full">
                {/* Stat Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard
                        title="Total Attendance"
                        value={stats?.totalAttendance || 0}
                        change="Overall"
                        isPositive={true}
                        icon={Users}
                        iconBgColor="#A855F71A"
                        iconColor="#A855F7"
                    />
                    <StatCard
                        title="New Converts"
                        value={stats?.newConverts || 0}
                        change="Overall"
                        isPositive={true}
                        icon={UserPlus}
                        iconBgColor="#155DFC1A"
                        iconColor="#155DFC"
                    />
                    <StatCard
                        title="First timers"
                        value={stats?.firstTimers || 0}
                        change="Overall"
                        isPositive={true}
                        icon={Heart}
                        iconBgColor="#EC48991A"
                        iconColor="#EC4899"
                    />
                    <StatCard
                        title="Total Offering"
                        value={`₦${Number(stats?.totalOffering || 0).toLocaleString()}`}
                        change="Overall"
                        isPositive={true}
                        icon={Wallet}
                        iconBgColor="#22C55E1A"
                        iconColor="#22C55E"
                    />
                </div>

                {/* Mid Section: Chart & Recognition */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <GrowthTrends data={trends} />
                    </div>
                    <div className="lg:col-span-1">
                        <RecognitionCard data={recognition} />
                    </div>
                </div>

                {/* Bottom Section: Recent Reports */}
                <div className="pb-8">
                    <RecentReports reports={recentReports} />
                </div>
            </div>
        </div>
    );
}
