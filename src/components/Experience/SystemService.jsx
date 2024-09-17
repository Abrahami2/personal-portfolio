import { motion } from "framer-motion";
import { TbCircleArrowRight } from "react-icons/tb";

const SystemService = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 text-xl font-medium font-titleFont">
        {" "}
        Systems Specialist Intern{" "}
        <span className="tracking-wide text-textBlue">
          @Florida Atlantic University
        </span>
      </h3>
      <p className="mt-1 text-sm font-medium text-textDark">
        {" "}
        August 2022 - Present, Boca Raton, Florida{" "}
      </p>
      <ul className="flex flex-col gap-3 mt-6">
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-1 text-textBlue">
            <TbCircleArrowRight />
          </span>
          Managed project priorities and troubleshooting for IT systems,
          including MS Office
        </li>
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-1 text-textBlue">
            <TbCircleArrowRight />
          </span>
          Implemented virtualization and cloud technologies, reducing hardware
          costs by 15%.
        </li>
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-1 text-textBlue">
            <TbCircleArrowRight />
          </span>
          Developed tech solutions for diverse users, achieving a 95% resolution
          rate within 24 hours.
        </li>
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-1 text-textBlue">
            <TbCircleArrowRight />
          </span>
          Optimized ticket management with RT5 using Linux and JavaScript,
          enhancing performance.
        </li>
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-1 text-textBlue">
            <TbCircleArrowRight />
          </span>
          Created and edited websites using WordPress for University and Staff.
        </li>
      </ul>
    </motion.div>
  );
};

export default SystemService;
