import React from "react";
import Image from "next/image";
import { LuCompass } from "react-icons/lu";

const Loading = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] w-full flex flex-col items-center justify-center bg-zinc-50/50 p-6">
      <div className="flex flex-col items-center max-w-xs w-full text-center">
        <div className="relative size-16 flex items-center justify-center mb-10">
          <div className="relative size-14 z-10 rounded-full p-1 border border-zinc-100 flex items-center justify-center bg-white shadow-md animate-[spin_4s_linear_infinite]">
            <Image
              src="/logo.png"
              alt="Odyssey Logo"
              width={48}
              height={48}
              className="object-contain"
              priority
            />
          </div>

          <div className="absolute -inset-4 text-sky-900/10 flex items-center justify-center pointer-events-none">
            <LuCompass size={84} strokeWidth={1} />
          </div>
        </div>
        <div className="space-y-2 mb-8">
          <h2 className="text-sm font-black text-zinc-900 uppercase">
            Synchronizing Hub
          </h2>
          <p className="text-[10px] font-bold text-zinc-400 uppercase">
            Fetching global catalog details
          </p>
        </div>

        <div className="w-40 h-0.75 bg-zinc-100 rounded-full overflow-hidden relative">
          <div className="absolute top-0 bottom-0 bg-sky-900 rounded-full w-24 animate-[marquee_1.6s_infinite_ease-in-out]" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
