import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/todo.png"
          title="Task Management Todo Website"
          description="Developed a secure Todo App using MERN stack with user authentication, emphasizing responsive
          design and real-time task management. Implemented state management with React, and MongoDB for efficient data
          storage. Visit the Website at https://todo-app-react-js-pi5b.vercel.app/"
        />
        <ProjectCard
          src="/bhp.png"
          title="Real Estate Price Prediction Web Application"
          description="Predicts house prices using Supervised Learning. The app was built with HTML, CSS, JavaScript, Python
          Flask, and hosted on Amazon AWS. Visit the app at http://ec2-44-204-195-124.compute-1.amazonaws.com"
        />
        <ProjectCard
          src="/chat.png"
          title="Dynamic Chatbot in DialogFlow"
          description="interactive chatbot for a eatery,integrating it into their website for order placement and tracking.
          leveraging Dialogflow, FastAPI for the backend and web interface, and MySQL for the database."
        />
      </div>
    </div>
  );
};

export default Projects;
