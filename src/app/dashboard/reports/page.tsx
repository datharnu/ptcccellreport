"use client";

import { useState, useEffect, useRef } from "react";
import { Search, Bell, MoreVertical, Eye, Trash2 } from "lucide-react";
import { SubmissionDetailsModal } from "../components/submission-details-modal";
import { DeleteConfirmationModal } from "../components/delete-confirmation-modal";

const reportsData = [
    { id: 1, cell: "Pearl LC", leader: "Bolu Thomas", month: "January", date: "Jan 24, 2026", status: "Held", attendance: 4, converts: 2, submitted: "Feb 2, 2026" },
    { id: 2, cell: "Glory LC", leader: "Adeola Tokosi", month: "January", date: "Jan 24, 2026", status: "Held", attendance: 5, converts: 3, submitted: "Feb 2, 2026" },
    { id: 3, cell: "Favour LC", leader: "Ezinne Chijioke", month: "January", date: "Jan 24, 2026", status: "Held", attendance: 6, converts: 0, submitted: "Feb 2, 2026" },
    { id: 4, cell: "Grace LC", leader: "Daniel Ahamba", month: "January", date: "Jan 24, 2026", status: "Held", attendance: 7, converts: 1, submitted: "Feb 2, 2026" },
    { id: 5, cell: "Light LC", leader: "Serah Akinyele", month: "January", date: "Jan 24, 2026", status: "Held", attendance: 4, converts: 3, submitted: "Feb 2, 2026" },
    { id: 6, cell: "Peace LC", leader: "Tinuola Grace", month: "January", date: "Jan 24, 2026", status: "Held", attendance: 5, converts: 0, submitted: "Feb 2, 2026" },
];

export default function ReportsPage() {
    const [activeMenuId, setActiveMenuId] = useState<number | null>(null);
    const [selectedReport, setSelectedReport] = useState<any>(null);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setActiveMenuId(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleActionClick = (id: number) => {
        setActiveMenuId(activeMenuId === id ? null : id);
    };

    const handleOpenView = (report: any) => {
        setSelectedReport(report);
        setIsViewModalOpen(true);
        setActiveMenuId(null);
    };

    const handleOpenDelete = (report: any) => {
        setSelectedReport(report);
        setIsDeleteModalOpen(true);
        setActiveMenuId(null);
    };

    const handleDeleteConfirm = () => {
        console.log("Deleting report:", selectedReport?.id);
        setIsDeleteModalOpen(false);
        setSelectedReport(null);
    };

    return (
        <div className="min-h-screen bg-[#F8F9FB]">
            {/* Header */}
            <header className="h-24 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-10">
                <div>
                    <h2 className="text-2xl font-extrabold text-[#111827]">Cell Leader Submissions</h2>
                    <p className="text-sm text-gray-500 font-medium">View and manage all reports</p>
                </div>

                <div className="flex items-center gap-6">
                    <button className="relative p-2 rounded-xl text-gray-400 hover:bg-gray-50 transition-colors">
                        <Bell size={22} />
                        <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#FF4D4D] rounded-full border-2 border-white"></span>
                    </button>

                    <div className="flex items-center gap-3 pl-4 border-l border-gray-100">
                        <div className="text-right">
                            <p className="text-sm font-bold text-gray-800 leading-none">Admin User</p>
                            <p className="text-[10px] font-medium text-gray-400 mt-1 uppercase tracking-wider">Super Admin</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-[#155DFC] flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-[#155DFC]/20">
                            AU
                        </div>
                    </div>
                </div>
            </header>

            <div className="p-8 space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search by cell, leader, or month..."
                            className="w-full bg-[#F8F9FB] border-none rounded-xl pl-12 pr-4 py-3 text-sm focus:ring-2 focus:ring-[#155DFC]/20 focus:outline-none placeholder:text-gray-400 transition-all"
                        />
                    </div>

                    <div>
                        <div className="inline-block border-b-2 border-black pb-1">
                            <span className="text-sm font-bold text-gray-900 cursor-pointer">All Submissions</span>
                        </div>
                        <p className="text-sm text-gray-400 mt-2">Detailed list of all cell reports</p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="text-[11px] font-bold text-gray-900 border-y border-gray-50 uppercase tracking-wider">
                                    <th className="px-6 py-5">Cell Name</th>
                                    <th className="px-6 py-5">Leader</th>
                                    <th className="px-6 py-5">Month</th>
                                    <th className="px-6 py-5">Date</th>
                                    <th className="px-6 py-5 text-center">Status</th>
                                    <th className="px-6 py-5 text-center">Attendance</th>
                                    <th className="px-6 py-5 text-center">New Converts</th>
                                    <th className="px-6 py-5">Submitted</th>
                                    <th className="px-6 py-5 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {reportsData.map((report) => (
                                    <tr key={report.id} className="text-[13px] text-gray-700 hover:bg-gray-50/50 transition-colors group">
                                        <td className="px-6 py-5 font-bold text-gray-900">{report.cell}</td>
                                        <td className="px-6 py-5 font-medium">{report.leader}</td>
                                        <td className="px-6 py-5 text-gray-500">{report.month}</td>
                                        <td className="px-6 py-5 text-gray-500">{report.date}</td>
                                        <td className="px-6 py-5 text-center">
                                            <span className="px-3 py-1 rounded-full bg-[#E7F9F2] text-[#00C48C] text-[10px] font-bold">
                                                {report.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-5 text-center font-medium">{report.attendance}</td>
                                        <td className="px-6 py-5 text-center font-medium">{report.converts}</td>
                                        <td className="px-6 py-5 text-[#94A3B8] font-medium">{report.submitted}</td>
                                        <td className="px-6 py-5 text-right relative">
                                            <button
                                                onClick={() => handleActionClick(report.id)}
                                                className={`p-2 rounded-lg transition-colors inline-block ${activeMenuId === report.id ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
                                            >
                                                <MoreVertical size={16} className={activeMenuId === report.id ? 'text-gray-900' : 'text-gray-400'} />
                                            </button>

                                            {activeMenuId === report.id && (
                                                <div
                                                    ref={menuRef}
                                                    className="absolute right-12 top-0 z-40 bg-white border border-gray-100 shadow-2xl rounded-xl w-32 py-2 text-left animate-in fade-in slide-in-from-right-2 duration-150"
                                                >
                                                    <button
                                                        onClick={() => handleOpenView(report)}
                                                        className="w-full px-4 py-2 text-xs font-semibold text-gray-600 flex items-center gap-2 hover:bg-gray-50"
                                                    >
                                                        <Eye size={14} className="text-gray-400" /> View
                                                    </button>
                                                    <button
                                                        onClick={() => handleOpenDelete(report)}
                                                        className="w-full px-4 py-2 text-xs font-semibold text-[#FF4D4D] flex items-center gap-2 hover:bg-red-50"
                                                    >
                                                        <Trash2 size={14} className="text-[#FF4D4D]" /> Delete
                                                    </button>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Modals */}
            {selectedReport && (
                <>
                    <SubmissionDetailsModal
                        isOpen={isViewModalOpen}
                        onClose={() => setIsViewModalOpen(false)}
                        report={selectedReport}
                    />
                    <DeleteConfirmationModal
                        isOpen={isDeleteModalOpen}
                        cellName={selectedReport.cell}
                        onClose={() => setIsDeleteModalOpen(false)}
                        onConfirm={handleDeleteConfirm}
                    />
                </>
            )}
        </div>
    );
}
