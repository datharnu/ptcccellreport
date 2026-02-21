"use client";

import { useState, useEffect } from "react";
import { Bell, Plus } from "lucide-react";
import { AddCellModal } from "../components/add-cell-modal";
import api from "@/lib/api";
import { toast } from "react-hot-toast";

interface User {
    fullName: string;
    email: string;
    cellName: string;
    createdAt: string;
}

export default function CellsPage() {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [cells, setCells] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchCells = async () => {
        try {
            const response = await api.get("/users");
            // Filter only cell leaders
            const cellLeaders = response.data.data.filter((user: any) => user.role === 'cell_leader');
            setCells(cellLeaders);
        } catch (error) {
            toast.error("Failed to load cells");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCells();
    }, []);

    const handleAddCell = () => {
        fetchCells();
    };

    return (
        <div className="min-h-screen bg-[#F8F9FB]">
            {/* Header omitted for brevity in replace call, but should remain same */}
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

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="text-[11px] font-bold text-gray-900 border-b border-gray-50 uppercase tracking-wider">
                                    <th className="px-8 py-5">Cell Name</th>
                                    <th className="px-8 py-5">Leader Name</th>
                                    <th className="px-8 py-5">Email</th>
                                    <th className="px-8 py-5">Created</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {loading ? (
                                    <tr><td colSpan={4} className="px-8 py-10 text-center text-gray-400">Loading cells...</td></tr>
                                ) : cells.length === 0 ? (
                                    <tr><td colSpan={4} className="px-8 py-10 text-center text-gray-400">No cell leaders found</td></tr>
                                ) : cells.map((cell, index) => (
                                    <tr key={index} className="text-sm text-gray-700 hover:bg-gray-50/50 transition-colors group">
                                        <td className="px-8 py-5 font-bold text-gray-900">{cell.cellName}</td>
                                        <td className="px-8 py-5 font-medium">{cell.fullName}</td>
                                        <td className="px-8 py-5 text-gray-500">{cell.email}</td>
                                        <td className="px-8 py-5 text-[#94A3B8] font-medium">
                                            {new Date(cell.createdAt).toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <AddCellModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                onAdd={handleAddCell}
            />
        </div>
    );
}
