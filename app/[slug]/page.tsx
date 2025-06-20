import React from "react";
import { notFound } from "next/navigation";
import { sanityClient, getSlugs } from "@/lib/fetch";
import PageWrapper from "@/components/PageWrapper";
import MediaCarousel from "@/components/MediaCarousel";
import Albums from "@/components/Albums";
import MediaModal from "@/components/MediaModal";
import VideosWrapper from "@/components/VideosWrapper";
import PDFContainer from "@/components/PDFContainer";
import Link from "next/link";
import ProjectBody from "@/components/ProjectBody";
import ProjectBodySecondary from "@/components/ProjectBodySecondary";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await sanityClient.fetch(
    `*[_type == "section" && slug.current == $slug][0]{
    _id,
    title,
    description,
    mainImage
  }`,
    { slug: slug }
  );
  if (!post) return notFound();

  // const imgUrl = urlForMedImg(post?.mainImage);
  return {
    title: `Benjamin Campbell | ${post.title}`,
    description:
      post.description || "Sydney based bassist, composer and educator",
    openGraph: {
      title: post.title,
      description:
        post.description || "Sydney based bassist, composer and educator",
      url: `https://benjamincampbell.com/${slug}`,

      images: [
        {
          url: "https://benjamincampbell.com/welcome_poster.webp",
          width: 1200,
          height: 630,
          alt: "Welcome Photo",
        },
      ],
      type: "website",
    },
  };
}

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
    videos,
    albums,
    video,
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

  return (
    <PageWrapper title={section.title}>
      <div className=" flex w-full flex-col items-center justify-between">
        {section.videos && <VideosWrapper videos={section.videos} />}

        <ProjectBody
          title={section.title}
          description={section.description}
          body={section.body}
        />
        {/* {section.videos && <VideosWrapper videos={section.videos} />} */}
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
