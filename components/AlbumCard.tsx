import React from "react";
import SanityImage from "./SanityImage";
import Link from "next/link";
import AlbumLinks from "./AlbumLinks";
import Modal from "./Modal";
// import { useIntersectionObserver } from "@uidotdev/usehooks";
// import style from "./album.module.css";

type AlbumCardProps = {
  album: {
    title: string;
    artist: string;
    image: string;
    purchaseLink?: string;
    vinyl: boolean;
    links: { platform: string; url: string }[];
  };
  index: number;
  width: string;
};
const AlbumCard = ({ album, index, width }: AlbumCardProps) => {
  // const [ref, entry] = useIntersectionObserver({ threshold: .4 });
  // const isVisible = entry?.isIntersecting;
  return (
    <div
      className={`${width} m-4 flex w-[90vw] max-w-lg flex-col items-center justify-center bg-white pb-2 md:min-w-md md:p-2`}
    >
      <div
        key={index}
        className={`m-4 flex h-1/4 w-[90vw] max-w-lg flex-col items-center justify-center border border-neutral-300 bg-white p-2 pb-8 shadow-lg md:min-w-md md:p-6`}
      >
        <div
          // className="p-1 outline-neutral-500 rounded-sm outline-1"
          className="mb-2 overflow-hidden border-neutral-400"
        >
          <SanityImage image={album.image} alt={`Image for ${album.title}`} />
        </div>
        <Modal title={"Listen"}>
          <div
            data-lenis-stop="true"
            data-lenis-prevent="true"
            className="flex h-fit flex-col items-center justify-around"
          >
            <div className="my-2 w-4/5">
              <SanityImage
                image={album.image}
                alt={`Image for ${album.title}`}
              />
            </div>
            <h2 className="text-center text-2xl font-semibold text-neutral-700">
              {album.title}
            </h2>

            <p className="mb-8 w-3/5 text-center text-xl">{album.artist}</p>
            {album.links && (
              <p className="mb-2 w-4/5 text-lg font-semibold text-neutral-600">
                Listen on
              </p>
            )}
            {album.links && <AlbumLinks albumLinks={album.links} />}
          </div>
        </Modal>
        {album.purchaseLink && (
          <Link
            href={album.purchaseLink}
            target="_blank"
            className="theme-button"
          >
            {album.vinyl ? "Purchase Vinyl" : "Purchase Album"}
          </Link>
        )}
      </div>
    </div>
  );
};

export default AlbumCard;
