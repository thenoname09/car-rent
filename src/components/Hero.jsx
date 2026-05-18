import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    // <div className="bg-[url('/images/cars2.jpg')] h-screen overflow-hidden min-h-[600px] w-full bg-cover bg-no-repeat flex items-center object-cover bg-center  ">

    //   <div className="w-full h-full  bg-black/10 flex items-center ">
      
    //     <div className="max-w-7xl mx-auto px-10 text-white">
    //       <h1
    //         className="text-white text-6xl md:text-7xl lg:text-8xl font-black italic
    //                  tracking-tight text-center drop-shadow-2xl"
    //       >
    //         Drive Your Dream Car.
    //       </h1>
    //     </div>
    //   </div>
    // </div>

         <div className="relative w-full h-screen min-h-[600px] overflow-hidden">

          {/* Background car image */}
          <Image
            src="/images/cars2.jpg"
            alt="Premium car rental"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/15" />

          {/* Centered content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">
            <h1
              className="text-white text-6xl md:text-7xl lg:text-8xl font-black italic
                         tracking-tight text-center  "
            >
              Drive Your Dream Car.
            </h1>
            {/* <p className=" text-white font-semibold text-xl pb-6 italic ">Choose from 200+ premium vehicles. Instant booking, flexible returns, and zero hidden fees.</p> */}

            <Link
              href="/explore"
              className="bg-white text-black font-semibold text-sm px-10 py-4
                         rounded-full hover:bg-gray-100 transition-all duration-200
                         shadow-xl hover:-translate-y-0.5"
            >
              Booking Now
            </Link>
          </div>

        </div>
  );
};

export default Hero;
