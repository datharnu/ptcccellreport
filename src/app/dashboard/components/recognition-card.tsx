export function RecognitionCard() {
    return (
        <div className="bg-[#155DFC] text-white rounded-3xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden h-full">
            {/* Background patterns if any */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>

            <span className="bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase mb-8">
                RECOGNITION
            </span>

            <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full border-2 border-white/20 p-1">
                    <div className="w-full h-full rounded-full bg-gray-200 overflow-hidden">
                        {/* Using a placeholder for now, generating image later if needed */}
                        <div className="w-full h-full bg-[#E5E7EB] flex items-center justify-center text-[#155DFC] text-xl font-bold">
                            👤
                        </div>
                    </div>
                </div>
            </div>

            <h3 className="text-2xl font-bold mb-1">Adeola</h3>
            <p className="text-white/70 text-sm italic mb-8">“Pearl LC (Iyana School 1) ”</p>

            <div className="space-y-1 mb-8">
                <p className="text-white/60 text-[10px] font-bold tracking-widest uppercase">ENGAGEMENT SCORE</p>
                <p className="text-4xl font-black">18%</p>
            </div>

            <button className="w-full bg-white text-[#155DFC] py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-black/10 transition-transform hover:scale-[1.02] active:scale-[0.98]">
                Cell of the Month
            </button>
        </div>
    );
}
