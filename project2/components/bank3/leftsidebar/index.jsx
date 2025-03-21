"use client";

import Image from "next/image";

export default function LeftSideBar() {
  return (
    <>
      {" "}
      <div className="col-span-1 sidebar-bg">
        <div className="flex flex-col p-3 gap-2">
          <Image src={"/bank_logo.png"} width={300} height={300} alt="logo" />
          <button className="btn-golden-gradient ">
            <Image
              src={"/icon/1_icon.png"}
              width={20}
              height={20}
              alt="kig"
              className="w-7 h-7"
            />
            스포츠
          </button>
          <button className=" btn-golden-gradient">
            <Image
              src={"/icon/2_icon.png"}
              width={20}
              height={20}
              alt="kig"
              className="w-7 h-7"
            />
            카지노&슬롯
          </button>
          <button className="btn-golden-gradient">
            <Image
              src={"/icon/3_icon.png"}
              width={20}
              height={20}
              alt="kig"
              className="w-7 h-7"
            />
            토큰게임
          </button>
          <button className="btn-golden-gradient">
            <Image
              src={"/icon/4_icon.png"}
              width={20}
              height={20}
              alt="kig"
              className="w-7 h-7"
            />
            벳365
          </button>
          <button className="btn-golden-gradient">
            <Image
              src={"/icon/5_icon.png"}
              width={20}
              height={20}
              alt="kig"
              className="w-7 h-7"
            />
            미니게임
          </button>
          <div className="flex flex-col gap-2 rounded-lg bg-zinc-950/60 p-3 px-4 items-start ">
            <button className="nav-btn-primary">경기스코어</button>
            <button className="nav-btn-primary">경기결과</button>
            <button className="nav-btn-primary">자유게시판</button>
            <button className="nav-btn-primary">고객센터</button>
            <button className="nav-btn-primary">사이트규정</button>
            <button className="nav-btn-primary">충전신청</button>
            <button className="nav-btn-primary">환전신청</button>
            <button className="nav-btn-primary">캐쉬내역</button>
            <button className="nav-btn-primary">베팅리스트</button>
          </div>
        </div>
      </div>
    </>
  );
}
