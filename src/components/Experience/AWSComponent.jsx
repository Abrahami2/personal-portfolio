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
          Optimized cloud resources through Live Migration techniques (subject
          to NDA, no further details available).
        </li>
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-1 text-textBlue">
            <TbCircleArrowRight />
          </span>
          Developed scalable AWS solutions utilizing EC2, Lambda, S3, and RDS.
        </li>
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-1 text-textBlue">
            <TbCircleArrowRight />
          </span>
          Collaborated with my team to engineer efficient Java microservices for
          optimal resource allocation.
        </li>
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-1 text-textBlue">
            <TbCircleArrowRight />
          </span>
          Implemented unit tests with Mockito to ensure the reliability and
          correctness of Java microservices.
        </li>
      </ul>
    </motion.div>
  );
};

export default AWSComponent;
