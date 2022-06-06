import recipeMaster from "../../images/Projects/recipemaster.png";

const ProjectsGrid = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 h-screen w-full px-8">
      <div className="border-2 border-indigo-500">
        <img
          src={recipeMaster}
          className="object-fill h-full transition hover:blur-sm"
          alt="recipemaster"
        />
      </div>
      <div className="border-2 border-indigo-500">2</div>
      <div className="border-2 border-indigo-500">3</div>
      <div className="border-2 border-indigo-500">4</div>
    </div>
  );
};

export default ProjectsGrid;
