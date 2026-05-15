"use client";

import React from "react";
import { LuUsers, LuAward, LuShieldCheck } from "react-icons/lu";

const AdditionalService = () => {
  const stats = [
    {
      title: "40,000+ Customers",
      description: "Handpicked destinations for elite travelers.",
      icon: <LuUsers size={28} />,
    },
    {
      title: "Award Winning",
      description: "Voted best luxury travel agency 2026.",
      icon: <LuAward size={28} />,
    },
    {
      title: "Secure Payment",
      description: "Encrypted transactions for your peace of mind.",
      icon: <LuShieldCheck size={28} />,
    },
  ];

  return (
    <section className="w-full bg-sky-900 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-stretch">
          <div className="lg:w-1/4 py-12 lg:py-16 flex items-center lg:border-r border-white/10 pr-0 lg:pr-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tighter leading-none text-center lg:text-left w-full">
              Why Book <br className="hidden lg:block" /> With Us?
            </h2>
          </div>

          <div className="lg:w-3/4 py-12 lg:py-16 pl-0 lg:pl-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center lg:items-start text-center lg:text-left gap-5 transition-transform duration-300 hover:scale-[1.05]"
                >
                  <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-white transition-colors group-hover:bg-white group-hover:text-sky-900 shadow-lg">
                    {stat.icon}
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-white leading-tight">
                      {stat.title}
                    </h3>
                    <p className="text-[10px] font-bold text-sky-100/60 leading-relaxed uppercase tracking-wider">
                      {stat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalService;
