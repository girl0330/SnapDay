import ModalButton from "@/components/common/ModalButton";
import SideButton from "@/components/common/SideButton";
import React from "react";

const page = () => {
  return (
    <div className="flex">
      <aside className="w-[64px] md:w-[192px] min-h-screen bg-white border-r ">
        <SideButton>사이드 버튼1</SideButton>
        <SideButton>사이드 버튼2</SideButton>
        <SideButton>사이드 버튼3</SideButton>
      </aside>
      <ModalButton>모달 버튼</ModalButton>
    </div>
  );
};

export default page;
