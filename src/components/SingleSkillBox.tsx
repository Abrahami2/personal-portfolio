import React from "react";

const SingleSkillBox = ({ children, title }) => {
  return (
    <div className="min-w-[192px] rounded-md bg-[#112240] px-7 py-5 flex items-center justify-start gap-3 hover:-translate-y-2 transition-transform duration-300">
      {children}
      <p className="text-textDark">{title}</p>
    </div>
  );
};

export default SingleSkillBox;
