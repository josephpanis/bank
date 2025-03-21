"use client";

import Image from "next/image";
import { useState } from "react";

import Navbar from "@/components/bank1/navbar";
import LeftContent from "@/components/bank1/leftcontent";
import MiddleContent from "@/components/bank1/middlecontent";
import RightContent from "../components/bank1/rightcontent";
import Footer from "@/components/bank1/footer";
import Tabs from "./tabs";

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <main className="grid grid-cols-5 gap-4 p-2 mx-auto">
          <LeftContent />
          <MiddleContent />
          <RightContent />
        </main>
        <Footer />
      </div>
    </>
  );
}
