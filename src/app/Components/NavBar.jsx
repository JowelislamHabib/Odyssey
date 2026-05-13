"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import this
import { Avatar, Button, Dropdown, Label } from "@heroui/react";
import { LuCompass, LuMenu, LuX } from "react-icons/lu";
import { authClient } from "@/lib/auth-client";
import { IoLogIn, IoPerson, IoPersonAdd } from "react-icons/io5";
import { PiGear } from "react-icons/pi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current route

  const { data: session } = authClient.useSession();
  const user = session?.user;
  // console.log(session);

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
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-600 to-blue-800 shadow-lg transition-transform group-hover:rotate-12">
              <LuCompass className="text-white size-6" />
            </div>
            <p className="text-2xl font-black tracking-tight text-slate-900 uppercase">
              Odessy
            </p>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 rounded-xl border border-slate-200/40 bg-slate-50/50 p-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`rounded-lg px-5 py-2 text-sm font-bold transition-all no-underline ${
                    isActive
                      ? "bg-white text-sky-600 shadow-sm ring-1 ring-slate-200/50"
                      : "text-slate-600 hover:bg-white/50 hover:text-sky-600"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Actions */}

          <div className="hidden md:flex items-center gap-4">
            {user && (
              <Dropdown placement="bottom">
                <Dropdown.Trigger className="flex items-center justify-center rounded-full outline-none shrink-0">
                  {" "}
                  <h1 className="mr-2 text-sm  text-slate-900">
                    Hi, {user?.name}
                  </h1>
                  <Avatar
                    size="lg"
                    className="border-2 border-sky-500 rounded-full object-cover cursor-pointer"
                  >
                    <Avatar.Image alt={user?.name} src={user?.image} />
                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                  </Avatar>
                </Dropdown.Trigger>

                <Dropdown.Popover className="rounded-xl mt-2" align="center">
                  <div className="px-3 pt-3 pb-1">
                    <div className="flex items-center gap-2">
                      <Avatar size="md">
                        <Avatar.Image alt={user?.name} src={user?.image} />
                        <Avatar.Fallback>
                          {user?.name.charAt(0)}
                        </Avatar.Fallback>
                      </Avatar>
                      <div className="flex flex-col gap-0">
                        <p className="text-sm leading-5 font-medium">
                          {user?.name}
                        </p>
                        <p className="text-xs leading-none text-muted">
                          {user?.email}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Dropdown.Menu>
                    <Dropdown.Item id="profile">
                      <Link
                        href={"/my-profile"}
                        className="flex w-full items-center justify-between gap-2"
                      >
                        <Label>My Profile</Label>
                        <IoPerson className="size-3.5 text-muted" />
                      </Link>
                    </Dropdown.Item>

                    <Dropdown.Item
                      id="settings"
                      textValue="Settings"
                      onAction={() => setIsUserUpdateOpen(true)}
                    >
                      <div
                        className="flex w-full items-center justify-between gap-2 cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsUserUpdateOpen(true);
                        }}
                      >
                        <Label className="cursor-pointer">Settings</Label>
                        <PiGear className="size-3.5 text-muted" />
                      </div>
                    </Dropdown.Item>

                    <Dropdown.Item id="logout" variant="danger">
                      <div
                        onClick={async () => {
                          await authClient.signOut();
                          router.push("/login");
                          router.refresh();
                        }}
                        className="flex w-full items-center justify-between gap-2"
                      >
                        <Label>Log Out</Label>
                        <FaArrowUpRightFromSquare className="size-3.5 text-danger" />
                      </div>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Popover>
              </Dropdown>
            )}

            {!user && (
              <div className="hidden md:flex gap-4 justify-center items-center">
                <Link
                  href={"/login"}
                  className="flex justify-center items-center gap-2 px-5 py-2 rounded-xl border-2 border-sky-500 text-stone-900 font-bold hover:shadow-[0_8px_24px_rgba(245,158,11,0.2)] transition-all active:scale-95"
                >
                  <IoLogIn size={24} />
                  Login
                </Link>
                <Link
                  href={"/register"}
                  className="flex justify-center items-center gap-2 px-5 py-2 rounded-xl border-2 border-sky-500 bg-sky-500 text-stone-50 font-bold hover:shadow-[0_8px_24px_rgba(245,158,11,0.3)] transition-all active:scale-95"
                >
                  <IoPersonAdd />
                  Register
                </Link>
              </div>
            )}
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
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)} // Close menu on click
                className={`block px-3 py-3 text-base font-bold rounded-lg no-underline ${
                  isActive
                    ? "bg-sky-50 text-sky-600"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
