import React from "react";
import { getProjects } from "@/lib/fetch";
// import Link from "next/link";
import ProjectCard from "../ProjectCard";


const Projects = async () => {
  const projects = await getProjects();

    return (
    <div className="flex flex-col gap-10 section ">
      <div className="  pt-10   flex flex-col justify-center md:flex-row gap-6 md:gap-16 lg:gap-20">
        <h2 className="section-title">Projects</h2>{" "}

      </div>
      {/* <div className="  bg-primary border border-white outline-2 outline-primary py-10 px-6  flex flex-col md:flex-row gap-6 md:gap-16 lg:gap-20">
        <h2 className="section-title text-accent ">Projects</h2>{" "}
        <div className="prose prose-lg pretty ">
          <div className="text-neutral-100">

          </div>
        </div>
      </div> */}
      <div className=" flex  flex-wrap justify-center between w-full gap-16 ">
        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            title={project.title}
            slug={project.slug.current}
            image={project.imageUrl}
            description={project.description}
          />
        ))}
      </div>

    </div>
  );
};

export default Projects;
