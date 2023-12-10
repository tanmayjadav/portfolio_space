import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// import { Text } from 'troika-three-text';

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[5px]">
        <a
          href="https://drive.google.com/file/d/1-wL31g1FEIlZ_U7b_y66r6IP8YWf5i25/view?usp=sharing"
          // href=""
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          {/* <span className="text-3xl font-bold ml-[0px] hidden md:block text-gray-300"> */}
          <span className="text-3xl font-bold ml-[0px] hidden md:block text-gray-300 text-transparent bg-clip-text bg-gradient-to-r to-gray-700 from-gray-500">
              {" "}
              Tanmay Jadav{" "}
            </span>
          {/* </span> */}
        </a>

        <div className="w-[600px] h-full flex flex-row items-center md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] rounded-full mr-[80px] px-[20px] py-[10px] text-gray-400 text-lg">
            <a href="https://drive.google.com/file/d/1-wL31g1FEIlZ_U7b_y66r6IP8YWf5i25/view?usp=sharing" className="cursor-pointer">
              Resume
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            {/* <a href="#projects" className="cursor-pointer">
              Contact
            </a> */}
          </div>
        </div>

        <div className="flex flex-row gap-5">
        <Link href="https://www.linkedin.com/in/tanmay-jadav21/">  
          <Image
            src="/link.webp"
            alt="logo"
            width={30}
            height={30}
            className="cursor-pointer hover:animate-slowspin"
          />
      </Link>
        <Link href="https://github.com/tanmayjadav">
          <Image
            src="/gitwhite.png"
            alt="logo"
            width={25}
            height={25}
            className="cursor-pointer hover:animate-slowspin"
          />
        </Link>
        {/* {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
