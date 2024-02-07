import React from "react";
import { ProjectCard } from "./ProjectCard";

export const Project = () => {
  return (
    <section>
      <div className="container mx-auto">
        <h2 className="text-center my-7 text-[#5C62EC] font-bold text-4xl">
          Projects
        </h2>
        <div className="flex items-center justify-between flex-wrap gap-5 max-lg:px-5 px-2">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};
