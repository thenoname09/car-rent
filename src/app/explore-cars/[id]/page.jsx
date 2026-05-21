import BookingModal from "@/components/BookingModal";
import { Button } from "@heroui/react";
import { ArrowLeft, CalendarDays, MapPin, User, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CarDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:4000/cars_info/${id}`);
  const CarDetails = await res.json();

  const {
    _id,
    name,
    car_type,
    price,
    description,
    image,
    seat_capacity,
    location,
    availability_status,
    booking_count,
    owner_name,
    owner_email,
  } = CarDetails;

  return (
    <div>
      
      <div>
        <div className="min-h-screen bg-[#DDE6ED]/30 py-12 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <Link
              href="/explore-cars"
              className="inline-flex items-center gap-2 text-[#526D82] hover:text-[#27374D]
                     font-semibold text-sm mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Explore
            </Link>

            {/* Main Card */}
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-3xl
                        shadow-xl overflow-hidden border border-[#DDE6ED]"
            >
              {/* ── Left: Image ── */}
              <div className="relative bg-[#DDE6ED]/40 p-6 flex items-center justify-center ">
                <div className="relative overflow-hidden aspect-16/10  w-full h-95 rounded-2xl  shadow-lg">
                  <Image
                    alt={name}
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    src={image}
                    fill
                  />
                </div>

               
              </div>

              {/* ── Right: Details ── */}
              <div className="p-8 flex flex-col gap-5 ">
                {/* Name & Price */}
                <div>
                    <h2 className=" text-[#27374D]text-xs font-bold
                               px-4 pb-3 rounded-full uppercase">{car_type}</h2>
                  <h1 className="text-4xl font-black text-[#252525] mb-2">
                    {name}
                  </h1>

                  <div className="flex items-baseline gap-1 pt-2">
                    <span className="text-3xl font-black text-[#252525]">
                      ${price}
                    </span>
                    <span className="text-[#9DB2BF] font-semibold text-base">
                      / day
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p
                  className="text-[#545454] text-sm 
                          pl-4 italic"
                >
                  {description}
                </p>

                {/* Info Pills */}
  <div className="flex flex-col gap-3">
 
              <div className="flex items-center gap-3 bg-[#DDE6ED]/50 rounded-xl px-4 py-3">
                <CalendarDays className="w-4 h-4 text-[#526D82] shrink-0" />
                <span className="text-sm font-semibold text-[#27374D]">
                  Booked by {booking_count} user{booking_count !== 1 ? "s" : ""}
                </span>
              </div>
 
              <div className="flex items-center gap-3 bg-[#DDE6ED]/50 rounded-xl px-4 py-3">
                <Users className="w-4 h-4 text-[#526D82] shrink-0" />
                <span className="text-sm font-semibold text-[#27374D]">
                  {seat_capacity} seats
                </span>
              </div>
 
              <div className="flex items-center gap-3 bg-[#DDE6ED]/50 rounded-xl px-4 py-3">
                <MapPin className="w-4 h-4 text-[#526D82] shrink-0" />
                <span className="text-sm font-semibold text-[#27374D]">
                  {location}
                </span>
              </div>
 
              <div className="flex items-center gap-3 bg-[#DDE6ED]/50 rounded-xl px-4 py-3">
                <User className="w-4 h-4 text-[#526D82] shrink-0" />
                <span className="text-sm font-semibold text-[#27374D]">
                  Owner: 
                  <span className="text-[#526D82] font-normal"></span>
                </span>
              </div>
            </div>
                {/* Status */}
                <div className="bg-[#27374D] rounded-2xl px-5 py-4">
                  <p className="text-[#9DB2BF] text-xs font-bold tracking-[3px] uppercase mb-1">
                    Status
                  </p>
                  <p
                    className={`text-xl font-black ${
                      availability_status === "Available"
                        ? "text-white"
                        : "text-red-400"
                    }`}
                  >
                    {availability_status}
                  </p>
                </div>

                {/* Book Now Button */}

                <BookingModal key={id} CarDetails={CarDetails} ></BookingModal>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;
