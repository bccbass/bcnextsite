import React from "react";
import SanityImage from "./SanityImage";
import AlbumLinks from "./AlbumLinks";
import DiscogModal from "./DiscogModal";

type DiscogCardProps = {
  index: number;
  album: {
    title: string;
    artist: string;
    role: string;
    label: string;
    image: string;
    purchaseLink?: string;
    vinyl: boolean;
    links: { platform: string; url: string }[];
  };
};
const DiscogCard = ({ album, index }: DiscogCardProps) => {
  return (
    <DiscogModal image={album.image} alt={`Image for ${album.title}`}>
      {/* Modal Contents -> */}
      <div
        data-lenis-stop="true"
        data-lenis-prevent="true"
        className="flex h-fit flex-col items-center justify-around "
      >
        <div className="my-2 w-4/5">
          <p className="text-center text-2xl font-semibold text-neutral-700">
            {album.artist}
          </p>

          <h2 className="text-center text-lg font-semibold text-neutral-400">
            {album.title}
          </h2>
          <h2 className="text-center text-md font-semibold text-neutral-400 pb-2">
            {album.label}
          </h2>
          <div className="w-fit mx-auto">
          <SanityImage
            priority={index <= 6}
            loading={index <= 6 ? 'eager' : 'lazy'}
            image={album.image}
            alt={`Image for ${album.title}`}
            height={550}
            width={550}
          />
          </div>
        </div>

        <h2 className="text-center max-w-lg text-lg py-4 text-neutral-700 capitalize font-semibold">
          {album.role}
        </h2>

        {/* {album.links && (
          <p className="mb-2 w-4/5 text-lg font-semibold text-neutral-600">
            Listen on
          </p>
        )} */}
        {album.links && <AlbumLinks albumLinks={album.links} />}
      </div>
    </DiscogModal>
  );
};

export default DiscogCard;
