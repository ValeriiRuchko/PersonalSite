import { useEffect, useState } from "react";
import IntroCard from "../../components/IntroCard";
import "../../styles/App.scss";

import hammerIcon from "/hammer-solid.svg";

type MainPageProps = {
  className: string;
};

function MainPage(props: MainPageProps) {
  const [classesLeft, setLeft] = useState([
    "introduction_section_card",
    "left_card",
  ]);
  const [classesRight, setRight] = useState([
    "introduction_section_card",
    "right_card",
  ]);

  function triggerCardMove() {
    if (window.scrollY > 200) {
      setLeft([...classesLeft, "trigger_left"]);
      setRight([...classesRight, "trigger_right"]);
    }

    if (window.scrollY > 800 || window.scrollY === 0) {
      setLeft((prevState) => {
        return [...prevState, "cancel_left"];
      });
      setRight((prevState) => {
        return [...prevState, "cancel_right"];
      });
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", triggerCardMove);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", triggerCardMove);
    };
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
      </div>
    </div>
  );
}

export default MainPage;
