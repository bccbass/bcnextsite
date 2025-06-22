import React from "react";
import { getPostsPreview } from "@/lib/fetch";
import Link from "next/link";
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
