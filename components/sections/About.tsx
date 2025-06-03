import React from "react";
// import Link from "next/link";
import CustomPortableText from '@/components/CustomPortableText'

import type { PortableTextBlock } from "@sanity/types";

const About = ({
  briefBiography,
}: {
  briefBiography: PortableTextBlock[] | string;
}) => {
  return (
    <div className="flex flex-col gap-16 section md:my-12">
      <div className="  flex flex-col md:flex-row gap-6 md:gap-16 lg:gap-20">
        <h2 className="section-title text-center md:text-start">about</h2>

        <div className="flex flex-col items-center">
          <div className="prose prose-lg md:prose-xl pretty text-white">
            {typeof briefBiography !== "string" ? (
              <CustomPortableText value={briefBiography} />
            ) : (
              <div>{briefBiography}</div>
            )}
            {/* <div className="w-full flex justify-center">
                 <Link className="" href={"/about"}>
            Read More
          </Link>
          </div> */}
          </div>
     
        </div>
      </div>
    </div>
  );
};

export default About;
