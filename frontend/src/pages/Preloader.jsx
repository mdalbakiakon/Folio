// import { useRef } from "react";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import heroVid from "../assets/heroVid.mp4";

// const Preloader = ({ onComplete }) => {
//   const loaderRef = useRef();
//   const percentRef = useRef({ value: 0 });
//   const textRef = useRef();

//   useGSAP(() => {
//     const video = document.createElement("video");

//     video.src = heroVid;
//     video.preload = "auto";
//     video.muted = true;
//     video.playsInline = true;
//     video.load();

//     // cache globally for reuse
//     window.__heroVideoCache = video;

//     let resolved = false;

//     const updateProgress = () => {
//       if (!video.duration) return;

//       const bufferedEnd = video.buffered.length
//         ? video.buffered.end(video.buffered.length - 1)
//         : 0;

//       const percent = Math.min(bufferedEnd / video.duration, 1);

//       // smooth GSAP interpolation instead of jumpy updates
//       gsap.to(percentRef.current, {
//         value: percent * 100,
//         duration: 0.2,
//         ease: "power2.out",
//         onUpdate: () => {
//           if (textRef.current) {
//             textRef.current.textContent =
//               Math.floor(percentRef.current.value) + "%";
//           }
//         },
//       });

//       // resolve when ~fully buffered
//       if (percent >= 0.98 && !resolved) {
//         resolved = true;
//         finish();
//       }
//     };

//     const finish = () => {
//       // snap to 100
//       gsap.to(percentRef.current, {
//         value: 100,
//         duration: 0.3,
//         onUpdate: () => {
//           if (textRef.current) {
//             textRef.current.textContent =
//               Math.floor(percentRef.current.value) + "%";
//           }
//         },
//       });

//       gsap.to(loaderRef.current, {
//         opacity: 0,
//         duration: 0.8,
//         delay: 0.2,
//         onComplete: onComplete,
//       });
//     };

//     // events for real buffering
//     video.addEventListener("progress", updateProgress);
//     video.addEventListener("loadedmetadata", updateProgress);

//     // fallback (prevents infinite loading on bad networks)
//     const maxWait = setTimeout(() => {
//       if (!resolved) {
//         resolved = true;
//         finish();
//       }
//     }, 8000); // 8s safety cap

//     // minimum display time (keeps cinematic feel)
//     const minTime = setTimeout(() => {
//       if (percentRef.current.value >= 80 && !resolved) {
//         resolved = true;
//         finish();
//       }
//     }, 2500);

//     return () => {
//       video.removeEventListener("progress", updateProgress);
//       video.removeEventListener("loadedmetadata", updateProgress);
//       video.remove();
//       clearTimeout(maxWait);
//       clearTimeout(minTime);
//     };
//   }, [onComplete]);

//   return (
//     <div
//       ref={loaderRef}
//       className="w-full h-dvh flex flex-col justify-center items-center"
//     >
//       <div className="text-5xl sm:text-7xl lg:text-9xl relative z-50 bg-[linear-gradient(110deg,#111_0%,#fff_20%,#c0c0c0_40%,#fff_60%,#111_98%)] bg-clip-text text-transparent">
//         portfolio
//       </div>

//       <div className="absolute bottom-0 right-0 p-6 text-xl sm:text-2xl text-(--txt-primary)">
//         <span ref={textRef}>0%</span>
//       </div>
//     </div>
//   );
// };

// export default Preloader;



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
    video.setAttribute("playsinline", "");
    video.load();

    window.__heroVideoCache = video;

    let resolved = false;
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    const updateUI = (val) => {
      gsap.to(percentRef.current, {
        value: val,
        duration: 0.2,
        ease: "power2.out",
        onUpdate: () => {
          if (textRef.current) {
            textRef.current.textContent =
              Math.floor(percentRef.current.value) + "%";
          }
        },
      });
    };

    // chrome prefered
    const updateProgress = () => {
      if (!video.duration) return;

      const bufferedEnd = video.buffered.length
        ? video.buffered.end(video.buffered.length - 1)
        : 0;

      const percent = Math.min(bufferedEnd / video.duration, 1);

      updateUI(percent * 100);

      if (percent >= 0.9 && !resolved) {
        finish();
      }
    };

    // finish loading
    const finish = () => {
      if (resolved) return;
      resolved = true;

      updateUI(100);

      gsap.to(loaderRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete: onComplete,
      });
    };

    // ios device preferences
    if (isIOS) {
      video.addEventListener("canplay", async () => {
        try {
          await video.play();
          video.pause();
        } catch (e) {}

        finish();
      });
    } else {
      // desktop buffer
      video.addEventListener("progress", updateProgress);
      video.addEventListener("loadedmetadata", updateProgress);
    }

    //safety fallback
    const timeout = setTimeout(() => {
      finish();
    }, 10000);

    return () => {
      video.remove();
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="w-full h-dvh flex flex-col justify-center items-center"
    >
      <div className="text-5xl sm:text-7xl lg:text-9xl bg-[linear-gradient(110deg,#111_0%,#fff_20%,#c0c0c0_40%,#fff_60%,#111_98%)] bg-clip-text text-transparent">
        portfolio
      </div>

      <div className="absolute bottom-0 right-0 p-6 text-xl sm:text-2xl text-white">
        <span ref={textRef}>0%</span>
      </div>
    </div>
  );
};

export default Preloader;