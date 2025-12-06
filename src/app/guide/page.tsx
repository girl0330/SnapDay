"use client";

import Dropdown from "@/components/ui/Dropdown";
import ModalButton from "@/components/ui/ModalButton";
import SideButton from "@/components/ui/SideButton";
import Image from "next/image";
import React, { useState } from "react";

const Page = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const openModel = () => {
    setOpenDropdown((prev) => !prev);
    console.log(openDropdown);
  };

  return (
    <div className="flex">
      <aside className="w-[64px] md:w-[192px] min-h-screen bg-white border-r ">
        <SideButton
          icon={<Image src="active.svg" width={24} height={24} alt="home icon" />}
          onClick={() => {
            console.log("사이드 버튼1 클릭함!");
          }}
        >
          사이드 버튼1
        </SideButton>
        <SideButton
          icon={<Image src="active.svg" width={24} height={24} alt="home icon" />}
          onClick={() => {
            console.log("사이드 버튼2 클릭함!");
          }}
        >
          사이드 버튼2
        </SideButton>
        <SideButton
          icon={<Image src="active.svg" width={24} height={24} alt="home icon" />}
          onClick={openModel}
        >
          사이드 버튼3
        </SideButton>
        <Dropdown open={openDropdown} onClose={() => setOpenDropdown(false)} />
      </aside>
      <ModalButton onClick={openModel}>모달 버튼</ModalButton>
      <Dropdown open={openDropdown} onClose={() => setOpenDropdown(false)} />
    </div>
  );
};

export default Page;
