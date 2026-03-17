import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="font-extrabold text-4xl">
          About <span className="text-amber-600"> me</span>
        </h1>
        <p className="mt-5 text-lg font-bold">
          Get to know the developer behind the code
        </p>
      </div>
      <div className="grid w-[80%] mx-auto lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden p-2">
            <Image
              src="/ajay.png"
              alt="ajay"
              width={400}
              height={400}
              className="w-full h-full object-center rounded-[70px] p-2 bg-black"
            />
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-xl ">
            I am a passionate web developer with a love for creating beautiful,
            functional, user-friendly interfaces. I specialize in Frontend
            developement and enjoy bringing ideas to life through code.
          </h3>
          <h3 className="text-xl  mt-2">
            I'm constantly learning, experimenting with new technologies and
            improving my craft-because for me, development isnt just about
            writing code, its about building experiences that actually work for
            people. When I am not coding, I enjoy exploring new design trends,
            improving existing projects and pushing myself to write cleaner,
            more maintanable code.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
