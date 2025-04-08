import Image from "next/image";
<<<<<<< Updated upstream

export default function Navbar() {
  const primaryButtons = [
    "입금신청",
    "출금신청",
    "경기결과",
    "베팅내역",
    "공지사항",
    "이벤트",
    "쪽지함",
    "고객센터",
    "마이페이",
    "출석체크",
  ];

  const secondaryButtons = [
    "스포츠 (해외형)",
    "스포츠 (국내형)",
    "스페셜",
    "인플레이",
    "실시간",
    "미니게임",
    "벳365",
    "토큰게임",
    "카지노",
    "슬롯",
=======
import Link from "next/link";
export default function Navbar() {
  const primaryButtons = [
    { label: "입금신청", path: "/navigation/charge" },
    { label: "출금신청", path: "/navigation/exchange" },
    { label: "경기결과", path: "/navigation/result" },
    { label: "베팅내역", path: "/navigation/betlist" },
    { label: "공지사항", path: "/navigation/notice" },
    { label: "이벤트", path: "/navigation/event" },
    { label: "쪽지함", path: "/navigation/message" },
    { label: "고객센터", path: "/navigation/help" },
    { label: "마이페이", path: "/navigation/mypage" },
    { label: "출석체크", path: "/navigation/attendance" },
  ];

  const secondaryButtons = [
    { label: "스포츠 (해외형)", path: "/categories/sports" },
    { label: "스포츠 (국내형)", path: "/categories/sportscross" },
    { label: "스페셜", path: "/categories/sportsspecial" },
    { label: "인플레이", path: "/inplay" },
    { label: "실시간", path: "/categories/sports-live-kor" },
    { label: "미니게임", path: "/categories/minigame" },
    { label: "벳365", path: "/categories/bet365" },
    { label: "토큰게임", path: "/categories/tokengame" },
    { label: "카지노", path: "/categories/livecasino" },
    { label: "슬롯", path: "/categories/slot" },
>>>>>>> Stashed changes
  ];

  return (
    <>
<<<<<<< Updated upstream
      <nav className="bg-[#171719] flex justify-between p-3">
        <div className="flex flex-row items-center font-extrabold gap-2">
          <Image
            src={"/bank_logo.png"}
            width={220}
            height={120}
            alt="webLogo"
            className="pr-4"
          />
          <Image src={"/navtalk.png"} width={24} height={24} alt="webLogo" />
          <p className="text-2xl font-black bg-gradient-to-t from-yellow-700 to-yellow-500 bg-clip-text text-transparent">
            1세대 메이저 남대문!
          </p>
        </div>
        <div className="flex flex-row gap-4 items-center">
          {primaryButtons.map((label, index) => (
            <button key={index} className="nav-btn-primary">
              {label}
            </button>
          ))}
          <button className="nav-btn-logout">로그아웃</button>
        </div>
      </nav>
      <hr className="hr-gradient" />
      <nav className="navgradient flex justify-center items-center text-lg font-bold p-3">
        <ul className="flex flex-row gap-12">
          {secondaryButtons.map((label, index) => (
            <button key={index} className="nav-btn-secondary">
              {label}
            </button>
          ))}
        </ul>
      </nav>
=======
      <div className="hidden md:block">
        <nav className="bg-[#171719] flex justify-between p-3">
          <div className="flex flex-row items-center font-extrabold gap-2">
            <Image
              src={"/bank_logo.png"}
              width={220}
              height={120}
              alt="webLogo"
              className="pr-4"
            />
          </div>
          <div className="flex flex-row gap-4 items-center">
            {primaryButtons.map(({ label, path }, index) => (
              <Link key={index} href={path} className="nav-btn-primary">
                {label}
              </Link>
            ))}
            <Link href="/logout" className="nav-btn-logout">
              로그아웃
            </Link>
          </div>
        </nav>

        <hr className="hr-gradient" />
        <nav className="navgradient flex justify-center items-center text-lg font-bold p-3">
          <ul className="flex flex-row gap-12">
            {secondaryButtons.map(({ label, path }, index) => (
              <Link key={index} href={path} className="nav-btn-secondary">
                {label}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
>>>>>>> Stashed changes
    </>
  );
}
