"use client";

import Image from "next/image";

export default function Header() {
  const primaryNavItems = [
    "스포츠",
    "라이브",
    "라이브카지노",
    "슬롯게임",
    "미니게임",
    "토큰게임",
  ];

  const secondaryNavItems = [
    "흡전",
    "환전",
    "베팀내역",
    "경기결과",
    "자유게시판",
    "공지사항",
    "이벤트",
    "출석체크",
    "로그아웃",
  ];

  const accountInfoItems = [
    "test1234dd",
    "폭기",
    "보유금액",
    "보유포인트",
    "보유카지노",
  ];

  return (
    <>
      <nav className="flex flex-row gap-4 justify-between p-2">
        <div className="flex flex-row gap-4">
          <Image src={"/bank_logo.png"} width={150} height={50} alt="logo" />
          <div className="flex flex-row gap-4">
            {primaryNavItems.map((item, index) => (
              <button key={index} className="nav-btn-primary">
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <button className="btn-gold-nav-gradient">회원가입</button>
          <button className="btn-outline-nav-gradient">로그인</button>
        </div>
      </nav>

      {/* Secondary Navigation */}
      <nav className="flex flex-row gap-4 justify-between p-2">
        <div className="flex flex-row gap-2">
          {accountInfoItems.map((item, index) => (
            <button key={index} className="btn-gold-secondary-gradient">
              {item}
            </button>
          ))}
        </div>
        <div className="flex flex-row gap-2">
          {secondaryNavItems.map((item, index) => (
            <button key={index} className="btn-gold-nav-gradient">
              {item}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
