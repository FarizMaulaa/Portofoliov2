import React from "react";
import "./style/Style.css";
function Content() {
  return (
    <>
      <div className="text-center text-white mt-20 text-4xl font-semibold drop-shadow-lg shadow-black">
        <h1>SENSASI NONTON FILM</h1>
        <h1>TANPA TIKET</h1>
      </div>
      <div className="text-center mt-4 ">
        <div>
          <input
            type="text"
            placeholder="Mau Nonton Apa ?"
            className="p-[8px] rounded-l-[4px] border-none"
          />
          <button
            className="bg-[#353535] hover:bg-slate-700 p-[8px] text-white rounded-r-[4px]"
            type="submit"
          >
            Cari
          </button>
        </div>
      </div>
    </>
  );
}

export default Content;
