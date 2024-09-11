import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss"

const TechList = () => {
  const [techs] = useState([
    {
      name: "AWS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    {
      name: "React",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "Spring Boot",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
    },
    {
      name: "PostgreSQL",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "NextJS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "MongoDB",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "ExpressJS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    },
    {
      name: "NodeJS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
      name: "Firebase",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    },
    {
      name: "Tailwind",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
  ]);

  return (
    <div>
      <h2>Development Tools</h2>
      <div className="tech-list-container">
        {techs.map((tech, index) => (
          <div key={index} className="tech-card">
            <img src={tech.image} alt={tech.name} className="tech-icon" />
            <p className="tech-name">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default TechList;
