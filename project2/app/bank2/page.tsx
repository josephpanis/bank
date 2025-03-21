"use client";

import Header from "@/components/bank2/header";
import LeftSideBar from "@/components/bank2/leftsidebar";
import MainContent from "@/components/bank2/maincontent";
import RightSidebar from "@/components/bank2/rightsidebar";

export default function Home() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-14 p-2 gap-2">
        <LeftSideBar />

        <div className="col-span-9 grid grid-cols-2 gap-1">
          <MainContent />
        </div>

        <div className="col-span-3">
          {" "}
          <RightSidebar />
        </div>
      </div>
    </>
  );
}
