import { SlideList } from "../../../shared/types";
import Slider from "../Slider";
import dockerImg from "../../../images/docker.png";

const UsedTechnologies = () => {
  const technologiesList = [
    { slideName: "Docker", slideImgUrl: dockerImg },
  ] as SlideList[];
  return (
    <Slider
      sliderTitle="Technologies I worked with. (Only for a while)"
      slideList={technologiesList}
    />
  );
};

export default UsedTechnologies;
