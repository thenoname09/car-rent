import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navber from "@/components/Navber";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import ToastProvider from "@/components/ToastProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DriveFleet — Premium Car Rental Platform",
  description: "DriveFleet is a premium car rental platform. Explore 200+ vehicles, instant booking, zero hidden fees, and 24/7 support.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navber></Navber>
        {children}
        <ToastProvider />
        <Footer>  </Footer>
        </body>
    </html>
  );
}
