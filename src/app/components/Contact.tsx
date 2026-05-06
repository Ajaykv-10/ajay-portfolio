'use client';
import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold font-sans gradient-text inline-block">
          Get In Touch
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </div>

      <div className="max-w-3xl mx-auto glass-card rounded-3xl p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-fuchsia-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        <form className="relative z-10 flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); alert("Thanks for reaching out! (Form UI only for now)"); }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium text-gray-300 mb-2">Name</label>
              <input type="text" id="name" required className="bg-slate-900/50 border border-slate-700 text-white text-sm rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full p-3 transition duration-300" placeholder="John Doe" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-gray-300 mb-2">Email</label>
              <input type="email" id="email" required className="bg-slate-900/50 border border-slate-700 text-white text-sm rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full p-3 transition duration-300" placeholder="john@example.com" />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm font-medium text-gray-300 mb-2">Message</label>
            <textarea id="message" rows={5} required className="bg-slate-900/50 border border-slate-700 text-white text-sm rounded-lg focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full p-3 transition duration-300" placeholder="Your message here..."></textarea>
          </div>
          <button type="submit" className="w-full md:w-auto md:px-10 py-3 mt-2 bg-gradient-to-r from-fuchsia-600 to-amber-600 hover:from-fuchsia-500 hover:to-amber-500 text-white font-bold rounded-lg shadow-lg shadow-fuchsia-500/30 transform hover:-translate-y-1 transition duration-300 self-center">
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-16 flex justify-center gap-6">
        <a href="#" className="text-gray-400 hover:text-fuchsia-500 transform hover:scale-110 transition duration-300">
          <FaGithub size={30} />
        </a>
        <a href="#" className="text-gray-400 hover:text-fuchsia-500 transform hover:scale-110 transition duration-300">
          <FaLinkedin size={30} />
        </a>
        <a href="#" className="text-gray-400 hover:text-fuchsia-500 transform hover:scale-110 transition duration-300">
          <FaTwitter size={30} />
        </a>
        <a href="mailto:ajay@example.com" className="text-gray-400 hover:text-fuchsia-500 transform hover:scale-110 transition duration-300">
          <FaEnvelope size={30} />
        </a>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
