import React from "react";
import SanityImage from "./SanityImage";
import FadeIn from "./FadeIn";
import Link from "next/link";

type FeatureSliderCardProps = {
  title: string;
  image: string;
  description: string;
  categories?: string[];
  slug: string;
};

const FeatureSliderCard = ({
  title,
  image,
  description,
  slug,
  categories = [],
}: FeatureSliderCardProps) => {
  return (
    <FadeIn y={false} random={false}>
      <div className="flex flex-col sm:flex-row w-full md:h-76 max-w-5xl sm:h-[40vh] mx-auto justify-center items-center gap-2">
        <div className="w-full max-w-48 lg:max-w-none lg:w-sm aspect-square rounded-2xl overflow-hidden">
          <SanityImage image={image} alt={title} width={550} height={550} />
        </div>
        <div className="flex flex-col w-full text-pretty  gap-3 justify-center text-center sm:text-start p-6 md:p-4">
          <h3
            className={`font-semibold text-2xl md:text-4xl text-outline text-neutral-900 w-full`}
          >
            {title}
          </h3>
          <div className="flex flex-wrap gap-2 self-center sm:self-start">
            {categories?.map((tag, i) => (
              <Link key={i} href={"/process?tag=" + tag} className="tag">
                {tag}
              </Link>
            ))}
          </div>
          <p className="text-lg md:text-2xl font-semibold  text-neutral-600">
            {description}
          </p>

          <Link
            className="self-center sm:self-start rounded-button w-full md:w-fit "
            href={"/process/" + slug}
          >
            See Post
          </Link>
        </div>
      </div>
    </FadeIn>
  );
};

export default FeatureSliderCard;
