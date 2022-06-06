import recipeMaster from "../../images/Projects/recipemaster.png";
import brabant from "../../images/Projects/brabant.png";
import ProjectItem from "./ProjectItem";

const ProjectsGrid = () => {
  return (
    <div className="w-full grid place-items-center">
      <div className="grid grid-cols-2 grid-rows-2 h-screen w-full p-8 gap-8 ">
        <ProjectItem imgUrl={recipeMaster} />
        <ProjectItem imgUrl={brabant} />
      </div>
    </div>
  );
};

export default ProjectsGrid;
