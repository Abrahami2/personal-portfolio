import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import SystemService from "./Experience/SystemService";
import AWSComponent from "./Experience/AWSComponent";

const Experience = () => {
  const [workAws, setWorkAws] = useState(true);
  const [floridaAtlantic, setFloridaAtlantic] = useState(false);

  const handleAppTeam = () => {
    setFloridaAtlantic(true);
    setWorkAws(false);
  };

  const handleMicrosoft = () => {
    setFloridaAtlantic(false);
    setWorkAws(true);
  };

  return (
    <section
      id="experience"
      className="max-w-[868px] mx-auto py-10 lgl:py-24 px-4"
    >
      <h2 className="flex items-center text-2xl font-semibold font-titleFont">
        <span className="mr-2 text-base md:text-lg text-textBlue">03. </span>{" "}
        <span>
          My{" "}
          <span>
            <TypeAnimation
              sequence={["Experience", 2000, "Activities", 2000]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "text-6xl", display: "inline-block" }}
            />
          </span>
        </span>
        <span className="hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-gray-700 ml-6"></span>
      </h2>
      <div className="flex flex-col w-full gap-16 mt-10 md:flex-row">
        <ul className="flex flex-col md:w-32">
          <li
            onClick={handleMicrosoft}
            className={`${
              workAws
                ? "border-l-textBlue text-textBlue"
                : "border-l-textDark text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            AWS
          </li>
          <li
            onClick={handleAppTeam}
            className={`${
              floridaAtlantic
                ? "border-l-textBlue text-textBlue"
                : "border-l-textDark text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Florida Atlantic University
          </li>
        </ul>
        {workAws && <AWSComponent />}
        {floridaAtlantic && <SystemService />}
      </div>
    </section>
  );
};

export default Experience;
