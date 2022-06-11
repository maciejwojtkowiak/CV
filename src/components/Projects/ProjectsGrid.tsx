import recipeMasterImg from "../../images/Projects/recipemaster.png";
import brabantImg from "../../images/Projects/brabant.png";
import italianHouseImg from "../../images/Projects/italian.png";
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
  const italianHouseUrls = [reactImg, jsImg, cssImg, reduxImg, gitImg];
  return (
    <React.Fragment>
      <ProjectsHeader />
      <div className="grid grid-rows-2 grid-cols-2 w-full p-8 gap-8 ">
        <ProjectItem
          key={id}
          isDarkBackground={false}
          techUrls={recipeMasterUrls}
          title="Recipemaster"
          imgUrl={recipeMasterImg}
        />
        <ProjectItem
          key={id}
          isDarkBackground={true}
          techUrls={lionOfBrabantUrls}
          title="Lion of Brabant"
          imgUrl={brabantImg}
        />

        <ProjectItem
          key={id}
          isDarkBackground={true}
          techUrls={italianHouseUrls}
          title="Italian House"
          imgUrl={italianHouseImg}
        />
      </div>
    </React.Fragment>
  );
};

export default ProjectsGrid;
