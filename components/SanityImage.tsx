/** @format */

import Image from "next/image";
import { urlFor } from "../lib/sanityImage";

// const hexagonStyle = {
// 	aspectRatio: "1/cos(30deg)",
// 	clipPath: "polygon(50% -70%,100% 50%,50% 170%,0 50%)",
// 	background: "#3B8686",
// };
const SanityImage = ({ image, alt }: { image: string; alt: string }) => {
	if (!image) return null;
	// if (!image || !image.asset) return null;

	return (
		<Image
		loading="lazy"
			src={urlFor(image).width(1200).height(1200).url()} // Adjust width & height
			alt={alt}
			width={1200
			}
			height={1200}
			// style={hexagonStyle}
		/>
	);
};

export default SanityImage;
