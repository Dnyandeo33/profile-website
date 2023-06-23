import Link from 'next/link';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Bounce from 'react-reveal/Bounce';
import Flash from 'react-reveal/Flash';
import Swing from 'react-reveal/Swing';
import Social from './Social';

const Contact = () => {
  return (
    <div id="contact" className=" w-ful lg:h-screen">
      <div className=" container max-w-[1240] m-auto px-2 py-28 w-full">
        <Bounce top>
          <h2 className=" text-zinc-500 py-2 font-semibold text-center">
            Get in Touch
          </h2>
        </Bounce>
        <div className="container">
          <div className=" col-span-3 lg:col-span-2 shadow-sm shadow-black rounded-xl p-4">
            <div className="lg:p-4 h-full flex flex-col items-center justify-center">
              <p className=" text-lg text-gray-400 font-semibold">
                Front-End Developer
              </p>
              <Swing>
                <h2 className=" text-gray-600">Dnyandeo Waghunde</h2>
              </Swing>
              <Flash>
                <p className="">dnyanu.waghunde@gmail.com</p>
              </Flash>
              <p className="py-2 text-gray-400 text-center">
                I am available for freelance or full-time position.
              </p>
              <div>
                <p className=" font-semibold text-gray-600 text-center pt-2">
                  Connect with me
                </p>
                <div className=" flex items-center gap-3 py-4">
                  <Social />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center pt-20">
          <Link href="/">
            <div className=" rounded-full shadow-sm shadow-black p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
