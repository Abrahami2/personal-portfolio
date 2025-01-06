import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";
import { useState } from "react";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="max-w-[1140px] mx-auto px-4 py-24">
      <div className="flex flex-col items-center w-full">
        <h2 className="text-3xl font-semibold text-center font-titleFont">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textBlue">
          {" "}
          view the archive 📁{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2 xl:grid-cols-3 lgl:px-10">
        <ArchiveCard
          title="AI-enabled Center"
          description="Co-Directed the deployment of a cutting-edge lab at the FPL Center for Intelligent Energy Technologies (InETech) at U, involving the integration of advanced systems and technologies. Configured and integrated 18 high-resolution, screens with real-time data feeds, utilizing high-performance computing clusters for data processing and visualization."
          listItem={["Java", "PHP"]}
          link="/"
        />
        <ArchiveCard
          title="Anime Hub"
          description="An application for anime enthusiasts to track, rate, and discuss their favorite anime shows. Includes features for user profiles, watchlists, and community interactions."
          listItem={["Java", "JavaScript", "Python"]}
          link="/"
        />
        <ArchiveCard
          title="Project 3"
          description="Project description to be updated once uploaded. Previously worked on a multi-screen lab setup involving 8 computers and 20 monitors."
          listItem={["Java", "JavaScript", "Python"]}
          link="/"
        />
        <ArchiveCard
          title="Project 4"
          description="Project description to be updated once uploaded. Previous work includes integrating Google Authenticator into JavaScript code using Firebase and Azure."
          listItem={["Java", "Javascript", "Python"]}
          link="/"
        />
        <ArchiveCard
          title="Project 5"
          description="Project description to be updated once uploaded. Worked on various web projects using WordPress, including creating and editing websites for staff."
          listItem={["Java", "Javascript", "Python"]}
          link="/"
        />
        <ArchiveCard
          title="Project 6"
          description="Project description to be updated once uploaded. Worked on various web projects using WordPress, including creating and editing websites for staff."
          listItem={["Java", "Javascript", "Python"]}
          link="/"
        />

        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="Project 7"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt animi excepturi maxime ut ullam nulla sequi delectus qui"
                listItem={["Java", "Javascript", "Python"]}
                link="/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              <ArchiveCard
                title="Project 8"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt animi excepturi maxime ut ullam nulla sequi delectus qui"
                listItem={["Java", "Javascript", "Python"]}
                link="/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              <ArchiveCard
                title="Project 9"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt animi excepturi maxime ut ullam nulla sequi delectus qui"
                listItem={["Java", "Javascript", "Python"]}
                link="/"
              />
            </motion.div>
          </>
        )}
      </div>
      <div className="flex items-center justify-center mt-12">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textBlue text-[13px] border border-textBlue hover:bg-textDark duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textBlue text-[13px] border border-textBlue hover:bg-textDark duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
