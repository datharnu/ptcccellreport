"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
    Calendar,
    MapPin,
    Users,
    Target,
    MessageSquare,
    Clock,
    DollarSign
} from "lucide-react";

export default function CellReportPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        meetingHeld: "held",
        meetingType: "",
        meetingDate: "",
        meetingTime: "",
        cellName: "",
        cellLeader: "",
        address: "",
        totalAttendance: 0,
        consistentMembers: 0,
        marriedMen: 0,
        marriedWomen: 0,
        youngAdults: 0,
        children: 0,
        firstTimersCell: 0,
        firstTimersChurch: 0,
        newConverts: 0,
        sundayServiceAttendance: 0,
        guestsAttendedSunday: 0,
        offering: 0,
        outreachSummary: "",
        challenges: "",
        testimonies: ""
    });

    const handleInputChange = (field: string, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const submissionData = {
                ...formData,
                meetingHeld: formData.meetingHeld === "held",
                totalAttendance: Number(formData.totalAttendance),
                consistentMembers: Number(formData.consistentMembers),
                marriedMen: Number(formData.marriedMen),
                marriedWomen: Number(formData.marriedWomen),
                youngAdults: Number(formData.youngAdults),
                children: Number(formData.children),
                firstTimersCell: Number(formData.firstTimersCell),
                firstTimersChurch: Number(formData.firstTimersChurch),
                newConverts: Number(formData.newConverts),
                sundayServiceAttendance: Number(formData.sundayServiceAttendance),
                guestsAttendedSunday: Number(formData.guestsAttendedSunday),
                offering: Number(formData.offering)
            };

            await api.post("/cell-reports", submissionData);
            toast.success("Report submitted successfully!");
            router.push("/dashboard"); // Or wherever appropriate
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Failed to submit report");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-zinc-50/50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header */}
                <div className="space-y-2">
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
                        Cell Monthly Report
                    </h1>
                    <p className="text-[#155DFC] font-medium">
                        Accurate reporting helps us track growth and provide better support to your cell group.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Meeting Details */}
                    <Card className="border-slate-200 shadow-sm rounded-2xl overflow-hidden">
                        <CardContent className="p-8 space-y-6">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="p-2 bg-[#155DFC]/10 rounded-lg">
                                    <Calendar className="h-5 w-5 text-[#155DFC]" />
                                </div>
                                <h2 className="text-xl font-bold text-slate-900">Meeting Details</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <RadioGroup
                                        value={formData.meetingHeld}
                                        onValueChange={(val) => handleInputChange("meetingHeld", val)}
                                        className="space-y-3"
                                    >
                                        <div className="flex items-center space-x-3 rounded-xl border border-slate-100 p-4 transition-all hover:bg-slate-50 cursor-pointer">
                                            <RadioGroupItem value="held" id="held" className="text-[#155DFC] border-slate-300" />
                                            <Label htmlFor="held" className="flex flex-col cursor-pointer">
                                                <span className="font-bold text-slate-900">Did your cell hold?</span>
                                                <span className="text-xs text-slate-500 font-medium">Yes, the cell group met</span>
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-3 rounded-xl border border-slate-100 p-4 transition-all hover:bg-slate-50 cursor-pointer">
                                            <RadioGroupItem value="no-held" id="no-held" className="text-[#155DFC] border-slate-300" />
                                            <Label htmlFor="no-held" className="flex flex-col cursor-pointer">
                                                <span className="font-bold text-slate-900">No meeting held</span>
                                                <span className="text-xs text-slate-500 font-medium">The group did not meet</span>
                                            </Label>
                                        </div>
                                    </RadioGroup>
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label className="text-sm font-bold text-slate-900">Type of Meeting</Label>
                                        <Select
                                            value={formData.meetingType}
                                            onValueChange={(val) => handleInputChange("meetingType", val)}
                                        >
                                            <SelectTrigger className="h-11 border-slate-200 rounded-xl bg-white focus:ring-[#155DFC]">
                                                <SelectValue placeholder="Select meeting type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="topic">Topic Discussion</SelectItem>
                                                <SelectItem value="love-feast">Love Feast</SelectItem>
                                                <SelectItem value="outreach">Outreach/Evangelism</SelectItem>
                                                <SelectItem value="prayer">Prayer</SelectItem>
                                                <SelectItem value="meet-greet">Meet & Greet/Planning</SelectItem>
                                                <SelectItem value="mc-live">MC Live</SelectItem>
                                                <SelectItem value="online">Online meeting</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label className="text-sm font-bold text-slate-900 text-slate-600">Date</Label>
                                            <div className="relative">
                                                <Input
                                                    type="date"
                                                    value={formData.meetingDate}
                                                    onChange={(e) => handleInputChange("meetingDate", e.target.value)}
                                                    className="h-11 border-slate-200 rounded-xl bg-white focus:ring-[#155DFC] pl-3"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-sm font-bold text-slate-600">Time</Label>
                                            <div className="relative">
                                                <Input
                                                    type="time"
                                                    value={formData.meetingTime}
                                                    onChange={(e) => handleInputChange("meetingTime", e.target.value)}
                                                    className="h-11 border-slate-200 rounded-xl bg-white focus:ring-[#155DFC] pl-3"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Location Info */}
                    <Card className="border-slate-200 shadow-sm rounded-2xl">
                        <CardContent className="p-8 space-y-6">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="p-2 bg-[#155DFC]/10 rounded-lg">
                                    <MapPin className="h-5 w-5 text-[#155DFC]" />
                                </div>
                                <h2 className="text-xl font-bold text-slate-900">Location Info</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label className="text-sm font-bold text-slate-600">Cell Name</Label>
                                    <Input
                                        placeholder="e.g. Grace Fellowship"
                                        value={formData.cellName}
                                        onChange={(e) => handleInputChange("cellName", e.target.value)}
                                        className="h-11 border-slate-200 rounded-xl bg-white focus:ring-[#155DFC]"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-sm font-bold text-slate-600">Cell Leader</Label>
                                    <Input
                                        placeholder="Enter full name"
                                        value={formData.cellLeader}
                                        onChange={(e) => handleInputChange("cellLeader", e.target.value)}
                                        className="h-11 border-slate-200 rounded-xl bg-white focus:ring-[#155DFC]"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label className="text-sm font-bold text-slate-600">Address / Venue</Label>
                                <Input
                                    placeholder="123 Faith Avenue, City Center"
                                    value={formData.address}
                                    onChange={(e) => handleInputChange("address", e.target.value)}
                                    className="h-11 border-slate-200 rounded-xl bg-white focus:ring-[#155DFC]"
                                    required
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Attendance Breakdown */}
                    <Card className="border-slate-200 shadow-sm rounded-2xl">
                        <CardContent className="p-8 space-y-6">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="p-2 bg-[#155DFC]/10 rounded-lg">
                                    <Users className="h-5 w-5 text-[#155DFC]" />
                                </div>
                                <h2 className="text-xl font-bold text-slate-900">Attendance Breakdown</h2>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Total Attendance</Label>
                                    <Input
                                        type="number"
                                        placeholder="0"
                                        value={formData.totalAttendance}
                                        onChange={(e) => handleInputChange("totalAttendance", e.target.value)}
                                        className="h-11 border-slate-200 rounded-xl bg-white focus:ring-[#155DFC]"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Consistent Members</Label>
                                    <Input
                                        type="number"
                                        placeholder="0"
                                        value={formData.consistentMembers}
                                        onChange={(e) => handleInputChange("consistentMembers", e.target.value)}
                                        className="h-11 border-slate-200 rounded-xl bg-white focus:ring-[#155DFC]"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Married Men</Label>
                                    <Input
                                        type="number"
                                        placeholder="0"
                                        value={formData.marriedMen}
                                        onChange={(e) => handleInputChange("marriedMen", e.target.value)}
                                        className="h-11 border-slate-200 rounded-xl bg-white focus:ring-[#155DFC]"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Married Women</Label>
                                    <Input
                                        type="number"
                                        placeholder="0"
                                        value={formData.marriedWomen}
                                        onChange={(e) => handleInputChange("marriedWomen", e.target.value)}
                                        className="h-11 border-slate-200 rounded-xl bg-white focus:ring-[#155DFC]"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Young Adults</Label>
                                    <Input
                                        type="number"
                                        placeholder="0"
                                        value={formData.youngAdults}
                                        onChange={(e) => handleInputChange("youngAdults", e.target.value)}
                                        className="h-11 border-slate-200 rounded-xl bg-white focus:ring-[#155DFC]"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Children</Label>
                                    <Input
                                        type="number"
                                        placeholder="0"
                                        value={formData.children}
                                        onChange={(e) => handleInputChange("children", e.target.value)}
                                        className="h-11 border-slate-200 rounded-xl bg-white focus:ring-[#155DFC]"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">First Timers (Cell)</Label>
                                    <Input
                                        type="number"
                                        placeholder="0"
                                        value={formData.firstTimersCell}
                                        onChange={(e) => handleInputChange("firstTimersCell", e.target.value)}
                                        className="h-11 border-slate-200 rounded-xl bg-emerald-50/30 border-emerald-100 focus:ring-emerald-500"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">First Timers (Church)</Label>
                                    <Input
                                        type="number"
                                        placeholder="0"
                                        value={formData.firstTimersChurch}
                                        onChange={(e) => handleInputChange("firstTimersChurch", e.target.value)}
                                        className="h-11 border-slate-200 rounded-xl bg-emerald-50/30 border-emerald-100 focus:ring-emerald-500"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">New Converts</Label>
                                    <Input
                                        type="number"
                                        placeholder="0"
                                        value={formData.newConverts}
                                        onChange={(e) => handleInputChange("newConverts", e.target.value)}
                                        className="h-11 border-slate-200 rounded-xl bg-emerald-50/30 border-emerald-100 focus:ring-emerald-500"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Sunday Service Att.</Label>
                                    <Input
                                        type="number"
                                        placeholder="0"
                                        value={formData.sundayServiceAttendance}
                                        onChange={(e) => handleInputChange("sundayServiceAttendance", e.target.value)}
                                        className="h-11 border-slate-200 rounded-xl bg-blue-50/30 border-blue-100 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            <div className="pt-4 border-t border-slate-100">
                                <div className="space-y-2">
                                    <Label className="text-sm font-bold text-slate-900">How many of your first time guests from outside church attended Sunday service?</Label>
                                    <Input
                                        type="number"
                                        placeholder="0"
                                        value={formData.guestsAttendedSunday}
                                        onChange={(e) => handleInputChange("guestsAttendedSunday", e.target.value)}
                                        className="h-11 border-slate-200 rounded-xl bg-white focus:ring-[#155DFC]"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Activities & Outreach */}
                    <Card className="border-slate-200 shadow-sm rounded-2xl">
                        <CardContent className="p-8 space-y-6">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="p-2 bg-[#155DFC]/10 rounded-lg">
                                    <Target className="h-5 w-5 text-[#155DFC]" />
                                </div>
                                <h2 className="text-xl font-bold text-slate-900">Activities & Outreach</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label className="text-sm font-bold text-slate-600">Total Offering Collected</Label>
                                    <div className="relative">
                                        <DollarSign className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                                        <Input
                                            type="number"
                                            placeholder="0.00"
                                            value={formData.offering}
                                            onChange={(e) => handleInputChange("offering", e.target.value)}
                                            className="h-11 border-slate-200 rounded-xl bg-white focus:ring-[#155DFC] pl-10"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-sm font-bold text-slate-600">Outreach Activity Summary</Label>
                                    <Input
                                        placeholder="e.g. Hospital visitation, Park evangelism"
                                        value={formData.outreachSummary}
                                        onChange={(e) => handleInputChange("outreachSummary", e.target.value)}
                                        className="h-11 border-slate-200 rounded-xl bg-white focus:ring-[#155DFC]"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label className="text-sm font-bold text-slate-600">Specific Challenges Faced</Label>
                                <Textarea
                                    placeholder="Describe any difficulties encountered during the month..."
                                    value={formData.challenges}
                                    onChange={(e) => handleInputChange("challenges", e.target.value)}
                                    className="min-h-[100px] border-slate-200 rounded-xl bg-white focus:ring-[#155DFC] resize-none"
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Testimonies */}
                    <Card className="border-none shadow-none bg-blue-50/50 rounded-2xl">
                        <CardContent className="p-8 space-y-4">
                            <div className="flex items-center gap-2">
                                <div className="p-2 bg-[#155DFC]/10 rounded-lg">
                                    <MessageSquare className="h-5 w-5 text-[#155DFC]" />
                                </div>
                                <h2 className="text-xl font-bold text-slate-900">Testimonies</h2>
                            </div>

                            <p className="text-xs italic text-[#155DFC] font-medium leading-relaxed">
                                "And they overcame him by the blood of the Lamb, and by the word of their testimony..." — Rev 12:11
                            </p>

                            <Textarea
                                placeholder="Share how God has been moving in your cell group this month. Be detailed!"
                                value={formData.testimonies}
                                onChange={(e) => handleInputChange("testimonies", e.target.value)}
                                className="min-h-[150px] border-slate-100 rounded-xl bg-white focus:ring-[#155DFC] resize-none shadow-sm"
                            />
                        </CardContent>
                    </Card>

                    {/* Footer Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 pb-12">
                        <Button
                            type="submit"
                            disabled={loading}
                            className="flex-1 h-14 bg-[#155DFC] hover:bg-[#155DFC]/90 text-lg font-bold rounded-xl shadow-lg shadow-[#155DFC]/20 transition-all hover:translate-y-[-2px]"
                        >
                            {loading ? "Submitting..." : "Submit Report"}
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            className="h-14 px-8 text-lg font-bold rounded-xl border-slate-200 text-slate-600 hover:bg-slate-50 transition-all"
                        >
                            Save Draft
                        </Button>
                    </div>
                </form>

                <footer className="text-center space-y-2 pb-12">
                    <p className="text-xs font-semibold text-slate-400">
                        "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up."
                    </p>
                </footer>
            </div>
        </div>
    );
}
