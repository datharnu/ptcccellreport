"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "Jan", line1: 1200, line2: 1000, line3: 900, line4: 1500, line5: 1800 },
    { name: "Feb", line1: 1400, line2: 1300, line3: 1100, line4: 1600, line5: 1700 },
    { name: "Mar", line1: 1300, line2: 1500, line3: 1200, line4: 1700, line5: 2000 },
    { name: "Apr", line1: 1400, line2: 1400, line3: 1300, line4: 1800, line5: 2200 },
    { name: "May", line1: 1600, line2: 1600, line3: 1500, line4: 2000, line5: 2300 },
    { name: "Jun", line1: 1800, line2: 1700, line3: 1600, line4: 2200, line5: 2500 },
    { name: "Jul", line1: 1700, line2: 1900, line3: 1800, line4: 2300, line5: 2400 },
];

export function GrowthTrends() {
    return (
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm h-[450px] flex flex-col">
            <div className="flex justify-between items-start mb-8">
                <div>
                    <h3 className="text-lg font-bold text-gray-800">Growth Trends</h3>
                    <p className="text-sm text-[#155DFC] font-medium">Weekly church participation</p>
                </div>
                <select className="bg-gray-50 border border-gray-100 rounded-lg px-3 py-1.5 text-xs font-semibold text-gray-500 focus:outline-none cursor-pointer">
                    <option>Last 7 Months</option>
                    <option>Last 12 Months</option>
                </select>
            </div>

            <div className="flex-1 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#94A3B8', fontSize: 12 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#94A3B8', fontSize: 12 }}
                            domain={[0, 3000]}
                            ticks={[0, 750, 1500, 2250, 3000]}
                        />
                        <Tooltip
                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
                        />
                        <Line
                            type="monotone"
                            dataKey="line1"
                            stroke="#155DFC"
                            strokeWidth={3}
                            dot={false}
                            activeDot={{ r: 6 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="line2"
                            stroke="#A855F7"
                            strokeWidth={3}
                            dot={false}
                        />
                        <Line
                            type="monotone"
                            dataKey="line3"
                            stroke="#EC4899"
                            strokeWidth={3}
                            dot={false}
                        />
                        <Line
                            type="monotone"
                            dataKey="line4"
                            stroke="#22C55E"
                            strokeWidth={3}
                            dot={false}
                        />
                        <Line
                            type="monotone"
                            dataKey="line5"
                            stroke="#F59E0B"
                            strokeWidth={3}
                            dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
