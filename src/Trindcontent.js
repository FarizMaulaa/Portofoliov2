import DuneImage from "./images/trending/dune.jpg";
import EverythingImage from "./images/trending/everything.jpg";
import InfiniteImage from "./images/trending/infinite.jpg";
import JokerImage from "./images/trending/joker.jpg";
import LightyearImage from "./images/trending/lightyear.jpg";
import MorbiusImage from "./images/trending/morbius.jpg";

function Trindcontent() {
  return (
    <>
      <div className="text-white font-medium p-5">
        <h1>TRENDING</h1>
      </div>
      <div className="flex flex-wrap  items-center justify-center text-white">
        <ul>
          <li className="w-28 h-28 m-5 items-center justify-center">
            <img src={DuneImage} />
          </li>
          <li className="pt-8 text-white flex items-center justify-center">
            DUNE
          </li>
          <div className="text-center items-center justify-center">
            <button className="bg-red-500 rounded-md p-[5px]">Tonton</button>
          </div>
        </ul>
        <ul>
          <li className="w-28 h-28 m-5 items-center justify-center">
            <img src={EverythingImage} />
          </li>
          <li className="pt-8 text-white flex items-center justify-center">
            EVERYTHING
          </li>
          <div className="text-center items-center justify-center">
            <button className="bg-red-500 rounded-md p-[5px]">Tonton</button>
          </div>
        </ul>
        <ul>
          <li className="w-28 h-28 m-5 items-center justify-center">
            <img src={InfiniteImage} />
          </li>
          <li className="pt-8 text-white flex items-center justify-center">
            INFINITE
          </li>
          <div className="text-center items-center justify-center">
            <button className="bg-red-500 rounded-md p-[5px]">Tonton</button>
          </div>
        </ul>
        <ul>
          <li className="w-28 h-28 m-5 items-center justify-center">
            <img src={JokerImage} />
          </li>
          <li className="pt-8 text-white flex items-center justify-center">
            JOKER
          </li>
          <div className="text-center items-center justify-center">
            <button className="bg-red-500 rounded-md p-[5px]">Tonton</button>
          </div>
        </ul>
        <ul>
          <li className="w-28 h-28 m-5 items-center justify-center">
            <img src={LightyearImage} />
          </li>
          <li className="pt-8 text-white flex items-center justify-center">
            LIGHTYEAR
          </li>
          <div className="text-center items-center justify-center">
            <button className="bg-red-500 rounded-md p-[5px]">Tonton</button>
          </div>
        </ul>
        <ul>
          <li className="w-28 h-28 m-5 items-center justify-center">
            <img src={MorbiusImage} />
          </li>
          <li className="pt-8 text-white flex items-center justify-center">
            MORBIUS
          </li>
          <div className="text-center items-center justify-center">
            <button className="bg-red-500 rounded-md p-[5px]">Tonton</button>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Trindcontent;
