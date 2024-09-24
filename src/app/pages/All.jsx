import { Home } from "../icons/Home";
import { Nemh } from "../icons/Nemh";
export const All = () => {
  return (
    <div className="h-[1128px] w-full bg-slate-100 px-20 py-10">
      <div className=" w-full   gap-10 flex   bg-slate-100 ">
        <div className="w-[282px] h-auto  bg-white px-4 py-4">
            <div className="flex flex-col gap-6">
                <div>Records</div>
                <div className="w-[250px] h-[32px] bg-blue-700 rounded-3xl flex gap-2 justify-center items-center">
          <div>
            <Nemh />
          </div>
          <div className="text-white font-bold">add</div>
                 </div>
            </div>
            <input
              type="text"
              placeholder="Search" 
              className="text-[#A3A3A3] w-[250px] h-[32px] rounded-lg border border-[#F3F4F6] bg-[#F3F4F6] pl-2"
            />
            <div className="flex flex-col gap-4">
                <div>Type</div>
                <div> 
                    <div className="flex gap-2">
                        <div><input className="w-4 h-4 " type="checkbox" /></div>
                        <div>All</div>
                    </div>
                    <div className=" flex gap-2">
                        <div><input className="w-4 h-4 " type="checkbox" /></div>
                        <div>Income</div>
                    </div>   <div className=" flex gap-2">
                        <div><input className="w-4 h-4 " type="checkbox" /></div>
                        <div>Expense</div>
                    </div>
                </div>
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};