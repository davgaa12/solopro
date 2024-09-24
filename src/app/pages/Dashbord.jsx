import { Home } from "../icons/Home";
export const Dashboard = () => {
  return (
    <div className="h-[1128px] w-full bg-slate-100 px-20 py-10">
      <div className=" w-full  h-[1052px] gap-10 flex flex-col py-4 bg-slate-100 ">
        <div className="flex justify-between">
          <div className="w-[384px] h-[216px] rounded-xl border border-black bg-white "></div>
          <div className="w-[384px] h-[216px] rounded-xl border border-black bg-white "></div>
          <div className="w-[384px] h-[216px] rounded-xl border border-black bg-white "></div>
        </div>
        <div className="flex justify-between">
          <div className="w-[588px] h-[284px] rounded-xl border border-black bg-white "></div>
          <div className="w-[588px] h-[284px] rounded-xl border border-black bg-white "></div>
        </div>
        <div className="h-[456px] w-full bg-white rounded-2xl ">
          <div className="h-[56px] w-full flex items-center ps-5 ">Last Records</div>
          <div className="h-[80px] w-full bg-white flex items-center justify-between gap-3 px-5 border border-y-black">
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-[#0166FF] rounded-full flex items-center justify-center">
                <Home />
              </div>
              <div>
                <div>Lending & Renting</div>
                <div>3 hours ago</div>
              </div>
            </div>
            <div>- 1,000₮</div>
          </div>
        </div>
      </div>
    </div>
  );
};
