"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CalendarIcon, CheckCircle2, Heart } from "lucide-react";

interface CellReportModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function CellReportModal({ isOpen, onClose }: CellReportModalProps) {
    const router = useRouter();
    const [meetingHeld, setMeetingHeld] = useState("held");
    const [showThankYou, setShowThankYou] = useState(false);

    const handleSubmit = () => {
        if (meetingHeld === "held") {
            router.push("/cell-report");
            onClose();
        } else {
            setShowThankYou(true);
        }
    };

    const handleClose = () => {
        setShowThankYou(false);
        onClose();
    };

    if (showThankYou) {
        return (
            <Dialog open={isOpen} onOpenChange={handleClose}>
                <DialogContent className="max-w-md border-none bg-white p-0 overflow-hidden sm:rounded-[32px] shadow-2xl">
                    <div className="p-12 text-center space-y-6">
                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#155DFC]/10 blur-2xl rounded-full scale-150" />
                                <div className="relative bg-white rounded-full p-4 shadow-sm border border-slate-100">
                                    <CheckCircle2 className="h-16 w-16 text-[#155DFC] animate-in zoom-in duration-500" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Thank You!</h2>
                            <p className="text-slate-500 font-medium leading-relaxed">
                                We appreciate your honesty and commitment. Your report has been logged.
                            </p>
                        </div>

                        <div className="bg-slate-50 rounded-2xl p-6 flex items-start gap-4 text-left">
                            <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100">
                                <Heart className="h-5 w-5 text-[#155DFC] fill-[#155DFC]" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Word of Encouragement</p>
                                <p className="text-sm font-semibold text-slate-700 leading-snug italic">
                                    "For God is not unjust so as to forget your work and the love which you have shown toward His name..."
                                </p>
                            </div>
                        </div>

                        <Button
                            className="w-full h-14 bg-[#155DFC] hover:bg-[#155DFC]/90 text-lg font-bold rounded-2xl shadow-lg shadow-[#155DFC]/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                            onClick={handleClose}
                        >
                            Back to Dashboard
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl border-none bg-zinc-50/50 p-0 overflow-hidden sm:rounded-[24px]">
                <div className="bg-white p-8 md:p-12">
                    {/* Header Section */}
                    <div className="space-y-2 mb-8 text-center sm:text-left">
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900">
                            PTCC Cell Report
                        </h2>
                        <p className="text-[#155DFC] font-medium leading-relaxed">
                            Accurate reporting helps us track growth and provide better support to your cell group.
                        </p>
                    </div>

                    {/* Meeting Details Card */}
                    <div className="rounded-[20px] border border-slate-200 bg-white p-6 shadow-sm mb-8">
                        <div className="flex items-center gap-2 mb-6 text-slate-900">
                            <CalendarIcon className="h-5 w-5 text-[#155DFC]" />
                            <h3 className="font-bold text-lg">Meeting Details</h3>
                        </div>

                        <RadioGroup
                            defaultValue="held"
                            value={meetingHeld}
                            onValueChange={setMeetingHeld}
                            className="space-y-4"
                        >
                            <div
                                className={`flex items-center space-x-4 rounded-xl border p-4 transition-all cursor-pointer ${meetingHeld === "held" ? "border-[#155DFC] bg-[#155DFC]/5 ring-1 ring-[#155DFC]" : "border-slate-100 hover:bg-slate-50"
                                    }`}
                                onClick={() => setMeetingHeld("held")}
                            >
                                <RadioGroupItem value="held" id="held" className="border-slate-300 text-[#155DFC]" />
                                <Label htmlFor="held" className="flex flex-col cursor-pointer flex-1">
                                    <span className="font-bold text-slate-900">Did your cell hold?</span>
                                    <span className="text-sm text-slate-500 font-medium">Yes, the cell group met</span>
                                </Label>
                            </div>

                            <div
                                className={`flex items-center space-x-4 rounded-xl border p-4 transition-all cursor-pointer ${meetingHeld === "no-held" ? "border-[#155DFC] bg-[#155DFC]/5 ring-1 ring-[#155DFC]" : "border-slate-100 hover:bg-slate-50"
                                    }`}
                                onClick={() => setMeetingHeld("no-held")}
                            >
                                <RadioGroupItem value="no-held" id="no-held" className="border-slate-300 text-[#155DFC]" />
                                <Label htmlFor="no-held" className="flex flex-col cursor-pointer flex-1">
                                    <span className="font-bold text-slate-900">No meeting held</span>
                                    <span className="text-sm text-slate-500 font-medium">The group did not meet</span>
                                </Label>
                            </div>
                        </RadioGroup>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        <Button
                            className="flex-1 h-14 bg-[#155DFC] hover:bg-[#155DFC]/90 text-lg font-bold rounded-xl shadow-lg shadow-[#155DFC]/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
                            onClick={handleSubmit}
                        >
                            Submit Report
                        </Button>
                        <Button
                            variant="outline"
                            className="h-14 px-8 text-lg font-bold rounded-xl border-slate-200 text-slate-600 hover:bg-slate-50"
                            onClick={onClose}
                        >
                            Save Draft
                        </Button>
                    </div>

                    {/* Footer */}
                    <div className="text-center space-y-4">
                        <p className="text-sm italic text-slate-400 max-w-md mx-auto leading-relaxed">
                            "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up."
                        </p>
                        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-400">
                            <span>© 2025 Church Management System</span>
                            <span className="text-slate-200">•</span>
                            <button className="hover:text-slate-600">Privacy Policy</button>
                            <span className="text-slate-200">•</span>
                            <button className="hover:text-slate-600">Terms of Service</button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
