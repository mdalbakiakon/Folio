import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Preloader = ({ onComplete }) => {
  const loaderRef = useRef();
  const percentRef = useRef({ value: 0 });
  const textRef = useRef();
  const shineRef = useRef();

  useGSAP(() => {

    gsap.from(shineRef.current,{
      opacity:0,
      delay: 0.2,
      duration: 0.8,
      ease: "sine.in"
    })

    const tl = gsap.timeline();

    tl.to(percentRef.current, {
      value: 100,
      duration: 2,
      ease: "expo.inOut",
      onUpdate: () => {
        if (textRef.current) {
          textRef.current.textContent =
            Math.floor(percentRef.current.value) + "%";
        }
      },
    });

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      0,
    );

    tl.to(loaderRef.current, {
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      onComplete: onComplete,
    });
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="w-full h-dvh relative flex flex-col justify-center items-center"
    >
      <div
      ref={shineRef}
        className="text-9xl relative z-50 bg-[linear-gradient(110deg,#111_0%,#fff_20%,#c0c0c0_40%,#fff_60%,#111_98%)] bg-clip-text text-transparent"
      >
        portfolio
      </div>

      <div className="absolute bottom-0 right-0 flex items-end justify-end bg-(--bg-primary) z-50">
        <div className="p-6 text-(--txt-primary) text-2xl">
          <span ref={textRef}>0%</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
