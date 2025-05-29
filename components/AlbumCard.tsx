import React from "react";
import SanityImage from "./SanityImage";
import AlbumLinks from "./AlbumLinks";
import AlbumCardModal from "./AlbumCardModal";

type AlbumCardProps = {
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
const AlbumCard = ({ album }: AlbumCardProps) => {

  return (
    <AlbumCardModal image={album.image} alt={`Image for ${album.title}`}>
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
          <SanityImage image={album.image} alt={`Image for ${album.title}`} />
        </div>

        <h2 className="text-center text-lg py-4 text-primary font-semibold">
          {album.role}
        </h2>

        {album.links && (
          <p className="mb-2 w-4/5 text-lg font-semibold text-neutral-600">
            Listen on
          </p>
        )}
        {album.links && <AlbumLinks albumLinks={album.links} />}
      </div>
    </AlbumCardModal>
  );
};

export default AlbumCard;
