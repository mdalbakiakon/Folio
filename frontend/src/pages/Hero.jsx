import React, { useRef } from "react";
import Layout from "../components/Layout";

import hero540 from "../assets/hero-540.mp4";
import hero720 from "../assets/hero-720.mp4";
import hero1080 from "../assets/hero-1080.mp4";

import { SiLeetcode, SiGithub, SiWhatsapp } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const desktopVidRef = useRef(null);
  const mobileVidRef = useRef(null);

  const heroMobTxt = useRef(null);
  const heroPcTxt = useRef(null);

  const pcSince = useRef(null);
  const mobSince = useRef(null);

  const pcLink = useRef(null);
  const mobLink = useRef(null);

  const cachedVideo = window.__heroVideoCache;

  const width = window.innerWidth;

  let heroVid = hero1080;

  if (width <= 640) {
    heroVid = hero540;
  } else if (width <= 1024) {
    heroVid = hero720;
  }

  useGSAP(() => {
    const isMobile = window.innerWidth < 768;

    const target = isMobile
      ? mobileVidRef.current
      : desktopVidRef.current;

    const sinceTarget = isMobile
      ? mobSince.current
      : pcSince.current;

    const linkTarget = isMobile
      ? mobLink.current
      : pcLink.current;

    if (!target) return;

    gsap.from(target, {
      opacity: 0,
      scale: 1.25,
      duration: 1.25,
      ease: "sine.inOut",
    });

    gsap.from(heroMobTxt.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
    });

    gsap.from(heroPcTxt.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
    });

    gsap.from(sinceTarget, {
      opacity: 0,
      delay: 1,
      duration: 1.5,
      ease: "power2.out",
    });

    gsap.from(linkTarget, {
      opacity: 0,
      y: 25,
      delay: 0.75,
      duration: 1.75,
      ease: "power2.out",
    });
  }, []);

  return (
    <section className="w-full h-dvh flex justify-center items-center">
      <svg width="0" height="0">
        <defs>
          <clipPath id="heroVideo" clipPathUnits="objectBoundingBox">
            <path d="M 0 0.025 Q 0 0 0.025 0 L 0.825 0 Q 0.85 0 0.85 0.025 L 0.85 0.05 Q 0.85 0.075 0.875 0.075 L 0.975 0.075 Q 1 0.075 1 0.1 L 1 0.975 Q 1 1 0.975 1 L 0.225 1 Q 0.2 1 0.2 0.975 L 0.2 0.95 Q 0.2 0.925 0.175 0.925 L 0.025 0.925 Q 0 0.925 0 0.9 Q 0 0 0 0.025 Z" />
          </clipPath>
        </defs>
      </svg>

      <svg width="0" height="0">
        <defs>
          <clipPath id="heroVideoMobile" clipPathUnits="objectBoundingBox">
            <path d="M 0 0.025 Q 0 0 0.025 0 L 0.625 0 Q 0.65 0 0.65 0.025 L 0.65 0.05 Q 0.65 0.075 0.675 0.075 L 0.975 0.075 Q 1 0.075 1 0.1 L 1 0.975 Q 1 1 0.975 1 L 0.475 1 Q 0.45 1 0.45 0.975 L 0.45 0.95 Q 0.45 0.925 0.425 0.925 L 0.025 0.925 Q 0 0.925 0 0.9 Q 0 0 0 0.025 Z" />
          </clipPath>
        </defs>
      </svg>

      <Layout>
        {/* DESKTOP */}
        <div className="h-[calc(100dvh-248px)] w-full justify-center items-center hidden md:flex">
          <div className="lg:aspect-video h-fit max-h-full relative flex justify-center items-center">
            <div
              ref={pcSince}
              className="md:h-[6.8%] md:w-[14.5%] absolute top-0 right-0 text-(--txt-accent) md:text-[14px] lg:text-base flex justify-center items-center text-center"
            >
              Since 2022
            </div>

            <ul
              ref={pcLink}
              className="absolute md:h-[6.8%] md:w-[19.5%] bottom-0 left-0 rounded-2xl flex justify-around items-center"
            >
              <li>
                <a
                  href="https://www.linkedin.com/in/md-al-baki-akon-352989362/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-(--txt-accent) hover:text-(--txt-primary) transition-all duration-300 ease-in-out 2xl:text-xl"
                >
                  <FaLinkedin />
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/mdalbakiakon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-(--txt-accent) hover:text-(--txt-primary) transition-all duration-300 ease-in-out 2xl:text-xl"
                >
                  <SiGithub />
                </a>
              </li>

              <li>
                <a
                  href="https://leetcode.com/u/baki_dev8131/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-(--txt-accent) hover:text-(--txt-primary) transition-all duration-300 ease-in-out 2xl:text-xl"
                >
                  <SiLeetcode />
                </a>
              </li>

              <li>
                <a
                  href="mailto:mdalbakiakon.dev@gmail.com"
                  className="text-(--txt-accent) hover:text-(--txt-primary) transition-all duration-300 ease-in-out 2xl:text-xl"
                >
                  <MdMail />
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/8801645168525"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-(--txt-accent) hover:text-(--txt-primary) transition-all duration-300 ease-in-out 2xl:text-xl"
                >
                  <SiWhatsapp />
                </a>
              </li>
            </ul>

            <div className="max-h-full aspect-video [clip-path:url('#heroVideo')] relative">
              <div
                ref={heroPcTxt}
                className="absolute md:bottom-[10%] md:left-[2.5%] lg:bottom-[10.5%] z-40 text-(--txt-primary) text-left select-none"
              >
                <h2 className="md:text-[12.5px] lg:text-base">
                  <span className="text-(--txt-accent) opacity-75 md:text-xl lg:text-2xl">
                    Baki,
                  </span>{" "}
                  Full Stack | MERN
                </h2>

                <h1 className="md:text-4xl lg:text-5xl">
                  Software Engineer
                </h1>
              </div>

              <video
                ref={desktopVidRef}
                src={cachedVideo?.src || heroVid}
                loop
                muted
                autoPlay
                playsInline
                controls={false}
                preload="metadata"
                onContextMenu={(e) => e.preventDefault()}
                className="w-full h-full object-cover brightness-75 contrast-125"
              />
            </div>
          </div>
        </div>

        {/* MOBILE */}
        <div className="w-full h-full flex justify-center items-center md:hidden">
          <div className="w-full h-[calc(100dvh-152px)] relative flex justify-center items-center">
            <div className="w-fit h-fit relative">
              <div
                ref={mobSince}
                className="h-[7.5%] w-[35%] absolute top-0 right-0 text-(--txt-accent) text-[13px] sm:text-base flex justify-center items-center text-center"
              >
                Since 2022
              </div>

              <ul
                ref={mobLink}
                className="h-[7.5%] w-[45%] absolute bottom-0 left-0 rounded-2xl flex justify-around items-center"
              >
                <li>
                  <a
                    href="https://www.linkedin.com/in/md-al-baki-akon-352989362/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-(--txt-accent) hover:text-(--txt-primary) transition-all duration-300 ease-in-out"
                  >
                    <FaLinkedin />
                  </a>
                </li>

                <li>
                  <a
                    href="https://github.com/mdalbakiakon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-(--txt-accent) hover:text-(--txt-primary) transition-all duration-300 ease-in-out"
                  >
                    <SiGithub />
                  </a>
                </li>

                <li>
                  <a
                    href="https://leetcode.com/u/baki_dev8131/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-(--txt-accent) hover:text-(--txt-primary) transition-all duration-300 ease-in-out"
                  >
                    <SiLeetcode />
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:mdalbakiakon.dev@gmail.com"
                    className="text-(--txt-accent) hover:text-(--txt-primary) transition-all duration-300 ease-in-out"
                  >
                    <MdMail />
                  </a>
                </li>

                <li>
                  <a
                    href="https://wa.me/8801645168525"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-(--txt-accent) hover:text-(--txt-primary) transition-all duration-300 ease-in-out"
                  >
                    <SiWhatsapp />
                  </a>
                </li>
              </ul>

              <div className="max-[544px]:w-full min-[544px]:h-[calc(100dvh-152px)] aspect-[3/4] [clip-path:url('#heroVideoMobile')] relative">
                <div
                  ref={heroMobTxt}
                  className="absolute bottom-[10%] sm:bottom-[9%] left-[2.5%] z-40 text-(--txt-primary)"
                >
                  <h2 className="text-[12px] sm:text-[14px]">
                    <span className="text-(--txt-accent) opacity-75 text-lg sm:text-[20px]">
                      Baki,
                    </span>{" "}
                    Full Stack | MERN
                  </h2>

                  <h1 className="text-[22px] sm:text-[32px]">
                    Software Engineer
                  </h1>
                </div>

                <video
                  ref={mobileVidRef}
                  src={cachedVideo?.src || heroVid}
                  loop
                  muted
                  autoPlay
                  playsInline
                  controls={false}
                  preload="metadata"
                  onContextMenu={(e) => e.preventDefault()}
                  className="w-full h-full object-cover brightness-75 contrast-125"
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default Hero;