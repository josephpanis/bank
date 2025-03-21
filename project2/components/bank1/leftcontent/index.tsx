import Image from "next/image";
import Tabs from "@/components/bank1/tabs";

export default function LeftContent() {
  const primaryButtons = ["입금신청", "출금신청"];
  const categoryButtons = [
    ["해외형", "국내형", "스페셜"],
    ["인플레이", "실시간", "미니게임"],
    ["벳365", "토큰게임", "카지노"],
    ["슬롯", "경기결과", "베팅내역"],
    ["공지사항", "이벤트", "개인정산"],
    ["쪽지함", "고객센터", "마이페이지"],
    ["출석체크", "입금신청", "출금신청"],
  ];

  const leagues = [
    { icon: "icon_11.png", name: "인기리그" },
    { icon: "icon_12.png", name: "일글래드 프리미어리그" },
    { icon: "icon_13.png", name: "미국 NBA 농구" },
    { icon: "icon_14.png", name: "대한민국 KBL 농구" },
    { icon: "icon_15.png", name: "일글래드 프리미어리그" },
    { icon: "icon_16.png", name: "미국 NBA 농구" },
    { icon: "icon_17.png", name: "대한민국 KBL 농구" },
    { icon: "icon_18.png", name: "일글래드 프리미어리그" },
    { icon: "icon_19.png", name: "미국 NBA 농구" },
    { icon: "icon_20.png", name: "대한민국 KBL 농구" },
  ];

  return (
    <div className="bg-zinc-900 col-span-1">
      <div className="flex flex-row gap-2 pb-2">
        {primaryButtons.map((label, index) => (
          <button key={index} className="btn-gold-gradient">
            {label}
          </button>
        ))}
      </div>

      {categoryButtons.map((group, idx) => (
        <div
          key={idx}
          className="flex flex-row gap-2 justify-between mb-2 flex-nowrap"
        >
          {group.map((label, index) => (
            <button key={index} className="btn-gold-outline">
              {label}
            </button>
          ))}
        </div>
      ))}

      <div className="bg-[#222222] p-2 flex flex-row mb-2">
        <input
          type="text"
          className="bg-[#313131] flex flex-1 text-sm font-bold p-2"
          id="searchbar"
          placeholder="스포츠 해외형 검색 (국가/리그/팀명)"
        />
        <button className="bg-yellow-800 p-2">
          <Image
            src={"/search.png"}
            width={20}
            height={20}
            alt="search button"
          />
        </button>
      </div>

      <Tabs />

      <div className="flex flex-col gap-1 pt-3">
        {leagues.map((league, index) => (
          <div
            key={index}
            className="flex flex-row gap-6 justify-between p-4 bg-[#222222] text-white py-2"
          >
            <div className="flex flex-row gap-4">
              <Image
                src={`/icon_sidebar/${league.icon}`}
                width={20}
                height={20}
                alt={league.name}
              />
              <div>{league.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
