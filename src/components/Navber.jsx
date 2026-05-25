"use client";

import { useState, useEffect } from "react";

import { BookOpen, Menu, X, User, LogOut, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { Avatar, Button, Dropdown, Label } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";


const Navber = () => {
const router = useRouter()

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { data: session } = authClient.useSession();
  const user = session?.user;

    const handleLogout = async () => {
    await authClient.signOut();
    router.refresh()
  }

  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-2"
          : "bg-white  border-b border-transparent py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="font-extrabold text-3xl tracking-tight text-[#252525]">
                DriveFleet
              </span>
            </Link>
          </div>

          <div className="hidden md:flex gap-8 items-center">
            <Link
              href="/"
              className="font-medium text-[#27374D] hover:text-[#252525] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/explore-cars"
              className="font-medium text-[#27374D] hover:text-[#252525]transition-colors"
            >
              Explore Cars
            </Link>
            <Link
              href="/add-cars"
              className="font-medium text-[#27374D] hover:text-[#252525] transition-colors"
            >
              Add Cars
            </Link>
            <Link
              href="/my-bookings"
              className="font-medium text-[#27374D] hover:text-[#252525] transition-colors"
            >
              My Bookings
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            {!user ? (
              <Link
                href="/login"
                className=""
              >
                <Button className={"font-medium  bg-[#27374D]/80 transition-colors duration-300 text-[#DDE6ED]  hover:bg-[#27374D]"}>
                   Login
                </Button>
                
              </Link>
            ) : (
              <Dropdown>
                <Button
                  aria-label="Menu"
                  variant="letter-soft"
                  className="flex items-center gap-3 px-4 py-6   bg-[#27374D]/70 rounded-full "
                >
                  <Avatar size="sm" className="border-none">

                    <Avatar.Image referrerPolicy="no-referrer" alt={user.name} src={user.image} />
                    <Avatar.Fallback>
                      {user.name?.charAt(0).toUpperCase()}
                    </Avatar.Fallback>
                  </Avatar>

                  <p className="font-semibold text-sm  items-center text-center text-[#DDE6ED]">
                    {user.name?.split(" ")[0]}
                  </p>
                </Button>
                <Dropdown.Popover>
                  <Dropdown.Menu>
                    <Dropdown.Item id="add-car" textValue="Add Car">
                      <Link
                        href="/add-cars"
                        className="text-sm flex pl-2 items-center gap-3"
                      >
                        Add Car
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item id="my-bookings" textValue="My Bookings">
                      <Link
                        href="/my-bookings"
                        className="text-sm flex items-center pl-2 gap-3"
                      >
                        My Bookings
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item id="my-added-cars" textValue="My Added Cars">
                      <Link
                        href="/my-added-cars"
                        className="text-sm flex pl-2 items-center gap-3"
                      >
                        My Added Cars
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item id="logout" textValue="Log Out">
                      <button
                        onClick={handleLogout}
                        className="px-4 py-2 text-sm text-red-500 flex items-center gap-3"
                      >
                        <LogOut className="w-4 h-4" /> Log Out
                      </button>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Popover>
              </Dropdown>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 space-y-2 bg-white border-b border-slate-200 animate-in slide-in-from-top duration-300">
          <Link
            href="/"
            className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl"
          >
            Home
          </Link>

          <Link
            href="/explore-cars"
            className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl"
          >
            Explore Cars
          </Link>

          <Link
            href="/add-cars"
            className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl"
          >
            Add Cars
          </Link>

          <Link
            href="/my-bookings"
            className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl"
          >
            My Bookings
          </Link>

          <div className="pt-4 border-t border-slate-200 mt-4">
            {!user ? (
              <div className="grid grid-cols-2 gap-4">
                <Link href="/login">
                  <Button variant="bordered" className="rounded-xl w-full">
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button color="primary" className="rounded-xl w-full">
                    Join Free
                  </Button>
                </Link>
              </div>
            ) : (
              // 
              <div className="flex flex-col gap-2">
                <p className="px-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Account
                </p>
                <Link
                  href="/my-added-cars"
                  className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl"
                >
                  My Added Cars
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-3 text-base font-medium text-red-500 hover:bg-red-50 rounded-xl"
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navber;
