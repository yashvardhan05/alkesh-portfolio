import React from "react";
import javascript from "../assets/icons/javascript.png";
import Bar from "../components/Bar.js";

const Languages = [
  {
    icon: javascript,
    name: "Javascript",
    level: "60"
  },
  {
    name: "C++",
    level: "40"
  },
  {
    name: "Java",
    level: "35"
  },
  {
    name: "NodeJS",
    level: "55"
  },
  {
    name: "Bootstrap",
    level: "90"
  },
  {
    name: "React",
    level: "80"
  },
  {
    name: "EJS",
    level: "55"
  }
];

const tools = [
  {
    name: "Figma",
    level: "75"
  },
  {
    name: " Wolfram",
    level: "55"
  },
  {
    name: "Visual Studio Code",
    level: "85"
  },
  {
    name: " NPM",
    level: "65"
  }
];

function Resume() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 resumeLang">
          <h5 className="resumeLangHead">Languages and Frameworks</h5>
          <div className="resumeLangBody">
            {Languages.map((Languages) => (
              <Bar value={Languages} />
            ))}
          </div>
        </div>
        <div className="col-lg-6 resumeLang">
          <h5 className="resumeLangHead">Tools and Software</h5>
          <div className="resumeLangBody">
            {tools.map((tool) => (
              <Bar value={tool} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
