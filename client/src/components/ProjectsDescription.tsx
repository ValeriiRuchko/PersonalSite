import { Project } from "../@types/common_types";

type ProjectsDescrProps = {
  projects: Project[];
  shownProject: string;
};

function ProjectsDescription(props: ProjectsDescrProps) {
  return (
    <div className="projects_section__content__descriptions">
      {props.projects.map((elem, index) => {
        return elem.name === props.shownProject ? (
          <div
            className={`
          projects_section__content__description 
          projects_section__content__description__show
          `}
            key={index}
          >
            <h5>{elem.name}</h5>
            <p>{elem.description}</p>

            <a href={`${elem.github_link}`}>
              <em>Github</em>
            </a>
          </div>
        ) : (
          <div
            className={`
          projects_section__content__description 
          `}
            key={index}
          >
            <p>{elem.description}</p>
            <a href={`${elem.github_link}`}>
              <em>Github</em>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectsDescription;
