import Image from "next/image";
import Tabs from "@/components/bank1/tabs";
import Link from "next/link";

export default function LeftContent() {
  const primaryButtons = [
    { label: "입금신청", path: "/navigation/charge" },
    { label: "출금신청", path: "navigation/exchange" },
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
          ))}
        </div>
      ))}

      {/* Search Bar */}
      <div className="bg-[#222222] p-2 flex flex-row my-2">
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
    </div>
  );
}
