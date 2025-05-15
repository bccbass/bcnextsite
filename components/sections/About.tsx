import React from "react";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

import type { PortableTextBlock } from "@sanity/types";

const About = ({ briefBiography }: { briefBiography: PortableTextBlock[] | string }) => {
  return (
    <div className="flex flex-col gap-16 section pt-24">
      <div className="  flex flex-col md:flex-row gap-6 md:gap-16 lg:gap-20">
        <h2 className="section-title">About</h2>
        <div className="prose prose-lg pretty ">
          
          {typeof briefBiography !== 'string' ? <PortableText value={briefBiography} /> : <div>{briefBiography}</div> }
        </div>
      </div>
      <div className="w-full flex justify-end mx-auto">
        <Link className="theme-button mx-10" href={"/about"}>
          {" "}
          More
        </Link>
      </div>
    </div>
  );
};

export default About;
