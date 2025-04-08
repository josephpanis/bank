"use client";
import Image from "next/image";
import { useState } from "react";

<<<<<<< Updated upstream
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
=======
// Define sport names as a union type
type Sport = "축구" | "농구" | "야구" | "아이스하키" | "배구" | "LOL";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  // Type the state properly using the Sport keys
  const [dropdownOpen, setDropdownOpen] = useState<Record<Sport, boolean>>({
    축구: false,
    농구: false,
    야구: false,
    아이스하키: false,
    배구: false,
    LOL: false,
  });

  const [secondDropdownOpen, setSecondDropdownOpen] = useState(false);

  const sports: Sport[] = ["축구", "농구", "야구", "아이스하키", "배구", "LOL"];

  const handleSportClick = (sport: Sport) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [sport]: !prev[sport],
    }));
  };

  const handleSingaporeClick = () => {
    setSecondDropdownOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="flex">
        {["스포츠"].map((title, i) => (
          <button
            key={title}
            className={`flex-1 p-1 text-center ${
              activeTab === i
                ? "bg-[#222222] text-white text-lg"
                : "bg-[#2d2d2d] hover:bg-zinc-800 text-lg"
            }`}
            onClick={() => setActiveTab(i)}
          >
            <div>{title}</div>
            <div className="text-sm text-yellow-500">123</div>
>>>>>>> Stashed changes
          </button>
        ))}
      </div>

<<<<<<< Updated upstream
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
=======
      {activeTab === 0 && (
        <div className="flex flex-col">
          {sports.map((sport, index) => (
            <div key={sport}>
              <div
                className="flex flex-row gap-2 justify-between p-2 bg-zinc-900 text-white py-2 align-middle items-center cursor-pointer"
                onClick={() => handleSportClick(sport)}
              >
                <div className="flex flex-row gap-2 align-middle items-center">
                  <Image
                    src={`/icon_sidebar/icon_${index + 1}.png`}
                    width={30}
                    height={30}
                    alt={sport}
                  />
                  <div>{sport}</div>
                </div>
                <p className="bg-zinc-800 py-1 px-3 rounded-full text-yellow-500 text-sm">
                  121
                </p>
              </div>

              {/* Dropdown 1 */}
              {dropdownOpen[sport] && (
                <div className="bg-zinc-900/70 p-2 text-white">
                  <div
                    onClick={handleSingaporeClick}
                    className="cursor-pointer"
                  >
                    싱가포르 (1)
                  </div>

                  {/* Dropdown 2 */}
                  {secondDropdownOpen && (
                    <div className="bg-zinc-900/50 p-2 mt-2 text-white">
                      <div>Additional Info for 싱가포르</div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
>>>>>>> Stashed changes
    </div>
  );
}
