import recipeMaster from "../../images/Projects/recipemaster.png";
import brabant from "../../images/Projects/brabant.png";
import ProjectItem from "./ProjectItem";
import React, { useId } from "react";
import reactImg from "../../images/react.png";
import typescriptImg from "../../images/typescript.png";
import firebaseImg from "../../images/firebase.png";
import htmlImg from "../../images/html5.png";
import cssImg from "../../images/css.png";
import scssImg from "../../images/scss.png";
import jsImg from "../../images/js.png";
import gitImg from "../../images/git.png";
import reduxImg from "../../images/redux.png";
import ProjectsHeader from "./ProjectsHeader";
import chakraImg from "../../images/chakra.png";

const ProjectsGrid = () => {
  const id = useId();
  const recipeMasterUrls = [
    reactImg,
    typescriptImg,
    cssImg,
    chakraImg,
    reduxImg,
    firebaseImg,
    gitImg,
  ];
  const lionOfBrabantUrls = [jsImg, htmlImg, scssImg, gitImg];
  return (
    <React.Fragment>
      <ProjectsHeader />
      <div className="grid grid-rows-2 grid-cols-2 w-full p-8 gap-8 ">
        <ProjectItem
          key={id}
          isDarkBackground={false}
          techUrls={recipeMasterUrls}
          title="Recipemaster"
          imgUrl={recipeMaster}
        />
        <ProjectItem
          key={id}
          isDarkBackground={true}
          techUrls={lionOfBrabantUrls}
          title="Lion of Brabant"
          imgUrl={brabant}
        />
      </div>
    </React.Fragment>
  );
};

export default ProjectsGrid;
