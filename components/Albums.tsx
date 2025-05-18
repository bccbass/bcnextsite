"use client";
import React from "react";
import AlbumCard from "./AlbumCard";

type AlbumsProps = {
  albums: {
    title: string;
    artist: string;
    image: string;
    purchaseLink?: string;
    vinyl: boolean;
    links: { platform: string; url: string }[];
  }[];
};
const Albums = ({ albums }: AlbumsProps) => {
  const width = `md:w-1/${albums.length + 1}`;
  return (
    <div className="flex w-full justify-center">
      <div
        key={"albums"}
        className="flex h-fit w-full max-w-7xl flex-wrap items-start justify-center md:py-16 py-8"
      >
        {albums.map(
          (
            album: {
              title: string;
              artist: string;
              image: string;
              purchaseLink?: string;
              vinyl: boolean;
              links: { platform: string; url: string }[];
            },
            index: number,
          ) => (
            <AlbumCard key={index} width={width} album={album} index={index} />
          ),
        )}
      </div>
    </div>
  );
};

export default Albums;
