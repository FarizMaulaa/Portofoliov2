import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
function Skill() {
  return (
    <>
      <div>
        <div>
          <h1 className="text-xl">Skill :</h1>
        </div>
        <div className="flex">
          <div className="mr-2 w-[75px] h-[75px] flex items-center justify-center rounded-sm text-[#61DBFB] text-[63px] bg-slate-800">
            <FaReact />
          </div>
          <div className="w-[75px] h-[75px] flex items-center justify-center rounded-sm text-[#61DBFB] text-[63px] bg-slate-200">
            <SiTailwindcss />
          </div>
        </div>
      </div>
    </>
  );
}
export default Skill;
