import { Star, Stars } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const testimonials = [
  {
    id: 1,
    rating: 5,
    review:
      "I never knew renting a car could feel this premium. The entire process was seamless, and the BMW was in mint condition. DriveFleet exceeded every expectation.",
    name: "Julian Maddox",
    role: "Luxury Event Planner",
  },
  {
    id: 2,
    rating: 5,
    review:
      "I never knew renting a car could feel this premium. The entire process was seamless, and the Ferrari was in mint condition. DriveFleet exceeded every expectation.",
    name: "Natalia Voss",
    role: "Fashion Entrepreneur",
  },
  {
    id: 3,
    rating: 5,
    review:
      "I never knew renting a car could feel this premium. The entire process was seamless, and the Porsche was in mint condition. DriveFleet exceeded every expectation.",
    name: "Cyrus Blake",
    role: "Investment Consultant",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#27374D] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14 items-start">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="" />
              <p className="text-white/50 text-xs font-bold tracking-[4px] uppercase">
                What Our Clients Say
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Real Stories,
              <br />
              Premium Experiences
            </h2>
          </div>

          {/* Right */}
          <div className="flex items-center lg:pt-16">
            <p className="text-white/40 text-sm px-5 leading-relaxed">
              Don't just take our word for it — thousands of satisfied customers 
  have experienced the DriveFleet difference. From seamless bookings 
  to premium vehicles, see what our clients are saying about us.
            </p>
          </div>
        </div>

        {/*  Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#1A1A1A] border border-white/6 rounded-2xl p-6
                         hover:border-white/20 hover:-translate-y-0.5
                         transition-all duration-300 flex flex-col justify-between"
            >
              
              <div>
                <div className="flex items-center justify-between mb-5">
                  {/* Stars */}

                  <div className="flex gap-1 ">
                    <FaStar className="text-amber-500 text-sm" />
                    <FaStar className="text-amber-500 text-sm" />
                    <FaStar className="text-amber-500 text-sm" />
                    <FaStar className="text-amber-500 text-sm" />
                    <FaStar className="text-amber-500 text-sm" />
                  </div>
                 
                  <span
                    className="bg-white/10 text-white/60 text-xs font-bold
                                   px-2.5 py-1 rounded-lg"
                  >
                    {t.rating}.0
                  </span>
                </div>

                {/* Review */}
                <div className="relative px-6 mb-6">
                  
                  <RiDoubleQuotesL className="absolute right-0 left-0 text-white/20 text-2xl" />

                  
                  <p className="text-white/60 text-sm leading-relaxed py-3 italic text-center">
                    {t.review}
                  </p>

                  <RiDoubleQuotesR className="absolute bottom-0 right-0 text-white/20 text-2xl" />
                </div>
              </div>

              
              <div className="pt-4 border-t border-white/6">
                <p className="text-white text-sm">
                  <span className="font-black">{t.name},</span>{" "}
                  <span className="text-white/40 font-normal">{t.role}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
