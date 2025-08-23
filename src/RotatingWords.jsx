import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const RotatingWords = ({ words, className = "" }) => {
  const containerRef = useRef(null);
  const wordsRef = useRef([]);

  useGSAP(() => {
    const wordElements = wordsRef.current;
    if (!wordElements.length) return;

    const stagger = 1;
    const timeline = gsap.timeline({
      repeat: -1
    });

    // Set initial state - all words start below and invisible
    gsap.set(wordElements, {
      yPercent: 100,
      opacity: 0
    });

    // Animate each word in from bottom, then out to top
    wordElements.forEach((word, index) => {
      const startTime = index * stagger;
      
      // Animate word in from bottom
      timeline.fromTo(word, 
        {
          yPercent: 100,
          opacity: 0
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.inOut"
        },
        startTime
      );

      // Animate word out to top
      timeline.to(word, 
        {
          yPercent: -100,
          opacity: 0,
          duration: 1,
          ease: "power2.inOut"
        },
        startTime + stagger
      );
    });
  }, { scope: containerRef });

  const addToRefs = (el) => {
    if (el && !wordsRef.current.includes(el)) {
      wordsRef.current.push(el);
    }
  };

  return (
    <span 
      ref={containerRef}
      className={`relative overflow-hidden inline-block align-bottom text-[3rem] leading-[3rem] lg:text-[4.5rem] lg:leading-[4.5rem] xl:text-[6.5rem] xl:leading-[6.5rem] h-[3rem] lg:h-[4.5rem] xl:h-[6.5rem] ${className}`}
    >
      <span className="grid">
        {words.map((word, index) => (
          <span 
            key={index}
            ref={addToRefs}
            className="block w-full text-start col-start-1 row-start-1 h-[3rem] leading-[3rem] lg:h-[4.5rem] lg:leading-[4.5rem] xl:h-[6.5rem] xl:leading-[6.5rem]"
          >
            {word}
          </span>
        ))}
      </span>
    </span>
  );
};

export default RotatingWords;
