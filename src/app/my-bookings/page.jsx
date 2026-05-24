import { auth } from "@/lib/auth";
import { Table } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  const user = session?.user;

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/bookings/${user?.id}`);
  const bookings = await res.json();
  console.log(bookings);

  return (
    <div className="bg-[#DDE6ED]/40 ">
      <div className=" max-w-7xl mx-auto py-8 px-4 md:py-12">
        <h1 className="text-3xl md:text-5xl font-black text-[#27374D] pl-4 mb-10">
          My Bookings
        </h1>

          {bookings.length === 0 && (
          <div className="text-center py-16 md:py-20 bg-white rounded-3xl border border-[#DDE6ED]">
           
            <h2 className="text-xl font-black text-[#27374D] mb-2">No bookings yet</h2>
            <p className="text-[#9DB2BF] text-sm">Start by exploring our available cars.</p>
          </div>
        )}

        <div className="max-w-5xl w-full mx-auto space-y-3  ">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="flex flex-col sm:flex-row gap-4 md:gap-5 rounded-2xl border border-[#DDE6ED]
                     bg-white p-4 md:p-5 hover:shadow-md hover:-translate-y-0.5
                     transition-all duration-300"
              >
              <Image
                alt={booking.carName}
                className="rounded-lg object-cover  w-full sm:w-[200px]  shrink-0"
                src={booking.carImage}
                height={200}
                width={200}
              />
              {/* <div>
              <h2 className="text-2xl font-black leading-tight text-[#252525] line-clamp-2 hover:text-[#27374D] transition-colors">
                {booking.carName}
              </h2>
              <p>
                <span>Booking Date:</span>
                {new Date(booking.bookingDate).toLocaleDateString("en-US", {
                  Years: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <h3 className="text-2xl font-bold items-center text-[#252525]">
                ${booking.carPrice}/<span className="text-xl">day</span>
              </h3>
              </div> */}
              <div className="flex  flex-col justify-between py-1 w-full">
                <div>
                  
                  <Link href={`/explore-cars/${booking.carId}`}
                    className="text-xl md:text-2xl font-black leading-tight text-[#27374D] 
                          "
                  >
                    {booking.carName}
                  </Link>

                  <p className="text-[#526D82] text-sm font-medium mt-2">
                    <span
                      className="text-[#79858d] font-semibold uppercase 
                               tracking-widest text-xs mr-2"
                    >
                      Booking Date:
                    </span>
                    {new Date(booking.bookingDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>

                <div
                  className="flex items-center justify-between mt-4 
                          pt-4 border-t border-[#DDE6ED]"
                >
                  <h3 className="text-xl md:text-2xl  font-black text-[#27374D]">
                    ${booking.carPrice}
                    <span className="text-base font-medium text-[#9DB2BF]">
                      /day
                    </span>
                  </h3>

                  <span
                    className="bg-[#DDE6ED] text-[#27374D] hover:bg-[#27374D] hover:text-[#DDE6ED] text-xs font-bold 
                             px-4 py-1.5 rounded-full uppercase tracking-wider cursor-pointer transition-colors duration-300 "
                  >
                    Cancel Booking
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBookingsPage;
