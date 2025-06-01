"use client";
import React from "react";
import { useState } from "react";

import VideoPlayer from "@/components/VideoPlayer";
import VideoPlayerYouTube from "./VideoPlayerYouTube";
type VideosPropType = {
  videos: {
    category: string;
    videos: {
      _key: string;
      title: string;
      artist: string;
      role: string;
      videoThumbnail: {
        asset: {
          url: string;
        };
      };
      url: string;
      youtubeId: string
    }[];
  }[];
};

const VideosWrapper = ({ videos }: VideosPropType) => {
  const [isPlaying, setIsPlaying] = useState<string | null>(null);
  return videos.map((videoCategory, index) => (
    <div
      key={index}
      className="flex flex-col items-center justify-center w-full mb-20"
    >
      <h2 className="text-2xl text-neutral-300 md:text-3xl  lg:text-5xl w-full mb-6 text-start  font-feature">
        {videoCategory.category}
      </h2>
      {/* <h2 className="text-2xl p-4 text-white md:text-3xl lg:text-5xl w-full mb-6 text-start bg-primary font-feature">
        {videoCategory.category}
      </h2> */}
      <div className="flex flex-wrap justify-between items-stretch w-full gap-y-8 lg:gap-y-10 xl:gap-y-12">
        {videoCategory?.videos?.map((video, index) => (
          video.youtubeId ? <VideoPlayerYouTube
            key={index}
            video={video}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
          : 
          <VideoPlayer
            key={index}
            video={video}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
          
        ))}
      </div>
    </div>
  ));
};

export default VideosWrapper;
