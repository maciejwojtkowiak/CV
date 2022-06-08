import recipeMaster from "../../images/Projects/recipemaster.png";
import brabant from "../../images/Projects/brabant.png";
import ProjectItem from "./ProjectItem";
import { useId } from "react";

const ProjectsGrid = () => {
  const id = useId();
  return (
    <div className="w-full grid ">
      <div className="grid  h-screen w-full p-8 gap-8 ">
        <ProjectItem title="Recipemaster" imgUrl={recipeMaster} />
        <ProjectItem title="Lion of Brabant" imgUrl={brabant} />
      </div>
    </div>
  );
};

export default ProjectsGrid;
