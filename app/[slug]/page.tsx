import React from "react";
import { notFound } from "next/navigation";
import { sanityClient, getSlugs } from "@/lib/fetch";
import PageWrapper from "@/components/PageWrapper";
import MediaCarousel from "@/components/MediaCarousel";
import Albums from "@/components/Albums";
import MediaModal from "@/components/MediaModal";
import ProjectExpo from "@/components/ProjectExpo";
import PDFContainer from "@/components/PDFContainer";
import Link from "next/link";
import ProjectBody from "@/components/ProjectBody";
import ProjectBodySecondary from "@/components/ProjectBodySecondary";

export async function generateStaticParams() {
  const sections = await getSlugs("section");

  return sections.map((section: { slug: { current: string } }) => ({
    slug: section.slug.current, // Ensures proper structure
  }));
}
const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  if (!slug) return notFound();

  const section = await sanityClient.fetch(
    `*[_type == "section" && slug.current == $slug][0]{
    _id,
        title,
        description,
        mainImage,
        body,
    displayBodySecondary,
    bodySecondary,
        "slug": slug.current,
    mediaLinks,
    albums,
    projectWebsite,
    pdfMedia[] {
      title,
      "url": document.asset->url 
    }
  }`,
    { slug: slug }
  );

  if (!section) {
    return notFound();
  }
  // console.log(section);
  // const totalAlbums = section.albums ? 1: 0
  // const videoEmbed = section.mediaLinks && !section.displayBodySecondary ? 1 : 0;
  // const totalMediaElements =  totalAlbums + videoEmbed

  return (
    <PageWrapper>
      <div className=" flex w-full flex-col items-center justify-between">
        <ProjectExpo
          mainImage={section.mainImage}
          title={section.title}
          description={section.description}
        />
        <ProjectBody
          title={section.title}
          description={section.description}
          body={section.body}
        />
        {section.mediaLinks && (
          <MediaModal imgUrl={section.mediaLinks[0].URL}>
            <MediaCarousel mediaLinks={section.mediaLinks} />
          </MediaModal>
        )}

        {section.albums && <Albums albums={section.albums} />}
        {section.displayBodySecondary && (
          <ProjectBodySecondary body={section.bodySecondary} />
        )}

        <div className="mt-0 flex w-full flex-wrap items-center justify-center ">
          {section.pdfMedia && <PDFContainer pdfs={section.pdfMedia} />}
          {section.projectWebsite && (
            <Link
              href={section.projectWebsite}
              target="_blank"
              className="square-button max-w-xl"
            >
              {`${section.title} Website`}
            </Link>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default page;
