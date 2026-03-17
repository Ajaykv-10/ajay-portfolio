"use client";
import Image from "next/image";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";

const AnimateImage = motion(Image);
export const HeroSection = () => {
  const role = "Frontend Developer";
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section
      id="#home"
      className="py-24 min-h-screen flex flex-coljustify-center items-center"
    >
      <div className="grid grid-cols-1 justify-center items-center md:grid-cols-2 gap-2">
        <div className="col-span-1">
          <h1 className="font-extrabold text-xl">Hello, I'm</h1>
          <h1 className="font-extrabold text-7xl">Ajay</h1>
          <div className="text-3xl mt-5 font-bold inline-flex items-center gap-2 text-amber-600">
            {" "}
            <IoIosArrowBack className="size-10 " />{" "}
            <motion.p
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="text-4xl font-bold"
            >
              {role.split("").map((char, index) => (
                <motion.span key={index} variants={letter}>
                  {char}
                </motion.span>
              ))}
            </motion.p>
          </div>
          <p className="text-2xl">
            Building modern, responsive web interfaces with React, Next JS and
            Typescript
          </p>
          <button className="bg-orange-700 rounded-2xl px-6 py-2 mt-5 text-lg font-bold">
            Resume
          </button>
        </div>
        <div className="justify-self-center">
          <AnimateImage
            src="/coder.jpg"
            alt="logo"
            width={400}
            height={300}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: false }}
          />
        </div>
      </div>
    </section>
  );
};
