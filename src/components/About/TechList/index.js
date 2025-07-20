import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss"

const TechList = () => {
  const [techs] = useState([
    {
      name: "React",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "React Native",
      image: 
        "https://cdn.worldvectorlogo.com/logos/react-native-1.svg",
    },
    {
      name: "Spring Boot",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
    },
    {
      name: "Next.js",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Node.js",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
      name: "Jest",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
    },
    {
      name: "Express.js",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    },
    {
      name: "Pandas",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
    },
    {
      name: "NumPy",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
    },
    {
      name: "Tailwind",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Matplotlib",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg",
    },
    {
      name: "Scikit-learn",
      image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
    },
    {
      name: "Django",
      image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
    },
    {
      name: "Flask",
      image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
    },
    {
      name: "PyTorch",
      image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
    },
    {
      name: "Vue.js",
      image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
    },
  ]);

  return (
    <div>
      <h2>Frameworks & Technologies</h2>
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
