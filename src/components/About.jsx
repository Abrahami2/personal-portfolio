import SectionTitle from "./SectionTitle";
import { FaJava, FaPython } from "react-icons/fa";
import { SiAxios, SiExpress, SiFirebase, SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { DiCss3, DiHtml5 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { DiSwift } from "react-icons/di";
import { FaUnity } from "react-icons/fa";

import profile from "../assets/images/profile.png";


  const About = () => {
    return (
      <section
        id="about"
        className="max-w-[1024px] mx-auto py-10 lgl:py-32 flex flex-col gap-8"
      >
        {/* Development Notice */}
        <div className="bg-yellow-200 text-center py-3 rounded-md text-textDark font-semibold">
          This site is currently under development. Stay tuned for updates!
        </div>
  
        {/* About Me Section */}
        <SectionTitle title="About Me" titleNumber="01" />
        <div className="flex flex-col gap-16 lg:flex-row">
          <div className="flex flex-col w-full gap-4 text-base font-medium lgl:w-2/3 text-textDark">
            <p>
              Hi 👋 My name is Abraham Hamitou from Boca Raton, Florida, United
              States and I am studying
              {"'"}Master of Science in Information Technology Management student
              at the
              <span className="text-textBlue">
                {" "}
                Florida Atlantic University Florida.
              </span>{" "}
              My interest in programming started back in middle school when I
              decided I wanted to try building my own video games using C# and
              Unity.
            </p>
  
            <p> Here are a few technologies I have worked with in the past:</p>
            <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-3 gap-2 mt-6">
              <li className="flex items-center gap-2">
                {" "}
                <span className="text-textBlue">
                  {" "}
                  <FaJava />{" "}
                </span>{" "}
                Java{" "}
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <span className="text-textBlue">
                  {" "}
                  <FaPython />{" "}
                </span>{" "}
                Python{" "}
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <span className="text-textBlue">
                  {" "}
                  <SiJavascript />{" "}
                </span>{" "}
                JavaScript{" "}
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <span className="text-textBlue">
                  {" "}
                  <DiCss3 />{" "}
                </span>{" "}
                CSS{" "}
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <span className="text-textBlue">
                  {" "}
                  <DiHtml5 />{" "}
                </span>{" "}
                HTML{" "}
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <span className="text-textBlue">
                  {" "}
                  <SiTailwindcss />{" "}
                </span>{" "}
                Tailwind CSS{" "}
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <span className="text-textBlue">
                  {" "}
                  <FaReact />{" "}
                </span>{" "}
                ReactJS{" "}
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <span className="text-textBlue">
                  {" "}
                  <DiSwift />{" "}
                </span>{" "}
                Swift{" "}
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <span className="text-textBlue">
                  {" "}
                  <FaUnity />{" "}
                </span>{" "}
                Unity{" "}
              </li>
  
              <li className="flex items-center gap-2">
                {" "}
                <span className="text-textBlue">
                  {" "}
                  <SiFirebase />{" "}
                </span>{" "}
                Firebase{" "}
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <span className="text-textBlue">
                  {" "}
                  <SiExpress />{" "}
                </span>{" "}
                Express{" "}
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <span className="text-textBlue">
                  {" "}
                  <SiAxios />{" "}
                </span>{" "}
                Axios{" "}
              </li>
            </ul>
          </div>
          <div className="relative w-full lgl:w-1/3 h-80 group">
            <div className="w-full rounded-lg h-80 -left-6 -top-6">
              <div className="relative z-20 flex w-full h-full pl-6 lgl:pl-0 -left-6">
                <img
                  className="object-cover h-full rounded-lg"
                  src={profile}
                  alt="profile"
                />
                <div className="absolute top-0 left-0 hidden w-full duration-300 rounded-md lgl:inline-block h-80 bg-textBlue/10 group-hover:bg-transparent"></div>
              </div>
              <div className="hidden w-full transition-transform duration-300 border-2 rounded-md lgl:inline-flex h-80 -mt-72 border-textBlue group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  