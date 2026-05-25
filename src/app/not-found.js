import Link from 'next/link';
import React from 'react';

const Notfound = () => {
    return (
        <section className="min-h-screen bg-[#0B1120] text-white flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        {/* 404 Number */}
        <h1 className="text-[120px] md:text-[180px] font-black leading-none tracking-tight bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
          404
        </h1>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mt-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-400 mt-5 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          The page you’re looking for doesn’t exist or may have been moved.
          Explore our premium car collection and continue your journey.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link
            href="/"
            className="bg-white text-black px-7 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300"
          >
            Back To Home
          </Link>

          <Link
            href="/explore-cars"
            className="border border-white/20 bg-white/5 backdrop-blur-md px-7 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
          >
            Explore Cars
          </Link>
        </div>

        {/* Bottom Glow */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/3 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        </div>
      </div>
    </section>
    );
};

export default Notfound;