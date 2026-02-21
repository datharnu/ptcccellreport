"use client";

import { useState } from "react";
import { X, Mail, Lock, User, MapPin, Home } from "lucide-react";
import api from "@/lib/api";
import { toast } from "react-hot-toast";

interface AddCellModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAdd: () => void; // Trigger a refresh in parent
}

export function AddCellModal({ isOpen, onClose, onAdd }: AddCellModalProps) {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cellName, setCellName] = useState("");
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await api.post("/users/create-leader", {
                fullName,
                email,
                password,
                cellName
            });

            toast.success("Cell leader account created!");
            onAdd();
            onClose();
            // Reset form
            setFullName("");
            setEmail("");
            setPassword("");
            setCellName("");
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Failed to create account");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
            <div className="bg-white rounded-[24px] w-full max-w-[500px] shadow-2xl animate-in fade-in zoom-in duration-200 overflow-hidden">
                {/* Header */}
                <div className="p-8 pb-4 flex justify-between items-start sticky top-0 bg-white z-10 border-b border-gray-50">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">Create New Cell</h2>
                        <p className="text-sm text-gray-400 font-medium">Set up a new cell and its login credentials</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    <div className="space-y-4">
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Cell Information</h3>

                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-700 ml-1">Cell Name</label>
                            <div className="relative">
                                <Home className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="text"
                                    placeholder="e.g. Pearl LC"
                                    value={cellName}
                                    onChange={(e) => setCellName(e.target.value)}
                                    className="w-full bg-[#F8F9FB] border border-gray-100 rounded-xl pl-12 pr-4 py-3 text-sm focus:ring-2 focus:ring-[#155DFC]/20 focus:border-[#155DFC] focus:outline-none placeholder:text-gray-400 transition-all"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-700 ml-1">Leader's Name</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    className="w-full bg-[#F8F9FB] border border-gray-100 rounded-xl pl-12 pr-4 py-3 text-sm focus:ring-2 focus:ring-[#155DFC]/20 focus:border-[#155DFC] focus:outline-none placeholder:text-gray-400 transition-all"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 pt-4">
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Login Credentials</h3>

                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-700 ml-1">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="email"
                                    placeholder="cellname@ptcc.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-[#F8F9FB] border border-gray-100 rounded-xl pl-12 pr-4 py-3 text-sm focus:ring-2 focus:ring-[#155DFC]/20 focus:border-[#155DFC] focus:outline-none placeholder:text-gray-400 transition-all"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-bold text-gray-700 ml-1">Initial Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="password"
                                    placeholder="Minimum 8 characters"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-[#F8F9FB] border border-gray-100 rounded-xl pl-12 pr-4 py-3 text-sm focus:ring-2 focus:ring-[#155DFC]/20 focus:border-[#155DFC] focus:outline-none placeholder:text-gray-400 transition-all"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 flex gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 py-3 px-4 rounded-xl font-bold text-sm text-gray-500 hover:bg-gray-100 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex-1 bg-[#155DFC] hover:bg-[#124ECC] text-white py-3 px-4 rounded-xl font-bold text-sm shadow-lg shadow-[#155DFC]/20 transition-all active:scale-95 disabled:opacity-50"
                        >
                            {loading ? "Creating..." : "Create Account"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
