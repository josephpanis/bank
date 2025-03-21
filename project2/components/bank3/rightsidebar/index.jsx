"use client";

import Image from "next/image";

export default function RightSideBar() {
  return (
    <>
      {" "}
      <div className="bg-zinc-900/60 rounded-lg">
        <div className="flex flex-row justify-between p-2 rounded-t-lg navgradient   ">
          <p>Betting Cart</p>
          <p>00: 00: 00</p>
        </div>
        <div className="px-4 flex flex-col gap-2">
          <div className="flex flex-row gap-2 justify-between pt-2">
            <button className="btn-goldsb-gradient flex-1">새로고침</button>
            <button className="btn-goldsb-gradient flex-1">전체삭제</button>
            <button className="btn-goldsb-gradient flex-1">카트고정</button>
          </div>
          <div className="bg-zinc-950/40 rounded-lg flex flex-col p-2 gap-2">
            <div className="flex flex-row justify-between">
              <p>바르셀로나</p>
              <p>1111</p>
            </div>
            <div className="flex flex-row justify-between">
              <p>레알마드리드</p>
              <p>1111</p>
            </div>
          </div>
          <div className="bg-zinc-950/40 rounded-lg flex flex-col p-2 gap-2">
            <div className="flex flex-row justify-between">
              <p>바르셀로나</p>
              <p>1111</p>
            </div>
            <div className="flex flex-row justify-between">
              <p>레알마드리드</p>
              <p>1111</p>
            </div>
          </div>
          <div className="flex flex-row justify-between border-b border-zinc-700">
            <p>보유금액</p>
            <p className="text-yellow-400">10,000,000</p>
          </div>
          <div className="flex flex-row justify-between border-b border-zinc-700">
            <p>베팅건수</p>
            <p className="text-yellow-400">10</p>
          </div>
          <div className="flex flex-row justify-between border-b border-zinc-700">
            <p>누적배당</p>
            <p className="text-yellow-400">5.65</p>
          </div>
          <div className="flex flex-row justify-between border-b border-zinc-700">
            <p>배당금액</p>
            <p className="text-yellow-400">10,000,000</p>
          </div>
          <div className="flex flex-row justify-between border-b border-zinc-700">
            <p>베팅금액</p>
            <p className="text-yellow-400">500,000</p>
          </div>
          <div className="flex flex-row gap-2 justify-between">
            <button className="btn-silver-gradient p-2 rounded-lg flex-1">
              10,000
            </button>
            <button className="btn-silver-gradient p-2 rounded-lg  flex-1">
              10,000
            </button>
            <button className="btn-silver-gradient p-2 rounded-lg  flex-1">
              10,000
            </button>
          </div>
          <div className="flex flex-row gap-2 justify-between">
            <button className="btn-silver-gradient p-2 rounded-lg  flex-1">
              10,000
            </button>
            <button className="btn-silver-gradient p-2 rounded-lg  flex-1">
              10,000
            </button>
            <button className="btn-silver-gradient p-2 rounded-lg  flex-1">
              10,000
            </button>
          </div>
          <button className="flex btn-golden-gradient  justify-center">
            베팅하기
          </button>
        </div>
        <div className="p-2 flex flex-col gap-2">
          <Image
            src={"/banner-side-1.png"}
            width={300}
            height={150}
            alt="banner"
          />
          <Image
            src={"/banner-side-1.png"}
            width={300}
            height={150}
            alt="banner"
          />
        </div>
      </div>
    </>
  );
}
