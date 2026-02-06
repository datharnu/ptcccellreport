"use client";

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
    Briefcase,
    Clock,
    DollarSign
} from "lucide-react";

export default function CellReportPage() {
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

                <form className="space-y-6">
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
                                    <RadioGroup defaultValue="held" className="space-y-3">
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
                                        <Select>
                                            <SelectTrigger className="h-11 border-slate-200 rounded-xl bg-white focus:ring-[#155DFC]">
                                                <SelectValue placeholder="Select meeting type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="regular">Regular Fellowship</SelectItem>
                                                <SelectItem value="outreach">Outreach Meeting</SelectItem>
                                                <SelectItem value="prayer">Prayer Meeting</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label className="text-sm font-bold text-slate-900 text-slate-600">Date</Label>
                                            <div className="relative">
                                                <Input type="date" className="h-11 border-slate-200 rounded-xl bg-white focus:ring-[#155DFC] pl-3" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-sm font-bold text-slate-600">Time</Label>
                                            <div className="relative">
                                                <Input type="time" className="h-11 border-slate-200 rounded-xl bg-white focus:ring-[#155DFC] pl-3" />
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
                                    <Input placeholder="e.g. Grace Fellowship" className="h-11 border-slate-200 rounded-xl bg-white focus:ring-[#155DFC]" />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-sm font-bold text-slate-600">Cell Leader</Label>
                                    <Input placeholder="Enter full name" className="h-11 border-slate-200 rounded-xl bg-white focus:ring-[#155DFC]" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label className="text-sm font-bold text-slate-600">Address / Venue</Label>
                                <Input placeholder="123 Faith Avenue, City Center" className="h-11 border-slate-200 rounded-xl bg-white focus:ring-[#155DFC]" />
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
                                    <Input type="number" placeholder="0" className="h-11 border-slate-200 rounded-xl bg-white focus:ring-[#155DFC]" />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Married Men</Label>
                                    <Input type="number" placeholder="0" className="h-11 border-slate-200 rounded-xl bg-white focus:ring-[#155DFC]" />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Married Women</Label>
                                    <Input type="number" placeholder="0" className="h-11 border-slate-200 rounded-xl bg-white focus:ring-[#155DFC]" />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Young Adults</Label>
                                    <Input type="number" placeholder="0" className="h-11 border-slate-200 rounded-xl bg-white focus:ring-[#155DFC]" />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Children</Label>
                                    <Input type="number" placeholder="0" className="h-11 border-slate-200 rounded-xl bg-white focus:ring-[#155DFC]" />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">First Timers</Label>
                                    <Input type="number" placeholder="0" className="h-11 border-slate-200 rounded-xl bg-emerald-50/30 border-emerald-100 focus:ring-emerald-500" />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">New Converts</Label>
                                    <Input type="number" placeholder="0" className="h-11 border-slate-200 rounded-xl bg-emerald-50/30 border-emerald-100 focus:ring-emerald-500" />
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
                                        <Input placeholder="0.00" className="h-11 border-slate-200 rounded-xl bg-white focus:ring-[#155DFC] pl-10" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-sm font-bold text-slate-600">Outreach Activity Summary</Label>
                                    <Input placeholder="e.g. Hospital visitation, Park evangelism" className="h-11 border-slate-200 rounded-xl bg-white focus:ring-[#155DFC]" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label className="text-sm font-bold text-slate-600">Specific Challenges Faced</Label>
                                <Textarea
                                    placeholder="Describe any difficulties encountered during the month..."
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
                                className="min-h-[150px] border-slate-100 rounded-xl bg-white focus:ring-[#155DFC] resize-none shadow-sm"
                            />
                        </CardContent>
                    </Card>

                    {/* Footer Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 pb-12">
                        <Button
                            type="submit"
                            className="flex-1 h-14 bg-[#155DFC] hover:bg-[#155DFC]/90 text-lg font-bold rounded-xl shadow-lg shadow-[#155DFC]/20 transition-all hover:translate-y-[-2px]"
                        >
                            Submit Report
                        </Button>
                        <Button
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
