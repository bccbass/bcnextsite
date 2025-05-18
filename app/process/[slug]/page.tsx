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

export async function generateStaticParams() {
  const projects = await sanityClient.fetch(`*[_type == "project"]{ slug }`);

  return projects.map((project: { slug: { current: string } }) => ({
    slug: project.slug.current, // Ensures proper structure
  }));
}
const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  if (!slug) return notFound();

  const project = await sanityClient.fetch(
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
	  
  }
      `,
    { slug: slug }
  );

  if (!project) {
    return notFound();
  }
  // console.log(project);
  // const totalAlbums = project.albums ? 1: 0
  // const videoEmbed = project.mediaLinks && !project.displayBodySecondary ? 1 : 0;
  // const totalMediaElements =  totalAlbums + videoEmbed

  return (
    <PageWrapper>
      <div className=" flex w-full flex-col items-center justify-between">
        <ProjectExpo
          mainImage={project.mainImage}
          title={project.title}
          description={project.description}
        />
        <ProjectBody
          title={project.title}
          description={project.description}
          body={project.body}
        />
        {project.mediaLinks && (
          <MediaModal imgUrl={project.mediaLinks[0].URL}>
            <MediaCarousel mediaLinks={project.mediaLinks} />
          </MediaModal>
        )}

        {project.albums && <Albums albums={project.albums} />}
        {project.displayBodySecondary && (
          <ProjectBodySecondary body={project.bodySecondary} />
        )}

        <div className="mt-0 flex w-full flex-wrap items-center justify-center ">
          {project.pdfMedia && <PDFContainer pdfs={project.pdfMedia} />}
          {project.projectWebsite && (
            <Link
              href={project.projectWebsite}
              target="_blank"
              className="square-button max-w-xl"
            >
              {`${project.title} Website`}
            </Link>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default page;
