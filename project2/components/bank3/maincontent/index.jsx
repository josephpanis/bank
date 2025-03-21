export default function MainContent() {
  return (
    <>
      {" "}
      <div className="col-span-4 flex flex-col gap-3">
        <div className="flex font-bold text-lg p-2 header rounded-lg">
          크로스&단폴
        </div>
        <div className="flex flex-row gap-2">
          <button className="active-btn ">전체</button>
          <button className="active-btn ">축구</button>
          <button className="active-btn ">야구</button>
          <button className="active-btn ">농구</button>
          <button className="active-btn ">배구</button>
          <button className="active-btn ">기타</button>
        </div>
        <table className="w-full mb-5 ">
          <thead className="rounded-lg">
            <tr className="header">
              <th>경기일시</th>
              <th>승</th>
              <th>무/핸디</th>
              <th>패</th>
              <th>상태</th>
            </tr>
            <tr>
              <th colSpan={5} className="bg-zinc-800 p-1 text-left">
                프리메이라리가
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="bg-zinc-900/90 p-4 text-center border ">
              <td className=" p-2">00/00(일) 00:00</td>
              <td className=" flex justify-between">
                <p>CD 아베스</p>
                <p>0.55</p>
              </td>
              <td className="">9.99</td>
              <td className=" flex justify-between">
                <p>0.66</p>
                <p>허더즈필드 타우 FC</p>
              </td>
              <td className="">베팅</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
