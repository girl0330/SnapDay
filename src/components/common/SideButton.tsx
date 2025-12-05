import React from "react";

type SideButtonProps = {
  children: React.ReactNode;
};

const SideButton: React.FC<SideButtonProps> = ({ children }) => {
  return (
    <div>
      <button className="flex items-center inline-block border border-gray-300 w-full md:w-full h-[48px] px-5 ">
        <div className="w-[24px] h-[24px] bg-gray-100 rounded-md"></div>
        <span className="text-[16px] text-center ml-0 md:ml-[8px] hidden md:inline">
          {children}
        </span>
      </button>
    </div>
  );
};

export default SideButton;
