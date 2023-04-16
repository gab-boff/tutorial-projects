import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projectListArray = [
    {
      title: "Responsive Page",
      imagePath: "/../public/assets/projects/responsive-page.png",
      projectUrl: "/",
    },
    {
      title: "Todo App",
      imagePath: "/../public/assets/projects/todo-app.png",
      projectUrl: "/",
    },
  ];

  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projetos
        </p>
        <h2 className="py-4">O que eu construi</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectListArray.map(({ title, imagePath, projectUrl }) => (
            <ProjectCard
              title={title}
              imagePath={imagePath}
              projectUrl={projectUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
