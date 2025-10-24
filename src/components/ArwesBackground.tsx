import React from "react";
import { Animator } from "@arwes/react-animator";
import { Puffs } from "@arwes/react-bgs";

const ArwesBackground: React.FC = () => {
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
