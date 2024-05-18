"use client"

import React, { useState, useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from './Are You Ready Lottie.json'; // Adjust the path accordingly

const Ready = () => {
  const [hasPlayed, setHasPlayed] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationInstanceRef = useRef<any>(null); // Using `any` type for the animation instance

  useEffect(() => {
    if (containerRef.current) {
      // Load the animation
      animationInstanceRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: animationData,
      });

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasPlayed) {
            animationInstanceRef.current?.play();
            setHasPlayed(true);
          }
        },
        {
          threshold: 0.5, // Adjust the threshold as needed
        }
      );

      observer.observe(containerRef.current);

      // Cleanup observer and animation instance on unmount
      return () => {
        if (containerRef.current) {
          observer.unobserve(containerRef.current);
        }
        animationInstanceRef.current?.destroy();
      };
    }
  }, [hasPlayed]);

  return (
    <div>
      <div
        ref={containerRef}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
          height: '400px',
          width: '400px',
        }}
      >
        {/* Lottie animation will be rendered here */}
      </div>
    </div>
  );
};

export default Ready;
