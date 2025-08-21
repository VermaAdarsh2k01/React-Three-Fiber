import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const VerticalTextAnimation = ({ 
  words = ['INNOVATION', 'CREATIVITY', 'EXCELLENCE', 'DESIGN', 'TECHNOLOGY', 'FUTURE'],
  className = '',
  textSize = 'text-6xl',
  highlightColor = '#FF6B35',
  normalColor = '#BEBEBE',
  pauseDuration = 1.2,
  animationDuration = 0.8
}) => {
  const containerRef = useRef(null);
  const wordsRef = useRef([]);
  const timelineRef = useRef(null);

  useGSAP(() => {
    if (!containerRef.current || wordsRef.current.length === 0) return;

    // Clear any existing interval
    if (timelineRef.current) {
      clearInterval(timelineRef.current);
    }

    let currentWordIndex = 0;
    
    const animateNextWord = () => {
      // Reset all words to default state
      wordsRef.current.forEach((word, index) => {
        if (word) {
          gsap.set(word, {
            color: normalColor,
            x: 0,
            opacity: 0.5
          });
        }
      });

      // Highlight current word
      if (wordsRef.current[currentWordIndex]) {
        gsap.set(wordsRef.current[currentWordIndex], {
          color: highlightColor,
          x: 30,
          opacity: 1
        });
      }

      // Move to next word
      currentWordIndex = (currentWordIndex + 1) % words.length;
    };

    // Set initial state
    wordsRef.current.forEach((word, index) => {
      if (word) {
        gsap.set(word, {
          color: index === 0 ? highlightColor : normalColor,
          x: index === 0 ? 30 : 0,
          opacity: index === 0 ? 1 : 0.5
        });
      }
    });

    // Create interval-based animation
    const intervalId = setInterval(() => {
      animateNextWord();
    }, pauseDuration * 1000);

    // Store interval ID for cleanup
    timelineRef.current = intervalId;

    return () => {
      if (timelineRef.current) {
        clearInterval(timelineRef.current);
        timelineRef.current = null;
      }
    };
  }, [words, highlightColor, normalColor, pauseDuration, animationDuration]);

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden h-32 flex items-center justify-start w-full ${className} bg-[#373538]`}
    >
      <div className="relative pl-6 h-full flex items-center">
        {/* Arrow indicator */}
        <div 
          className="absolute left-0 text-orange-500 font-bold text-2xl z-10"
        >
          →
        </div>
        
        {/* All words in same position, only one visible at a time */}
        {words.map((word, index) => (
          <div
            key={`${word}-${index}`}
            ref={(el) => (wordsRef.current[index] = el)}
            className={`absolute left-0 ${textSize} font-bold haas-black text-left whitespace-nowrap
                       select-none pointer-events-none`}
            style={{
              letterSpacing: '0.05em'
            }}
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalTextAnimation;
