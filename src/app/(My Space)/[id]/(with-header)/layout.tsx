import MySpaceHeader from "@/components/layout/MySpaceHeader";
import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex flex-col">
      <MySpaceHeader />
      <main>{children}</main>
    </div>
  );
};

export default layout;
