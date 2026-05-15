"use client";

import React from "react";
import { LuCloudAlert, LuHouse, LuRefreshCw } from "react-icons/lu";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <div className="mb-8 inline-flex items-center justify-center p-6 bg-rose-50 border border-rose-100 rounded-xl text-rose-500 shadow-sm">
          <LuCloudAlert size={48} strokeWidth={2.5} />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 uppercase tracking-tighter">
            Something Went Wrong
          </h1>
          <p className="text-slate-500 font-bold uppercase text-sms tracking-[0.2em] max-w-md mx-auto leading-relaxed">
            We encountered an unexpected error while preparing your travel
            experience.
          </p>
        </div>

        <div className="mt-8 p-4 bg-slate-50 border border-slate-100 rounded-xl inline-block">
          <code className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
            Error: {error?.message || "Internal_Server_Crash"}
          </code>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#0088d1] text-white rounded-xl font-bold uppercase text-sms tracking-widest hover:bg-[#0077b6] transition-all shadow-lg shadow-sky-100"
          >
            <LuRefreshCw size={18} />
            Try Again
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-xl font-bold uppercase text-sms tracking-widest hover:bg-slate-50 transition-all"
          >
            <LuHouse size={18} />
            Go To Home
          </button>
        </div>

        <div className="mt-16">
          <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em]">
            Need help?{" "}
            <a
              href="mailto:support@odessy.com"
              className="text-sky-600 hover:underline"
            >
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
