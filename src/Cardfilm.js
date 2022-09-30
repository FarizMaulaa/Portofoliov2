import React from "react";
import AntmanImage from "./images/superhero/antman.jpg";
import AvengerImage from "./images/superhero/avenger.jpg";
import BatmanImage from "./images/superhero/batman.jpg";
import SpidermanImage from "./images/superhero/spiderman-cover.jpg";
import SupermanImage from "./images/superhero/superman.jpg";
import RobinImage from "./images/superhero/robinhood.jpg";
import "./style/Style.css";

function Cardfilm() {
  return (
    <>
      <div className="font-bold text-2xl text-white text-center">
        <h1>SUPERHERO</h1>
      </div>
      <div className=" mt-3 flex flex-wrap justify-center items-center">
        <div className="card bg-[#353535] m-2">
          <img src={AntmanImage} />
          <div className="container rounded-sm text-white text-center">
            <h4>
              <b>ANTMAN</b>
            </h4>
            <p>Architect & Engineer</p>
            <div className=" m-0.5">
              <p className="p-2 m-0 mb-0.5 bottom-0 left-0 right-0 bg-red-600 hover:bg-red-500 rounded-sm">
                Tonton
              </p>
              <p className="p-2 m-0 bottom-0 left-0 right-0s bg-green-600 hover:bg-green-500 rounded-sm">
                Donwload
              </p>
            </div>
          </div>
        </div>
        <div className="card bg-[#353535] m-2">
          <img src={AvengerImage} />
          <div className="container rounded-sm text-white text-center">
            <h4>
              <b>AVENGER</b>
            </h4>
            <p>Architect & Engineer</p>
            <div className=" m-0.5">
              <p className="p-2 m-0 mb-0.5 bottom-0 left-0 right-0 bg-red-600 hover:bg-red-500 rounded-sm">
                Tonton
              </p>
              <p className="p-2 m-0 bottom-0 left-0 right-0s bg-green-600 hover:bg-green-500 rounded-sm">
                Donwload
              </p>
            </div>
          </div>
        </div>
        <div className="card bg-[#353535] m-2">
          <img src={BatmanImage} />
          <div className="container rounded-sm text-white text-center">
            <h4>
              <b>BATMAN</b>
            </h4>
            <p>Architect & Engineer</p>
            <div className=" m-0.5">
              <p className="p-2 m-0 mb-0.5 bottom-0 left-0 right-0 bg-red-600 hover:bg-red-500 rounded-sm">
                Tonton
              </p>
              <p className="p-2 m-0 bottom-0 left-0 right-0s bg-green-600 hover:bg-green-500 rounded-sm">
                Donwload
              </p>
            </div>
          </div>
        </div>
        <div className="card bg-[#353535]">
          <img src={SpidermanImage} />
          <div className="container rounded-sm text-white text-center">
            <h4>
              <b>SPIDERMAN</b>
            </h4>
            <p>Architect & Engineer</p>
            <div className=" m-0.5">
              <p className="p-2 m-0 mb-0.5 bottom-0 left-0 right-0 bg-red-600 hover:bg-red-500 rounded-sm">
                Tonton
              </p>
              <p className="p-2 m-0 bottom-0 left-0 right-0s bg-green-600 hover:bg-green-500 rounded-sm">
                Donwload
              </p>
            </div>
          </div>
        </div>
        <div className="card bg-[#353535] m-2">
          <img src={SupermanImage} />
          <div className="container rounded-sm text-white text-center">
            <h4>
              <b>SUPERMAN</b>
            </h4>
            <p>Architect & Engineer</p>
            <div className=" m-0.5">
              <p className="p-2 m-0 mb-0.5 bottom-0 left-0 right-0 bg-red-600 hover:bg-red-500 rounded-sm">
                Tonton
              </p>
              <p className="p-2 m-0 bottom-0 left-0 right-0s bg-green-600 hover:bg-green-500 rounded-sm">
                Donwload
              </p>
            </div>
          </div>
        </div>
        <div className="card bg-[#353535] m-2">
          <img src={RobinImage} />
          <div className="container rounded-sm text-white text-center">
            <h4>
              <b>ROBINHOOD</b>
            </h4>
            <p>Architect & Engineer</p>
            <div className=" m-0.5">
              <p className="p-2 m-0 mb-0.5 bottom-0 left-0 right-0 bg-red-600 hover:bg-red-500 rounded-sm">
                Tonton
              </p>
              <p className="p-2 m-0 bottom-0 left-0 right-0s bg-green-600 hover:bg-green-500 rounded-sm">
                Donwload
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cardfilm;
