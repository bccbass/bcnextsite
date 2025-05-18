import React from "react";
import Link from "next/link";
import { GoLinkExternal } from "react-icons/go";
import { SiTidal, SiPandora } from "react-icons/si";

import {
  FaSpotify,
  FaApple,
  FaAmazon,
  FaDeezer,
  FaYoutube,
  FaSoundcloud,
  FaBandcamp,
} from "react-icons/fa";

const iconStyle = {fontSize: "1.8rem" };

const iconsMap: Record<string, React.JSX.Element> = {
  Spotify: <FaSpotify style={iconStyle} />,
  Soundcloud: <FaSoundcloud style={iconStyle} />,
  Bandcamp: <FaBandcamp style={iconStyle} />,
  "Apple Music": <FaApple style={iconStyle} />,
  Deezer: <FaDeezer style={iconStyle} />,
  "Amazon Music": <FaAmazon style={iconStyle} />,
  YouTube: <FaYoutube style={iconStyle} />,
  Tidal: <SiTidal style={iconStyle} />,
  Pandora: <SiPandora style={iconStyle} />,
};

type AlbumLinksProps = {
  albumLinks: { platform: string; url: string }[];
};

const AlbumLinks = ({ albumLinks }: AlbumLinksProps) => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center">
      {albumLinks.map((link, index) => (
        <Link
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2 flex w-4/5 items-center justify-between rounded-sm bg-secondary px-4 py-2 text-white hover:opacity-90"
        >
          <div className="flex items-center gap-6 font-semibold">
            {iconsMap[link.platform]} {link.platform}{" "}
          </div>

          <GoLinkExternal size={"1.5rem"} />
        </Link>
      ))}
    </div>
  );
};

export default AlbumLinks;
