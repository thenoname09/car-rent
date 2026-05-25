import CarCard from "@/components/CarCard";
import SearchBar from "@/components/SearchBar";
import { CarsData } from "@/lib/data";
import React from "react";

const ExploreCarsPage = async ({ searchParams }) => {
  const sParams = await searchParams;

  const exploreCars = await CarsData(sParams?.search || "");

  return (
    <div className="bg-[#DDE6ED]/30">

    
    <div className="py-16 px-4 max-w-7xl mx-auto space-y-8">


      <div
        className="flex flex-col sm:flex-row sm:items-center 
                    justify-between gap-4 mb-8"
      >
        <div>
          <p
            className="text-[#526D82] text-xs font-bold tracking-[4px] 
                      uppercase mb-2"
          >
            Browse Fleet
          </p>
          <h1
            className="text-3xl md:text-5xl font-black text-[#27374D] 
                       leading-tight"
          >
            Explore Cars
          </h1>
          <p className="text-[#9DB2BF] text-sm mt-2 max-w-md leading-relaxed">
            Choose from 200+ premium vehicles. Filter by type, search by name,
            and find your perfect ride.
          </p>
        </div>

        <div className="shrink-0 w-full sm:w-auto">
          <SearchBar />
        </div>
      </div>

      {exploreCars.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold text-gray-600">
            No cars found
          </h2>
          <p className="text-gray-400 mt-2">
            Try searching with a different keyword
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {exploreCars.map((exploreCar) => (
            <CarCard key={exploreCar._id} exploreCar={exploreCar}></CarCard>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default ExploreCarsPage;
