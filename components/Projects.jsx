import Image from 'next/image';
import Link from 'next/link';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';
import { projectData } from '../data/projectData';

const Project = () => {
  return (
    <div id="project" className=" w-full">
      <div className=" max-w-[1240px] mx-auto px-2 py-28">
        <Bounce top>
          <p className="text-xl text-center text-[#5651e5]">Project</p>
          <h2 className="text-center text-zinc-500">What I've Built</h2>
        </Bounce>
        <div className=" md:grid grid-cols-2 gap-8">
          {projectData.map((project) => {
            const { id, imgUrl, projectName, long } = project;
            return (
              <Slide bottom>
                <div
                  key={id}
                  className=" relative flex mt-2 items-center justify-center h-auto w-full shadow-sm shadow-black rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]"
                >
                  <Image
                    className=" rounded-xl group-hover:opacity-10 "
                    src={imgUrl}
                    alt="KnowYourWay"
                    width={700}
                    height={500}
                  />
                  <div className=" hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <h3 className=" text-2xl text-white tracking-widest text-center">
                      {projectName}
                    </h3>
                    <p className="pb-4 pt-2 text-white text-center">{long}</p>
                    <Link href={`${id}`}>
                      <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                        More Info
                      </p>
                    </Link>
                  </div>
                </div>
              </Slide>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
