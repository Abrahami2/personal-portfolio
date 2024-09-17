import { FaRegFolder } from "react-icons/fa";
import { TbBrandGithub } from "react-icons/tb";
import { Link } from "react-router-dom";

const ArchiveCard = ({ title, description, listItem, link }) => {
  return (
    <Link to={link}>
      <div className="w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
        <div className="flex items-center justify-between">
          <FaRegFolder className="text-4xl text-textBlue" />
          <TbBrandGithub className="text-4xl hover:text-textBlue" />
        </div>
        <div>
          <h2 className="text-xl font-semibold tracking-wide font-titleFont group-hover:text-textBlue">
            {" "}
            {title}{" "}
          </h2>
          <p className="mt-3 text-sm"> {description} </p>
        </div>
        <div>
          <ul className="flex flex-wrap items-center justify-center gap-2 text-xs mdl:text-sm text-textDark ">
            {listItem?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default ArchiveCard;
