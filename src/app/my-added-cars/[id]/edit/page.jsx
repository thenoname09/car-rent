import UserListingCarUpdate from "@/components/UserListingCarUpdate";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const UpdateCarPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/cars_info/${id}`,
    
  );

  const carData = await res.json();
  console.log(carData);

  return (
    <div className="bg-[#DDE6ED] ">
      <div className="flex max-w-6xl mx-auto justify-between text-center  px-4 py-6 md:py-10 gap-4 items-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold   text-[#27374D] text-left ">
          Update Car details
        </h1>

        <Link
          href="/my-added-cars"
          className="inline-flex items-center gap-2 text-[#526D82] hover:text-[#27374D] text-center
                                     font-semibold text-sm  transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Back to My Cars</span> 
          <span className="sm:hidden">Back</span>  
        </Link>
      </div>

      <UserListingCarUpdate carData={carData}></UserListingCarUpdate>
    </div>
  );
};

export default UpdateCarPage;
