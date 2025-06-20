import React from "react";
import { notFound } from "next/navigation";
import { sanityClient } from "@/lib/fetch";
import PageWrapper from "@/components/PageWrapper";
import MediaCarousel from "@/components/MediaCarousel";
import Albums from "@/components/Albums";
import MediaModal from "@/components/MediaModal";
import ProjectExpo from "@/components/ProjectExpo";
import PDFContainer from "@/components/PDFContainer";
import Link from "next/link";
import ProjectBody from "@/components/ProjectBody";
import ProjectBodySecondary from "@/components/ProjectBodySecondary";
import { urlForMedImg } from "@/lib/sanityImage";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await sanityClient.fetch(`*[_type == "posts"]{ slug }`);

  return posts.map((post: { slug: { current: string } }) => ({
    slug: post.slug.current, // Ensures proper structure
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
    _id,
		title,
		description,
		mainImage
  }`,
    { slug: slug }
  );
  if (!post) return notFound();

  const imgUrl = urlForMedImg(post?.mainImage);
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://benjamincampbell.com/process/${slug}`,
      images: [
        {
          url: imgUrl,
          width: 800,
          height: 800,
          alt: post.title,
        },
      ],
    },
  };
}


const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  if (!slug) return notFound();

  const post = await sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
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

  if (!post) {
    return notFound();
  }

  return (
    <PageWrapper>
      <div className=" flex w-full flex-col items-center justify-between">
        <ProjectExpo
          mainImage={post.mainImage}
          title={post.title}
          description={post.description}
        />
        <ProjectBody
          title={post.title}
          description={post.description}
          body={post.body}
        />
        {post.mediaLinks && (
          <MediaModal imgUrl={post.mediaLinks[0].URL}>
            <MediaCarousel mediaLinks={post.mediaLinks} />
          </MediaModal>
        )}

        {post.albums && <Albums albums={post.albums} />}
        {post.displayBodySecondary && (
          <ProjectBodySecondary body={post.bodySecondary} />
        )}

        <div className="mt-0 flex w-full flex-wrap items-center justify-center ">
          {post.pdfMedia && <PDFContainer pdfs={post.pdfMedia} />}
          {post.projectWebsite && (
            <Link
              href={post.projectWebsite}
              target="_blank"
              className="theme-button max-w-xl"
            >
              {`${post.title} Website`}
            </Link>
          )}
        </div>
      </div>
      <Link href={"/process"} className="theme-button max-w-xl mt-32">
        Back to Posts
      </Link>
    </PageWrapper>
  );
};

export default page;
