import Link from 'next/link';
import React from 'react';

const NavLink = () => {
  return (
    <>
      <Link href="/">
        <li className=" ml-10 text-md hover:text-blue-600">Home</li>
      </Link>
      <Link href="/#about">
        <li className=" ml-10 text-md hover:text-blue-500">About</li>
      </Link>
      <Link href="/#skills">
        <li className=" ml-10 text-md hover:text-blue-500">Skills</li>
      </Link>
      <Link href="/#project">
        <li className=" ml-10 text-md hover:text-blue-500">Project</li>
      </Link>
      <Link href="/#contact">
        <li className=" ml-10 text-md hover:text-blue-500">Get in Touch</li>
      </Link>
    </>
  );
};

export default NavLink;
