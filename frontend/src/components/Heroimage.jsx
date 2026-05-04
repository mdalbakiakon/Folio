import React, { useRef } from "react";
import heroImg from "../assets/best.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Heroimage = () => {
  const imgRef = useRef();
  useGSAP(() => {
    gsap.from(imgRef.current, {
      opacity: 0,
      ease: "power1.in",
      duration: 1.5,
      delay: 0.75,
    });
  }, []);
  return (
    <div
      ref={imgRef}
      className="h-2/3 aspect-square w-fit overflow-hidden absolute top-25 -right-55 z-0"
    >
      {/* Image */}
      <img
        src={heroImg}
        style={{ filter: "brightness(0.35) " }}
        loading="eager"
        fetchPriority="high"
        alt="hero_image"
        className="h-full w-full object-cover bg-blend-overlay"
      />

      {/* Left to Right fade */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,transparent,transparent,#1f1f1f),linear-gradient(to_right,#1f1f1f,transparent,transparent,transparent,#1f1f1f,#1f1f1f)]" />

      {/* Top to Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-[#1f1f1f] to-transparent" />
    </div>
  );
};

export default Heroimage;
