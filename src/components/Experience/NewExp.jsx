import { motion } from "framer-motion";
import { TbCircleArrowRight } from "react-icons/tb";

const NewExp = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 text-xl font-medium font-titleFont">
        {" "}
        New Experience{" "}
        <span className="tracking-wide text-textBlue">@new_experience</span>
      </h3>
      <p className="mt-1 text-sm font-medium text-textDark">
        {" "}
        May 2035 - May 2044{" "}
      </p>
      <ul className="flex flex-col gap-3 mt-6">
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-1 text-textBlue">
            <TbCircleArrowRight />
          </span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic,
          suscipit temporibus rerum quibusdam optio iste?
        </li>
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-1 text-textBlue">
            <TbCircleArrowRight />
          </span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic,
          suscipit temporibus rerum quibusdam optio iste?
        </li>
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-1 text-textBlue">
            <TbCircleArrowRight />
          </span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic,
          suscipit temporibus rerum quibusdam optio iste?
        </li>
      </ul>
    </motion.div>
  );
};

export default NewExp;
