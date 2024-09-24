import { Ft } from "../icons/Ft";
import { Nemh } from "../icons/Nemh";
export const Header = () => {
  return (
    <div className="w-full h-[72px] flex items-center justify-between px-20 ">
      <div className="w-[225px] flex justify-between">
        <div>
          <Ft />
        </div>
        <div>Dashboard</div>
        <div>Records</div>
      </div>
      <div className="flex w-[163px] justify-between">
        <div className="w-[99px] h-[32px] bg-blue-700 rounded-3xl flex gap-2 justify-center items-center">
          <div>
            <Nemh />
          </div>
          <div className="text-white font-bold">Record</div>
        </div>
        <div>
          <img src="pjoto.png" alt="" />
        </div>
      </div>
    </div>
  );
};
