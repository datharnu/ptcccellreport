import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface RecentReportsProps {
    reports: any[];
}

export function RecentReports({ reports }: RecentReportsProps) {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 flex justify-between items-center border-b border-gray-50">
                <h3 className="text-lg font-bold text-gray-800">Recent Cell Reports</h3>
                <Link
                    href="/dashboard/reports"
                    className="text-[#155DFC] text-sm font-semibold flex items-center gap-1 hover:underline"
                >
                    View All <ArrowRight size={16} />
                </Link>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-xs font-bold text-gray-400 border-b border-gray-50 uppercase tracking-wider">
                            <th className="px-6 py-4">Cell Name</th>
                            <th className="px-6 py-4">Leader</th>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4">Attendance</th>
                            <th className="px-6 py-4">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {reports.map((report, index) => (
                            <tr key={index} className="text-sm text-gray-700 hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-4 font-semibold text-gray-800">{report.cellName}</td>
                                <td className="px-6 py-4">{report.cellLeader}</td>
                                <td className="px-6 py-4 text-[#155DFC]">{new Date(report.meetingDate).toLocaleDateString()}</td>
                                <td className="px-6 py-4">{report.totalAttendance}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${report.meetingHeld ? "bg-[#00C48C1A] text-[#00C48C]" : "bg-red-50 text-red-500"
                                        }`}>
                                        {report.meetingHeld ? "SUBMITTED" : "NO MEETING"}
                                    </span>
                                </td>
                            </tr>
                        ))}
                        {reports.length === 0 && (
                            <tr>
                                <td colSpan={5} className="px-6 py-10 text-center text-gray-400 font-medium">
                                    No recent reports available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
