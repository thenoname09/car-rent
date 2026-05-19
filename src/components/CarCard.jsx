import { Button, Chip } from '@heroui/react';
import { BookOpen, Clock } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { MdAirlineSeatReclineExtra } from 'react-icons/md';

const CarCard = ({exploreCar}) => {
    const {image,price,car_type,description,seat_capacity,availability_status,location,name} = exploreCar
    return (
         <div
            className="group flex flex-col bg-white rounded-4xl border border-slate-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
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
                        color="primary"
                        variant="solid"
                        className="font-bold shadow-lg shadow-blue-600/20"
                    >
                        {availability_status}
                    </Chip>
                </div>
            </div>
            
            <div className="p-8 flex flex-col grow space-y-4">
                <div className="space-y-2">
                    <h2 className='font-bold text-xl text-[#27374D]'>{car_type}</h2>
                    <h3 className="text-2xl font-black leading-tight text-[#252525] line-clamp-2 hover:text-[#27374D] transition-colors">
                      {  name}
                    </h3>
                    <p className="text-sm text-slate-500 font-medium flex items-center gap-1">
                         <span className="text-[#545454]">{description}</span>
                    </p>
                </div>

                <div className="flex  flex-col gap-2 text-[15px] text-[#526D82] font-bold">
                    <span className="flex items-center gap-1">
                        <MdAirlineSeatReclineExtra  className=''/> {seat_capacity} seats
                    </span>
                    <span className="flex items-center gap-1">
                        <IoLocationOutline /> {location}
                    </span>
                </div>
<span className="text-2xl font-black text-[#252525]">${price}</span>
                <div className="pt-6 mt-auto border-t border-slate-100  flex justify-between items-center">
                  

                    <Button
                        variant="flat"
                        color="primary"
                        className="font-bold rounded-xl py-6 text-xl  bg-[#252525] text-[#DDE6ED] w-full"
                    >
                        Learn More
                    </Button>

                </div>
            </div>
        </div>
    );
};

export default CarCard;