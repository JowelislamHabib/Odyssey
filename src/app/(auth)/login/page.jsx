"use client";
import React from "react";
import Link from "next/link";
import {
  IoMailOutline,
  IoLockClosedOutline,
  IoArrowForward,
  IoAlertCircleOutline,
} from "react-icons/io5";
import { authClient } from "@/lib/auth-client";
import { FieldError, Form, Input, TextField, toast } from "@heroui/react";

const LoginPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    const { data, error } = await authClient.signIn.email({
      email: email,
      password: password,
      callbackURL: "/",
    });

    console.log(data, error);
    if (error) {
      toast.danger(error.message, {
        actionProps: {
          children: "Remove",
          variant: "danger",
        },
        description: "Please check your credentials and try again.",
        indicator: <IoAlertCircleOutline size={20} />,
      });
    }
  };

  const signIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-stone-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-stone-900  mb-2">
            Welcome Back
          </h1>
          <p className="text-stone-900/50 font-medium">
            Enter your details to access your account
          </p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-xl border border-stone-200 shadow-xl shadow-stone-200/50">
          <Form
            className="space-y-6"
            onSubmit={onSubmit}
            validationBehavior="native"
          >
            <TextField
              isRequired
              name="email"
              validate={(value) =>
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                  ? "Invalid email address"
                  : null
              }
              className="space-y-2"
            >
              <label className="text-stone-900 text-xs font-black uppercase tracking-widest ml-1">
                Email Address
              </label>
              <div className="relative flex items-center">
                <IoMailOutline className="absolute left-4 text-stone-400 size-5 z-10" />
                <Input
                  aria-label="email"
                  name="email"
                  placeholder="name@example.com"
                  className="w-full pl-11 pr-4 py-4 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                />
              </div>
              <FieldError className="text-red-500 text-[10px] font-bold uppercase ml-1" />
            </TextField>

            <TextField
              isRequired
              name="password"
              validate={(value) =>
                value.length < 8 ? "Minimum 8 characters required" : null
              }
              className="space-y-2"
            >
              <div className="flex justify-between items-center ml-1">
                <label className="text-stone-900 text-xs font-black uppercase tracking-widest">
                  Password
                </label>
              </div>
              <div className="relative flex items-center">
                <IoLockClosedOutline className="absolute left-4 text-stone-400 size-5 z-10" />
                <Input
                  area-label="Password"
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-4 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                />
              </div>
              <FieldError className="text-red-500 text-[10px] font-bold uppercase ml-1" />
            </TextField>

            <button
              type="submit"
              className="w-full py-5 bg-stone-900 text-stone-50 rounded-xl font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-sky-500 transition-all active:scale-[0.98] shadow-xl shadow-stone-200 mt-2"
            >
              Secure Login
              <IoArrowForward size={18} />
            </button>
          </Form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-stone-100"></div>
            </div>
            <div className="relative flex justify-center text-[10px] uppercase tracking-[0.3em] font-black">
              <span className="bg-white px-4 text-stone-300">or</span>
            </div>
          </div>

          <button
            onClick={() => signIn()}
            className="w-full py-4 bg-white text-stone-700 border border-stone-200 rounded-xl font-bold text-sm flex items-center justify-center gap-3 hover:bg-stone-50 transition-all active:scale-[0.98] shadow-sm"
          >
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </button>

          <div className="mt-8 text-center">
            <p className="text-stone-900/50 text-sm font-medium">
              Don't have an account?
              <Link
                href="/register"
                className="text-stone-900 font-black hover:text-sky-500 transition-colors underline decoration-sky-500/30 underline-offset-4"
              >
                Create one now
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-stone-900/40 text-xs font-bold uppercase tracking-[0.2em] hover:text-stone-900"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
