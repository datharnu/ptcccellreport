import { Users, UserPlus, Heart, Wallet } from "lucide-react";
import { Header } from "./components/header";
import { StatCard } from "./components/stat-card";
import { GrowthTrends } from "./components/growth-trends";
import { RecognitionCard } from "./components/recognition-card";
import { RecentReports } from "./components/recent-reports";

export default function DashboardPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <div className="p-8 space-y-8 max-w-[1600px] mx-auto w-full">
                {/* Stat Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard
                        title="Total Attendance"
                        value="180"
                        change="100%"
                        isPositive={true}
                        icon={Users}
                        iconBgColor="#A855F71A"
                        iconColor="#A855F7"
                    />
                    <StatCard
                        title="New Converts"
                        value="12"
                        change="100%"
                        isPositive={true}
                        icon={UserPlus}
                        iconBgColor="#155DFC1A"
                        iconColor="#155DFC"
                    />
                    <StatCard
                        title="First timers"
                        value="18"
                        change="92%"
                        isPositive={false}
                        icon={Heart}
                        iconBgColor="#EC48991A"
                        iconColor="#EC4899"
                    />
                    <StatCard
                        title="Total Offering"
                        value="₦66,000"
                        change="100%"
                        isPositive={true}
                        icon={Wallet}
                        iconBgColor="#22C55E1A"
                        iconColor="#22C55E"
                    />
                </div>

                {/* Mid Section: Chart & Recognition */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <GrowthTrends />
                    </div>
                    <div className="lg:col-span-1">
                        <RecognitionCard />
                    </div>
                </div>

                {/* Bottom Section: Recent Reports */}
                <div className="pb-8">
                    <RecentReports />
                </div>
            </div>
        </div>
    );
}
