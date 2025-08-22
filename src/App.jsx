import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/global.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene.jsx";
import React, { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { useGSAP } from "@gsap/react";
import Navbar from "./Navbar.jsx";
import SecondSection from "./SecondSection.jsx";
import VerticalTextAnimation from "./VerticalTextAnimation.jsx";
import ThirdSection from "./ThirdSection.jsx";
import FourthSection from "./FourthSection.jsx";
import Footer from "./Footer.jsx";


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

      gsap.timeline({
        
      })

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
        x: "0vw",
        y: "100vh",
      })
        .to(sceneRef.current, {
          x: "0vw",
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
    <>
    <main className="overflow-x-hidden relative" ref={mainRef}>
      <div className="fixed top-6 left-0 w-full z-50 flex items-center justify-center " >
        <Navbar />
      </div>
      <section
        className="relative grid place-items-center h-[100vh] w-[100vw]"
        
      >
        <div className="absolute top-1/2 -translate-y-1/2 left-0 h-full flex items-center justify-center w-full">
          <div className="flex items-start justify-between w-[80vw]">
            
              <div className="haas-med text-black text-[2.5rem] leading-none flex flex-col items-start w-[40%]">
                <p>SUMMR STICK</p>
                <p className="text-[#BEBEBE]">Impurity-free DeoStick <br/> extracted from nature</p>
                <img className="mt-10 w-[50%] opacity-80" src="/barcode.png" alt="deostick" />
              </div>

              <div className="haas-med text-black text-[3rem] leading-none text-end w-[30%] ">
                <p>500gm</p>
                <p className="haas text-[1rem] mt-16 text-black/70">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
              </div>


          </div>
        </div>
          
        <div
          ref={sceneRef}
          className="h-[100vh] w-[100vw] overflow-hidden flex items-center justify-center z-999"
        >
          <Canvas>
            <Scene progress={progress} />
          </Canvas>
        </div>

        <div className="absolute bottom-6 left-0 w-full h-full flex items-end justify-center ">
          <div className="flex items-center justify-center ">
            <div className="haas text-black text-[1rem] leading-none ">
              <p>{ '{Scroll to explore}' }</p>
            </div>
          </div>
        </div>
      </section>

      <section className=" h-[100vh] w-full overflow-hidden relative">
        <SecondSection />
      </section>
      <section className=" h-[100vh] w-full overflow-hidden ">
        <ThirdSection />
      </section>
      <section className=" h-[100vh] w-full overflow-hidden bg-black">
        <FourthSection />
      </section>
    </main>
    <Footer />
    </>
  );
}
