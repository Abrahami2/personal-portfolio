import SectionTitle from "./SectionTitle";
import profile from "../assets/images/profile.png";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-[1024px] mx-auto py-10 lgl:py-32 flex flex-col gap-8 px-4"
    >
      {/* Development Notice */}
      <div className="py-3 font-semibold text-center bg-yellow-200 rounded-md text-textDark">
        This site is currently under development. Stay tuned for updates!
      </div>

      {/* About Me Section */}
      <SectionTitle title="About Me" titleNumber="01" />
      <div className="flex flex-col items-center gap-16 lg:flex-row">
        <div className="flex flex-col w-full gap-4 text-base font-medium lgl:w-2/3 text-textDark">
          <p>
            Hi 👋 My name is Abraham Hamitou, and I{"'"}m from Boca Raton,
            Florida, USA. I am currently pursuing a Master of Science in
            Information Technology Management, primarily focused on Computer
            Science, at{" "}
            <a
              href="https://www.fau.edu/engineering/eecs/graduate/ms/it-management/ait-track/"
              className="text-textBlue"
              target="_blank"
              rel="noopener noreferrer"
            >
              Florida Atlantic University
            </a>
            . My journey into programming began in middle school when I explored
            building simple projects, which fueled my curiosity and interest in
            technology and software development.
          </p>

          {/* <p> Here are a few technologies I have worked with in the past:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-3 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textBlue">
                <FaJava />
              </span>
              Java
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textBlue">
                <FaPython />
              </span>
              Python
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textBlue">
                <SiJavascript />
              </span>
              JavaScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textBlue">
                <DiCss3 />
              </span>
              CSS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textBlue">
                <DiHtml5 />
              </span>
              HTML
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textBlue">
                <SiTailwindcss />
              </span>
              Tailwind CSS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textBlue">
                <FaReact />
              </span>
              ReactJS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textBlue">
                <DiSwift />
              </span>
              Swift
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textBlue">
                <SiFirebase />
              </span>
              Firebase
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textBlue">
                <FaLinux />
              </span>
              Linux
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textBlue">
                <SiMysql />
              </span>
              MySQL
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textBlue">
                <SiPostgresql />
              </span>
              PostgreSQL
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textBlue">
                <SiOracle />
              </span>
              SQL / Oracle
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textBlue">
                <SiDocker />
              </span>
              Docker
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textBlue">
                <FaAws />
              </span>
              AWS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textBlue">
                <SiGit />
              </span>
              Git
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textBlue">
                <FaJira />
              </span>
              Jira
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textBlue">
                <FaFigma />
              </span>
              Figma
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textBlue">
                <FaNodeJs />
              </span>
              Node.js
            </li>
          </ul> */}
        </div>
        <div className="relative w-full lgl:w-1/3 h-80 group">
          <div className="w-full rounded-lg h-80 -left-6 -top-6">
            <div className="relative z-20 flex w-full h-full pl-6 lgl:pl-0 -left-6">
              <img
                className="object-cover w-full h-full rounded-lg md:w-auto"
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
