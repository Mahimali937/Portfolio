import React, { useState } from "react";
import "./index.scss";

const TechList = () => {
  const [devs] = useState([
    {
      name: "Git",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    {
      name: "Replit",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/replit/replit-original.svg",
    },
    {
      name: "AWS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    {
      name: "PostgreSQL",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Jira",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg",
    },
    {
      name: "Azure",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
    },
    {
      name: "Unix",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unix/unix-original.svg",
    },
    {
      name: "Supabase",
      image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    },
    {
      name: "MongoDB",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Docker",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    },
    {
      name: "Google Cloud Platform",
      image:
       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
    },
    {
      name: "Firebase",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    },
    {
      name: "IntelliJ IDEA",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg",
    },
    {
      name: "Postman",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    },
    {
      name: "VS Code",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    },
  ]);

  return (
    <div>
      <h2>Development Tools</h2>
      <div className="dev-list-container">
        {devs.map((dev, index) => (
          <div key={index} className="dev-card">
            <img src={dev.image} alt={dev.name} className="dev-icon" />
            <p className="dev-name">{dev.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechList;
