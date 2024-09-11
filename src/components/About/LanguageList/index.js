import React, { useState } from "react";
import "./index.scss";

const LanguageList = () => {
  const [languages] = useState([
    {
      name: "Python",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    {
      name: "C++",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "Java",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    },
    {
      name: "JavaScript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
      name: "HTML",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
  ]);

  return (
    <div>
      <h2>Languages</h2>
      <div className="language-list-container">
        {languages.map((language, index) => (
          <div key={index} className="language-card">
            <img
              src={language.image}
              alt={language.name}
              className="language-icon"
            />
            <p className="language-name">{language.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageList;
