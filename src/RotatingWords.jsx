import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const RotatingWords = ({ words, className = "", fontSize = "4rem", lineHeight = "4rem" }) => {
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
      className={`relative overflow-hidden inline-block align-bottom ${className}`}
      style={{ height: lineHeight }}
    >
      <span className="grid">
        {words.map((word, index) => (
          <span 
            key={index}
            ref={addToRefs}
            className="block w-full text-start col-start-1 row-start-1"
            style={{ 
              height: lineHeight, 
              lineHeight: lineHeight,
              fontSize: fontSize 
            }}
          >
            {word}
          </span>
        ))}
      </span>
    </span>
  );
};

export default RotatingWords;
