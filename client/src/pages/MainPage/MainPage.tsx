import IntroCard from "../../components/IntroCard";
import "../../styles/App.scss";

import hammerIcon from "/hammer-solid.svg";

type MainPageProps = {
  className: string;
};

function MainPage(props: MainPageProps) {
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
          className={["introduction_section_card", "to_right_hover"]}
        />
        <IntroCard
          title="What I do now"
          content={`They're using our own satellites against us. 
          And the clock is ticking. 
          Yeah, but John, if The Pirates of the Caribbean breaks down, 
          the pirates don’t eat the tourists. Is this my espresso machine?`}
          className={["introduction_section_card", "to_left_hover"]}
        />
      </div>
    </div>
  );
}

export default MainPage;
