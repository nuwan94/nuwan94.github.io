import React, { useState, useEffect } from "react";
import { Animator } from "@arwes/react-animator";
import { Puffs } from "@arwes/react-bgs";

const ArwesBackground: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile on mount
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    
    // Optional: Re-check on window resize
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Don't render animation on mobile
  if (isMobile) {
    return null;
  }

  return (
    <Animator
      active={true}
      duration={{
        // The duration of an individual animation sequence.
        interval: 2,
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
<Puffs
          color='hsla(180, 100%, 75%, 0.5)'
          quantity={100}
        />      </div>
    </Animator>
  );
};

export default ArwesBackground;
