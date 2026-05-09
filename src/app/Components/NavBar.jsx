"use client";

import React, { useState, useEffect } from "react";
import { Link, Button } from "@heroui/react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
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
        {/* Brand Identity */}
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-600 to-emerald-500 shadow-lg shadow-sky-500/20 transition-transform duration-300 group-hover:rotate-12">
            <CompassIcon />
          </div>
          <span className="text-2xl font-black tracking-tight text-slate-900">
            ODESSY
          </span>
        </Link>

        {/* Desktop Navigation - Glass Pill */}
        <div className="hidden items-center md:flex">
          <ul className="flex items-center gap-1 rounded-full border border-slate-200/40 bg-white/30 p-1.5 backdrop-blur-md">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="rounded-full px-5 py-2 text-sm font-bold text-slate-600 transition-all hover:bg-white hover:text-sky-600 hover:shadow-sm"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden text-sm font-bold text-slate-600 transition-colors hover:text-sky-600 md:block px-4"
          >
            Login
          </Link>
          <Button
            as={Link}
            href="/signup"
            className="bg-sky-600 text-white font-bold rounded-full px-7 shadow-lg shadow-sky-600/20 hover:bg-sky-700 transition-all active:scale-95"
          >
            Join Now
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-colors hover:bg-slate-200 md:hidden"
            aria-label="Toggle Menu"
          >
            <div className="relative w-5 h-4">
              <span
                className={`absolute h-0.5 w-5 bg-slate-800 transition-all duration-300 ${isMenuOpen ? "top-2 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute top-1.5 h-0.5 w-5 bg-slate-800 transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute h-0.5 w-5 bg-slate-800 transition-all duration-300 ${isMenuOpen ? "top-2 -rotate-45" : "top-3"}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Overlay */}
      <div
        className={`fixed inset-0 z-[-1] flex h-screen w-screen flex-col bg-white transition-all duration-500 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 px-8 pt-32">
          {menuItems.map((item, i) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-5xl font-black tracking-tighter text-slate-900 transition-all active:text-sky-600"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {item.label}
            </Link>
          ))}

          <div className="mt-8 flex flex-col gap-4 border-t border-slate-100 pt-8">
            <Button
              as={Link}
              href="/login"
              variant="flat"
              size="lg"
              className="rounded-2xl text-lg font-bold bg-slate-100"
            >
              Sign In
            </Button>
            <p className="text-center text-slate-400 text-sm font-medium">
              Your gateway to extraordinary experiences.
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

const CompassIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="h-6 w-6 text-white"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

export default NavBar;
