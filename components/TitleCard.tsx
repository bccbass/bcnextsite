import React from "react";

const TitleCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div
      className={`flex flex-col  border border-white outline-2 outline-primary rounded-sm bg-primary max-w-sm  w-7/8 md:w-full gap-4 justify-center items-center  px-4 py-4 `}
    >
      <h2 className="section-title text-secondary font-bold">{title}</h2>
      <p className="text-neutral-200  prose prose-md text-center pretty">
        {description}
      </p>
    </div>
  );
};

export default TitleCard;
