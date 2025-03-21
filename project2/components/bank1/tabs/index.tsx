"use client";
import Image from "next/image";
import { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { title: "스포츠", subtext: "123" },
    { title: "실시간", subtext: "123" },
    { title: "미니게임", subtext: "123" },
  ];

  const sportsData = [
    { icon: "/icon_sidebar/icon_1.png", name: "축구", count: 121 },
    { icon: "/icon_sidebar/icon_2.png", name: "놈구", count: 121 },
    { icon: "/icon_sidebar/icon_3.png", name: "배구", count: 121 },
    { icon: "/icon_sidebar/icon_4.png", name: "아이스하키", count: 121 },
    { icon: "/icon_sidebar/icon_5.png", name: "야구", count: 121 },
    { icon: "/icon_sidebar/icon_6.png", name: "핸드볼", count: 121 },
    { icon: "/icon_sidebar/icon_7.png", name: "테니스", count: 121 },
    { icon: "/icon_sidebar/icon_8.png", name: "E스포츠", count: 121 },
  ];

  return (
    <div className="">
      {/* Tab Buttons */}
      <div className="flex">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`flex-1 p-1 text-center ${
              activeTab === index
                ? "bg-[#222222] text-white text-lg"
                : "bg-[#2d2d2d] hover:bg-zinc-800 text-lg"
            }`}
            onClick={() => setActiveTab(index)}
          >
            <div>{tab.title}</div>
            <div className="text-sm text-yellow-500">{tab.subtext}</div>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="">
        {activeTab === 0 && (
          <>
            <div className="flex flex-col gap-1">
              {sportsData.map((sport, index) => (
                <div
                  key={index}
                  className="flex flex-row gap-6 justify-between p-4 bg-[#222222] text-white py-2 align-middle items-center"
                >
                  <div className="flex flex-row gap-4">
                    <Image
                      src={sport.icon}
                      width={20}
                      height={20}
                      alt={sport.name}
                    />
                    <div>{sport.name}</div>
                  </div>
                  <p className="bg-zinc-800 py-1 px-3 rounded-full text-yellow-500 text-sm">
                    {sport.count}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
        {activeTab === 1 && (
          <>2
            <div className="flex flex-col gap-1">
              {sportsData.map((sport, index) => (
                <div
                  key={index}
                  className="flex flex-row gap-6 justify-between p-4 bg-[#222222] text-white py-2 align-middle items-center"
                >
                  <div className="flex flex-row gap-4">
                    <Image
                      src={sport.icon}
                      width={20}
                      height={20}
                      alt={sport.name}
                    />
                    <div>{sport.name}</div>
                  </div>
                  <p className="bg-zinc-800 py-1 px-3 rounded-full text-yellow-500 text-sm">
                    {sport.count}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
        {activeTab === 2 && (
          <>3
            <div className="flex flex-col gap-1">
              {sportsData.map((sport, index) => (
                <div
                  key={index}
                  className="flex flex-row gap-6 justify-between p-4 bg-[#222222] text-white py-2 align-middle items-center"
                >
                  <div className="flex flex-row gap-4">
                    <Image
                      src={sport.icon}
                      width={20}
                      height={20}
                      alt={sport.name}
                    />
                    <div>{sport.name}</div>
                  </div>
                  <p className="bg-zinc-800 py-1 px-3 rounded-full text-yellow-500 text-sm">
                    {sport.count}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
