import React from "react";
import Typewriter from "typewriter-effect";
import "./App.css";

function Text() {
  return (
    <div className="Write">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Front-End Developer")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Front-End Developer")
            .start();
        }}
      />
    </div>
  );
}
export default Text;
