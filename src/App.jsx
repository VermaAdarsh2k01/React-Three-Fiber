import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/global.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene.jsx";
import React, { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const mainRef = useRef(null);
  const sceneRef = useRef(null);
  const horizontalRef = useRef(null);
  const horizontalContainerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.5, // Increased from 1.2 to make scrolling slower and smoother
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 0.5, // Reduces scroll wheel sensitivity (slower scrolling)
      touchMultiplier: 0.5, // Reduces touch scroll sensitivity on mobile
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  useGSAP(
    () => {
      ScrollTrigger.refresh();

      gsap.fromTo(sceneRef.current, {
        y: "-100vh",
      }, {
        y: "0vh",
        duration: 2,
        ease: "ease.out",
      })

      const t2 = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          onUpdate: (self) => {
            setProgress(self.progress);
          },
        },
      });

      t2.to(sceneRef.current, {
        x: "25vw",
        y: "100vh",
      })
        .to(sceneRef.current, {
          x: "-25vw",
          y: "200vh",
      })
        .to(sceneRef.current, {
          x: "0vw",
          y: "260vh",
          
      });
    },
    { scope: mainRef }
  );

  return (
    <main className="overflow-x-hidden" ref={mainRef}>
      <section
        className="relative grid place-items-center h-[100vh] w-[100vw]"
        ref={horizontalContainerRef}
      >
        <div className="text-black text-center absolute top-1/2 left-[0%] translate-y-[-50%] mx-4 w-[200vw]"></div>

        <div
          ref={sceneRef}
          className="h-[100vh] w-[100vw] overflow-hidden flex items-center justify-center"
        >
          <Canvas>
            <Scene progress={progress} />
          </Canvas>
        </div>
      </section>

      <div className=" h-[100vh] w-full overflow-hidden"></div>
      <div className=" h-[100vh] w-full overflow-hidden"></div>
      <div className=" h-[100vh] w-full overflow-hidden"></div>
    </main>
  );
}
