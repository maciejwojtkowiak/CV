import recipeMaster from "../../images/Projects/recipemaster.png";
import brabant from "../../images/Projects/brabant.png";
import ProjectItem from "./ProjectItem";
import { useId } from "react";

const ProjectsGrid = () => {
  const id = useId();
  return (
    <div className="grid grid-rows-2 grid-cols-2 w-full p-8 gap-8 ">
      <ProjectItem key={id} title="Recipemaster" imgUrl={recipeMaster} />
      <ProjectItem key={id} title="Lion of Brabant" imgUrl={brabant} />
    </div>
  );
};

export default ProjectsGrid;
