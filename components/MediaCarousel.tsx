"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types"; // Explicitly import Swiper type

import {
  Navigation,
  Thumbs,
  FreeMode,
  Pagination,
  EffectFade,
} from "swiper/modules";
import ReactPlayer from "react-player";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/effect-fade";

type MediaProps = {
  mediaLinks: {
    title: string;
    URL: string;
    platform: string;
    description: string;
  }[];
};
const MediaCarousel = ({ mediaLinks }: MediaProps) => {
  // const MediaCarousel = ({ mediaLinks }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeVid, setActiveVid] = useState<number | null>(0);
  // console.log('thumb', thumbsSwiper?.activeIndex);

  // To extract an image from a YouTube video link, you can use the YouTube image URL format: http://img.youtube.com/vi/VIDEO_ID/IMAGE_TYPE.jpg, replacing VIDEO_ID with the video ID and IMAGE_TYPE with the desired resolution (e.g., 0.jpg, default.jpg, mqdefault.jpg, hqdefault.jpg, sddefault.jpg, maxresdefault.jpg).

  // media.URL is actually a YouTube ID now -> Will prefix the url with correct path for videos and images and add in ID programatically
  return (
    <div className="h-full mt-24  sm:mt-8 w-3xl p-2 px-4 max-w-screen ">
      <h1 className="absolute top-12 left-0 pt-2 w-full text-center  pb-2  text-4xl  font-feature text-accent uppercase opacity-0 md:opacity-100">
        {activeVid ? mediaLinks[activeVid].title : mediaLinks[0].title}
      </h1>
      <Swiper
        style={{ color: "white" }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Pagination, EffectFade]}
        // navigation
        // pagination={{ clickable: true }}
        effect="fade"
        spaceBetween={50}
        slidesPerView={1}
        className="h-7/10 w-full max-w-3xl mt-4"
      >
        {mediaLinks.map((media, index) => {
          return (
            <SwiperSlide key={index} className={`flex justify-center`}>
              <div className="aspect-video h-full w-full">
                <ReactPlayer
                  key={index === activeVid ? "playing" : `vid-${index}`}
                  modestbranding={1}
                  controls
                  url={"https://www.youtube.com/watch?v=" + media.URL}
                  width="100%"
                  height="100%"
                  playing={activeVid === index ? true : false}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {mediaLinks.length > 1 && (
        <Swiper
          onSwiper={(swiper) => setThumbsSwiper(swiper)}
          spaceBetween={0}
          slidesPerView={4}
          freeMode={true}
          navigation
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs, EffectFade]}
          className="mySwiper w-full max-w-3xl bg-black mt-2 md:mt-8"
        >
          {mediaLinks.map((media, index) => (
            <SwiperSlide key={index}>
              <img
                // width="100"
                // height="100"
                alt={"image for " + media.title}
                onClick={() => setActiveVid(index)}
                className={`${activeVid == index ? "border-accent" : "border-black"} my-2 border-2 sm:px-2`}
                src={`http://img.youtube.com/vi/${media.URL}/hqdefault.jpg`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default MediaCarousel;
