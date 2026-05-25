

"use client";

import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <section className="min-h-screen bg-[#0B1120] text-white flex items-center justify-center px-6">
      <div className="max-w-2xl text-center relative">
        {/* Error Code */}
        <h1 className="text-[90px] md:text-[140px] font-black leading-none bg-linear-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
          Error
        </h1>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mt-4">
          Something went wrong
        </h2>

        {/* Description */}
        <p className="text-gray-400 mt-5 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          An unexpected error occurred while loading this page.
          Please try again or return back to the homepage.
        </p>

        {/* Optional Error Message */}
        {error?.message && (
          <div className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-4 text-sm text-red-300 wrap-break-word">
            {error.message}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <button
            onClick={() => reset()}
            className="bg-white text-black px-7 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="border border-white/20 bg-white/5 backdrop-blur-md px-7 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
          >
            Back To Home
          </Link>
        </div>

        {/* Background Glow */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/20 blur-3xl" />
        </div>
      </div>
    </section>
  );
}