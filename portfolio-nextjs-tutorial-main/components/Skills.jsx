import React from "react";

import SkillCard from "./SkillCard";

function Skills() {
  const skillListArray = [
    {
      text: "HTML",
      imagePath: "/../public/assets/skills/html-icon.png",
    },
    {
      text: "CSS",
      imagePath: "/../public/assets/skills/css-icon.png",
    },
    {
      text: "JavaScript",
      imagePath: "/../public/assets/skills/js-icon.png",
    },
    {
      text: "TypeScript",
      imagePath: "/../public/assets/skills/typescript-icon.png",
    },
    {
      text: "React.js",
      imagePath: "/../public/assets/skills/react-icon.png",
    },
    {
      text: "Next.js",
      imagePath: "/../public/assets/skills/nextjs-icon.png",
    },
    {
      text: "Node.js",
      imagePath: "/../public/assets/skills/node-icon.png",
    },
    {
      text: "MySQL",
      imagePath: "/../public/assets/skills/mysql-icon.png",
    },
    {
      text: "MongoDB",
      imagePath: "/../public/assets/skills/mongodb-icon.png",
    },
    {
      text: "Docker",
      imagePath: "/../public/assets/skills/docker-icon.png",
    },
    {
      text: "AWS",
      imagePath: "/../public/assets/skills/aws-icon.png",
    },
    {
      text: "Python",
      imagePath: "/../public/assets/skills/python-icon.png",
    },
  ];

  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Habilidades
        </p>
        <h2 className="py-4">O que eu sei</h2>
        <div className="grid md:grid-cols-2 lg:grid_cols-4 gap-8">
          {skillListArray.map(({ text, imagePath }) => (
            <SkillCard key={text} text={text} imagePath={imagePath} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
