import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const CleanImageCarousel = ({
  images = [
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=600&fit=crop",
  ],
  duration = 2,
  className = "",
}) => {
  const containerRef = useRef(null);
  const imagesRef = useRef([]);

  useGSAP(
    () => {
      gsap.set(imagesRef.current, {
        scale: 0,
        opacity: 0,
        transformOrigin: "center center",
      });

      gsap.set(imagesRef.current[0], {
        scale: 1,
        opacity: 1,
      });

      const tl = gsap.timeline({ repeat: -1 });

      images.forEach((_, index) => {
        const nextIndex = (index + 1) % images.length;

        // Scale down current image slightly, then hide it and show next
        tl.to(imagesRef.current[index], {
          scale: 0.8,
          duration: duration * 0.4,
          ease: "power2.Out",
        })
          .to(imagesRef.current[index], {
            opacity: 0,
            duration: 0.01, // Very quick fade out
            ease: "none",
          })
          .to(imagesRef.current[nextIndex], {
            opacity: 1,
            scale: 1,
            duration: 0.01, // Instant appearance
            ease: "none",
          })

          // Hold the image for a moment
          .to({}, { duration: duration * 0.8 });
      });

      return () => tl.kill();
    },
    { scope: containerRef, dependencies: [images, duration] }
  );

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      {images.map((image, index) => (
        <div
          key={index}
          ref={(el) => (imagesRef.current[index] = el)}
          className="absolute inset-0 w-full h-full "
        >
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-full object-cover rounded-lg "
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default CleanImageCarousel;
