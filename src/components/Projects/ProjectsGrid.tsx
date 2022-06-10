import recipeMaster from "../../images/Projects/recipemaster.png";
import brabant from "../../images/Projects/brabant.png";
import ProjectItem from "./ProjectItem";
import { useId } from "react";
import reactImg from "../../images/react.png";
import firebaseImg from "../../images/firebase.png";
import htmlImg from "../../images/html5.png";

const ProjectsGrid = () => {
  const id = useId();
  const recipeMasterUrls = [reactImg, firebaseImg];
  const lionOfBrabantUrls = [htmlImg];
  return (
    <div className="grid grid-rows-2 grid-cols-2 w-full p-8 gap-8 ">
      <ProjectItem
        key={id}
        techUrls={recipeMasterUrls}
        title="Recipemaster"
        imgUrl={recipeMaster}
      />
      <ProjectItem
        key={id}
        techUrls={lionOfBrabantUrls}
        title="Lion of Brabant"
        imgUrl={brabant}
      />
    </div>
  );
};

export default ProjectsGrid;
