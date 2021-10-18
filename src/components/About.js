import React from "react";
import SkillCard from "../components/SkillCard.js";
import api from "../components/api.jpg";
import backend from "../components/backend.jpg";
import frontend from "../components/frontend.png";
import uiux from "../components/uiux.jpg";
import laptop from "../components/laptop.jpg";

const skills = [
  {
    icon: frontend,
    tittle: "Frontend Development",
    about:
      "I can build a beautiful and scalable Webpages using HTML, CSS and React.js"
  },
  {
    icon: backend,
    tittle: "Backend  Development",
    about:
      "I can use various Languages like NodeJs and Build databases using MongoBD and many other Languages"
  },
  {
    icon: api,
    tittle: "API Development",
    about: "I can develop robust REST API using various API's"
  },
  {
    icon: laptop,
    tittle: "Programming",
    about:
      "Apart from WebDevelopment , I also practice Programming Languages like C,C++ & Java"
  },
  {
    icon: uiux,
    tittle: "UI/UX designer",
    about: "I can create user interface designer using figma and  framer"
  }
];

function About() {
  return (
    <div className="about">
      <div className="AboutIntro">
        <h6 className="Head">
          I describe myself as someone who's Persistant, a Quick Learner and
          loves problem solving by using simple and scalable solutions.
        </h6>
        <h4> What I offer</h4>
      </div>
      <div className="container">
        <div className="row">
          {skills.map((skill) => (
            <SkillCard
              icon={skill.icon}
              tittle={skill.tittle}
              about={skill.about}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
