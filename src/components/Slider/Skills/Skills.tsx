import { SlideList } from "../../../shared/types";
import Slider from "../Slider";
import htmlImg from "../../../images/html5.png";
import jsImg from "../../../images/js.png";
import cssImg from "../../../images/css.png";
import tsImg from "../../../images/typescript.png";
import reactImg from "../../../images/react.png";
import nextImg from "../../../images/nextjs.png";
import reduxImg from "../../../images/redux.png";
import gitImg from "../../../images/git.png";
import tailwindImg from "../../../images/tailwind.png";
import scssImg from "../../../images/sass.png";

const Skills = () => {
  const skillObjectArray = [
    { slideName: "Javascript", slideImgUrl: jsImg },
    { slideName: "Typescript", slideImgUrl: tsImg },
    { slideName: "React", slideImgUrl: reactImg },
    { slideName: "NextJS", slideImgUrl: nextImg },
    { slideName: "HTML5", slideImgUrl: htmlImg },
    { slideName: "CSS3", slideImgUrl: cssImg },
    { slideName: "SCSS", slideImgUrl: scssImg },
    { slideName: "GIT", slideImgUrl: gitImg },
    { slideName: "Redux", slideImgUrl: reduxImg },
    { slideName: "Tailwind", slideImgUrl: tailwindImg },
  ] as SlideList[];
  return (
    <Slider sliderTitle="Skills" slideList={skillObjectArray} isSkills={true} />
  );
};

export default Skills;
