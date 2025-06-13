/** @format */

import React from "react";
import Link from "next/link";
import { getSocials } from "@/lib/fetch";


import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaVimeo,
  FaSoundcloud,
  FaBandcamp,
  FaSpotify
} from "react-icons/fa";

const iconStyle = { color: "silver", fontSize: "1.8rem" };

const iconsMap: Record<string, React.JSX.Element> = {
  facebook: <FaFacebook style={iconStyle} />,
  twitter: <FaTwitter style={iconStyle} />,
  soundcloud: <FaSoundcloud style={iconStyle} />,
  bandcamp: <FaBandcamp style={iconStyle} />,
  instagram: <FaInstagram style={iconStyle} />,
  linkedin: <FaLinkedin style={iconStyle} />,
  github: <FaGithub style={iconStyle} />,
  youtube: <FaYoutube style={iconStyle} />,
  spotify: <FaSpotify style={iconStyle} />,
  vimeo: <FaVimeo style={iconStyle} />,
};
// type SocialType = { platform: string; url: string };

// type PropsType = { socials: SocialType[] };
const Socials =async  () => {
    const socials = await getSocials();
  return (
    <div className="w-full mb-12 py-4">
      <ul className="flex flex-wrap justify-center gap-4">
        {socials.map((social) => (
          <li key={social.platform} className="">
            <Link role="link" aria-label={`Link to ${social.platform}`}  href={social.url} target="blank" className="">
              {iconsMap[social.platform]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
