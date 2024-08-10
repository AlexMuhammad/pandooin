"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import Button from "../ui/button";
import useScrollPosition from "@/hooks/useScrollPosition";
import { NAVBAR_LINKS } from "@/constants";
import { NavType } from "@/types/constants";

const Navbar = () => {
  const isScrolled = useScrollPosition(700);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  React.useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      <nav
        className={`fixed transition-all duration-300 w-full py-2 z-[999] ${
          isScrolled ? "bg-white" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto text-black">
          {/* Desktop Navbar */}
          <div className="hidden md:flex justify-between items-center max-w-7xl mx-auto px-4 py-2">
            <Link href="#" className="text-2xl font-bold">
              <Image
                src="/assets/logo-color.png"
                width={134.91}
                height={50}
                loading="lazy"
                alt="logo"
              />
            </Link>
            <div className="space-x-4">
              {NAVBAR_LINKS.map((item: NavType, index: number) => (
                <Link
                  key={index}
                  href={item.to || ""}
                  className={`${
                    isScrolled ? "text-pn-primary" : "text-white"
                  } py-6 px-4 font-semibold hover:underline`}
                >
                  {NAVBAR_LINKS.length === item.id ? (
                    <Button
                      variant="outline"
                      className={`${
                        isScrolled
                          ? "text-pn-primary border-pn-primary"
                          : "text-white border-white"
                      } py-3 px-4 border-2`}
                    >
                      {item.id === 5 && item.label}
                    </Button>
                  ) : (
                    item.label
                  )}
                </Link>
              ))}
              {/* <Link
                href="#"
                className={`${
                  isScrolled ? "text-pn-primary" : "text-white"
                } py-6 px-4 hover:underline`}
              >
                Homepage
              </Link>
              <Link
                href="#"
                className={`${
                  isScrolled ? "text-pn-primary" : "text-white"
                } py-6 px-4 hover:underline`}
              >
                Customize Your Trip
              </Link>
              <Link
                href="#"
                className={`${
                  isScrolled ? "text-pn-primary" : "text-white"
                } py-6 px-4 hover:underline`}
              >
                Services
              </Link>
              <Link
                href="#"
                className={`${
                  isScrolled ? "text-pn-primary" : "text-white"
                } py-6 px-4 hover:underline`}
              >
                Destination
              </Link>
              <Link
                href="#"
                className={`${
                  isScrolled ? "text-pn-primary" : "text-white"
                } py-6 px-4 hover:underline`}
              >
                <Button
                  variant="outline"
                  className={`${
                    isScrolled
                      ? "text-pn-primary border-pn-primary"
                      : "text-white border-white"
                  } py-3 px-4 border-2`}
                >
                  Need Assistance?
                </Button>
              </Link> */}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-between items-center px-4 py-2">
            <Link href="#" className="text-2xl font-bold">
              <Image
                src="/assets/logo-color.png"
                width={134.91}
                height={50}
                loading="lazy"
                alt="logo"
              />
            </Link>
            <Button
              variant="outline"
              onClick={toggleMenu}
              className="border-pn-terniary p-0 border-2"
            >
              <Image
                src="/assets/ic-humberger.svg"
                width={24}
                height={24}
                alt="humberger"
              />
            </Button>
          </div>

          {/* Mobile Drawer Menu */}
          <div
            className={`fixed inset-0 bg-white text-black transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 md:hidden z-50`}
          >
            <div className="flex justify-end p-4">
              <Button
                variant="outline"
                onClick={toggleMenu}
                className="border-pn-terniary p-0 border-2 text-pn-terniary"
              >
                X
              </Button>
            </div>
            <div className="space-y-4 flex flex-col items-center mt-10">
              {NAVBAR_LINKS.map((item: NavType, index: number) => (
                <Link
                  key={index}
                  href={item.to || ""}
                  className={`${
                    isScrolled ? "text-pn-primary" : "text-white"
                  } py-6 px-4 font-semibold hover:underline`}
                  onClick={toggleMenu}
                >
                  {NAVBAR_LINKS.length === item.id ? (
                    <Button
                      variant="outline"
                      className={`${
                        isScrolled
                          ? "text-pn-primary border-pn-primary"
                          : "text-white border-white"
                      } py-3 px-4 border-2`}
                    >
                      {item.id === 5 && item.label}
                    </Button>
                  ) : (
                    item.label
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
