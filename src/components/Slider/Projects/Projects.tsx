import { SlideList } from "../../../shared/types";
import Slider from "../Slider";

const Projects = () => {
  const ProjectsList = [
    { slideName: "Recipemaster", slideImgUrl: "123" },
  ] as SlideList[];
  return <Slider sliderTitle="Projects" slideList={ProjectsList} />;
};

export default Projects;
