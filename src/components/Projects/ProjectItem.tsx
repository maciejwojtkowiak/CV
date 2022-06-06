interface funcProps {
  imgUrl: string;
}

const ProjectItem: React.FC<funcProps> = (props) => {
  return (
    <div>
      <div className="border-4 border-indigo-500">
        <img
          src={props.imgUrl}
          className="object-fill h-full w-full transition hover:blur-sm"
          alt="recipemaster"
        />
      </div>
    </div>
  );
};

export default ProjectItem;
