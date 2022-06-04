import { FaMoon } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="h-20 bg-black">
      <ul className="flex h-full place-content-between items-center text-yellow-700 px-12">
        <li className="text-4xl font-[codeFont]">{"<M>"}</li>
        <li className="text-2xl"></li>
        <li>
          <div className=" grid place-items-center w-8 h-8 rounded-full bg-white">
            {" "}
            <FaMoon />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
