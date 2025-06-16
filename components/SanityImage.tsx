/** @format */

import Image from "next/image";
import { urlFor } from "../lib/sanityImage";

const SanityImage = ({
  image,
  alt,
  width = 1000,
  height = 1000,
}: {
  image: string;
  alt: string;
  width?: number;
  height?: number;
}) => {
  if (!image) return null;

  return (
    <Image
      loading="lazy"
      src={urlFor(image).width(width).height(height).url()} // Adjust width & height
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default SanityImage;
