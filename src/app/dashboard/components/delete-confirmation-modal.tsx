"use client";

import { AlertTriangle, X } from "lucide-react";

interface DeleteConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    cellName: string;
}

export function DeleteConfirmationModal({ isOpen, onClose, onConfirm, cellName }: DeleteConfirmationModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
            <div className="bg-white rounded-[24px] w-full max-w-[400px] shadow-2xl animate-in fade-in zoom-in duration-200 overflow-hidden">
                <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <AlertTriangle size={32} className="text-[#FF4D4D]" />
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 mb-2">Are you sure?</h2>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed">
                        You are about to delete the submission for <span className="font-bold text-gray-800">“{cellName}”</span>. This action cannot be undone.
                    </p>
                </div>

                <div className="flex border-t border-gray-100">
                    <button
                        onClick={onClose}
                        className="flex-1 py-4 text-sm font-bold text-gray-500 hover:bg-gray-50 transition-colors border-r border-gray-100"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="flex-1 py-4 text-sm font-bold text-[#FF4D4D] hover:bg-red-50 transition-colors"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
