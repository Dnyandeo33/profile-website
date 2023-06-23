import Image from 'next/image.js';
import Bounce from 'react-reveal/Bounce';
import Jump from 'react-reveal/Jump';
import { data } from '../data/skillsData.js';

const skills = () => {
  return (
    <div id="skills" className="w-full md:h-screen mx-auto mt-20 sm:mt-80">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <Bounce top>
          <p className=" text-xl text-center text-[#5651e5]">Skills</p>
          <h2 className="pb-4 text-center text-zinc-500">What I Can Do</h2>
        </Bounce>
        <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((skill) => {
            const { id, imgUrl, title } = skill;

            return (
              <div
                key={id}
                className="py-4 px-6 mx-3 shadow-sm shadow-black rounded-xl hover:scale-105 ease-in duration-300 "
              >
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <Jump>
                    <div className=" m-auto">
                      <Image alt="/" src={imgUrl} width="64" height="64" />
                    </div>
                    <div className="flex items-center justify-center">
                      <h3>{title}</h3>
                    </div>
                  </Jump>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default skills;
