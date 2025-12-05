"use client";

import React from "react";

type SideButtonProps = {
  icon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
};

const SideButton: React.FC<SideButtonProps> = ({ icon, children, onClick }) => {
  return (
    <div>
      <button
        className="flex items-center inline-block border border-gray-300 w-full md:w-full h-[48px] px-5 "
        onClick={onClick}
      >
        <div>{icon}</div>
        <span className="text-[16px] text-center ml-0 md:ml-[8px] hidden md:inline">
          {children}
        </span>
      </button>
    </div>
  );
};

export default SideButton;
