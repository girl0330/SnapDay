import React from "react";

type ModalButtonProps = {
  children: React.ReactNode;
};

const ModalButton: React.FC<ModalButtonProps> = ({ children }) => {
  return (
    <button className="flex justify-center items-center px-[16px] py-[8px] h-[32px] bg-[#FF8D28] text-white rounded-md hover:bg-[#E57F22] transition">
      {children}
    </button>
  );
};

export default ModalButton;
