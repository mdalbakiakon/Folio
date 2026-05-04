import React, { useRef } from "react";
import { House, ArrowDownToLine } from "lucide-react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react"

const Navbar = () => {

  const navRef = useRef();
  useGSAP(()=>{
    gsap.from(navRef.current,{
      y: -120,
      delay: 0.25,
      opacity: 0,
      duration: 0.75,
      ease: "power2.out",
    })
  }, [])

  return (
    <header ref={navRef} className="w-fit bg-(--bg-accent) rounded-2xl absolute left-1/2 -translate-x-1/2 shadow-2xl top-7.5 z-90">
      <nav className="flex justify-center items-center text-(--txt-primary) p-2.5 font-semibold gap-30 font-conthrax">
        {/* logo */}
        <div className="font-black text-2xl font-conthrax tracking-tight cursor-pointer">
        <a href="#">Portfolio</a></div>

        {/* navigation */}
        <ul className="flex justify-center items-center gap-15">
          <li>
            <a href="#">
              Work
            </a>
          </li>
          <li>
            <a href="#">
              Testimonial
            </a>
          </li>
          <li>
            <a href="#">
              Contact
            </a>
          </li>
        </ul>

        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/1D1LRvNtntV1RegY6D12CcVD-KzQ8Rda6/view"
          target="_blank"
          rel="noopener noreferrer"
          className="w-32.5 bg-white text-(--txt-nav-cv) text-center py-2.5 rounded-xl cursor-pointer inline-block"
        >
          Resume
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
