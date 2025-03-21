"use client";

import Image from "next/image";

export default function Header() {
  return (
    <>
      <nav className="flex flex-row justify-between items-center py-2 bg-zinc-950/10 px-2">
        <div className="flex flex-row gap-3 items-center">
          <Image
            src={"/annouce.png"}
            width={20}
            height={20}
            alt="announcement"
          />
          <p>
            공지사항 제목에 오신것을 환영합니다. 다양한 공지사항과 다양한 이벤트
            철저한 보안시스템과 텍스트
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <button className="nav-btn-primary">자주묻는질문</button>
          <button className="nav-btn-primary">지인현황</button>
          <button className="nav-btn-primary">포인트전환</button>
          <button className="nav-btn-primary">정보수정</button>
          <button className="nav-btn-logout">로그아웃</button>
        </div>
      </nav>
      <nav className="flex flex-row justify-center items-center py-2 navgradient px-2 gap-5">
        <p>홍길동님</p>
        <span className="flex flex-row gap-2">
          <p>받은쪽지함:</p>
          <p className="text-yellow-400">(999)</p>
        </span>
        <span className="flex flex-row gap-2">
          <p>보유머니 :</p>
          <p className="text-yellow-400">140,295원</p>
        </span>
        <span className="flex flex-row gap-2">
          <p>베팅중인금액:</p>
          <p className="text-yellow-400">100,000원</p>
        </span>
        <span className="flex flex-row gap-2">
          <p>포인트:</p>
          <p className="text-yellow-400">56,000P</p>
        </span>
        <span className="flex flex-row gap-2">
          <p>가상머니:</p>
          <p className="text-yellow-400">500,000원</p>
        </span>
        <span className="flex flex-row gap-2">
          <p> 15%쿠폰 :</p>
          <p className="text-yellow-400">10개</p>
        </span>
        <span className="flex flex-row gap-2">
          <p>20%쿠폰:</p>
          <p className="text-yellow-400">(19)개</p>
        </span>
      </nav>
    </>
  );
}
