"use client";

import Image from "next/image";
import { useState } from "react";

export default function MainContent() {
  const [activeTab2, setActiveTab2] = useState("죽구");
  const tab2 = ["죽구", "농구", "야구", "배구", "아이스하키", "아이스"];

  return (
    <>
      <div className="col-span-1 w-full h-screen flex flex-col">
        {/* Tabs */}
        <div className="flex flex-row overflow-x-auto whitespace-nowrap sidebar-bg">
          {tab2.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab2(tab)}
              className={`p-2 px-6 hover:bg-zinc-700 ${
                activeTab2 === tab
                  ? "btn-gold-bg text-shadrounded-lg text-white "
                  : ""
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Selected Tab Content */}
        <div className="overflow-y-auto">
          <div className="flex flex-row gap-5 bg-zinc-800 py-3 px-2">
            <button className="hover:text-amber-300">전체경기</button>
            <button className="hover:text-amber-300">시간별 정렬</button>
            <button className="hover:text-amber-300">리그별 정렬</button>
          </div>

          {/* Dynamic Tab Content */}
          <div className="flex flex-col gap-2">
            {activeTab2 === "죽구" && (
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-3 p-2 bg-zinc-800 align-middle items-center my-1">
                  <div className="flex flex-row gap-2 border-r-2 border-zinc-800">
                    <img
                      src="/icon_sidebar_bnw/1_icon.png"
                      className="h-5 w-5"
                      alt="icon"
                    />
                    <img src="/sk_icon.png" className="h-5 w-5" alt="icon" />
                    <p>호주</p>
                  </div>
                  <p>LoL 챌린저스 코리아 서머</p>
                </div>

                <div className="flex flex-col">
                  <div className="flex flex-row justify-between bg-zinc-800/60">
                    <div className="flex flex-row gap-2 align-middle items-center text-sm">
                      <p className="pl-2">00/00 00:00</p>
                      <p>승무패</p>
                    </div>
                    <p className="bg-zinc-800 text-yellow-300 p-2 text-sm">
                      + 700
                    </p>
                  </div>
                  <div className="flex flex-row gap-1 text-sm">
                    <div className="bg-zinc-800 p-2 flex-1/3 flex flex-row justify-between text-sm align-middle items-center">
                      <p>쿠마르 스포르팅 FC</p>
                      <p>1,41</p>
                    </div>
                    <p className="bg-zinc-800 p-2 text-sm align-middle items-center">
                      4.41
                    </p>
                    <div className="bg-zinc-800 p-2 flex-1/3 flex flex-row justify-between text-sm align-middle items-center">
                      <p>Sikkim Boys</p>
                      <p>5.70</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab2 === "농구" && (
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-3 p-2 bg-zinc-800 align-middle items-center my-1">
                  <div className="flex flex-row gap-2 border-r-2 border-zinc-800">
                    <img
                      src="/icon_sidebar_bnw/1_icon.png"
                      className="h-5 w-5"
                      alt="icon"
                    />
                    <img src="/sk_icon.png" className="h-5 w-5" alt="icon" />
                    <p>호주</p>
                  </div>
                  <p> 코리아 서머</p>
                </div>

                <div className="flex flex-col">
                  <div className="flex flex-row justify-between bg-zinc-800/60">
                    <div className="flex flex-row gap-2 align-middle items-center text-sm">
                      <p className="pl-2">00/00 00:00</p>
                      <p>승무패</p>
                    </div>
                    <p className="bg-zinc-800 text-yellow-300 p-2 text-sm">
                      + 700
                    </p>
                  </div>
                  <div className="flex flex-row gap-1 text-sm">
                    <div className="bg-zinc-800 p-2 flex-1/3 flex flex-row justify-between text-sm align-middle items-center">
                      <p>쿠마르 스포르팅 FC</p>
                      <p>1,41</p>
                    </div>
                    <p className="bg-zinc-800 p-2 text-sm align-middle items-center">
                      4.41
                    </p>
                    <div className="bg-zinc-800 p-2 flex-1/3 flex flex-row justify-between text-sm align-middle items-center">
                      <p>Sikkim Boys</p>
                      <p>5.70</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab2 === "야구" && (
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-3 p-2 bg-zinc-800 align-middle items-center my-1">
                  <div className="flex flex-row gap-2 border-r-2 border-zinc-800">
                    <img
                      src="/icon_sidebar_bnw/1_icon.png"
                      className="h-5 w-5"
                      alt="icon"
                    />
                    <img src="/sk_icon.png" className="h-5 w-5" alt="icon" />
                    <p>호주</p>
                  </div>
                  <p> 코리아 </p>
                </div>

                <div className="flex flex-col">
                  <div className="flex flex-row justify-between bg-zinc-800/60">
                    <div className="flex flex-row gap-2 align-middle items-center text-sm">
                      <p className="pl-2">00/00 00:00</p>
                      <p>승무패</p>
                    </div>
                    <p className="bg-zinc-800 text-yellow-300 p-2 text-sm">
                      + 700
                    </p>
                  </div>
                  <div className="flex flex-row gap-1 text-sm">
                    <div className="bg-zinc-800 p-2 flex-1/3 flex flex-row justify-between text-sm align-middle items-center">
                      <p>쿠마르 스포르팅 FC</p>
                      <p>1,41</p>
                    </div>
                    <p className="bg-zinc-800 p-2 text-sm align-middle items-center">
                      4.41
                    </p>
                    <div className="bg-zinc-800 p-2 flex-1/3 flex flex-row justify-between text-sm align-middle items-center">
                      <p>Sikkim Boys</p>
                      <p>5.70</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab2 === "배구" && (
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-3 p-2 bg-zinc-800 align-middle items-center my-1">
                  <div className="flex flex-row gap-2 border-r-2 border-zinc-800">
                    <img
                      src="/icon_sidebar_bnw/1_icon.png"
                      className="h-5 w-5"
                      alt="icon"
                    />
                    <img src="/sk_icon.png" className="h-5 w-5" alt="icon" />
                    <p>호주</p>
                  </div>
                  <p> 코</p>
                </div>

                <div className="flex flex-col">
                  <div className="flex flex-row justify-between bg-zinc-800/60">
                    <div className="flex flex-row gap-2 align-middle items-center text-sm">
                      <p className="pl-2">00/00 00:00</p>
                      <p>승무패</p>
                    </div>
                    <p className="bg-zinc-800 text-yellow-300 p-2 text-sm">
                      + 700
                    </p>
                  </div>
                  <div className="flex flex-row gap-1 text-sm">
                    <div className="bg-zinc-800 p-2 flex-1/3 flex flex-row justify-between text-sm align-middle items-center">
                      <p>쿠마르 스포르팅 FC</p>
                      <p>1,41</p>
                    </div>
                    <p className="bg-zinc-800 p-2 text-sm align-middle items-center">
                      4.41
                    </p>
                    <div className="bg-zinc-800 p-2 flex-1/3 flex flex-row justify-between text-sm align-middle items-center">
                      <p>Sikkim Boys</p>
                      <p>5.70</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab2 === "아이스하키" && (
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-3 p-2 bg-zinc-800 align-middle items-center my-1">
                  <div className="flex flex-row gap-2 border-r-2 border-zinc-800">
                    <img
                      src="/icon_sidebar_bnw/1_icon.png"
                      className="h-5 w-5"
                      alt="icon"
                    />
                    <img src="/sk_icon.png" className="h-5 w-5" alt="icon" />
                    <p>호주</p>
                  </div>
                  <p> 코리아 서머</p>
                </div>

                <div className="flex flex-col">
                  <div className="flex flex-row justify-between bg-zinc-800/60">
                    <div className="flex flex-row gap-2 align-middle items-center text-sm">
                      <p className="pl-2">00/00 00:00</p>
                      <p>승무패</p>
                    </div>
                    <p className="bg-zinc-800 text-yellow-300 p-2 text-sm">
                      + 700
                    </p>
                  </div>
                  <div className="flex flex-row gap-1 text-sm">
                    <div className="bg-zinc-800 p-2 flex-1/3 flex flex-row justify-between text-sm align-middle items-center">
                      <p>쿠마르 스포르팅 FC</p>
                      <p>1,41</p>
                    </div>
                    <p className="bg-zinc-800 p-2 text-sm align-middle items-center">
                      4.41
                    </p>
                    <div className="bg-zinc-800 p-2 flex-1/3 flex flex-row justify-between text-sm align-middle items-center">
                      <p>Sikkim Boys</p>
                      <p>5.70</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab2 === "아이스" && (
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-3 p-2 bg-zinc-800 align-middle items-center my-1">
                  <div className="flex flex-row gap-2 border-r-2 border-zinc-800">
                    <img
                      src="/icon_sidebar_bnw/1_icon.png"
                      className="h-5 w-5"
                      alt="icon"
                    />
                    <img src="/sk_icon.png" className="h-5 w-5" alt="icon" />
                    <p>호주</p>
                  </div>
                  <p> 코리아 서머</p>
                </div>

                <div className="flex flex-col">
                  <div className="flex flex-row justify-between bg-zinc-800/60">
                    <div className="flex flex-row gap-2 align-middle items-center text-sm">
                      <p className="pl-2">00/00 00:00</p>
                      <p>승무패</p>
                    </div>
                    <p className="bg-zinc-800 text-yellow-300 p-2 text-sm">
                      + 700
                    </p>
                  </div>
                  <div className="flex flex-row gap-1 text-sm">
                    <div className="bg-zinc-800 p-2 flex-1/3 flex flex-row justify-between text-sm align-middle items-center">
                      <p>쿠마르 스포르팅 FC</p>
                      <p>1,41</p>
                    </div>
                    <p className="bg-zinc-800 p-2 text-sm align-middle items-center">
                      4.41
                    </p>
                    <div className="bg-zinc-800 p-2 flex-1/3 flex flex-row justify-between text-sm align-middle items-center">
                      <p>Sikkim Boys</p>
                      <p>5.70</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="col-span-1 flex flex-col gap-1">
        <div className="flex flex-row bg-[#222222] p-2 gap-2">
          <Image
            src={"/icon_sidebar_bnw/1_icon.png"}
            width={10}
            height={10}
            className="h-5 w-5"
            alt="icon"
          />
          <p>호주</p> /
          <Image
            src={"/sk_icon.png"}
            width={10}
            height={10}
            className="h-5 w-5"
            alt="icon"
          />
          <p>NWSL CCUP</p>
        </div>
        <div className="flex flex-row bg-[#222222]  p-2 text-sm gap-2">
          <p className="text-zinc-500">00/00 </p>
          <p className="text-zinc-500">00:00</p>
          <p>포들랜드 손스 FC</p>
          <p>vs</p>
          <p>San Diego Wave Women's</p>
        </div>
        <div className=" w-full h-50 bg-zinc-700">teteteete</div>

        <div>
          <div className="flex flex-row p-2 gap-5 bg-[#222222] ">
            <p className="hover:text-amber-300 hover:font-bold">전체</p>
            <p className="hover:text-amber-300 hover:font-bold">메인</p>
            <p className="hover:text-amber-300 hover:font-bold">점수</p>
            <p className="hover:text-amber-300 hover:font-bold">전반전</p>
            <p className="hover:text-amber-300 hover:font-bold">후반전</p>
            <p className="hover:text-amber-300 hover:font-bold">코너</p>
            <p className="hover:text-amber-300 hover:font-bold">카드</p>
            <p className="hover:text-amber-300 hover:font-bold">스페셜</p>
          </div>
          <p className="flex flex-row bg-[#222222] p-2 mt-1">승무패</p>
          <div className="flex flex-row gap-1 pt-1 text-sm">
            <div className="flex-1 bg-zinc-700 flex flex-row justify-between p-2">
              <p>홈승+오버(2.5)</p>
              <p className="text-yellow-400">2</p>
            </div>{" "}
            <div className="flex-1 bg-zinc-700 flex flex-row justify-between p-2">
              <p>홈승+오버(2.5)</p>
              <p className="text-yellow-400">2</p>
            </div>{" "}
            <div className="flex-1 bg-zinc-700 flex flex-row justify-between p-2">
              <p>홈승+오버(2.5)</p>
              <p className="text-yellow-400">2</p>
            </div>{" "}
          </div>{" "}
          <p className="flex flex-row bg-[#222222] p-2 mt-1">승무패</p>
          <div className="flex flex-row gap-1 pt-1 text-sm">
            <div className="flex-1 bg-zinc-700 flex flex-row justify-between p-2">
              <p>홈승+오버(2.5)</p>
              <p className="text-yellow-400">2</p>
            </div>{" "}
            <div className="flex-1 bg-zinc-700 flex flex-row justify-between p-2">
              <p>홈승+오버(2.5)</p>
              <p className="text-yellow-400">2</p>
            </div>{" "}
            <div className="flex-1 bg-zinc-700 flex flex-row justify-between p-2">
              <p>홈승+오버(2.5)</p>
              <p className="text-yellow-400">2</p>
            </div>{" "}
          </div>{" "}
        </div>
      </div>
    </>
  );
}
