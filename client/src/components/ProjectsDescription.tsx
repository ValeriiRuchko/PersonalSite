import { Project } from "../types/common_types";

type ProjectsDescrProps = {
  projects: Project[];
  shownProject: string;
};

function ProjectsDescription(props: ProjectsDescrProps) {
  return (
    <div className="projects_section__content__descriptions">
      {props.projects.map((elem, index) => {
        return elem.name === props.shownProject ? (
          <p
            className={`
          projects_section__content__description 
          projects_section__content__description__show
          `}
            key={index}
          >
            {elem.description}
          </p>
        ) : (
          <p
            className={`
          projects_section__content__description 
          `}
            key={index}
          >
            {elem.description}
          </p>
        );
      })}
    </div>
  );
}

export default ProjectsDescription;
