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
      id: 21,
      title: "C++",
      icon: (
        <svg
          fill="currentColor"
          height="28"
          width="28"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 312.553 312.553"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M302.553,0H10C4.477,0,0,4.478,0,10v292.553c0,5.522,4.477,10,10,10h292.553c5.523,0,10-4.478,10-10V10 C312.553,4.478,308.076,0,302.553,0z M122.031,193.288c-9.481,8.296-21.592,12.865-34.102,12.865 c-28.108,0-50.976-22.4-50.976-49.934c0-27.47,22.868-49.818,50.976-49.818c12.527,0,24.597,4.53,33.987,12.756 c3.874,3.392,4.263,9.283,0.87,13.156c-3.393,3.874-9.283,4.263-13.157,0.869c-5.988-5.245-13.695-8.135-21.7-8.135 c-17.827,0-32.33,13.983-32.33,31.172c0,17.251,14.503,31.286,32.33,31.286c7.992,0,15.742-2.931,21.822-8.251 c3.875-3.393,9.765-2.998,13.156,0.877C126.298,184.007,125.906,189.898,122.031,193.288z M185.951,165.6h-18.789v18.79 c0,5.149-4.174,9.323-9.324,9.323s-9.324-4.174-9.324-9.323V165.6h-18.788c-5.149,0-9.324-4.174-9.324-9.323 s4.174-9.323,9.324-9.323h18.788v-18.789c0-5.149,4.174-9.323,9.324-9.323s9.324,4.174,9.324,9.323v18.789h18.789 c5.149,0,9.324,4.174,9.324,9.323S191.101,165.6,185.951,165.6z M266.276,165.6h-18.789v18.79c0,5.149-4.174,9.323-9.324,9.323 c-5.149,0-9.324-4.174-9.324-9.323V165.6h-18.788c-5.149,0-9.324-4.174-9.324-9.323s4.174-9.323,9.324-9.323h18.788v-18.789 c0-5.149,4.174-9.323,9.324-9.323c5.149,0,9.324,4.174,9.324,9.323v18.789h18.789c5.149,0,9.324,4.174,9.324,9.323 S271.426,165.6,266.276,165.6z"></path>{" "}
          </g>
        </svg>
      ),
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
      id: 20,
      title: "SQL",
      icon: (
        <svg
          fill="currentColor"
          height="28"
          width="28"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 490.667 490.667"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M245.333,0C172.928,0,96,22.421,96,64v192c0,42.027,75.115,64,149.333,64s149.333-21.973,149.333-64V64 C394.667,22.421,317.739,0,245.333,0z M373.333,256c0,20.181-52.565,42.667-128,42.667s-128-22.485-128-42.667v-29.909 c27.883,19.584,78.933,29.909,128,29.909s100.117-10.325,128-29.909V256z M373.333,192c0,17.813-48.704,42.667-128,42.667 s-128-24.853-128-42.667v-29.909c27.883,19.584,78.933,29.909,128,29.909s100.117-10.325,128-29.909V192z M373.333,128 c0,17.813-48.704,42.667-128,42.667s-128-24.853-128-42.667V98.091c27.883,19.584,78.933,29.909,128,29.909 s100.117-10.325,128-29.909V128z M245.333,106.667c-79.296,0-128-24.853-128-42.667c0-17.813,48.704-42.667,128-42.667 s128,24.853,128,42.667C373.333,81.813,324.629,106.667,245.333,106.667z"></path>{" "}
              </g>{" "}
            </g>{" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M248.661,384.405l-3.157-0.533C226.795,380.821,224,375.957,224,373.333c0-4.245,8.512-10.667,21.355-10.667 c12.608,0,20.928,5.995,21.355,10.304c0.555,5.867,5.739,10.389,11.627,9.6c5.867-0.555,10.155-5.76,9.6-11.627 c-1.621-16.896-19.925-29.632-42.603-29.632c-23.936,0-42.688,14.059-42.688,32c0,16.704,13.248,27.328,39.403,31.595 l1.728-10.517l1.429,11.051c17.728,2.923,21.44,7.36,21.44,10.56c0,4.245-8.512,10.667-21.355,10.667 c-12.608,0-20.928-6.016-21.355-10.325c-0.555-5.867-5.611-10.24-11.627-9.6c-5.867,0.555-10.155,5.76-9.6,11.627 C204.331,435.264,222.635,448,245.312,448C269.248,448,288,433.941,288,416C288,399.317,274.773,388.693,248.661,384.405z"></path>{" "}
              </g>{" "}
            </g>{" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M394.667,373.333c0-17.643-14.357-32-32-32h-21.333c-17.643,0-32,14.357-32,32V416c0,17.643,14.357,32,32,32h21.333 c4.928,0,9.536-1.216,13.696-3.2l0.085,0.085c2.091,2.069,4.821,3.115,7.552,3.115s5.461-1.045,7.531-3.115 c4.16-4.16,4.16-10.923,0-15.083l-0.085-0.085c2.005-4.16,3.221-8.789,3.221-13.717V373.333z M373.333,411.605l-3.136-3.136 c-4.16-4.16-10.923-4.16-15.083,0c-4.16,4.16-4.16,10.923,0,15.083l3.115,3.115h-16.896c-5.888,0-10.667-4.779-10.667-10.667 v-42.667c0-5.888,4.779-10.667,10.667-10.667h21.333c5.888,0,10.667,4.779,10.667,10.667V411.605z"></path>{" "}
              </g>{" "}
            </g>{" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M469.333,426.667h-32V352c0-5.888-4.779-10.667-10.667-10.667c-5.888,0-10.667,4.779-10.667,10.667v85.333 c0,5.888,4.779,10.667,10.667,10.667h42.667c5.888,0,10.667-4.779,10.667-10.667C480,431.445,475.221,426.667,469.333,426.667z"></path>{" "}
              </g>{" "}
            </g>{" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M175.445,385.109c-5.291-2.624-11.669-0.491-14.315,4.779l-11.797,23.616l-11.797-23.595 c-2.645-5.269-9.045-7.403-14.315-4.779c-5.269,2.645-7.424,9.045-4.779,14.315l18.965,37.909l-18.944,37.867 c-2.624,5.269-0.491,11.669,4.779,14.315c1.536,0.768,3.157,1.131,4.757,1.131c3.904,0,7.659-2.155,9.557-5.909l42.667-85.333 C182.848,394.155,180.715,387.755,175.445,385.109z"></path>{" "}
              </g>{" "}
            </g>{" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M88.704,341.888c-4.331-1.472-9.152,0.043-11.904,3.712l-23.467,31.275L29.867,345.6 c-2.752-3.669-7.509-5.184-11.904-3.712c-4.352,1.451-7.296,5.525-7.296,10.112v85.333c0,5.888,4.779,10.667,10.667,10.667 S32,443.221,32,437.333V384l12.8,17.067c4.032,5.376,13.056,5.376,17.067,0L74.667,384v53.333c0,5.888,4.779,10.667,10.667,10.667 S96,443.221,96,437.333V352C96,347.413,93.056,343.339,88.704,341.888z"></path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
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
                sequence={["Skills", 2000, "Technologies", 2000]}
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
