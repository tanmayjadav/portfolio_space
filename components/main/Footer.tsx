import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    // <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
    // <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[5px]">
    <div className="w-full h-full relative bottom-0 text-gray-200 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] z-40 px-10">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px] mb-3">Community</div>
                    {/* <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaYoutube />
                        <span className="text-[15px] ml-[6px]">Youtube</span>    
                    </p> */}
                    <a href="https://github.com/tanmayjadav" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <p className="text-[15px] ml-[6px]">GitHub</p>
                    </a>
                    <a href="https://discord.com/tanmay_jadav" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxDiscordLogo />
                        <p className="text-[15px] ml-[6px]">Discord</p>    
                    </a>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px] mb-3">Social Media</div>
                    <a href="https://www.instagram.com/tanmay_jadav/" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaInstagram />
                        <p className="text-[15px] ml-[6px]">Instagram</p>    
                    </a>
                    <a href="https://www.linkedin.com/in/tanmay-jadav21/" className="flex flex-row items-center my-[15px] cursor-pointer">
                         <RxLinkedinLogo />
                        <p className="text-[15px] ml-[6px]">LinkedIn</p>   
                    </a>
                       
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
                     
                        <span className="text-[15px] ml-[6px]">Become Sponsor</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                      
                        <span className="text-[15px] ml-[6px]">Learning about me</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                    <span className="text-[15px] ml-[6px]">
                        <a href="mailto:tanmayjadav21@gmail.com" className="text-blue-700 hover:underline">
                             tanmayjadav21@gmail.com
                         </a>
                    </span>
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; Tanmay products 2023 Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer