import React from "react";
import SanityImage from "./SanityImage";
import Link from "next/link";
// import { PortableText } from "next-sanity";

type FeatureCardProps = {
  title: string;
  image: string;
  // description: string;
  slug: string;
};

const FeatureCard = ({ title, image, slug }: FeatureCardProps) => {
  return (
    <div
      className={`flex flex-col w-full md:w-2/5 max-w-sm justify-between items-cente pb-4`}
    >
      <div className="flex flex-col items-center gap-2">
        <Link
          href={"/" + slug}
          className=" w-full rounded-4xl overflow-hidden shadow-2xl hover:outline-4 outline-accent transition-all duration-150 ease-in-out border border-neutral-400"
        >
          <SanityImage image={image} alt={title} />
        </Link>
        <div className="flex px-4 flex-col text-pretty items-center md:items-start py-4 gap-4 justify-center mb-4">
          <Link href={"/" + slug}>
            <h3
              className={` font-semibold text-4xl lg:text-5xl text-outline text-center w-full`}
            >
              {title}
            </h3>
          </Link>

          {/* <div className="prose  prose-lg md:prose-xl  text-pretty text-white">
            {typeof description !== "string" ? (
              <PortableText value={description} />
            ) : (
              <div>{description}</div>
            )}
          </div> */}
        </div>
      </div>
      {/* <div className="w-full flex justify-center">
        <Link className="font-semibold underline decoration-1 underline-offset-4  text-xl" href={"/about"}
        style={{color: "var(--color-secondary)"}}
        >
          more
        </Link>
      </div> */}
    </div>
  );
};

export default FeatureCard;
