import Image from 'next/image';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import HeadShake from 'react-reveal/HeadShake';

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center mt-20">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className=" col-span-2">
          <Bounce top>
            <p className="text-center text-xl text-[#5651e5]">About</p>
            <h2 className="text-center text-zinc-500">Who I Am</h2>
          </Bounce>
          <div className="shadow-sm shadow-black mt-4 px-6 rounded-xl">
            <Fade bottom>
              <p className="py-5 text-center text-gray-500">
                I have spent the last decade of my professional career working
                in the field of media as a journalist. Throughout my years in
                the industry, I developed a keen interest in technology and had
                a natural inclination towards working with computers. In 2020, I
                embarked on a new journey of self-discovery by starting to learn
                HTML & CSS, intending to create my own blogging website. Little
                did I know that this would turn into a profound love for
                programming.
              </p>
              <p className="py-2 text-center text-gray-500">
                Entranced by the complexity of the field, I were quick to
                immerse myself in it further and started learning more about
                programming. To take things to the next level, I enrolled in a
                web development program offered by Hack Your Future in Belgium.
                Today, I spend my time building projects with cutting-edge
                technologies such as React Js and Next Js, continually pushing
                the boundaries of what I can achieve with their newfound skills.
              </p>
              <p className="py-2 text-gray-500">
                What sets this individual apart is my ability to embrace
                challenges and my tenacity in learning new skills. Through my
                journey, I have demonstrated a remarkable willingness to dive
                deep into the complexities of programming and emerge as a
                proficient web developer. I possess an exceptional capacity for
                problem-solving, which is reflected in my ability to build
                projects from scratch and deliver results.
              </p>
            </Fade>
          </div>
        </div>
        <HeadShake>
          <div className="w-full h-auto m-auto shadow shadow-gray-400 rounded-xl flex item-center justify-center p-4 hover:scale-105 ease-in duration-300 ">
            <Image
              className="rounded-xl"
              alt="laptop"
              src="/assets/laptop.jpg"
              width="400"
              height="200"
            />
          </div>
        </HeadShake>
      </div>
    </div>
  );
};

export default About;
