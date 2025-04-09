"use client";
import { useState } from "react";

export default function Home() {
  const tableData = [
    {
      date: "00/00(일) 00:00",
      amount: "0.55",
      name: "9.99",
      status: "0.66",
      action: "베팅",
    },
    {
      date: "00/00(일) 00:00",
      amount: "0.55",
      name: "9.99",
      status: "0.66",
      action: "베팅",
    },
    // Add more dynamic entries here
  ];

  return (
    <div className="col-span-8">
      <h1 className="text-2xl text-amber-300 pb-2">입금신청</h1>

      {/* 충전안내 */}
      <div className="bg-zinc-900/80 w-full mb-2">
        <div className="bg-zinc-800 text-left font-semibold p-2 rounded-t-md">
          충전방법
        </div>
        <div className="p-2 rounded-b-md">
          {[
            "011회 최대 환전금액 10,000,000원 ~ 50,000,000원(레벨별 상이) 입니다. (2시간 간격으로 환전 가능합니다.)",
            "1일 환전 무제한입니다.",
            "가상계좌 및 은행점검으로 인하여 환전 업무는 23시 ~ 01시 까지 환전이 불가합니다.",
            "등록된 계좌로만 입/출금 가능하며, 보유 금액 또는 진행중인 경기가 있다면 계좌변경이 불가능합니다.",
            "이유를 불문하고 이용없이 즉시 환전처리는 불가하오며, 보너스 지급을 받지 않으시더라도 기본 롤링 충족 후 환전 가능하니 충전 하시기전 꼭 신중한 입금 바랍니다.",
            "환전신청 평균 10분정도 소요되며, 이벤트 및 스포츠 경기종료시 다수의 환전신청으로 환전시간이 지연될수 있습니다.",
          ].map((text, index) => (
            <div
              key={index}
              className="flex sm:flex-col md:flex-row p-2 gap-2 rounded-b-md"
            >
              <span className="text-yellow-500 bg-zinc-700 w-6 h-6 text-sm flex items-center justify-center rounded-sm">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="w-full md:w-6/6 text-white">
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-zinc-900/80 w-full p-2 rounded-lg">
        <div className="border-b border-zinc-800/50 p-2 flex flex-col">
          <span className="w-40 text-white">보유머니</span>
          <span className="text-gray-400 text-sm">0원</span>
        </div>
        <div className="border-b border-zinc-800/50 p-2 flex flex-col">
          <span className="text-white">은행명</span>
          <p className="text-gray-400 text-sm">하나은행</p>
        </div>
        <div className="border-b border-zinc-800/50 p-2 flex flex-col">
          <span className="text-white">예금주</span>
          <p className="text-gray-400 text-sm">배건호</p>
        </div>
        <div className="border-b border-zinc-800/50 p-2 flex flex-col">
          <span className="text-white">충전금액</span>
          <p className="text-gray-400 text-sm">
            고객센터에서 알려드린 입금계좌로 이체 후 금액을 입력하고
            [충전요청]을 눌러주세요.
          </p>
          <input
            type="text"
            className="w-full bg-zinc-700 p-2 rounded mt-2 text-white"
          />
          <div className="grid grid-cols-3 md:grid-cols-4 gap-2 mt-2">
            {["1만원", "5만원", "10만원", "30만원", "50만원", "100만원"].map(
              (amount, idx) => (
                <button
                  key={idx}
                  className="py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-sm"
                >
                  {amount}
                </button>
              )
            )}
            <button className="py-2 border border-yellow-500 hover:bg-yellow-500 hover:text-black rounded-sm">
              정정
            </button>
          </div>
        </div>
        <div className="border-b border-zinc-800/50 p-2 flex flex-col">
          <span className="text-white">출금비밀번호</span>
          <p className="text-gray-400 text-sm">
            가입시 설정한 출금 비밀번호를 입력하세요.
          </p>
          <input
            type="text"
            className="w-full bg-zinc-700 p-2 rounded mt-2 text-white"
          />
          <div className="grid grid-cols-3 md:grid-cols-4 gap-2 mt-2"></div>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center p-2">
        <button className="border border-yellow-400 text-yellow-400 px-4 py-2 hover:text-black hover:bg-yellow-400">
          입금신청하기
        </button>
      </div>

      {/* 입금내역 */}
      <h1 className="text-2xl text-amber-300 pt-4 pb-2">입금신청</h1>
      <div className="flex flex-row gap-4 bg-zinc-900/80 p-2">
        <p className="text-yellow-400">30건 내역만 조회가능합니다</p>
      </div>

      {/* 내역 리스트 */}
      <div className="w-full overflow-x-auto">
        <div className="min-w-[600px]">
          <div className="grid grid-cols-5 bg-zinc-800 text-center font-medium">
            <div className="p-2">날짜</div>
            <div className="p-2">요청금액(원)</div>
            <div className="p-2">입금자</div>
            <div className="p-2">상태</div>
            <div className="p-2">삭제</div>
          </div>

          {tableData.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-5 bg-zinc-900/90 text-center hover:bg-zinc-950/50 border-b border-zinc-800/50"
            >
              <div className="p-2 text-sm">{item.date}</div>
              <div className="p-2 text-sm">{item.amount}</div>
              <div className="p-2 text-sm">{item.name}</div>
              <div className="p-2 text-sm">{item.status}</div>
              <div className="p-2 text-sm">{item.action}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
