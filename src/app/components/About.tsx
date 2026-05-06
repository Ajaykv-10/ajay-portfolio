"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <SectionWrapper id="about">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold font-sans inline-block">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          Get to know the developer behind the code
        </p>
      </div>

      <div className="grid w-full max-w-6xl mx-auto lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          className="relative justify-self-center lg:justify-self-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Decorative elements */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-fuchsia-600 to-amber-600 rounded-2xl blur-xl opacity-30"></div>
          
          <div className="relative aspect-square rounded-2xl overflow-hidden w-80 md:w-96 p-1 bg-gradient-to-br from-slate-700 to-slate-900 shadow-2xl">
            <Image
              src="/ajay.png"
              alt="Ajay V"
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-xl bg-[#0b0416]"
            />
          </div>
          
          {/* Floating stat card */}
          <motion.div 
            className="absolute -bottom-6 -right-6 glass-card p-4 rounded-xl flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="text-3xl font-extrabold text-fuchsia-500">2+</div>
            <div className="text-sm text-gray-300 font-medium leading-tight">Years of<br/>Experience</div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="space-y-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p variants={item} className="text-lg md:text-xl text-gray-300 leading-relaxed">
            I am a passionate web developer with a love for creating beautiful,
            functional, user-friendly interfaces. I specialize in <span className="text-amber-400 font-semibold">Frontend development</span> and enjoy bringing ideas to life through code.
          </motion.p>
          
          <motion.p variants={item} className="text-lg md:text-xl text-gray-300 leading-relaxed">
            I'm constantly learning, experimenting with new technologies,
            and improving my craft—because for me, development isn't just about
            writing code, it's about building experiences that actually work for
            people. 
          </motion.p>
          
          <motion.p variants={item} className="text-lg md:text-xl text-gray-300 leading-relaxed">
            When I'm not coding, I enjoy exploring new design trends,
            improving existing projects, and pushing myself to write cleaner,
            more maintainable code.
          </motion.p>
          
          <motion.div variants={item} className="grid grid-cols-2 gap-4 pt-6">
            <div className="glass-card p-4 rounded-xl border border-slate-700 hover:border-fuchsia-500/50 transition-colors">
              <div className="text-2xl font-bold text-amber-500 mb-1">10+</div>
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </div>
            <div className="glass-card p-4 rounded-xl border border-slate-700 hover:border-fuchsia-500/50 transition-colors">
              <div className="text-2xl font-bold text-amber-500 mb-1">15+</div>
              <div className="text-gray-400 text-sm">Happy Clients</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;
