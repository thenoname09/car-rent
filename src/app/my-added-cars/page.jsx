import ListingsCarsDeleteBtn from "@/components/ListingsCarsDeleteBtn";
import { auth } from "@/lib/auth";
import { LocationArrow } from "@gravity-ui/icons";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLocation } from "react-icons/io5";

const MyListingsCarsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  const user = session?.user;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/my_car_listing/${user?.id}`,
  );
  const ListingsCars = await res.json();
  console.log(ListingsCars);
  return (
    <div className="bg-[#DDE6ED]/40 ">
      <div className=" max-w-7xl mx-auto py-12 px-4 ">
        <h1 className="text-5xl font-black text-[#27374D] pl-4 mb-10">
          My Added Cars
        </h1>

        {ListingsCars.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-[#DDE6ED]">
            <h2 className="text-xl font-black text-[#27374D] mb-2">
              No bookings yet
            </h2>
            <p className="text-[#9DB2BF] text-sm">
              Start by exploring our available cars.
            </p>
          </div>
        )}

        <div className="max-w-5xl w-full mx-auto space-y-3  ">
          {ListingsCars.map((ListingsCar) => (
            <div
              key={ListingsCar._id}
              className="flex gap-5 justify-between rounded-2xl border border-[#DDE6ED] 
                           bg-white/90 p-5 hover:shadow-md  
                           transition-all duration-300"
            >
              <div className="flex gap-5">
                <Image
                  alt={ListingsCar.name}
                  className="rounded-lg object-cover"
                  src={ListingsCar.image}
                  height={200}
                  width={200}
                />
                {/* <div>
                <Link href={`/explore-cars/${ListingsCar._id}`}
                                    className="text-2xl font-black leading-tight text-[#27374D] 
                                          "
                                  >
                                    {ListingsCar.name}
                                  </Link>

                </div> */}
                  <div className="flex flex-col gap-1.5 pt-1 ">
                  <Link
                    href={`/explore-cars/${ListingsCar._id}`}
                    className="text-2xl font-black leading-tight text-[#27374D]"
                  >
                    {ListingsCar.name}
                  </Link>
                  <p className="text-sm text-[#526D82] capitalize gap-2 align-middle ">
                    <span className="font-semibold text-[#27374D] ">
                      {ListingsCar.car_type}
                    </span>{" "}
                     .
                      <span className="pl-1">
                         {ListingsCar.location}
                      </span>
                      
                  </p>
                  <p className="text-lg font-black text-[#27374D]">
                    ${ListingsCar.price}
                    <span className="text-xs font-normal text-[#9DB2BF] ml-1">
                      / day
                    </span>
                  </p>
                  <span
                    className={`self-start text-xs font-bold px-3 py-1 rounded-full capitalize ${
                      ListingsCar.availability_status === "Available"
                        ? "bg-green-50 text-green-700"
                        : "bg-amber-50 text-amber-700"
                        
                    }`}
                  >
                    {ListingsCar.availability_status}
                  </span>
                </div>
              </div>

              {/* btn */}
              <div className="items-center flex flex-col gap-4 justify-center  text-center p-4">

                  <span
                    className="bg-[#DDE6ED] text-[#27374D] hover:bg-[#27374D] hover:text-[#DDE6ED] text-xs font-bold 
                             px-4 py-1.5 rounded-full w-full uppercase tracking-wider cursor-pointer transition-transform duration-700 "
                  >
                    edit
                  </span>
                  <ListingsCarsDeleteBtn ListingsCar={ListingsCar}></ListingsCarsDeleteBtn>
                  
              </div>

              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyListingsCarsPage;
