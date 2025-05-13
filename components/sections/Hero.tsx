import React from "react";
import Badge from "@/components/Badge";
// import welcomeRiver from '/welcome_river.mp4'

const Hero = () => {
  return (
    <div
    className="w-screen h-screen flex sticky top-0  z-0">
      <div className=" bg-neutral-100 opacity-90  w-screen p-8 top-0 left-0 absolute">
        <Badge />
      </div>
      <video
        className="object-cover h-screen w-screen"
        poster="/waterfall.webp"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/welcome_river.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Hero;
