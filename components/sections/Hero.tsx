import Badge from "@/components/Badge";
import HeroAnimationWrapper from "@/components/HeroAnimationWrapper";
import FadeIn from "../FadeIn";
import BadgeAnimationWrapper from "../BadgeAnimationWrapper";

const Hero = () => {
  return (
    <div className="w-full -z-10">
      {/* <FadeIn y={false} random={false}> */}
        <div className="w-screen h-screen relative ">
          {/* Fixed video background - not affected by scroll transforms */}
          <div className="fixed inset-0 w-screen h-screen -z-20">
            <video
              className="object-cover h-full w-full"
              autoPlay
              poster="https://res.cloudinary.com/dyb9ascpy/image/upload/v1750132145/WebAssets/welcome_poster_jdk78t.webp"
              muted
              loop
              preload="auto"
              playsInline
              webkit-playsinline="true"
              x5-playsinline="true"
              style={{
                transform: "translate3d(0, 0, 0)",
                backfaceVisibility: "hidden",
              }}
              // onLoadedData={() => {
              //   setIsLoaded(true);
              // }}
            >
              <track
                src="captions_en.vtt"
                kind="captions"
                label="english_captions"
              ></track>
              <source
                src="https://res.cloudinary.com/dyb9ascpy/video/upload/v1749101662/welcome_river_lekdjv.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Scroll-based overlay for opacity effect */}

          <HeroAnimationWrapper />

          <BadgeAnimationWrapper>
            <Badge />
          </BadgeAnimationWrapper>
        </div>
      {/* </FadeIn> */}
    </div>
  );
};

export default Hero;
