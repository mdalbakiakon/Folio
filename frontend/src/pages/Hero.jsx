import React, { useRef } from "react";
import Layout from "../components/Layout";
import heroVid from "../assets/heroVid.mp4";
import { SiLeetcode, SiGithub, SiWhatsapp } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const vidRef = useRef();
  useGSAP(() => {
    gsap.from(vidRef.current, {
      opacity: 0,
      scale: 1.25,
      duration: 1.25,
      ease: "sine.inOut",
    });
  }, []);
  return (
    <section className="w-full h-dvh py-20">
      <svg width="0" height="0">
        <defs>
          <clipPath id="heroVideo" clipPathUnits="objectBoundingBox">
            <path
              d="M 0 0.025
Q 0 0 0.025 0
L 0.825 0
Q 0.85 0 0.85 0.025
L 0.85 0.05
Q 0.85 0.075 0.875 0.075
L 0.975 0.075
Q 1 0.075 1 0.1
L 1 0.975
Q 1 1 0.975 1
L 0.225 1
Q 0.2 1 0.2 0.975
L 0.2 0.95
Q 0.2 0.925 0.175 0.925
L 0.025 0.925
Q 0 0.925 0 0.9
Q 0 0 0 0.025
Z"
            />
          </clipPath>
        </defs>
      </svg>

      <Layout>
        <div className="h-[calc(100vh-120px)] w-full flex justify-center items-center">
          <div className="w-full h-fit relative hidden md:block">
            <button className="md:h-[6.8%] md:w-[14.5%] absolute top-0 right-0 text-(--txt-accent) md:text-[14px] lg:text-base flex justify-center items-center">
              Since 2022
            </button>

            <ul className="absolute md:h-[6.8%] md:w-[19.5%] bottom-0 left-0 rounded-2xl flex justify-around items-center">
              <li>
                <a
                  href="https://www.linkedin.com/in/md-al-baki-akon-352989362/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-(--txt-primary) transition-all ease-in-out duration-700 md:text-base lg:text-xl text-(--txt-accent)"
                >
                  <FaLinkedin />
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/mdalbakiakon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-(--txt-primary) transition-all ease-in-out duration-700 md:text-base lg:text-xl text-(--txt-accent)"
                >
                  <SiGithub />
                </a>
              </li>

              <li>
                <a
                  href="https://leetcode.com/u/baki_dev8131/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-(--txt-primary) transition-all ease-in-out duration-700 md:text-base lg:text-xl text-(--txt-accent)"
                >
                  <SiLeetcode />
                </a>
              </li>

              <li>
                <a
                  href="mailto:mdalbakiakon.dev@gmail.com"
                  className="hover:text-(--txt-primary) transition-all ease-in-out duration-700 md:text-base lg:text-xl text-(--txt-accent)"
                >
                  <MdMail />
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/8801645168525"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-(--txt-primary) transition-all ease-in-out duration-700 md:text-base lg:text-xl text-(--txt-accent)"
                >
                  <SiWhatsapp />
                </a>
              </li>
            </ul>

            <div className="w-full aspect-video [clip-path:url('#heroVideo')] relative">
              <div className="absolute bottom-20 left-10 z-40 text-(--txt-primary) text-left select-none">
                <h2>
                  <span className="text-(--txt-accent) opacity-45 text-2xl">
                    Baki,
                  </span>{" "}
                  Full Stack | MERN
                </h2>
                <h1 className="text-5xl">Software Engineer</h1>
              </div>

              <video
                ref={vidRef}
                src={window.__heroVideoCache?.src || heroVid}
                poster="/hero.jpg"
                loop
                autoPlay
                muted
                fetchPriority="high"
                playsInline
                controls={false}
                preload="auto"
                onContextMenu={(e) => e.preventDefault()}
                className="w-full h-full object-cover brightness-75 contrast-125"
              />
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default Hero;
