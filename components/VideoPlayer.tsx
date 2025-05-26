"use client";
import React from "react";
import { useRef } from "react";
import Image from "next/image";
// import { isMobile } from "react-device-detect";
// import { useMediaQuery } from "@uidotdev/usehooks";
import { urlFor } from "../lib/sanityImage";

type VideoPlayerProps = {
  video: {
    title: string;
    artist: string;
    role: string;
    videoThumbnail: {
      asset: {
        url: string;
      };
    };
    url: string;
  };
  isPlaying: string | null;
  setIsPlaying: React.Dispatch<React.SetStateAction<string | null>>;
};

const VideoPlayer = ({ video, isPlaying, setIsPlaying }: VideoPlayerProps) => {
  const vidRef = useRef(null);
  // const smallScreen = useMediaQuery("only screen and (max-width : 768px)");

  // Logic to allow user to click away from the video player and hide playing status/hide info card. MediaQuery and device detection set up to disable at smaller sizes and for phones/tablets.
  // useEffect(() => {
  //   const screenSize = window.matchMedia("(max-width: 600px)");
  //   const handleEvent = (e: MouseEvent) => {
  //     const targetVid = vidRef.current;
  //     if (
  //       !smallScreen &&
  //       !isMobile &&
  //       targetVid &&
  //       !targetVid?.contains(e.target as Node)
  //     ) {
  //       setIsPlaying(null);
  //     }
  //   };

  //   document.addEventListener("pointerdown", handleEvent);

  //   return () => document.removeEventListener("pointerdown", handleEvent);
  // }, [isPlaying, smallScreen]);

  return (
    <div
      className="w-full md:w-[48%] relative"
      onClick={() => setIsPlaying(video.title)}
    >
      {isPlaying == video.title ? (
        <div className=" relative">
          <div className="w-full z-10  transition-all duration-300 absolute  p-4 text-white  ">
            <h2 className="text-lg md:text-xl ">{video.title}</h2>
            <p className="text-sm md:text-md ">{video.artist}</p>
            <p className="text-sm md:text-md ">{video.role}</p>
          </div>
          <video
            ref={vidRef}
            className="w-full relative top-0 left-0"
            // style={{transform: 'translate(0px, -1px)'}}
            height={"100%"}
            width={"100%"}
            autoPlay
            controls
            poster={urlFor(video.videoThumbnail).width(640).height(360).url()}
            playsInline
            src={video.url}
            // type="video/mp4"
          ></video>
        </div>
      ) : (
        <div className="w-full relative">
          <div className="w-full h-full z-10  opacity-0 transition-all duration-300 hover:opacity-80 absolute  p-4 text-white bg-accent ">
            <h2 className="text-lg md:text-xl ">{video.title}</h2>
            <p className="text-sm md:text-md ">{video.artist}</p>
            <p className="text-sm md:text-md ">{video.role}</p>
          </div>
          <Image
            onClick={() => setIsPlaying(video.title)}
            src={urlFor(video.videoThumbnail).width(640).height(360).url()}
            alt={video.title}
          />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
