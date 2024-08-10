import Image from "next/image";
import * as React from "react";

const Footer = () => {
  return (
    <footer className="bg-pn-primary">
      <div className="max-w-6xl mx-auto flex flex-col items-center md:items-start h-full px-[30px] md:px-0 mt-[54px]">
        <div className="flex flex-col items-center justify-between w-full py-6">
          <div>
            <span className="text-white mr-2">&copy;</span>
            <span className="text-white">
              {new Date().getFullYear()} Zamrood by PT Teknologi Pandu Wisata
            </span>
          </div>
          <div className="inline-flex items-center gap-6">
            <Image
              src="/assets/ic-facebook.svg"
              className="cursor-pointer"
              width={24}
              height={24}
              loading="eager"
              alt="dummy20"
            />
            <Image
              src="/assets/ic-instagram.svg"
              className="cursor-pointer"
              width={24}
              height={24}
              loading="eager"
              alt="dummy21"
            />
            <Image
              src="/assets/ic-email.svg"
              className="cursor-pointer"
              width={24}
              height={24}
              loading="eager"
              alt="dummy22"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
