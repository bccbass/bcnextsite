import React from "react";

import CustomPortableText from "@/components/CustomPortableText";

type BodyProps = {
  body: [];
};
const ProjectBodySecondary = ({ body }: BodyProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center md:my-12">
      <div
        className={`prose prose-md sm:prose-xl w-full border-neutral-400 px-2 sm:px-12`}
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

export default ProjectBodySecondary;
