import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="bg-zinc-800 text-zinc-600 font-semibold flex flex-col justify-center gap-2 items-center p-8 bg-test ">
        <Image
          src={"/f_partners.png"}
          width={1020}
          height={1000}
          alt="footer"
        />{" "}
        <p>Our website is a company operated under a formal license.</p>
        <p>
          You can enjoy a variety of games online, and we provide the best
          quality and best mobile version.
        </p>
        <p>It also offers high odds and introduces new events every day.</p>
        <p>
          Start enjoying thousands of games today, including sports games, live
          casino slot games, mini games, and virtual games!
        </p>{" "}
        <Image src={"/logo.png"} width={250} height={100} alt="footer" />{" "}
      </footer>
    </>
  );
}
