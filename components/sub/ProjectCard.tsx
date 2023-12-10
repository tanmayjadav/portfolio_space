import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
       <a href="https://todo-app-react-js-pi5b.vercel.app/"><Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain shadow-lg border border-[#35225c] shadow-[#b695f7]/50"
      /></a>
      

      <div className="relative p-4">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        <a href="https://todo-app-react-js-pi5b.vercel.app/">{title}</a></h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
