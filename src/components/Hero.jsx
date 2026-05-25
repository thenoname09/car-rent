import Image from "next/image";
import Link from "next/link";
import React from "react";
import BannerMotionText from "./BannerMotionText";

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
          
          <BannerMotionText></BannerMotionText>

         

        </div>
  );
};

export default Hero;
