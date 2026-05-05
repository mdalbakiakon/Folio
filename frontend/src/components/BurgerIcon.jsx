import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const BurgerIcon = () => {
  const bar1Ref = useRef();
  const bar2Ref = useRef();
  const tl = useRef();

  useGSAP(() => {
    const parent = bar2Ref.current.parentElement;

    tl.current = gsap.timeline({ paused: true });

    tl.current
      .to(bar2Ref.current, {
        width: parent.offsetWidth,
        duration: 0.25,
        ease: "power2.out",
      })
      .to(
        bar1Ref.current,
        {
          rotation: -45,
          transformOrigin: "50% 50%",
          y: 6,
          duration: 0.25,
          ease: "power2.out",
        },
        0
      )
      .to(
        bar2Ref.current,
        {
          rotation: 45,
          transformOrigin: "50% 50%",
          y: -6,
          duration: 0.25,
          ease: "power2.out",
        },
        0.1
      );
  }, []);

  const handleClick = () => {
    if (tl.current.isActive()) return;

    if (tl.current.reversed()) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  };

  return (
    <div
      onClick={handleClick}
      className="h-6 aspect-square md:hidden flex flex-col justify-around items-center cursor-pointer"
    >
      <div ref={bar1Ref} className="w-full h-1 bg-white rounded-2xl"></div>

      <div
        ref={bar2Ref}
        className="w-1/2 h-1 bg-white rounded-2xl self-end"
      ></div>
    </div>
  );
};

export default BurgerIcon;