"use client";

import React, { useEffect, useRef } from "react";

type DropdownProps = {
  open: boolean;
  onClose: () => void;
};

const Dropdown: React.FC<DropdownProps> = ({ open, onClose }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute top-20 left-20 w-[260px] bg-white shadow-xl rounded-xl z-50"
    >
      <button className="block w-full px-4 py-3 text-left hover:bg-gray-50">설정</button>
      <button className="block w-full px-4 py-3 text-left hover:bg-gray-50">내 활동</button>
      <div className="h-px bg-gray-200" />
      <button className="block w-full px-4 py-3 text-left hover:bg-gray-50">로그아웃</button>
    </div>
  );
};

export default Dropdown;
