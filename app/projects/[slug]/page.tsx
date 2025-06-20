import React from "react";
import { notFound } from "next/navigation";
import { sanityClient, getSlugs } from "@/lib/fetch";
import PageWrapper from "@/components/PageWrapper";
import MediaCarousel from "@/components/MediaCarousel";
import Albums from "@/components/Albums";
import MediaModal from "@/components/MediaModal";
import PDFContainer from "@/components/PDFContainer";
import Link from "next/link";
import ProjectBody from "@/components/ProjectBody";
import ProjectBodySecondary from "@/components/ProjectBodySecondary";
import { urlForSocialMediaImg } from "@/lib/sanityImage";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await sanityClient.fetch(
    `*[_type == "project" && slug.current == $slug][0]{
    _id,
    title,
    description,
    mainImage
  }`,
    { slug: slug }
  );
  if (!project) return notFound();

  const imgUrl = urlForSocialMediaImg(project?.mainImage);
  return {
    title: `Benjamin Campbell | ${project.title}`,
    description:
      project.description || "Sydney based bassist, composer and educator",
    openGraph: {
      title: project.title,
      description:
        project.description || "Sydney based bassist, composer and educator",
      url: `https://benjamincampbell.com/project/${slug}`,
      type: 'article',
      images: [
        {
          url: imgUrl || '',
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const projects = await getSlugs("project");

  return projects.map((project: { slug: { current: string } }) => ({
    slug: project.slug.current, // Ensures proper structure
  }));
}
const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  if (!slug) return notFound();

  const section = await sanityClient.fetch(
    `*[_type == "project" && slug.current == $slug][0]{
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
    <PageWrapper title={section.title}>
      <div className=" flex w-full flex-col items-center justify-between">
        <ProjectBody
          title={section.title}
          description={section.description}
          body={section.body}
        />

        {section.albums && <Albums albums={section.albums} />}

        {section.displayBodySecondary && (
          <ProjectBodySecondary body={section.bodySecondary} />
        )}

        {section.mediaLinks && (
          <MediaModal imgUrl={section.mediaLinks[0].URL}>
            <MediaCarousel mediaLinks={section.mediaLinks} />
          </MediaModal>
        )}
        <div className="mt-0 flex w-full flex-wrap items-center justify-center ">
          {section.pdfMedia && <PDFContainer pdfs={section.pdfMedia} />}
          {section.projectWebsite && (
            <Link
              href={section.projectWebsite}
              target="_blank"
              className="theme-button max-w-xl"
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
