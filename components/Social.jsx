import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Bounce from 'react-reveal/Bounce';

const Social = () => {
  return (
    <>
      <Bounce left>
        <div className=" shadow-sm flex gap-1 rounded-full shadow-gray-600 py-2 px-4 cursor-pointer hover:scale-105 ease-in duration-300 ">
          <Link
            className="flex gap-1"
            href="https://www.linkedin.com/in/dnyandeo-waghunde/"
            target="blank"
          >
            <FaLinkedin size={20} className=" text-blue-600" />
            <span className=" font-semibold">Linkedin</span>
          </Link>
        </div>
      </Bounce>
      <Bounce right>
        <div className="shadow-sm rounded-full shadow-gray-600 py-2 px-4 cursor-pointer hover:scale-105 ease-in duration-300 ">
          <Link
            className="flex gap-1"
            href="https://github.com/Dnyandeo33"
            target="blank"
          >
            <FaGithub size={20} />
            <span className=" font-semibold">GitHub</span>
          </Link>
        </div>
      </Bounce>
    </>
  );
};

export default Social;
