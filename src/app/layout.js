import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { Toast } from "@heroui/react";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
});

export const metadata = {
  title: "Odyssey - Your Travel Companion",
  description:
    "Discover and book unforgettable travel experiences worldwide with Odyssey. Explore stunning destinations, create personalized itineraries, and manage your bookings with ease. Your gateway to seamless travel planning and unforgettable adventures.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmSerifDisplay.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <NavBar />
        {children}
        <Footer />
        <Toast.Provider placement="top" />
      </body>
    </html>
  );
}
