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
    <footer className="bg-zinc-950 pb-10 pt-24 text-zinc-500">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 mb-20 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-8">
            <Link
              href="/"
              className="flex items-center gap-3 no-underline group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-900 transition-transform duration-500 group-hover:rotate-180">
                <LuCompass className="text-white size-7" />
              </div>
              <span className="text-3xl font-black tracking-tighter text-white uppercase">
                Odyssey
              </span>
            </Link>
            <h2 className="text-4xl font-black leading-tight text-white uppercase tracking-tighter">
              Your gateway to <br />
              <span className="text-sky-500">travel experiences.</span>
            </h2>
            <p className="max-w-md text-lg font-medium text-zinc-400">
              Trusted partner for discovering stunning destinations and creating
              memories that last a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 lg:col-span-7">
            {Object.entries(linkGroups).map(([title, links]) => (
              <div key={title}>
                <h3 className="mb-8 text-[10px] font-black uppercase tracking-[0.3em] text-white">
                  {title}
                </h3>
                <ul className="space-y-4 list-none p-0">
                  {links.map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-zinc-500 font-bold text-sm transition-colors hover:text-white no-underline block"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="flex flex-col">
              <h3 className="mb-8 text-[10px] font-black uppercase tracking-[0.3em] text-white">
                Newsletter
              </h3>
              <div className="flex flex-col gap-3">
                <Input
                  type="email"
                  placeholder="Enter email"
                  aria-label="Subscribe to newsletter"
                  className="bg-zinc-900 text-white rounded-xl **:not-[]:bg-zinc-900 group-data-[hover=true]:bg-zinc-800 border-zinc-800 h-14"
                />
                <Button className="bg-sky-900 h-14 font-black uppercase tracking-widest text-white rounded-xl shadow-xl transition-all duration-200 hover:bg-white hover:text-sky-900 active:scale-95 text-xs">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-zinc-900" />

        <div className="mt-12 flex flex-col items-center justify-between gap-8 md:flex-row">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
            © 2026 <span className="text-white">Odyssey</span>. All rights
            reserved.
          </p>

          <div className="flex gap-3">
            {[
              { icon: <PiTwitterLogo size={20} />, label: "Twitter" },
              { icon: <PiInstagramLogo size={20} />, label: "Instagram" },
              { icon: <PiLinkedinLogo size={20} />, label: "LinkedIn" },
            ].map((social) => (
              <Button
                key={social.label}
                isIconOnly
                variant="flat"
                className="bg-zinc-900 text-zinc-400 rounded-xl hover:bg-sky-900 hover:text-white transition-all duration-200"
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
