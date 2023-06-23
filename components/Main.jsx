import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Social from './Social';

const Main = () => {
  return (
    <div id="home" className="w-full  h-screen text-center">
      <div className=" max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className=" uppercase text-sm tracking-widest text-gray-800 py-4 ">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <Bounce top>
            <h1 className=" py-4 text-gray-600">
              Hi, I'm <span className=" text-[#5651e5]">Dnyandeo</span>
            </h1>
            <h1 className=" text-gray-600">A Junior Front-End Developer</h1>
          </Bounce>
          <Fade bottom>
            <p className="py-4 text-gray-500 max-w-[70%] mx-auto">
              A journalist by profession but a technology lover by passion. With
              a passion for personal growth and software development, I attended
              a front-end web development program to learn new languages. Now
              ready to apply my passion for coding to a talented engineering
              team to develop quality solutions.
            </p>
          </Fade>
          <div className="flex items-center gap-10 max-w-[330px] m-auto py-4">
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
