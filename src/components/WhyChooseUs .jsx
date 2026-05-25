import { Car, Clock, HeadphonesIcon, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-4  bg-[#9DB2BF]/20">
      <div className="max-w-6xl mx-auto">
       
        <div className="mb-12 text-left ">
          <p className="text-[#526D82] text-xs font-bold tracking-[4px] uppercase mb-2">
            Our Benefits
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#27374D]  italic">
            Why choose us
          </h2>
        </div>

      
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center pt-2">
        
          <div className="relative h-[320px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/18038876/pexels-photo-18038876.jpeg"
              alt="Premium car"
              fill
              className="object-cover shadow-lg"
            />
          
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
          </div>

          {/*  feature cards  */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* cards 1 */}
            <div
              className="bg-[#27374D] border border-[#DDE6ED] rounded-2xl p-6
                            hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              
              <h3 className="text-lg font-black text-[#F9FAFB] mb-3">
                No Delays
              </h3>
              <p className="text-[#9DB2BF] text-sm leading-relaxed hover:text-[#DDE6ED]">
                Instant booking confirmation with zero wait time. Your car is
                ready when you are — no paperwork, no hassle.
              </p>
            </div>

            {/* cards 2 */}
            <div
              className="bg-[#27374D] border border-[#DDE6ED] rounded-2xl p-6
                            hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              
              <h3 className="text-lg font-black text-[#F9FAFB] mb-3">
                High Quality
              </h3>
              <p className="text-[#9DB2BF] text-sm leading-relaxed hover:text-[#DDE6ED]">
                Every vehicle is thoroughly inspected and maintained to the
                highest standard so you always drive in comfort and safety.
              </p>
            </div>

            {/* cards 3 */}
            <div
              className="bg-[#27374D] border border-[#DDE6ED] rounded-2xl p-6
                            hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              
              <h3 className="text-lg font-black text-[#F9FAFB] mb-3">
                Premium Support
              </h3>
              <p className="text-[#9DB2BF] text-sm leading-relaxed hover:text-[#DDE6ED]">
                Our support team is available 24/7 to assist you before, during,
                and after your rental experience.
              </p>
            </div>

            {/* cards 4 */}
            <div
              className="bg-[#27374D] border border-[#DDE6ED] rounded-2xl p-6
                            hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              
              <h3 className="text-lg font-black text-[#F9FAFB] mb-3">
                A Diverse Selection
              </h3>
              <p className="text-[#9DB2BF] text-sm leading-relaxed hover:text-[#DDE6ED]">
                From economy hatchbacks to luxury sedans and SUVs. we have the
                perfect car for every occasion and budget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
