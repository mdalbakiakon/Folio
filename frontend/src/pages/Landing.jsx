import React, { useRef } from "react";
import Heroimage from "../components/Heroimage";

const Landing = () => {
  
  return (
    <section className="text-(--txt-primary) w-full h-dvh relative">
      <div className="font-conthrax text-center text-9xl font-black absolute bottom-0 right-4 text-(--txt-mask) tracking-tight select-none">
        Portfolio
      </div>

      <div className="w-full h-full max-w-7xl mx-auto relative z-10">
        
        {/* hero Image */}
        <Heroimage />

        {/* hero headings div */}
        <div className="w-full h-full flex flex-col justify-center items-center text-center relative">
          <span className="text-(--txt-accent) font-normal text-4xl">
            Hi, I'm Baki
          </span>
          <h1 className="text-7xl font-medium text-white leading-tight">
            Full Stack Software Engineer
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Landing;
