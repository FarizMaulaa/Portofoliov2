import React from "react";
import Lottie from "react-lottie";
import animationData from "./images/77392-graphic-designer.json";

function Lotties() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYmid slice",
    },
  };
  return (
    <div className="flex items-center justify-center my-[-15px]">
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}
export default Lotties;
