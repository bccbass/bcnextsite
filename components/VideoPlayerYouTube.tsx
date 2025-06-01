"use client";
import React from "react";
import { useRef } from "react";
import FadeIn from "./FadeIn";
import ReactPlayer from "react-player";

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
    youtubeId: string;
  };
  isPlaying: string | null;
  setIsPlaying: React.Dispatch<React.SetStateAction<string | null>>;
};

const VideoPlayerYouTube = ({
  video,
  isPlaying,
  setIsPlaying,
}: VideoPlayerProps) => {
  const vidRef = useRef(null);

  const thumbNail = video.videoThumbnail
    ? urlFor(video.videoThumbnail).width(640).height(360).url()
    : `http://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;

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

          
          {/* Video title card while playing: */}
          {/* <div className="w-full z-10  transition-all duration-300 absolute  p-4 text-white  ">
            <h2 className="text-lg md:text-xl ">{video.title}</h2>
            <p className="text-sm md:text-md ">{video.artist}</p>
            <p className="text-sm md:text-md ">{video.role}</p>
          </div> */}

          <div className="aspect-video h-full w-full">
            <ReactPlayer
              ref={vidRef}
              key={video.title}
              modestbranding={1}
              controls
              url={"https://www.youtube.com/watch?v=" + video.youtubeId}
              width="100%"
              height="100%"
              playing={true}
            />
          </div>
        </div>
      ) : (
    <FadeIn y={false} random>

        <div className="w-full relative h-1/2] shadow-xl lg:shadow-2xl">
          <div className="w-full h-full aspect-video z-10  opacity-0 transition-all duration-300 hover:opacity-80 absolute  p-4 text-white bg-accent ">
            <h2 className="text-lg md:text-xl capitalize">{video.title}</h2>
            <p className="text-sm md:text-md capitalize">{video.artist}</p>
            <p className="text-sm md:text-md capitalize">{video.role}</p>
          </div>
          {/* <Image
            onClick={() => setIsPlaying(video.youtubeId)}
            src={thumbNail}
            width={640}
            height={360}
            alt={video.title}
          /> */}
          <div
            style={{
              aspectRatio: "16/9",
              backgroundImage: `url('${thumbNail}')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className=" w-full"
          ></div>
        </div>
        </ FadeIn>
      )}
    </div>
  );
};

export default VideoPlayerYouTube;
