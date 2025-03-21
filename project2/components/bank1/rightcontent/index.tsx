import Image from "next/image";
export default function RightContent() {
  return (
    <>
      {" "}
      <div className="col-span-1">
        <div className="flex flex-col gap-2 fleaefqwfx-1">
          <div className="p-2 border border-yellow-800">
            <div className="flex flex-row mb-2">
              <button className="bg-[#313131] p-4">
                <Image
                  src={"/icon_profile.png"}
                  width={20}
                  height={20}
                  alt="search button"
                />
              </button>
              <input
                type="text"
                className="bg-[#313131] flex flex-1 font-bold"
                id="searchbar"
                placeholder="아이디를 입력해주세요!"
              />
            </div>{" "}
            <div className="flex flex-row mb-2">
              <button className="bg-[#313131] p-4">
                <Image
                  src={"/icon_pass.png"}
                  width={20}
                  height={20}
                  alt="search button"
                />
              </button>
              <input
                type="text"
                className="bg-[#313131] flex flex-1 font-bold"
                id="searchbar"
                placeholder="비밀번호를 입력해주세요!"
              />
            </div>
            <button className="btn-gold-bg w-full p-2 rounded-md text-lg font-extrabold mb-2">
              로그인
            </button>
            <button className="btn-silver-gradient w-full p-2 rounded-md text-lg font-extrabold">
              회원가입
            </button>
          </div>
          <Image
            src={"/banner-side-1.png"}
            width={400}
            height={150}
            alt="banner"
          />{" "}
          <Image
            src={"/banner-side-2.png"}
            width={400}
            height={150}
            alt="banner"
          />{" "}
          <Image
            src={"/banner-side-3.png"}
            width={400}
            height={150}
            alt="banner"
          />
        </div>
      </div>
    </>
  );
}
