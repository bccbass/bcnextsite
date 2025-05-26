"use client";
import React from "react";

import CustomPortableText from "@/components/CustomPortableText";

type BodyProps = {
  body: [];
  title: string;
  description: string;
};
const ProjectBody = ({
  body,
  // title,
  // description
}: BodyProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center text-white md:my-8">
      {/* <div className=" flex my-10  h-fit w-full justify-center">
        <div className="mx-8 flex h-fit w-full max-w-2xl flex-col justify-between gap-6 border-t border-b border-neutral-400 py-8 text-center">
          <h3 className="text-center text-4xl font-light text-neutral-700 lg:text-5xl">
            {title}
          </h3>
          <p className="md:hidden w-full px-2 text-2xl leading-9 font-light text-neutral-400 italic">
            {description}
          </p>
        </div>
      </div> */}
      <div
        className={`prose prose-md  sm:prose-xl w-full border-neutral-400 px-4 sm:px-12 text-white`}
      >
        {typeof body === "string" ? (
          <p>{body}</p>
        ) : (
          <CustomPortableText value={body} />
        )}
      </div>
    </div>
  );
};

export default ProjectBody;
