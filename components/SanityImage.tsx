/** @format */

import Image from "next/image";
import { urlFor } from "../lib/sanityImage";

const SanityImage = ({
  image,
  alt,
  width = 1000,
  height = 1000,
  priority = false,
  loading ="lazy"
}: {
  image: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  loading?: 'lazy' | 'eager' | undefined
}) => {
  if (!image) return null;

  return (
    <Image
      loading={loading}
      src={urlFor(image).width(width).height(height).url()} // Adjust width & height
      alt={alt}
      width={width}
      height={height}
      priority={priority}
    />
  );
};

export default SanityImage;
