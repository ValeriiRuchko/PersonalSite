import { useEffect, useState } from "react";
import IntroCard from "../../components/IntroCard";
import "../../styles/App.scss";

import hammerIcon from "/hammer-solid.svg";
import ProjectsList from "../../components/ProjectsList";
import { Project } from "../../types/common_types";
import ProjectsDescription from "../../components/ProjectsDescription";

type MainPageProps = {
  className: string;
};

function MainPage(props: MainPageProps) {
  // fetched projects from server
  const [projects, setProjects] = useState<Array<Project>>([]);
  const [shownProject, setShownProject] = useState("New project");

  // --------------------------------------------------------
  // animation classes
  const [classesLeft, setLeft] = useState([
    "introduction_section__card",
    "left_card",
  ]);
  const [classesRight, setRight] = useState([
    "introduction_section__card",
    "right_card",
  ]);

  function triggerCardMove() {
    if (window.scrollY > 200) {
      setLeft([...classesLeft, "trigger_down"]);
      setRight([...classesRight, "trigger_up"]);
    }

    if (window.scrollY > 800 || window.scrollY === 0) {
      setLeft((prevState) => {
        return [...prevState, "cancel_down"];
      });
      setRight((prevState) => {
        return [...prevState, "cancel_up"];
      });
    }
  }
  // intro-card animation effects
  useEffect(() => {
    window.addEventListener("scroll", triggerCardMove);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", triggerCardMove);
    };
  }, []);
  // --------------------------------------------------------
  //
  useEffect(() => {
    fetch("http://localhost:3002/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => {
        console.log("FETCH ERROR: ", err);
      });
  }, []);

  return (
    <div className={`${props.className}`}>
      <div className="greetings_heading">
        <h1>
          Hi, <span className="greetings_heading_name">I'm Valerii!</span>
          <br /> An aspiring{" "}
          <span className="greetings_heading_job_name">Web-Developer</span>
          <br /> who wants to build fun things <img src={hammerIcon} />
        </h1>
      </div>
      <div className="introduction_section">
        <IntroCard
          title="How I started"
          content={`My journey begun in summer of 2022, as a simple university assignment,
          which slowly started evolving into something bigger. At that time I completed
          my first ever Udemy course about Web-Dev and when I finally grasped, how fascinating
          and "not-so-easy-but-also-fun" it is.`}
          className={[...classesLeft]}
        />
        <IntroCard
          title="What I do now"
          content={`Currently I'm an aspiring software engineer, who tries to become better
          every day and also to hone my skills while doing some fun projects. I'm planning
          to continue my journey with TypeScript and Node, but also occasionaly use Golang
          to play around.`}
          className={[...classesRight]}
        />
      </div>
      <hr />
      <div className="projects_section">
        <h2>Projects and contributions</h2>
        <div className="projects_section__content">
          <ProjectsList
            names={projects.map((elem) => {
              return elem.name;
            })}
            setShownProject={setShownProject}
          />
          <ProjectsDescription
            shownProject={shownProject}
            projects={projects}
          />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
