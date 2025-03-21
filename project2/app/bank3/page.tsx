"use client";

import Image from "next/image";
import Header from "@/components/bank3/header";
import MainContent from "@/components/bank3/maincontent";
import RightSidebar from "@/components/bank3/rightsidebar";
import LeftSideBar from "@/components/bank3/leftsidebar";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-6 justify-center">
        <LeftSideBar />
        <div className="col-span-5">
          <Header />{" "}
          <div className="grid grid-cols-5 gap-3 p-4">
            <MainContent />
            <div className="col-span-1">
              <RightSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
