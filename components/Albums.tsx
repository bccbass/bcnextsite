"use client";
import React from "react";
import AlbumCard from "./AlbumCard";


type AlbumType = {
    title: string;
    artist: string;
        role: string;
    label: string;
    image: string;
    purchaseLink?: string;
    vinyl: boolean;
    links: { platform: string; url: string }[];
  }

type AlbumsProps = {
  albums: AlbumType[];
};
const Albums = ({ albums }: AlbumsProps) => {
  // const width = `md:w-1/${albums.length + 1}`;
  return (
    <div className="flex w-full justify-center">
      <div
        key={"albums"}
        className="flex h-fit w-full max-w-7xl flex-wrap items-start justify-center md:py-16 py-8"
      >
        {albums.map(
          (
            album: AlbumType,
            index: number,
          ) => (
            <AlbumCard key={index}  album={album} />
          ),
        )}
      </div>
    </div>
  );
};

export default Albums;
