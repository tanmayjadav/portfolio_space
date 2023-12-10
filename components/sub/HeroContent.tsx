"use client";

import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import Image from 'next/image';
import { TypeAnimation } from "react-type-animation";
const HeroContent = () => {
  return (
    <motion.div
        initial='hidden'
        animate='visible'
        className='flex flex-row items-center justify-center px-20 mt-40 w-full z-30'    
    >
      <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="flex flex-col gap-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Hello, I&apos;m {" "}
            </span>
            <TypeAnimation
              sequence={[
                "Web Developer",
                1000,
                "Software Engineer",
                1000,
                "ML Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          {/* with experience in Website building and 
          Machine Learning. Check out my projects and skills. */}
        </motion.p> 
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 text-2xl text-gray-400 max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project exprience
          </span>
        </motion.div>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          href={"#skills"}
        >
          Learn More!
          
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent
