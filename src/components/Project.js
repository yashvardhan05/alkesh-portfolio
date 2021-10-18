import React from "react";
import Pro from "../components/Pro.js";
import blog from "../assets/projects_images/blog.png";
import portfolio from "../assets/projects_images/portfolio.png";
import signin from "../assets/projects_images/signin.png";
import snake from "../assets/projects_images/snake.png";

function Project() {
  const projects = [
    {
      img: blog,
      name: "Blog Webpage",
      des: "This is a blog page created using HTML,CSS & Bootstrap ",
      link: "https://alkesh6.github.io/Blogs/Bootstrap%20Project.html"
    },
    {
      img: snake,
      name: "Snake Game",
      des: "This is a classic Snake Game made using Javascript,CSS & Bootstrap",
      link: "https://alkesh6.github.io/SnakeGame01/"
    },
    {
      img: signin,
      name: "API SignIn Page",
      des:
        "This is my first Backend project created using NodeJS & Mailchimp API ",
      link: "evening-bayou-27382.herokuapp.com"
    },
    {
      img: portfolio,
      name: "My Portfolio",
      des: "This is my first React App which is My Portfolio Page",
      link: "/about"
    }
  ];
  return (
    <div className="container">
      <div className="projectHead">
        <h3 className="projectIntro head">I Have built Projects in:</h3>
        <p className="projectIntro para">CSS,Javascript,Node,React&API</p>
      </div>
      <div className="projectBody">
        {projects.map((projects) => (
          <Pro
            img={projects.img}
            name={projects.name}
            des={projects.des}
            link={projects.link}
            css={projects.css}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;
