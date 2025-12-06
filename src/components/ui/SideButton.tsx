"use client";

import React from "react";

type SideButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: React.ReactNode;
  children: React.ReactNode;
};

const SideButton: React.FC<SideButtonProps> = ({ icon, children, ...props }) => {
  return (
    <div>
      <button
        className="flex items-center inline-block border border-gray-300 w-full md:w-full h-[48px] px-5 "
        {...props}
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
