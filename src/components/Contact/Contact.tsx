import { FaLinkedin, FaGithub, FaGoogle } from 'react-icons/fa';
const iconColor = 'yellow-700';
const darkIconColor = 'white';
const Contact = () => {
  return (
    <div>
      <h1 className="text-yellow-700 dark:text-white text-center text-4xl font-[codeFont]">
        Contact
      </h1>
      <div className="grid place-items-center border-t-2 border-yellow-700 dark:border-white">
        <div className="grid place-items-center ">
          <div className="flex gap-8 py-16 ">
            <a href="https://www.linkedin.com/in/maciej-wojtkowiak-4a2aa223a/">
              <FaLinkedin
                className={`h-16 w-16  text-${iconColor} dark:text-${darkIconColor}`}
              />
            </a>
            <a href="https://github.com/maciejwojtkowiak">
              <FaGithub
                className={`h-16 w-16 text-${iconColor} dark:text-${darkIconColor}`}
              />
            </a>
            <a href="mailto:mac.woj1000@gmail.com">
              <FaGoogle
                className={`h-16 w-16  text-${iconColor} dark:text-${darkIconColor}`}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
