"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";

interface GrowthTrendsProps {
    data: any[];
}

export function GrowthTrends({ data }: GrowthTrendsProps) {
    // If no data, show a placeholder message or empty chart
    if (!data || data.length === 0) {
        return (
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm h-[450px] flex flex-col items-center justify-center">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Growth Trends</h3>
                <p className="text-gray-400">Not enough data to display trends yet.</p>
            </div>
        );
    }

    return (
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm h-[450px] flex flex-col">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-lg font-bold text-gray-800">Growth Trends</h3>
                    <p className="text-sm text-[#155DFC] font-medium">Monthly church performance</p>
                </div>
                <select className="bg-gray-50 border border-gray-100 rounded-lg px-3 py-1.5 text-xs font-semibold text-gray-500 focus:outline-none cursor-pointer">
                    <option>Last 7 Months</option>
                </select>
            </div>

            <div className="flex-1 w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#94A3B8', fontSize: 11 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#94A3B8', fontSize: 11 }}
                        />
                        <Tooltip
                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
                        />
                        <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px', fontSize: '11px', fontWeight: 'bold' }} />
                        <Line
                            name="Attendance"
                            type="monotone"
                            dataKey="attendance"
                            stroke="#155DFC"
                            strokeWidth={3}
                            dot={{ r: 4, fill: '#155DFC', strokeWidth: 0 }}
                            activeDot={{ r: 6 }}
                        />
                        <Line
                            name="Converts"
                            type="monotone"
                            dataKey="converts"
                            stroke="#A855F7"
                            strokeWidth={3}
                            dot={{ r: 4, fill: '#A855F7', strokeWidth: 0 }}
                        />
                        <Line
                            name="First Timers"
                            type="monotone"
                            dataKey="firstTimers"
                            stroke="#EC4899"
                            strokeWidth={3}
                            dot={{ r: 4, fill: '#EC4899', strokeWidth: 0 }}
                        />
                        <Line
                            name="Offering (k)"
                            type="monotone"
                            dataKey="offering"
                            stroke="#22C55E"
                            strokeWidth={3}
                            dot={{ r: 4, fill: '#22C55E', strokeWidth: 0 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
