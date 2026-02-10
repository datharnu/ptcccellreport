"use client";

import { useState } from "react";
import { Bell, Plus } from "lucide-react";
import { AddCellModal } from "../components/add-cell-modal";

const cellsData = [
    { name: "Pearl LC", leader: "Bolu Thomas", location: "9 Abanise Street, Aratumi", created: "Feb 2, 2026" },
    { name: "Glory LC", leader: "Ezinne Chijioke", location: "2, Little Base Street, Ipaye", created: "Feb 2, 2026" },
    { name: "Grace LC", leader: "Adeola Tokosi", location: "2, Little Base Street, Ipaye", created: "Feb 2, 2026" },
    { name: "Favour LC", leader: "Daniel Ahamba", location: "9 Abanise Street, Aratumi", created: "Feb 2, 2026" },
    { name: "Light LC", leader: "Tinuola Grace", location: "9 Abanise Street, Aratumi", created: "Feb 2, 2026" },
    { name: "Peace LC", leader: "Serah Akinyele", location: "9 Abanise Street, Aratumi", created: "Feb 2, 2026" },
];

export default function CellsPage() {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const handleAddCell = (data: any) => {
        console.log("Adding cell with account:", data);
        // Logic to save cell to backend would go here
    };

    return (
        <div className="min-h-screen bg-[#F8F9FB]">
            {/* Header */}
            <header className="h-24 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-10">
                <div>
                    <h2 className="text-2xl font-extrabold text-[#111827]">Manage Cells</h2>
                    <p className="text-sm text-gray-500 font-medium">Add and manage cell group information</p>
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
                        <div className="w-10 h-10 rounded-full bg-[#155DFC] flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-[#155DFC]/20 cursor-pointer">
                            AU
                        </div>
                    </div>
                </div>
            </header>

            <div className="p-8">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    {/* Table Header Section */}
                    <div className="p-6 flex justify-between items-center bg-white border-b border-gray-50">
                        <div>
                            <h3 className="text-base font-bold text-gray-900">Cell Groups</h3>
                            <p className="text-sm text-gray-400 mt-1">List of all registered cell groups</p>
                        </div>
                        <button
                            onClick={() => setIsAddModalOpen(true)}
                            className="bg-[#155DFC] hover:bg-[#124ECC] text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all shadow-lg shadow-[#155DFC]/20 active:scale-95"
                        >
                            <Plus size={18} />
                            Add Cell
                        </button>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="text-[11px] font-bold text-gray-900 border-b border-gray-50 uppercase tracking-wider">
                                    <th className="px-8 py-5">Cell Name</th>
                                    <th className="px-8 py-5">Leader Name</th>
                                    <th className="px-8 py-5">Location</th>
                                    <th className="px-8 py-5">Created</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {cellsData.map((cell, index) => (
                                    <tr key={index} className="text-sm text-gray-700 hover:bg-gray-50/50 transition-colors group">
                                        <td className="px-8 py-5 font-bold text-gray-900">{cell.name}</td>
                                        <td className="px-8 py-5 font-medium">{cell.leader}</td>
                                        <td className="px-8 py-5 text-gray-500">{cell.location}</td>
                                        <td className="px-8 py-5 text-[#94A3B8] font-medium">{cell.created}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Modals */}
            <AddCellModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                onAdd={handleAddCell}
            />
        </div>
    );
}
