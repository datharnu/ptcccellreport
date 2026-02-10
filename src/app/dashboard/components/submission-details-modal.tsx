"use client";

import { X } from "lucide-react";

interface SubmissionDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    report: any; // Using any for now, can be typed properly
}

export function SubmissionDetailsModal({ isOpen, onClose, report }: SubmissionDetailsModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
            <div className="bg-white rounded-[24px] w-full max-w-[600px] max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-200">
                {/* Header */}
                <div className="p-8 pb-4 flex justify-between items-start sticky top-0 bg-white z-10">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">Submission Details</h2>
                        <p className="text-sm text-gray-400 font-medium">Full details of the cell report</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="p-8 pt-4 space-y-10">
                    {/* Main Details Grid */}
                    <div className="grid grid-cols-2 gap-y-6 gap-x-12">
                        <div>
                            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Cell Name</p>
                            <p className="text-sm font-semibold text-gray-800">{report.cell}</p>
                        </div>
                        <div>
                            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Leader's Name</p>
                            <p className="text-sm font-semibold text-gray-800">{report.leader}</p>
                        </div>
                        <div>
                            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Month</p>
                            <p className="text-sm font-semibold text-gray-800">{report.month}</p>
                        </div>
                        <div>
                            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Location</p>
                            <p className="text-sm font-semibold text-gray-800">Aratumi</p>
                        </div>
                        <div>
                            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Meeting Date</p>
                            <p className="text-sm font-semibold text-[#155DFC] underline decoration-skip-ink">{report.date}</p>
                        </div>
                        <div>
                            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Meeting Time</p>
                            <p className="text-sm font-semibold text-gray-800">17:05 - 18:10</p>
                        </div>
                        <div className="col-span-1">
                            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Meeting Type</p>
                            <p className="text-sm font-semibold text-gray-800">Meet & Greet - Planning session</p>
                        </div>
                        <div>
                            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Who Led Meeting</p>
                            <p className="text-sm font-semibold text-gray-800">Ezinne Chijioke</p>
                        </div>
                    </div>

                    {/* Attendance Breakdown */}
                    <div className="space-y-6">
                        <h3 className="text-base font-bold text-gray-900 border-none">Attendance Breakdown</h3>
                        <div className="grid grid-cols-3 gap-y-8 gap-x-4">
                            <div>
                                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Total Attendance</p>
                                <p className="text-2xl font-black text-[#A855F7]">{report.attendance}</p>
                            </div>
                            <div>
                                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Married Men</p>
                                <p className="text-2xl font-black text-gray-800">0</p>
                            </div>
                            <div>
                                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Married Women</p>
                                <p className="text-2xl font-black text-gray-800">0</p>
                            </div>
                            <div>
                                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Young Adults & Teens</p>
                                <p className="text-2xl font-black text-gray-800">0</p>
                            </div>
                            <div>
                                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Children</p>
                                <p className="text-2xl font-black text-gray-800">0</p>
                            </div>
                            <div>
                                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">New Converts</p>
                                <p className="text-2xl font-black text-[#00C48C]">{report.converts}</p>
                            </div>
                            <div>
                                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">First Timers (Church)</p>
                                <p className="text-2xl font-black text-gray-800">0</p>
                            </div>
                            <div>
                                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">First Timers (Outside)</p>
                                <p className="text-2xl font-black text-gray-800">0</p>
                            </div>
                        </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-6">
                        <h3 className="text-base font-bold text-gray-900">Additional Information</h3>
                        <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                            <div>
                                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Home Cell Address</p>
                                <p className="text-sm font-semibold text-gray-800">110 aratumi</p>
                            </div>
                            <div>
                                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Outreach Activity</p>
                                <p className="text-sm font-semibold text-gray-800">No</p>
                            </div>
                            <div>
                                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Offering</p>
                                <p className="text-sm font-semibold text-gray-800">$0</p>
                            </div>
                            <div>
                                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Challenge/Feedback</p>
                                <p className="text-sm font-semibold text-gray-800">N/A</p>
                            </div>
                            <div className="col-span-2">
                                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Testimony</p>
                                <p className="text-sm font-semibold text-gray-800">N/A</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
