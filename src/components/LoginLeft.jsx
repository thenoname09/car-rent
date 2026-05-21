import React from "react";

const LoginLeft = () => {
  return (
    <div
      className={`relative bg-[url('/images/hero1.jpg')] min-h-[600px] overflow-hidden  w-full bg-cover bg-no-repeat flex items-center object-cover bg-center `}
    >
  
      <div className=" absolute inset-0  bg-black/30" />

      {/* Content — anchored bottom-left */}
      <div className="absolute inset-0 p-10 z-10 flex flex-col items-center justify-center text-center ">

        <p className="text-[#DDE6ED] text-[15px] font-bold tracking-[4px] uppercase mb-3">
          Welcome Back
        </p>

        <h2 className="text-white text-7xl font-black italic tracking-tight leading-tight mb-3">
          Login to
          <br />
          <span className="text-yellow-400">DriveFleet</span>
        </h2>

        <p className="text-[#DDE6ED] text-[16px] leading-relaxed max-w-xs">
          Access your bookings, manage your cars, and explore our premium fleet.
        </p>

      </div>
    </div>
  );
};

export default LoginLeft;
