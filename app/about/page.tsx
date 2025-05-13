import React from "react";
import Biography from "@/components/Biography";
import PageWrapper from "@/components/PageWrapper";
import { getWebsiteData } from "@/lib/fetch";

const page = async () => {
  const websiteData = await getWebsiteData();

  return (
    <PageWrapper>
      <Biography biography={websiteData.biography} />
    </PageWrapper>
  );
};

export default page;
