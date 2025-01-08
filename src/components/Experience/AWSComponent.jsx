import { motion } from "framer-motion";
import { TbCircleArrowRight } from "react-icons/tb";

const AWSComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 text-xl font-medium font-titleFont">
        {" "}
        Software Development Engineer Intern{" "}
        <span className="tracking-wide text-textBlue">
          @Amazon Web Services
        </span>
      </h3>
      <p className="mt-1 text-sm font-medium text-textDark">
        {" "}
        April 2023 - August 2023, Seattle, WA{" "}
      </p>
      <ul className="flex flex-col gap-3 mt-6">
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-1 text-textBlue">
            <TbCircleArrowRight />
          </span>
          Optimized resource utilization through Live Migration capabilities.
        </li>
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-1 text-textBlue">
            <TbCircleArrowRight />
          </span>
          Designed and deployed scalable solutions with EC2, S3, and backend APIs.
        </li>
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-1 text-textBlue">
            <TbCircleArrowRight />
          </span>
          Collaborated on KPI-driven cloud optimization projects.
        </li>
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-1 text-textBlue">
            <TbCircleArrowRight />
          </span>
          Engineered Java microservices for efficient cloud resource management.
        </li>
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-1 text-textBlue">
            <TbCircleArrowRight />
          </span>
          Streamlined workflows by integrating automated testing with Mockito and JUnit.
        </li>
      </ul>
    </motion.div>
  );
};

export default AWSComponent;
