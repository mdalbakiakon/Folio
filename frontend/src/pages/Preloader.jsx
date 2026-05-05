import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import heroVid from "../assets/heroVid.mp4";

const Preloader = ({ onComplete }) => {
  const loaderRef = useRef();
  const percentRef = useRef({ value: 0 });
  const textRef = useRef();

  useGSAP(() => {
    const video = document.createElement("video");

    video.src = heroVid;
    video.preload = "auto";
    video.muted = true;
    video.playsInline = true;
    video.load();

    // store globally so Hero can reuse SAME decoded video
    window.__heroVideoCache = video;

    //  true readiness (download + decode attempt)
    const videoReady = new Promise((resolve) => {
      video.addEventListener("loadeddata", async () => {
        try {
          await video.play();
          video.pause();
        } catch (e) {
          // ignore autoplay block
        }
        resolve();
      });
    });

    // minimum loader time
    const minTime = new Promise((resolve) =>
      setTimeout(resolve, 2500)
    );

    // fake progress animation
    const progress = gsap.to(percentRef.current, {
      value: 95,
      duration: 2,
      ease: "power2.out",
      onUpdate: () => {
        if (textRef.current) {
          textRef.current.textContent =
            Math.floor(percentRef.current.value) + "%";
        }
      },
    });

    Promise.all([videoReady, minTime]).then(() => {
      progress.kill();

      gsap.to(percentRef.current, {
        value: 100,
        duration: 0.3,
        onUpdate: () => {
          if (textRef.current) {
            textRef.current.textContent =
              Math.floor(percentRef.current.value) + "%";
          }
        },
      });

      gsap.to(loaderRef.current, {
        opacity: 0,
        duration: 0.8,
        onComplete: onComplete,
      });
    });

    return () => {
      video.remove();
    };
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="w-full h-dvh flex flex-col justify-center items-center"
    >
      <div className="text-5xl sm:text-7xl lg:text-9xl relative z-50 bg-[linear-gradient(110deg,#111_0%,#fff_20%,#c0c0c0_40%,#fff_60%,#111_98%)] bg-clip-text text-transparent">
        portfolio
      </div>

      <div className="absolute bottom-0 right-0 p-6 text-xl sm:text-2xl text-(--txt-primary)">
        <span ref={textRef}>0%</span>
      </div>
    </div>
  );
};

export default Preloader;