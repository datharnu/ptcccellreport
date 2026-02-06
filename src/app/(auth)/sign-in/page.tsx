"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { CellReportModal } from "@/app/(auth)/sign-in/components/cell-report-modal";

export default function SignInPage() {
    const [showModal, setShowModal] = useState(false);

    const handleSignIn = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate sign-in and show modal
        setShowModal(true);
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50/50 p-4 font-sans">
            <div className="w-full max-w-[400px] space-y-8">
                {/* Header */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900">Login</h1>
                </div>

                {/* Role Switcher */}
                <div className="flex justify-center">
                    <Tabs defaultValue="cell-leader" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 rounded-xl bg-slate-100 p-1 border border-slate-200/50">
                            <TabsTrigger
                                value="cell-leader"
                                className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm text-slate-600 data-[state=active]:text-slate-900 font-semibold"
                            >
                                Cell Leader
                            </TabsTrigger>
                            <TabsTrigger
                                value="admin"
                                className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm text-slate-600 data-[state=active]:text-slate-900 font-semibold"
                            >
                                Admin
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>

                {/* Form Card */}
                <Card className="border-slate-200 bg-white shadow-sm ring-1 ring-slate-200/50 rounded-2xl">
                    <CardContent className="pt-6 space-y-6">
                        <form onSubmit={handleSignIn} className="space-y-4">
                            <p className="text-sm font-medium text-slate-400">
                                Enter your credentials to continue
                            </p>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-sm font-bold text-slate-900">
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        required
                                        className="h-12 border-slate-200 bg-white placeholder:text-slate-400 focus-visible:ring-primary rounded-xl"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="password" className="text-sm font-bold text-slate-900">
                                        Password
                                    </Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="Enter your password"
                                        required
                                        className="h-12 border-slate-200 bg-white placeholder:text-slate-400 focus-visible:ring-primary rounded-xl"
                                    />
                                </div>
                            </div>

                            <Button type="submit" className="w-full h-12 text-base font-bold bg-[#155DFC] hover:bg-[#155DFC]/90 transition-all shadow-lg shadow-[#155DFC]/20 rounded-xl">
                                Sign in
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>

            <CellReportModal isOpen={showModal} onClose={() => setShowModal(false)} />
        </div>
    );
}
