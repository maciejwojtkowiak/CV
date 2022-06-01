import { SlideList } from "../../../shared/types";
import Slider from "../Slider";
import pythonImg from "../../../images/python.png";
import djangoImg from "../../../images/django.png";
import dockerImg from "../../../images/docker.png";
import travisImg from "../../../images/travis.png";
import firebaseImg from "../../../images/firebase.png";
import mongoImg from "../../../images/mongo.png";

const UsedTechnologies = () => {
  const technologiesList = [
    { slideName: "Python", slideImgUrl: pythonImg },
    { slideName: "Django", slideImgUrl: djangoImg },
    { slideName: "Docker", slideImgUrl: dockerImg },
    { slideName: "Travis", slideImgUrl: travisImg },
    { slideName: "Firebase", slideImgUrl: firebaseImg },
    { slideName: "MongoDB", slideImgUrl: mongoImg },
  ] as SlideList[];
  return (
    <Slider
      sliderTitle="Technologies I worked with. (Only for a while)"
      slideList={technologiesList}
    />
  );
};

export default UsedTechnologies;
