"use client";

import ModalButton from "@/components/common/ModalButton";
import SideButton from "@/components/ui/SideButton";
import Image from "next/image";
import React from "react";

const page = () => {
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
          onClick={() => {
            console.log("사이드 버튼3 클릭함!");
          }}
        >
          사이드 버튼3
        </SideButton>
      </aside>
      <ModalButton
        onClick={() => {
          console.log("모달 버튼 클릭함!");
        }}
      >
        모달 버튼
      </ModalButton>
    </div>
  );
};

export default page;
