import React from "react";
import { getPostsPreview } from "@/lib/fetch";
import FeatureSlider from "../FeatureSlider";

const ProcessWIP = async () => {
  const posts = await getPostsPreview();

  return (
    <div className="">
        <FeatureSlider posts={posts} />
    </div>
  );
};

export default ProcessWIP;
