"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const HeroSection = () => {
  const role = "Frontend Developer";
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center py-24">
      {/* Ambient background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fuchsia-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <motion.div 
          className="flex flex-col space-y-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={item} className="text-xl md:text-2xl font-medium text-fuchsia-500">
            Hello, I'm
          </motion.h2>
          
          <motion.h1 variants={item} className="font-extrabold text-5xl md:text-7xl font-sans text-white">
            Ajay V.
          </motion.h1>
          
          <motion.div variants={item} className="flex flex-wrap items-center gap-3 text-3xl md:text-4xl font-bold">
            <span className="text-gray-400">&lt;</span>
            <span className="gradient-text">{role}</span>
            <span className="text-gray-400">/&gt;</span>
          </motion.div>
          
          <motion.p variants={item} className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed">
            Building modern, scalable web applications with React, Next.js, and cutting-edge technologies. Transforming ideas into exceptional digital experiences.
          </motion.p>
          
          <motion.div variants={item} className="flex flex-wrap items-center gap-6 pt-4">
            <button className="bg-gradient-to-r from-fuchsia-600 to-amber-600 hover:from-fuchsia-500 hover:to-amber-500 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg shadow-fuchsia-500/30 transform hover:-translate-y-1 transition duration-300">
              Download Resume
            </button>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-slate-800 rounded-full text-gray-300 hover:text-fuchsia-500 hover:bg-slate-700 transition duration-300">
                <FaGithub size={24} />
              </a>
              <a href="#" className="p-3 bg-slate-800 rounded-full text-gray-300 hover:text-fuchsia-500 hover:bg-slate-700 transition duration-300">
                <FaLinkedin size={24} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="justify-self-center relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-600 to-amber-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
          <div className="relative rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl p-2 bg-[#0b0416]">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <Image
                src="/coder.jpg"
                alt="Ajay V"
                width={400}
                height={400}
                className="rounded-full object-cover aspect-square"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
