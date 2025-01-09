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
          title="Live Migration Optimization"
          description="Developed a Java API to enhance live migration, optimizing resource utilization and enabling KPI reporting. Integrated AWS S3 for scalable storage and automated testing with Mockito and JUnit, reducing manual testing by 20%"
          listItem={["Java"]}
          link="/"
        />
        <ArchiveCard
          title="Anime Hub"
          description="An application for anime enthusiasts to track, rate, and discuss their favorite anime shows. Includes features for user profiles, watchlists, and community interactions."
          listItem={["Java", "JavaScript", "SupaBase"]}
          link="/"
        />
        <ArchiveCard
          title="Amazon Order Processing and Reporting System"
          description="Implemented a scalable MongoDB solution to process 30K+ monthly orders and integrated Amazon APIs for automated tracking. Connected MongoDB to Power BI for real-time insights and streamlined data synchronization with automated jobs."
          listItem={["MongoDB", "Power BI", "APIs"]}
          link="/"
        />
        <ArchiveCard
          title="Alzheimer's Disease MRI Classification"
          description="Developed machine learning models (ResNet50, custom CNN, and a student-designed model) to classify Alzheimer's disease stages using MRI images. Conducted preprocessing, EDA, and model evaluation using accuracy, precision, recall, and F1-score to identify the most effective solution."
          listItem={["Python (TensorFlow, Keras, Scikit-learn)"]}
          link="/"
        />
        <ArchiveCard
          title="Pythagorean Triples Finder"
          description="Engineered a Python program to compute Pythagorean triples efficiently for a given range. Implemented algorithmic logic to identify and validate triples dynamically."
          listItem={["Python"]}
          link="/"
        />
        <ArchiveCard
          title="RGB Color Picker Application"
          description="Designed and implemented an RGB color picker application in Java. Utilized sliders to control red, green, and blue components, dynamically updating the color of a displayed disk. Followed the MVC architecture and employed the Observer Pattern to synchronize model updates with the view."
          listItem={["Java", "Swing"]}
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
                title="AI enable center"
                description="Co-Directed the deployment of a cutting-edge lab at the FPL Center for Intelligent Energy Technologies (InETech) at U, involving the integration of advanced systems and technologies. Configured and integrated 18 high-resolution, screens with real-time data feeds, utilizing high-performance computing clusters for data processing and visualization."
                listItem={["Jira",]}
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
