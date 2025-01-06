import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin } from "react-icons/sl";
import { Link } from "react-router-dom";

const Left = () => {
  return (
    <div className="flex flex-col items-center justify-end w-full h-full gap-4 pb-6 text-textLight">
      <div className="flex flex-col gap-4">
        <Link
          to="https://github.com/Abrahami2"
          target="_blank"
          className="flex flex-col items-center gap-4"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 text-xl transition-all duration-300 rounded-full cursor-pointer bg-textBlue hover:bg-textBlue hover:-translate-y-2">
            <TbBrandGithub />
          </span>
        </Link>
        <Link
          to="https://linkedin.com/abraham-hamitou-b1a9a216a"
          target="_blank"
          className="flex flex-col items-center gap-4"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 text-xl transition-all duration-300 rounded-full cursor-pointer bg-textBlue hover:bg-textBlue hover:-translate-y-2">
            <SlSocialLinkedin />
          </span>
        </Link>
      </div>
      <div className="w-[2px] h-32 bg-textDark "> </div>
    </div>
  );
};

export default Left;
