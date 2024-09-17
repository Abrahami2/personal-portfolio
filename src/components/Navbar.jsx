import { motion } from "framer-motion";
import { scrollToSection } from "./scrollUtils";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin } from "react-icons/sl";
import { Link } from "react-router-dom";
import resume from "../assets/Abraham_Hamitou.pdf";

const Navbar = () => {
  const [home, setHome] = useState(false);
  const [about, setAbout] = useState(false);
  const [experience, setExperience] = useState(false);
  const [projects, setProjects] = useState(false);
  const [contact, setContact] = useState(false);

  const handleHome = () => {
    setHome(true);
    setAbout(false);
    setExperience(false);
    setProjects(false);
    setContact(false);
  };

  const handleAbout = () => {
    setHome(false);
    setAbout(true);
    setExperience(false);
    setProjects(false);
    setContact(false);
  };

  const handleExperience = () => {
    setHome(false);
    setAbout(false);
    setExperience(true);
    setProjects(false);
    setContact(false);
  };

  const handleProjects = () => {
    setHome(false);
    setAbout(false);
    setExperience(false);
    setProjects(true);
    setContact(false);
  };

  const handleContact = () => {
    setHome(false);
    setAbout(false);
    setExperience(false);
    setProjects(false);
    setContact(true);
  };

  const handleClickHome = () => {
    scrollToSection("home");
    handleHome();
    setShowMenu(false);
  };
  const handleClickAbout = () => {
    scrollToSection("about");
    handleAbout();
    setShowMenu(false);
  };
  const handleClickExperience = () => {
    scrollToSection("experience");
    handleExperience();
    setShowMenu(false);
  };
  const handleClickProjects = () => {
    scrollToSection("projects");
    handleProjects();
    setShowMenu(false);
  };
  const handleClickContact = () => {
    scrollToSection("contact");
    handleContact();
    setShowMenu(false);
  };

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full h-[10vh]  lg:h-[10vh] sticky top-0 z-50 bg-bodyColor px-4 shadow-xl">
      <div className="flex items-center justify-between h-full mx-auto max-w py- font-titleFont">
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          <Link
            target="/"
            className="text-5xl font-bold select-none text-textBlue logo-text"
          >
            A<span className="text-white">braham</span>
          </Link>
        </motion.div>

        <div className="items-center hidden mdl:inline-flex gap-7">
          <ul className="flex text-[13px] gap-7">
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.2 }}
            >
              <a
                to="#home"
                onClick={handleClickHome}
                className={`${
                  home
                    ? "flex items-center gap-1 font-medium text-textBlue hover:text-textBlue cursor-pointer duration-300 nav-link"
                    : "flex items-center gap-1 font-medium text-textDark hover:text-textBlue cursor-pointer duration-300 nav-link"
                }`}
              >
                {" "}
                Home
              </a>{" "}
            </motion.li>

            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.3 }}
            >
              <a
                to="#about"
                onClick={handleClickAbout}
                className={`${
                  about
                    ? "flex items-center gap-1 font-medium text-textBlue hover:text-textBlue cursor-pointer duration-300 nav-link"
                    : "flex items-center gap-1 font-medium text-textDark hover:text-textBlue cursor-pointer duration-300 nav-link"
                }`}
              >
                {" "}
                <span className="text-textBlue">01.</span>About{" "}
              </a>{" "}
            </motion.li>

            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.4 }}
            >
              <a
                to="#experience"
                onClick={handleClickExperience}
                className={`${
                  experience
                    ? "flex items-center gap-1 font-medium text-textBlue hover:text-textBlue cursor-pointer duration-300 nav-link"
                    : "flex items-center gap-1 font-medium text-textDark hover:text-textBlue cursor-pointer duration-300 nav-link"
                }`}
              >
                {" "}
                <span className="text-textBlue">02.</span>Experience{" "}
              </a>{" "}
            </motion.li>

            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.5 }}
            >
              <a
                to="#projects"
                onClick={handleClickProjects}
                className={`${
                  projects
                    ? "flex items-center gap-1 font-medium text-textBlue hover:text-textBlue cursor-pointer duration-300 nav-link"
                    : "flex items-center gap-1 font-medium text-textDark hover:text-textBlue cursor-pointer duration-300 nav-link"
                }`}
              >
                {" "}
                <span className="text-textBlue">03.</span>Projects{" "}
              </a>{" "}
            </motion.li>

            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.2 }}
            >
              <a
                to="#contact"
                onClick={handleClickContact}
                className={`${
                  contact
                    ? "flex items-center gap-1 font-medium text-textBlue hover:text-textBlue cursor-pointer duration-300 nav-link"
                    : "flex items-center gap-1 font-medium text-textDark hover:text-textBlue cursor-pointer duration-300 nav-link"
                }`}
              >
                {" "}
                <span className="text-textBlue">04.</span> Contact{" "}
              </a>{" "}
            </motion.li>
          </ul>

          <Link to={resume} target="_blank">
            <motion.button
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.2 }}
              className="px-4 py-2 rounded-md text-textBlue text-[13px] border border-textBlue hover:bg-textDark duration-300"
            >
              Resume
            </motion.button>
          </Link>
        </div>
        <div
          onClick={() => setShowMenu(true)}
          className="flex flex-col items-center justify-between w-6 h-5 overflow-hidden text-4xl cursor-pointer mdl:hidden text-textBlue group"
        >
          <span className="w-full h-[2px] bg-textBlue inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textBlue inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textBlue inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
        {showMenu && (
          <div className="absolute top-0 right-0 flex flex-col items-end w-full h-screen bg-black bg-opacity-50 mdl:hidden">
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative"
            >
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className="absolute text-3xl cursor-pointer text-textBlue hover:text-red-500 top-4 right-4"
              />
              <div className="flex flex-col items-center gap-7">
                <ul className="flex flex-col text-base gap-7">
                  <motion.li
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                  >
                    <a
                      to="#home"
                      onClick={handleClickHome}
                      className={`${
                        home
                          ? "flex items-center gap-1 font-medium text-textBlue hover:text-textBlue cursor-pointer duration-300 nav-link"
                          : "flex items-center gap-1 font-medium text-textDark hover:text-textBlue cursor-pointer duration-300 nav-link"
                      }`}
                    >
                      {" "}
                      Home
                    </a>{" "}
                  </motion.li>

                  <motion.li
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}
                  >
                    <a
                      to="#about"
                      onClick={handleClickAbout}
                      className={`${
                        about
                          ? "flex items-center gap-1 font-medium text-textBlue hover:text-textBlue cursor-pointer duration-300 nav-link"
                          : "flex items-center gap-1 font-medium text-textDark hover:text-textBlue cursor-pointer duration-300 nav-link"
                      }`}
                    >
                      {" "}
                      <span className="text-textBlue">01.</span>About{" "}
                    </a>{" "}
                  </motion.li>

                  <motion.li
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.3, ease: "easeIn" }}
                  >
                    <a
                      to="#experience"
                      onClick={handleClickExperience}
                      className={`${
                        experience
                          ? "flex items-center gap-1 font-medium text-textBlue hover:text-textBlue cursor-pointer duration-300 nav-link"
                          : "flex items-center gap-1 font-medium text-textDark hover:text-textBlue cursor-pointer duration-300 nav-link"
                      }`}
                    >
                      {" "}
                      <span className="text-textBlue">02.</span>Experience{" "}
                    </a>{" "}
                  </motion.li>

                  <motion.li
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.4, ease: "easeIn" }}
                  >
                    <a
                      to="#projects"
                      onClick={handleClickProjects}
                      className={`${
                        projects
                          ? "flex items-center gap-1 font-medium text-textBlue hover:text-textBlue cursor-pointer duration-300 nav-link"
                          : "flex items-center gap-1 font-medium text-textDark hover:text-textBlue cursor-pointer duration-300 nav-link"
                      }`}
                    >
                      {" "}
                      <span className="text-textBlue">03.</span>Projects{" "}
                    </a>{" "}
                  </motion.li>

                  <motion.li
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.5, ease: "easeIn" }}
                  >
                    <a
                      to="#contact"
                      onClick={handleClickContact}
                      className={`${
                        contact
                          ? "flex items-center gap-1 font-medium text-textBlue hover:text-textBlue cursor-pointer duration-300 nav-link"
                          : "flex items-center gap-1 font-medium text-textDark hover:text-textBlue cursor-pointer duration-300 nav-link"
                      }`}
                    >
                      {" "}
                      <span className="text-textBlue">04.</span> Contact{" "}
                    </a>{" "}
                  </motion.li>
                </ul>
                <Link
                  onClick={() => setShowMenu(false)}
                  href={resume}
                  target="_blank"
                >
                  <motion.button
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.2 }}
                    className="px-4 py-2 rounded-md text-textBlue text-[13px] border border-textBlue hover:bg-textDark duration-300"
                  >
                    Resume
                  </motion.button>
                </Link>
                <motion.div className="flex flex-row gap-6">
                  <motion.a
                    onClick={() => setShowMenu(false)}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.2 }}
                    href="#"
                    target="_blank"
                    className="flex flex-col items-center gap-4"
                  >
                    <span className="inline-flex items-center justify-center w-10 h-10 text-xl transition-all duration-300 rounded-full cursor-pointer bg-textBlue hover:bg-textBlue hover:-translate-y-2">
                      <TbBrandGithub />
                    </span>
                  </motion.a>
                  <motion.a
                    onClick={() => setShowMenu(false)}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.2 }}
                    href="#"
                    target="_blank"
                    className="flex flex-col items-center gap-4"
                  >
                    <span className="inline-flex items-center justify-center w-10 h-10 text-xl transition-all duration-300 rounded-full cursor-pointer bg-textBlue hover:bg-textBlue hover:-translate-y-2">
                      <SlSocialLinkedin />
                    </span>
                  </motion.a>
                </motion.div>
                <motion.a
                  onClick={() => setShowMenu(false)}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.2 }}
                  className="mt-4 text-sm tracking-widest text-center w-72 text-textBlue"
                  href="mailto:example@example.com"
                >
                  <p>example@example.com</p>
                </motion.a>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
