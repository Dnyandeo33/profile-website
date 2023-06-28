import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useReducer, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Fade from 'react-reveal/Fade';
import NavLink from './NavLink';
import Social from './Social';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0fe');
  const [linkColor, setLinkColor] = useState('#1f2937');

  const router = useReducer();

  useEffect(() => {
    if (router.asPath === '/1') {
      setNavBg('transparent');
      setLinkColor('#ecf0f3');
    } else {
      setNavBg('#ecf0f3');
      setLinkColor('#1f2937');
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <Fade top>
      <div
        style={{ backgroundColor: `${navBg}` }}
        className={
          shadow
            ? 'fixed w-full h-20 shadow-xl z-[100]'
            : 'fixed w-full h-20 z-[100]'
        }
      >
        <div className="flex container mx-auto justify-between items-center w-full h-full px-2 2xl:px-16">
          <Link href="/">
            <Image
              className=" rounded-full shadow-lg shadow-gray-400 p-1 "
              alt="dnyandeo waghunde"
              src="/assets/my_photo.png"
              width="50"
              height="50"
            />
          </Link>
          <div className="">
            <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
              <NavLink />
            </ul>
            <div onClick={handleNav} className="md:hidden cursor-pointer">
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>
        <div
          className={
            nav
              ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70'
              : ''
          }
        >
          <div
            className={
              nav
                ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <Image
                  className=" rounded-full shadow-lg shadow-gray-400 p-1 "
                  alt="dnyandeo_waghunde"
                  src="/../public/assets/my_photo.png"
                  width="50"
                  height="50"
                />
                <div
                  onClick={handleNav}
                  className=" rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className=" border-b border-gray-300 my-4">
                <p className="w-[85%] md:w-[90%] py-4">
                  Let's build something legendry together
                </p>
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className=" uppercase">
                <Link href="/">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 tracking-widest text-sm"
                  >
                    Home
                  </li>
                </Link>
                <Link href="/#about">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 tracking-widest text-sm"
                  >
                    About
                  </li>
                </Link>
                <Link href="/#skills">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 tracking-widest text-sm"
                  >
                    Skills
                  </li>
                </Link>
                <Link href="/#project">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 tracking-widest text-sm"
                  >
                    Project
                  </li>
                </Link>
                <Link href="/#contact">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 tracking-widest text-sm"
                  >
                    Contact
                  </li>
                </Link>
              </ul>
              <div className="pt-40">
                <p className=" uppercase tracking-widest text-[#5651e5]">
                  Let's Connect
                </p>
                <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                  <Social />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Navbar;
