"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { LuCompass, LuMenu, LuX } from "react-icons/lu";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Destinations", href: "/destinations" },
    { label: "My Bookings", href: "/my-bookings" },
    { label: "Explore", href: "/explore" },
    { label: "Add Destination", href: "/add-destination" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-slate-200/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group no-underline"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-600 to-emerald-500 shadow-lg transition-transform group-hover:rotate-12">
              <LuCompass className="text-white size-6" />
            </div>
            <p className="text-2xl font-black tracking-tight text-slate-900 uppercase">
              Odessy
            </p>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 rounded-full border border-slate-200/40 bg-slate-50/50 p-1">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full px-5 py-2 text-sm font-bold text-slate-600 transition-all hover:bg-white hover:text-sky-600 no-underline"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-bold text-slate-600 hover:text-sky-600 no-underline"
            >
              Login
            </Link>
            <Button
              as={Link}
              href="/signup"
              className="bg-sky-600 text-white font-bold rounded-full px-7"
            >
              Join Now
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600"
          >
            {isOpen ? <LuX size={24} /> : <LuMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block px-3 py-3 text-base font-bold text-slate-600 hover:bg-slate-50 rounded-lg no-underline"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
