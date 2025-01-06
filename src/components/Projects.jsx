import SectionTitle from "./SectionTitle";
import HospitalManagement from "../assets/images/Hospital.png";
import Impulsive from "../assets/images/impulsive.png";

import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-[1440px] mx-auto lgl:px-20 py-24 px-4"
    >
      <SectionTitle title="Some of my projects" titleNumber="03" />

      <div className="flex flex-col items-center justify-between w-full mt-10 gap-28">
        <div className="flex flex-col items-center justify-center w-full mt-10 gap-28">
          <div className="flex flex-col gap-6 xl:flex-row">
            <Link
              className="relative w-full h-auto xl:w-1/2 group"
              to="https://www.fau.edu/newsdesk/articles/fau-fpl-center-opening.php"
              target="_blank"
            >
              <div>
                <img
                  className="object-top w-full h-full max-h-[350px] duration-300 hover:-translate-y-3"
                  src={HospitalManagement}
                  alt="Project1"
                />
              </div>
            </Link>
            <div className="z-10 flex flex-col items-end w-full gap-6 text-right xl:w-1/2 lgl:justify-between xl:-ml-16">
              <div className="flex flex-col gap-2">
                <p className="text-sm tracking-wide font-titlefont text-textBlue">
                  Personal Project
                </p>
                <h3 className="text-2xl font-bold">
                  Hospital Management System
                </h3>
              </div>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                A comprehensive system designed to manage hospital operations,
                including patient records, appointments, and billing.
                <span className="block pt-2">
                  This project aimed to improve efficiency and accessibility for
                  hospital staff and patients.
                </span>
              </p>

              <ul className="flex justify-between gap-2 text-xs tracking-wide md:text-sm font-titleFont md:gap-5 text-textDark">
                <li className="cursor-default hover:text-textBlue"> Java </li>
                <li className="cursor-default hover:text-textBlue">
                  {" "}
                  Javascript{" "}
                </li>
                <li className="cursor-default hover:text-textBlue"> Python </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full mt-10 gap-28">
          <div className="flex flex-col gap-6 xl:flex-row-reverse">
            <Link
              className="relative w-full h-auto xl:w-1/2 group"
              to="https://github.com/mkembe/s23-academy-todoist-clone-mkembe"
              target="_blank"
            >
              <div>
                <img
                  className="object-cover w-full h-full max-h-[350px] duration-300 hover:-translate-y-3"
                  src={Impulsive}
                  alt="Project1"
                />
              </div>
            </Link>
            <div className="z-10 flex flex-col items-end w-full text-right xl:w-1/2 gap- lgl:justify-between xl:-ml-16">
              <div className="flex flex-col gap-2">
                <p className="text-sm tracking-wide font-titlefont text-textBlue">
                  Hackathon Project (TechHub)
                </p>
                <h3 className="text-2xl font-bold">Impul$ive</h3>
              </div>
              <p className="bg-[#112240] text-left text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md mt-7">
                Won two awards with my team at the TechTogether hackathon for{" "}
                {'"'}Impulsive,{'"'} a web application designed to help users
                better manage their personal finances. Developed with my team an
                AI-driven solution to predict spending habits and provide
                personalized financial insights Integrated Google Authenticator
                using Firebase JavaScript SDK and Microsoft Azure for secure
                data management. Designed UI/UX with Figma, including dynamic
                stock market charts and enhanced user experience Built features
                for calendar integration, recurring charge management, and sale
                notifications for previously viewed items.
              </p>

              <ul className="flex justify-between gap-2 mt-4 text-xs tracking-wide md:text-sm font-titleFont md:gap-5 text-textDar6">
                <li className="cursor-default hover:text-textBlue"> Figma </li>
                <li className="cursor-default hover:text-textBlue">
                  {" "}
                  Firebase{" "}
                </li>
                <li className="cursor-default hover:text-textBlue">
                  Microsoft Azure
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
