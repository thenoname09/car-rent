import Link from "next/link";
import { Separator } from "@heroui/react";
import { FaFacebook ,BsTwitterX ,FaLinkedin,FaInstagram } from "react-icons/fa";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
    return (
           <footer className="bg-[#1C1C1C] text-white mt-6">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand Column */}
          <div className="flex flex-col gap-5  lg:col-span-2 ">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 w-fit">
              
              <span className="text-white font-black text-2xl tracking-widest ">
                DriveFleet
              </span>
            </Link>

            {/* Description */}
            <p className="text-[#9CA3AF] text-sm leading-relaxed ">
              Feel free to call us in working brhours <br /> Mon – Fri{" "}
              <span className="text-white">(8:00 – 16:00)</span>. Our team will
              be happy <br />to answer your queries.
            </p>

            {/* Phone */}
            <p
             
              className="flex items-center gap-2 text-[#9CA3AF] hover:text-yellow-400 transition-colors text-sm group w-fit"
            >
              <Phone className="w-4 h-4 group-hover:text-yellow-400 transition-colors" />
              <span>+1 (333) 000-0000</span>
            </p>

            {/* Social Icons */}
             <div className="flex items-center gap-3 mt-1">
              <Link
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-yellow-400 hover:bg-yellow-300 transition-colors flex items-center justify-center"
              >
                <FaFacebook  className="w-4 h-4 text-black" />
              </Link>
           
              <Link
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-yellow-400 hover:bg-yellow-300 transition-colors flex items-center justify-center"
              >
                <FaLinkedin className="w-4 h-4 text-black" />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-yellow-400 hover:bg-yellow-300 transition-colors flex items-center justify-center"
              >
                <FaInstagram  className="w-4 h-4 text-black" />
              </Link>
            </div>
          </div>
        
          {/* ── Company Links ── */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-semibold text-base tracking-wide">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/"
                  className="text-[#9CA3AF] hover:text-yellow-400 transition-colors text-sm relative group w-fit block"
                >
                  Home
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-yellow-400 group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#9CA3AF] hover:text-yellow-400 transition-colors text-sm relative group w-fit block"
                >
                  About Us
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-yellow-400 group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[#9CA3AF] hover:text-yellow-400 transition-colors text-sm relative group w-fit block"
                >
                  Services
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-yellow-400 group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-[#9CA3AF] hover:text-yellow-400 transition-colors text-sm relative group w-fit block"
                >
                  Events
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-yellow-400 group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
            </ul>
          </div>

           {/* ── Help Links ── */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-semibold text-base tracking-wide">
              Help
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/support"
                  className="text-[#9CA3AF] hover:text-yellow-400 transition-colors text-sm relative group w-fit block"
                >
                  Customer Support
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-yellow-400 group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-[#9CA3AF] hover:text-yellow-400 transition-colors text-sm relative group w-fit block"
                >
                  How It Works
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-yellow-400 group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-[#9CA3AF] hover:text-yellow-400 transition-colors text-sm relative group w-fit block"
                >
                  Terms & Condition
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-yellow-400 group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-[#9CA3AF] hover:text-yellow-400 transition-colors text-sm relative group w-fit block"
                >
                  Privacy Policy
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-yellow-400 group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
            </ul>
          </div>

          {/* ── Work Hours ── */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-semibold text-base tracking-wide">
              Work Hours
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
                <span className="text-[#9CA3AF] text-sm leading-relaxed">
                  9 AM – 5 PM, Monday – Saturday
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
                <span className="text-[#9CA3AF] text-sm leading-relaxed">
                  support@drivefleet.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
                <span className="text-[#9CA3AF] text-sm leading-relaxed">
                  Jl. Menuju Roma No.01, Lewat Jalur Udara.
                </span>
              </li>
            </ul>
          </div>



        </div>


      </div>

      {/* Bottom Bar */}
        <Separator className="bg-[#2D2D2D] container mx-auto"  />
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#6B7280] text-sm">
            Copyright © 2025 DriveFleet 
          
          </p>
           <div className="flex items-center gap-5 text-[#6B7280] text-sm">
            <Link href="/terms" className="hover:text-yellow-400 transition-colors">
              Term of use
            </Link>
            <span className="text-[#3D3D3D]">|</span>
            <Link href="/privacy" className="hover:text-yellow-400 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#3D3D3D]">|</span>
            <Link href="/cookies" className="hover:text-yellow-400 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;