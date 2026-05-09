"use client";

import React from "react";
import Link from "next/link";
import { Input, Button, Separator } from "@heroui/react";
import { HiOutlineCompass } from "react-icons/hi";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

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
    <footer className="relative mt-20 overflow-hidden bg-slate-950 pb-10 pt-20 text-slate-400">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 mb-16 lg:grid-cols-12">
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="mb-6 flex items-center gap-3 no-underline"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-600 to-emerald-500 shadow-lg shadow-sky-500/20">
                <HiOutlineCompass className="text-white text-2xl" />
              </div>
              <span className="text-3xl font-black tracking-tighter text-white">
                ODESSY
              </span>
            </Link>
            <h2 className="mb-6 text-4xl font-bold leading-[1.1] text-white md:text-5xl">
              Your gateway to extraordinary{" "}
              <span className="text-sky-500">travel experiences.</span>
            </h2>
            <p className="max-w-md text-lg text-slate-400">
              We are your trusted partner for discovering stunning destinations
              around the world.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 lg:col-span-7">
            {Object.entries(linkGroups).map(([title, links]) => (
              <div key={title}>
                <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
                  {title}
                </h3>
                <ul className="space-y-4">
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

            {/* Newsletter */}
            <div className="flex flex-col">
              <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
                Newsletter
              </h3>
              <div className="flex flex-col gap-3">
                <Input
                  type="email"
                  placeholder="Enter email"
                  variant="bordered"
                  radius="full"
                  classNames={{
                    input: "text-white placeholder:text-slate-500",
                    inputWrapper:
                      "border-slate-800 hover:border-slate-700 group-data-[focus=true]:border-sky-500",
                  }}
                />
                <Button className="bg-sky-600 font-bold text-white hover:bg-sky-700 rounded-full h-12 shadow-lg shadow-sky-900/20">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-slate-800/50" />

        {/* Bottom Section */}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm font-medium">
            © 2026{" "}
            <span className="font-bold text-white uppercase tracking-wider">
              Odessy
            </span>
            . All rights reserved.
          </p>

          <div className="flex gap-4">
            {[
              { icon: <FaTwitter />, label: "Twitter" },
              { icon: <FaInstagram />, label: "Instagram" },
              { icon: <FaLinkedinIn />, label: "LinkedIn" },
            ].map((social) => (
              <Button
                key={social.label}
                isIconOnly
                variant="flat"
                radius="full"
                className="bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-sky-400 transition-all"
                aria-label={social.label}
              >
                <span className="text-lg">{social.icon}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
