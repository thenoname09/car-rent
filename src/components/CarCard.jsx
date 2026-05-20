import { Button, Chip } from "@heroui/react";
import { BookOpen, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdAirlineSeatReclineExtra } from "react-icons/md";

const CarCard = ({ exploreCar }) => {
  const {
    image,
    price,
    car_type,
    description,
    seat_capacity,
    availability_status,
    location,
    name,
    _id,
  } = exploreCar;
  return (
    <div
      className="group flex flex-col bg-[#DDE6ED]
         rounded-4xl border border-slate-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative overflow-hidden aspect-16/10">
        <Image
          alt="Course Image"
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          src={image}
          fill
        />
        <div className="absolute top-4 right-4">
          <Chip
            color={availability_status === "Available" ? "success" : "danger"}
            variant="solid"
            className="font-bold shadow-lg"
          >
            {availability_status}
          </Chip>
        </div>
      </div>

      <div className="p-8 flex flex-col grow space-y-4 text-left">
        <div className="space-y-2">
          <h2 className="font-bold text-xl text-[#27374D]">{car_type}</h2>
          <h3 className="text-2xl font-black leading-tight text-[#252525] line-clamp-2 hover:text-[#27374D] transition-colors">
            {name}
          </h3>
          <p className="text-sm text-[#545454] font-medium line-clamp-2">
            {description}
          </p>
        </div>

        <div className="flex  flex-col gap-2 text-[15px] text-[#526D82] font-bold">
          <span className="flex items-center gap-1">
            <MdAirlineSeatReclineExtra className="" /> {seat_capacity} seats
          </span>
          <span className="flex items-center gap-1">
            <IoLocationOutline /> {location}
          </span>
        </div>
        <h3 className="text-2xl font-bold items-center text-[#252525]">
          ${price}/<span className="text-xl">day</span>
        </h3>
        <div className="pt-5 mt-auto border-t border-slate-100  flex justify-between items-center">
          <Link href={`/explore-cars/${_id}`} className="w-full">
            <Button
              variant="flat"
              color="primary"
              className="font-bold rounded-xl py-3 text-base 
                                     bg-[#27374D] hover:bg-[#526D82]   
                                     text-[#DDE6ED] w-full transition-colors"
            >
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
