import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import Button from "./Button";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      {/* Logo */}
      <img src={logo} alt="HooBank" className="w-[124px] h-[32px]" />

      {/* Navbar (Desktop) */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 text-white hover:text-secondary transition ease-in-out duration-100`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}

        <a
          href="https://github.com/Technical-Shubham-tech/bank-modern-app"
          target="_blank"
          rel="noreferrer"
        >
          <Button text="Source Code" styles="py-3 px-3 text-[16px]" />
        </a>
      </ul>

      {/* Navbar (Mobile) */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt={toggle ? "Close Menu" : "Open Menu"}
          title={toggle ? "Close Menu" : "Open Menu"}
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prevToggle) => !prevToggle)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, i) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] mb-4 text-white hover:text-secondary`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <li
              className={`font-poppins font-normal cursor-pointer text-[16px] text-secondary mb-0`}
            >
              <a
                href="https://github.com/sanidhyy/bank-modern-app"
                target="_blank"
                rel="noreferrer"
              >
                Source Code
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
