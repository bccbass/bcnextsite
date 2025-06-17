"use client";
import React from "react";
import DiscogCard from "./DiscogCard";

type AlbumsProps = {
  albums: {
    title: string;
    artist: string;
    image: string;
    purchaseLink?: string;
    vinyl: boolean;
    label: string;
    role: string;
    links: { platform: string; url: string }[];
  }[];
};
const DiscogAlbums = ({ albums }: AlbumsProps) => {
  return (
    <div className="flex w-full justify-center">
      <div
        key={"albums"}
        className="flex h-fit w-full max-w-7xl flex-wrap items-start justify-center py-6 gap-8"
      >
        {albums.map(
          (
            album: {
              title: string;
              artist: string;
              role: string;
              label: string;
              image: string;
              purchaseLink?: string;
              vinyl: boolean;
              links: { platform: string; url: string }[];
            },
            index: number
          ) => (
            <DiscogCard key={index} album={album} index={index} />
          )
        )}
      </div>
    </div>
  );
};

export default DiscogAlbums;
