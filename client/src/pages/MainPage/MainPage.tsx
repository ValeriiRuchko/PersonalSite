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

  function triggerHover() {
    console.log(window.scrollY);
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
    window.addEventListener("scroll", triggerHover);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", triggerHover);
      console.log("removed");
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
          content={`They're using our own satellites against us. 
          And the clock is ticking. 
          Yeah, but John, if The Pirates of the Caribbean breaks down, 
          the pirates don’t eat the tourists. Is this my espresso machine?`}
          className={[...classesLeft]}
        />
        <IntroCard
          title="What I do now"
          content={`They're using our own satellites against us. 
          And the clock is ticking. 
          Yeah, but John, if The Pirates of the Caribbean breaks down, 
          the pirates don’t eat the tourists. Is this my espresso machine?`}
          className={[...classesRight]}
        />
      </div>
    </div>
  );
}

export default MainPage;
