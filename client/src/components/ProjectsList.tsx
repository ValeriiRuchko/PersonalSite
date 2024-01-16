import { MouseEventHandler } from "react";

type ProjectsListProps = {
  names: string[];
  setShownProject: React.Dispatch<React.SetStateAction<string>>;
};

function ProjectsList(props: ProjectsListProps) {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    // console.log("Event value", event.currentTarget.value);
    props.setShownProject(event.currentTarget.value);
  };

  return (
    <div className="projects_section__content__names">
      {props.names.map((elem, index) => {
        return (
          <button
            className="projects_section__content__names__button"
            onClick={handleClick}
            key={index}
            value={elem}
          >
            <h4>{elem}</h4>
          </button>
        );
      })}
    </div>
  );
}

export default ProjectsList;
