"use client";

import React from "react";
import Link from "next/link";
import { Input, Button, Separator } from "@heroui/react";
import { LuCompass } from "react-icons/lu";
import { PiTwitterLogo, PiInstagramLogo, PiLinkedinLogo } from "react-icons/pi";

const Footer = () => {
  const linkGroups = {
    Explore: ["Home", "Destinations", "My Bookings", "Explore"],
    Support: [
      "Help Center",
      "Terms of Service",
      "Privacy Policy",
      "Contact Us",
    ],
  };

  return (
    <footer className="bg-slate-950 pb-10 pt-20 text-slate-400">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 mb-16 lg:grid-cols-12">
          {/* Brand & Tagline */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="mb-6 flex items-center gap-3 no-underline group"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br  from-sky-600 to-blue-800 shadow-lg transition-transform group-hover:rotate-12">
                <LuCompass className="text-white size-6" />
              </div>
              <span className="text-3xl font-black tracking-tighter text-white">
                ODESSY
              </span>
            </Link>
            <h2 className="mb-6 text-4xl font-bold leading-[1.1] text-white md:text-3xl">
              Your gateway to extraordinary{" "}
              <span className="text-sky-500">travel experiences.</span>
            </h2>
            <p className="max-w-md text-lg text-slate-400">
              Trusted partner for discovering stunning destinations and creating
              memories that last a lifetime.
            </p>
          </div>

          {/* Navigation Links Grid */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 lg:col-span-7">
            {Object.entries(linkGroups).map(([title, links]) => (
              <div key={title}>
                <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
                  {title}
                </h3>
                <ul className="space-y-4 list-none p-0">
                  {links.map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-slate-400 transition-colors hover:text-white no-underline block"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter Section - Standalone Input */}
            <div className="flex flex-col">
              <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
                Newsletter
              </h3>
              <div className="flex flex-col gap-3">
                <Input
                  type="email"
                  placeholder="Enter email"
                  aria-label="Subscribe to newsletter"
                  className="bg-slate-900 border-slate-800 text-white rounded-full"
                />
                <Button className="bg-sky-600 font-bold text-white hover:bg-sky-700 rounded-full shadow-lg shadow-sky-900/20">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-slate-800/50" />

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm font-medium">
            © 2026{" "}
            <span className="font-bold text-white uppercase tracking-wider">
              Odessy
            </span>
            . All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[
              { icon: <PiTwitterLogo size={22} />, label: "Twitter" },
              { icon: <PiInstagramLogo size={22} />, label: "Instagram" },
              { icon: <PiLinkedinLogo size={22} />, label: "LinkedIn" },
            ].map((social) => (
              <Button
                key={social.label}
                isIconOnly
                variant="light"
                radius="full"
                className="text-slate-400 hover:bg-slate-900 hover:text-sky-400"
                aria-label={social.label}
              >
                {social.icon}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
