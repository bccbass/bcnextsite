import React from "react";

const DividerLayered = () => {
  return (
    <div className="-my-48   z-10">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100">
      <g fill="var(--color-background)">
        <path d="M0 0v84l500 16 500-16V0H0z" opacity="0"></path>
        <path d="M0 0v64l500 36 500-36V0H0z" opacity=".3"></path>
        <path d="M0 0v44l500 56 500-56V0H0z" opacity=".5"></path>
        <path d="M0 0v24l500 76 500-76V0H0z" opacity=".6"></path>
        <path d="M0 0v4l500 96 500-96V0H0z"></path>
      </g>
    </svg>
    </div>
  );
};

export default DividerLayered;
