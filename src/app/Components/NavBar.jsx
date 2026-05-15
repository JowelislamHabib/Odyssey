"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Avatar, Button, Dropdown, Label } from "@heroui/react";
import { LuCompass, LuMenu, LuX } from "react-icons/lu";
import { authClient } from "@/lib/auth-client";
import { IoLogIn, IoPerson, IoPersonAdd } from "react-icons/io5";
import { PiGear } from "react-icons/pi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const NavBar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Destinations", href: "/destinations" },
    { label: "My Bookings", href: "/my-bookings" },
    { label: "Explore", href: "/explore" },
    { label: "Add Destination", href: "/add-destination" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 border-b border-zinc-100">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="flex items-center gap-3 no-underline group">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-900 transition-transform duration-500 group-hover:rotate-180">
              <LuCompass className="text-white size-7" />
            </div>
            <span className="text-3xl font-black tracking-tighter text-sky-900 uppercase">
              Odyssey
            </span>
          </Link>

          <div className="hidden md:flex items-center bg-zinc-100/50 p-1.5 rounded-2xl border border-zinc-200/50">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-5 py-2 text-sm font-bold rounded-xl transition-all no-underline ${
                    isActive
                      ? "bg-white text-sky-900 shadow-sm ring-1 ring-zinc-200/50"
                      : "text-zinc-500 hover:text-sky-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-6">
            {user && (
              <Dropdown placement="bottom">
                <Dropdown.Trigger className="outline-none">
                  <div className="flex items-center gap-3 cursor-pointer group">
                    <div className="text-right hidden lg:block">
                      <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none mb-1">
                        Explorer
                      </p>
                      <p className="text-sm font-bold text-sky-900 leading-none">
                        {user?.name}
                      </p>
                    </div>
                    <Avatar className="w-11 h-11 border-2 border-white shadow-md ring-1 ring-zinc-100 object-cover rounded-xl">
                      <Avatar.Image alt={user?.name} src={user?.image} />
                      <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                    </Avatar>
                  </div>
                </Dropdown.Trigger>

                <Dropdown.Popover
                  className="rounded-2xl mt-4 border border-zinc-100 shadow-2xl p-2 min-w-60"
                  align="center"
                >
                  <div className="px-4 py-4 mb-2 bg-sky-900 rounded-xl text-white">
                    <p className="text-xs font-medium opacity-80 mb-1 leading-none">
                      Logged in as
                    </p>
                    <p className="text-sm font-bold truncate leading-none">
                      {user?.email}
                    </p>
                  </div>

                  <Dropdown.Menu className="p-1">
                    <Dropdown.Item id="profile" className="rounded-lg">
                      <Link
                        href="/my-profile"
                        className="flex w-full items-center justify-between no-underline py-1.5"
                      >
                        <Label className="cursor-pointer text-zinc-700 font-bold text-sm">
                          Account
                        </Label>
                        <IoPerson className="size-4 text-zinc-400" />
                      </Link>
                    </Dropdown.Item>

                    <Dropdown.Item
                      id="settings"
                      textValue="Settings"
                      className="rounded-lg"
                    >
                      <div
                        className="flex w-full items-center justify-between cursor-pointer py-1.5"
                        onClick={() =>
                          setIsUserUpdateOpen && setIsUserUpdateOpen(true)
                        }
                      >
                        <Label className="cursor-pointer text-zinc-700 font-bold text-sm">
                          Preferences
                        </Label>
                        <PiGear className="size-4 text-zinc-400" />
                      </div>
                    </Dropdown.Item>

                    <Dropdown.Item
                      id="logout"
                      variant="danger"
                      className="rounded-lg mt-1 border-t border-zinc-100 pt-2"
                    >
                      <div
                        onClick={async () => {
                          await authClient.signOut();
                          router.push("/login");
                          router.refresh();
                        }}
                        className="flex w-full items-center justify-between py-1.5"
                      >
                        <Label className="cursor-pointer font-bold text-sm">
                          Sign Out
                        </Label>
                        <FaArrowUpRightFromSquare className="size-3.5" />
                      </div>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Popover>
              </Dropdown>
            )}

            {!user && (
              <div className="flex items-center gap-2">
                <Link
                  href="/login"
                  className="px-6 py-2.5 text-sm font-bold text-zinc-600 hover:text-sky-900 no-underline transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="px-6 py-3 rounded-xl bg-sky-900 text-white text-sm font-bold shadow-lg shadow-sky-900/20 hover:bg-black transition-all active:scale-95 no-underline flex items-center gap-2"
                >
                  <IoPersonAdd />
                  Join Odyssey
                </Link>
              </div>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-sky-900 bg-zinc-100 rounded-xl"
          >
            {isOpen ? <LuX size={24} /> : <LuMenu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-zinc-100 px-6 py-8 space-y-4 animate-in slide-in-from-top duration-300">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block text-2xl font-black no-underline ${pathname === item.href ? "text-sky-900" : "text-zinc-300"}`}
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
