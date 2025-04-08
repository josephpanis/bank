import Image from "next/image";
import Tabs from "@/components/bank1/tabs";
<<<<<<< Updated upstream

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
=======
import Link from "next/link";

export default function LeftContent() {
  const primaryButtons = [
    { label: "입금신청", path: "/navigation/charge" },
    { label: "출금신청", path: "/exchange" },
  ];

  const categoryButtons = [
    [
      { label: "해외형", path: "/categories/sports" },
      { label: "국내형", path: "/categories/sportscross" },
      { label: "스페셜", path: "/categories/sportsspecial" },
    ],
    [
      { label: "인플레이", path: "/inplay" },
      { label: "실시간", path: "/categories/sports-live-kor" },
      { label: "미니게임", path: "/categories/minigame" },
    ],
    [
      { label: "벳365", path: "/categories/bet365" },
      { label: "토큰게임", path: "/categories/tokengame" },
      { label: "카지노", path: "/categories/livecasino" },
    ],
    [
      { label: "슬롯", path: "/categories/slot" },
      { label: "경기결과", path: "/navigation/result" },
      { label: "베팅내역", path: "/navigation/betlist" },
    ],
    [
      { label: "공지사항", path: "/navigation/notice" },
      { label: "이벤트", path: "/navigation/event" },
      { label: "개인정산", path: "/categories/payback" },
    ],
    [
      { label: "쪽지함", path: "/navigation/message" },
      { label: "고객센터", path: "/navigation/help" },
      { label: "마이페이지", path: "/navigation/mypage" },
    ],
    [
      { label: "출석체크", path: "/navigation/attendance" },
      { label: "입금신청", path: "/navigation/charge" },
      { label: "출금신청", path: "/navigation/exchange" },
    ],
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
=======
    <div className="">
      {/* Primary Buttons */}
      <div className="flex flex-row gap-2 pb-2">
        {primaryButtons.map(({ label, path }, index) => (
          <Link key={index} href={path} className="flex-1">
            <button className="btn-gold-gradient w-full">{label}</button>
          </Link>
        ))}
      </div>

      {/* Category Buttons */}
      {categoryButtons.map((group, idx) => (
        <div
          key={idx}
          className="flex flex-row justify-between flex-nowrap gap-1 mb-1"
        >
          {group.map(({ label, path }, index) => (
            <Link key={index} href={path} className="w-full">
              <button className="btn-gold-outline w-full">{label}</button>
            </Link>
>>>>>>> Stashed changes
          ))}
        </div>
      ))}

<<<<<<< Updated upstream
      <div className="bg-[#222222] p-2 flex flex-row mb-2">
=======
      {/* Search Bar */}
      <div className="bg-[#222222] p-2 flex flex-row my-2">
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream

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
=======
>>>>>>> Stashed changes
    </div>
  );
}
