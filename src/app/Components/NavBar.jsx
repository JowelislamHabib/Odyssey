"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { HiOutlineCompass } from "react-icons/hi";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Destinations", href: "/destinations" },
    { label: "My Bookings", href: "/my-bookings" },
    { label: "Explore", href: "/explore" },
  ];

  return (
    <nav
      className={`fixed top-0 z-[100] w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/80 py-3 backdrop-blur-xl border-b border-slate-200/50 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Brand */}
        <Link href="/" className="group flex items-center gap-2.5 no-underline">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-600 to-emerald-500 shadow-lg shadow-sky-500/20 transition-transform duration-300 group-hover:rotate-12">
            <HiOutlineCompass className="text-white text-2xl" />
          </div>
          <span className="text-2xl font-black tracking-tight text-slate-900">
            ODESSY
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center md:flex">
          <ul className="flex items-center gap-1 rounded-full border border-slate-200/40 bg-slate-50/50 p-1 backdrop-blur-md">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="rounded-full px-5 py-2 text-sm font-bold text-slate-600 transition-all hover:bg-white hover:text-sky-600 no-underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden text-sm font-bold text-slate-600 transition-colors hover:text-sky-600 md:block px-4 no-underline"
          >
            Login
          </Link>
          <Button
            as={Link}
            href="/signup"
            className="bg-sky-600 text-white font-bold rounded-full px-7 shadow-lg shadow-sky-600/20 hover:bg-sky-700"
          >
            Join Now
          </Button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 md:hidden text-slate-800 text-2xl"
          >
            {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
