import "./style/Style.css";
import { GiFilmProjector } from "react-icons/gi";
import Dropbar from "./Dropbar";
function navbar() {
  return (
    <div className="relative">
      <div className="bg-[#353535] p-0 m-0 left-0 right-0 top-0 overflow-hidden text-white">
        <div className="p-1 m-2 flex justify-between items-center text-center ">
          <h1
            className="font-normal text-xl flex ml-2"
            Animated
            animationIn="bounceInLeft"
          >
            <div className="icon text-red-600">
              <GiFilmProjector />
            </div>
            BIOZKOP21
          </h1>
          <div className="flex justify-between text-center">
            <h1 className="m-2">kategori</h1>
            <h1 className="bg-red-600 hover:bg-red-500 p-2 text-center items-center text-white rounded">
              Tonton
            </h1>
          </div>
        </div>s
      </div>
    </div>
  );
}

export default navbar;
