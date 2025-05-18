/** @format */
import React from "react";
import { notFound } from "next/navigation";
import { sanityClient } from "../../lib/fetch";
import Drawer from "@/components/Drawer";
import MoreProjects from "@/components/MoreProjects";
import MediaCarousel from "@/components/MediaCarousel";
import Albums from "@/components/Albums";
import MediaModal from "@/components/MediaModal";
import MiniNav from "@/components/MiniNav";
import ProjectExpo from "@/components/ProjectExpo";
import PDFContainer from "@/PDFContainer";
import Link from "next/link";
import ProjectBody from "@/components/ProjectBody";
import ProjectBodySecondary from "@/components/ProjectBodySecondary";
import FadeInOutWrapper from "@/components/FadeInOutWrapper";
import ProjectBodyAnimate from "@/components/ProjectBodyAnimate";
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
    { slug: slug },
  );

  if (!project) {
    return notFound();
  }
  // console.log(project);
  // const totalAlbums = project.albums ? 1: 0
  // const videoEmbed = project.mediaLinks && !project.displayBodySecondary ? 1 : 0;
  // const totalMediaElements =  totalAlbums + videoEmbed

  return (
    <div className="flex min-h-screen w-screen max-w-screen">
      <Drawer homePage={false} />
      <MiniNav />

      <div className="flex w-full flex-col items-center justify-between">
        <ProjectExpo
          mainImage={project.mainImage}
          title={project.title}
          description={project.description}
        />
        <ProjectBodyAnimate>
          <ProjectBody
            title={project.title}
            description={project.description}
            body={project.body}
          />
          {project.mediaLinks && (
            <FadeInOutWrapper viewport={0.5}>
              <MediaModal imgUrl={project.mediaLinks[0].URL}>
                <MediaCarousel mediaLinks={project.mediaLinks} />
              </MediaModal>
            </FadeInOutWrapper>
          )}

          {project.albums && (
            <FadeInOutWrapper viewport={1 / (project.albums.length + 1)}>
              <Albums albums={project.albums} />
            </FadeInOutWrapper>
          )}
          {project.displayBodySecondary && (
            <ProjectBodySecondary body={project.bodySecondary} />
          )}

          <div className="mt-20 flex w-full flex-wrap items-center justify-center lg:mt-30 lg:mb-20">
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
        </ProjectBodyAnimate>

        <MoreProjects exclude={project._id} />
      </div>
    </div>
  );
};

export default page;
