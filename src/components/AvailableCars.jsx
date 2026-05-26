import React from "react";
import AvailablecarCard from "./AvailablecarCard";
import { availableCars } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const AvailableCars = async () => {
    const carsData = await availableCars()
  return (
    <div className="bg-[#DDE6ED]/30">

   
  <div className="py-16 px-4 max-w-7xl mx-auto">

      
      <div className="flex items-center justify-between mb-10">
        <div>
          <p className="text-[#526D82] text-xs font-semibold tracking-[4px] uppercase mb-2">
            Our Fleet
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[#27374D] dark:text-white tracking-tight">
            Available Cars
          </h2>
        </div>

        <Link
          href="/explore-cars"
          className="flex items-center gap-2 text-sm font-semibold text-stone-500 
                     hover:text-stone-600 border border-stone-500 hover:border-stone-600
                     px-5 py-2.5 rounded-full transition-all duration-200"
        >
          See All
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
        {carsData.map((carData) => (
          <AvailablecarCard key={carData._id} carData={carData} />
        ))}
      </div>

    </div>
     </div>
  );
};

export default AvailableCars;
