import AntmanImage from "./images/superhero/antman.jpg";
import AvengerImage from "./images/superhero/avenger.jpg";
import BatmanImage from "./images/superhero/batman.jpg";
import SpidermanImage from "./images/superhero/spiderman-cover.jpg";
import SupermanImage from "./images/superhero/superman.jpg";
import RobinImage from "./images/superhero/robinhood.jpg";

function Secondcontent() {
  return (
    <>
      <div className="text-white font-medium p-5">
        <h1>SUPERHERO</h1>
      </div>
      <div className="flex flex-wrap  items-center justify-center text-white">
        <ul>
          <li className="w-28 h-28 m-5 items-center justify-center">
            <img src={AvengerImage} />
          </li>
          <li className="pt-8 text-white flex items-center justify-center">
            AVENGER
          </li>
          <div className="text-center items-center justify-center">
            <p className="bg-red-500 rounded-md p-[5px]">Tonton</p>
          </div>
        </ul>
        <ul>
          <li className="w-28 h-28 m-5 items-center justify-center">
            <img src={BatmanImage} />
          </li>
          <li className="pt-8 text-white flex items-center justify-center">
            BATMAN
          </li>
          <div className="text-center items-center justify-center">
            <button className="bg-red-500 rounded-md p-[5px]">Tonton</button>
          </div>
        </ul>
        <ul>
          <li className="w-28 h-28 m-5 items-center justify-center">
            <img src={AntmanImage} />
          </li>
          <li className="pt-8 text-white flex items-center justify-center">
            ANTMAN
          </li>
          <div className="text-center items-center justify-center">
            <button className="bg-red-500 rounded-md p-[5px]">Tonton</button>
          </div>
        </ul>
        <ul>
          <li className="w-28 h-28 m-5 items-center justify-center">
            <img src={SpidermanImage} />
          </li>
          <li className="pt-8 text-white flex items-center justify-center">
            SPIDERMAN
          </li>
          <div className="text-center items-center justify-center">
            <button className="bg-red-500 rounded-md p-[5px]">Tonton</button>
          </div>
        </ul>
        <ul>
          <li className="w-28 h-28 m-5 items-center justify-center">
            <img src={SupermanImage} />
          </li>
          <li className="pt-8 text-white flex items-center justify-center">
            SUPERMAN
          </li>
          <div className="text-center items-center justify-center">
            <button className="bg-red-500 rounded-md p-[5px]">Tonton</button>
          </div>
        </ul>
        <ul>
          <li className="w-28 h-28 m-5 items-center justify-center">
            <img src={RobinImage} />
          </li>
          <li className="pt-8 text-white flex items-center justify-center">
            ROBINHOOD
          </li>
          <div className="text-center items-center justify-center">
            <button className="bg-red-500 rounded-md p-[5px]">Tonton</button>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Secondcontent;
