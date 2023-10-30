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
        <div className="introduction_section_my_journey">
          <h2>How I started?</h2>
        </div>
        <div className="introduction_section_present">
          <h2>What do I do now?</h2>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
