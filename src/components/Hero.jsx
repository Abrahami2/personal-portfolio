import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { scrollToSection } from "./scrollUtils";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="max-w-[1140px] mx-auto px-4 py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.3 }}
        className="tracking-wide text-md mdl:text-lg font-titleFont text-textBlue"
      >
        Hi 👋 My name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="flex flex-col text-4xl font-semibold mdl:text-6xl lgl:text-7xl font-titleFont"
      >
        Abraham Hamitou.
        <span className="mt-2 text-textBlue lgl:mt-4">
          {" "}
          I{"'"}m a{" "}
          <span>
            <TypeAnimation
              sequence={[
                "Software Developer.",
                2000,
                "System Specialist.",
                2000,
                "Web Developer.",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "text-7xl", display: "" }}
            />
          </span>
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        I am an aspiring Software Engineer with a strong background in visual
        design and experience in programming field. My career interests include
        full-stack development, Back-end development, and artificial intelligence.{" "}
        <br />
        <a to="about" onClick={() => scrollToSection("about")}>
          <span className="relative inline-flex overflow-x-hidden cursor-pointer text-textBlue h-7 group">
            Learn More
            <span className="absolute w-full h-[1px] bg-textBlue left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
        </a>
      </motion.p>
      <Link
        to="https://github.com/Abrahami2"
        target="_blank"
        className="text-sm w-52 h-14 font-titleFont"
      >
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-sm tracking-wide duration-300 border rounded-md w-52 h-14 font-titleFont border-textBlue text-textBlue hover:bg-textDark"
        >
          Check my Github
        </motion.button>
      </Link>
    </section>
  );
};

export default Hero;
