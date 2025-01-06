import {
  FaCss3,
  FaHtml5,
  FaJava,
  FaJs,
  FaPython,
  FaReact,
  FaSwift,
  FaUnity,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import SingleSkillBox from "./SingleSkillBox";

const Skills = () => {
  // Skills data
  const skillsData = [
    {
      id: 1,
      title: "Java",
      icon: <FaJava fontSize={"28px"} />,
    },
    {
      id: 2,
      title: "Python",
      icon: <FaPython fontSize={"28px"} />,
    },
    {
      id: 3,
      title: "Javascript",
      icon: <FaJs fontSize={"28px"} />,
    },
    {
      id: 4,
      title: "HTML",
      icon: <FaHtml5 fontSize={"28px"} />,
    },
    {
      id: 5,
      title: "CSS",
      icon: <FaCss3 fontSize={"28px"} />,
    },
    {
      id: 6,
      title: "Tailwind CSS",
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          role="img"
          viewBox="0 0 24 24"
          height="28"
          width="28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title></title>
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
        </svg>
      ),
    },
    {
      id: 7,
      title: "React JS",
      icon: <FaReact fontSize={"28px"} />,
    },
    {
      id: 8,
      title: "Swift",
      icon: <FaSwift fontSize={"28px"} />,
    },
    {
      id: 9,
      title: "Unity",
      icon: <FaUnity fontSize={"28px"} />,
    },
    {
      id: 10,
      title: "Firebase",
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          role="img"
          viewBox="0 0 24 24"
          height="28"
          width="28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title></title>
          <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z"></path>
        </svg>
      ),
    },
    {
      id: 11,
      title: "Express",
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          role="img"
          viewBox="0 0 24 24"
          height="28"
          width="28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title></title>
          <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"></path>
        </svg>
      ),
    },
    {
      id: 12,
      title: "Axios",
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          role="img"
          viewBox="0 0 24 24"
          height="28"
          width="28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title></title>
          <path d="M11.0683 2.89968V22.2973l-2.11399 1.70265V7.8638H4.975l6.0933-4.96412zM14.93426 0v15.76724H19.025l-6.20044 5.08865V1.4689L14.93426 0z"></path>
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="flex flex-col gap-8 py-10 lgl:py-32">
      {/* Heading */}
      <div className="max-w-[1024px] w-full mx-auto">
        <h2 className="flex items-center text-2xl font-semibold font-titleFont">
          <span className="mr-2 text-base md:text-lg text-textBlue">03. </span>{" "}
          <span>
            <span>
              <TypeAnimation
                sequence={[
                  "Skills",
                  2000,
                  "Technologies",
                  2000,
                  () => {
                    console.log("Sequence completed");
                  },
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "text-6xl", display: "inline-block" }}
              />
            </span>
          </span>
          <span className="hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-gray-700 ml-6"></span>
        </h2>
      </div>

      {/* Slider */}
      <div className="overflow-hidden">
        <div className="flex items-center w-full gap-10 skills-container mt-10 md:mt-[14vh]">
          {/* single technology */}
          {skillsData?.map(({ icon, id, title }) => (
            <SingleSkillBox key={id} title={title}>
              {icon}
            </SingleSkillBox>
          ))}
          {skillsData?.map(({ icon, id, title }) => (
            <SingleSkillBox key={id} title={title}>
              {icon}
            </SingleSkillBox>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
