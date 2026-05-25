"use client"
 
import Link from "next/link";
import { motion } from "motion/react";

const BannerMotionText = () => {
    return (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">

      <motion.h1
        className="text-white text-6xl md:text-7xl lg:text-8xl font-black italic  text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Drive Your Dream Car
      </motion.h1>

      <motion.p
        className="text-white/70 text-base md:text-lg font-medium text-center max-w-md px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
      >
        Choose from 200+ premium vehicles. Instant booking, flexible
        returns, and zero hidden fees.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
      >
        <Link
          href="/explore-cars"
          className="bg-white text-black font-semibold text-sm px-10 py-4 rounded-full hover:bg-[#27374D] hover:text-white transition-all duration-200 shadow-xl hover:-translate-y-0.5 inline-block"
        >
          Booking Now
        </Link>
      </motion.div>

    </div>
    );
};

export default BannerMotionText;