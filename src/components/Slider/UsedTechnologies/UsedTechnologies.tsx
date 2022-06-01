import { SlideList } from "../../../shared/types";
import Slider from "../Slider";
import pythonImg from "../../../images/python.png";
import djangoImg from "../../../images/django.jpg";
import dockerImg from "../../../images/docker.png";

const UsedTechnologies = () => {
  const technologiesList = [
    { slideName: "Python", slideImgUrl: pythonImg },
    { slideName: "Django", slideImgUrl: djangoImg },
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
