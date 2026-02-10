import { Search, Bell } from "lucide-react";

export function Header() {
    return (
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-10">
            <h2 className="text-xl font-bold text-gray-800">Overview Dashboard</h2>

            <div className="flex items-center gap-6">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search data..."
                        className="bg-[#F8F9FB] border-none rounded-xl pl-10 pr-4 py-2.5 w-[320px] text-sm focus:ring-2 focus:ring-[#155DFC]/20 focus:outline-none placeholder:text-gray-400 transition-all"
                    />
                </div>

                <div className="flex items-center gap-4">
                    <button className="relative p-2 rounded-xl text-gray-400 hover:bg-gray-50 transition-colors">
                        <Bell size={20} />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-[#FF4D4D] rounded-full border-2 border-white"></span>
                    </button>

                    <div className="flex items-center gap-3 pl-4 border-l border-gray-100">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-bold text-gray-800 leading-none">Admin User</p>
                            <p className="text-[10px] font-medium text-gray-400 mt-1 uppercase tracking-wider">Super Admin</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-[#155DFC] flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-[#155DFC]/20 cursor-pointer transition-transform hover:scale-110">
                            AU
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
