import React from "react";
import AnimatedCursor from "react-animated-cursor"

export default function App() {
  return (
    <div className="AnimCursor">
      <AnimatedCursor 
        color='0,0,0'

        innerSize={13}
        outerSize={10}
        outerAlpha={0.7}
        innerScale={0.7}
        outerScale={2}

      />
    </div>
  );
}