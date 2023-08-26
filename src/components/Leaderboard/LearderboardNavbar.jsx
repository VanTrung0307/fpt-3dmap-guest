/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import { menu, close } from "../../assets";
import { AuthContext } from "../../authentication/AuthContext";
import { styles } from "../../styles";
import { navLinks, logoNavbar } from "../../constants";

const LearderboardNavbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const [open, setOpen] = useState(false);

  const handleDropdownToggle = () => {
    setOpen((prevState) => !prevState);
  };

  const { loggedIn, logout, nickname } = useContext(AuthContext);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        isScrolled ? `bg-primary` : `bg-dark`
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7x1 ms-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logoNavbar.icon}
            alt="logo"
            className="w-9 h-9 object-contain"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            FPTU HCM&nbsp; <span className="sm:block hidden">Adventures</span>
          </p>
        </Link>
        {/* <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <>
              <li
                key={link.id}
                className={`${
                  active == link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            </>
          ))}
          <Link to={"/leaderboard"}>
            <li
              className={`${
                active ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              Bảng xếp hạng
            </li>
          </Link>
        </ul> */}

        <div className="hidden sm:inline-block">
          {loggedIn ? (
            <div className="h-8 flex justify-center items-center">
              <div
                className="w-[105px] shadow flex justify-center items-center"
                onClick={handleDropdownToggle}
              >
                <div className={`relative border-b-4 border-transparent py-3`}>
                  <div
                    className={`flex justify-center items-center space-x-3 cursor-pointer ${
                      open
                        ? "border-indigo-700 transform transition duration-300"
                        : ""
                    }`}
                    style={{
                      transition: "transform opacity-100 scale-100",
                    }}
                  >
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 dark:border-white border-gray-900">
                      <img
                        src="https://www.linux.org/data/avatars/o/32/32035.jpg?1565435149"
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="font-semibold dark:text-white text-gray-900 text-lg">
                      <div className="cursor-pointer">{nickname}</div>
                    </div>
                  </div>
                  {open && (
                    <div
                      className="absolute w-40 px-5 py-3 dark:bg-gray-800 bg-white rounded-lg shadow border dark:border-transparent mt-5"
                      style={{
                        transition: "transform opacity-100 scale-100",
                        transform: open ? "scale(1)" : "scale(0.95)",
                        opacity: open ? "1" : "0",
                      }}
                    >
                      <ul className="space-y-3 dark:text-white">
                        <li className="font-medium">
                          <a
                            href="#"
                            className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-orange-500"
                          >
                            <div className="mr-3">
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                ></path>
                              </svg>
                            </div>
                            Account
                          </a>
                        </li>
                        <li className="font-medium">
                          <a
                            href="#"
                            className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-orange-500"
                          >
                            <div className="mr-3">
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                ></path>
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                ></path>
                              </svg>
                            </div>
                            Setting
                          </a>
                        </li>
                        <hr className="dark:border-gray-700" />
                        <li className="font-medium">
                          <a
                            onClick={logout}
                            className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-red-600 cursor-pointer"
                          >
                            <div className="mr-3 text-red-600">
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                ></path>
                              </svg>
                            </div>
                            Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <Link to={"/login"}>
              <div className="button mt-[-10px] w-[100px] h-8 bg-orange-500 cursor-pointer select-none active:translate-y-2 active:[box-shadow:0_0px_0_0_#FC5404,0_0px_0_0_#443737] active:border-b-[0px] transition-all duration-150 [box-shadow:0_10px_0_0_#FC5404,0_15px_0_0_#443737] rounded-full border-[1px] border-orange-400">
                <span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg">
                  Login
                </span>
              </div>
            </Link>
          )}
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? `hidden` : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active == link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li
                className={`${
                  active ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              >
                <a href="/leaderboard">Leaderboard</a>
              </li>
              <div>
                {loggedIn ? (
                  <div className="relative inline-block">
                    <button className="w-[100px] relative inline-block text-white px-1 py-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full text-[20px] no-underline shadow-md border-t border-gray-200 overflow-hidden">
                      {nickname} <span className="ml-2">&#9662;</span>
                    </button>
                    <div className="absolute right-0 mt-2 w-[150px] bg-white border rounded-lg shadow-lg">
                      <ul className="py-2">
                        <Link
                          to="/profile"
                          className="block px-4 py-2 text-black"
                        >
                          Profile
                        </Link>
                        <button
                          onClick={logout}
                          className="block w-full text-left px-4 py-2 text-black hover:bg-gray-200"
                        >
                          Logout
                        </button>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link to={"/login"}>
                    <div className="button mt-[-10px] w-[100px] h-8 bg-orange-500 cursor-pointer select-none active:translate-y-2 active:[box-shadow:0_0px_0_0_#FC5404,0_0px_0_0_#443737] active:border-b-[0px] transition-all duration-150 [box-shadow:0_10px_0_0_#FC5404,0_15px_0_0_#443737] rounded-full border-[1px] border-orange-400">
                      <span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg">
                        Login
                      </span>
                    </div>
                  </Link>
                )}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LearderboardNavbar;
