import React from "react";

type ModalButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const ModalButton: React.FC<ModalButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="flex justify-center items-center px-[16px] py-[8px] h-[32px] bg-[#FF8D28] text-white rounded-md hover:bg-[#E57F22] transition"
      {...props}
    >
      {children}
    </button>
  );
};

export default ModalButton;
