"use client";

import Image from "next/image";
import { useState } from "react";

export default function RightSidebar() {
  const [activeTab1, setActiveTab1] = useState(0);
  const tab1 = [{ title: "싱글" }, { title: "멀티" }];

  return (
    <>
      <div className="flex flex-row justify-center bg-[#2d2d2d] p-2 border-b border-yellow-400">
        베팅슬립
      </div>
      <div className="flex">
        {tab1.map((tab1, index) => (
          <button
            key={index}
            className={`flex-1 p-1 text-center ${
              activeTab1 === index
                ? "bg-[#222222] text-white text-lg"
                : "bg-[#2d2d2d] hover:bg-zinc-800 text-lg"
            }`}
            onClick={() => setActiveTab1(index)}
          >
            <div>{tab1.title}</div>
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {activeTab1 === 0 && (
          <>
            <div className=" bg-[#222222] hover:bg-zinc-800 p-2 gap-1">
              <div className="flex flex-row gap-2">
                <Image src={"/sk_icon.png"} width={25} height={25} alt="logo" />

                <p>KOR D2</p>
              </div>{" "}
              <div className="flex flex-row gap-2">
                <p className="text-yellow-400">프리매치</p>

                <p>승무패</p>
              </div>{" "}
              <div className="flex flex-row gap-2">
                <p> 웨스트햄 유나이티드</p>
                <p className="text-zinc-400 text-sm">vs</p>
                <p>토트넘 홋스퍼 FC</p>
              </div>{" "}
              <div className="flex flex-row gap-2">
                <p>토트넘 홋스퍼 FC`</p>
                <p className="text-sm text-yellow-400">3:40</p>
              </div>{" "}
              <div className="flex flex-row-reverse gap-2">
                <p> 0</p>
                <p>예상 당첨금액: </p>
              </div>
            </div>{" "}
            <div className=" bg-[#222222] flex flex-col p-2 gap-2">
              <p>3폴더 보너스 배당이 1.03배 적용 되었습니다.</p>{" "}
              <p>모두비우기</p>
              <button className="btn-silver-gradient flex flex-row p-2 text-center justify-center align-middle rounded-lg ">
                베팅금액
              </button>
              <div className="flex flex-row justify-between">
                <p>전체 배당</p>
                <p className="text-yellow-400">x 47.85</p>
              </div>{" "}
              <div className="flex flex-row justify-between">
                <p>예상 당첨금액</p>
                <p className="text-yellow-400">31.325.193</p>
              </div>
              <button className="btn-golden-gradient flex flex-row p-2 text-center justify-center align-middle ">
                베팅금액
              </button>
            </div>
          </>
        )}
        {activeTab1 === 1 && (
          <>
            <div className="flex flex-row gap-6 justify-between">
              <div className="flex flex-row gap-4">
                <div>test\</div>
                <div>축구</div>
              </div>
              <div>+</div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
