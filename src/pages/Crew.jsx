import React, { useState } from "react";
import data from "../data.json";
import Navbar from "../components/Navbar";
import douflas from "../assets/crew/image-douglas-hurley.png";
import mark from "../assets/crew/image-mark-shuttleworth.png";
import victor from "../assets/crew/image-victor-glover.png";
import anousheh from "../assets/crew/image-anousheh-ansari.png";

export default function Crew() {
  const [index, setIndex] = useState(0);

  const crewImages = [douflas, mark, victor, anousheh];

  return (
    <div className="crew">
      <Navbar />
      <p className="uppercase text-white text-xl con text-center">
        <span className="text-white/25 mx-3">02</span>
        Meet your crew
      </p>
      <div className="md:flex md:flex-col-reverse xl:flex-row-reverse xl:w-full">
        <div className="flex justify-center mt-7 xl:w-1/2">
          <div className="crewImgBox flex justify-center">
            <img src={crewImages[index]} alt="" className="crewImg" />
          </div>
        </div>
        <div className="xl:flex xl:flex-col-reverse xl:items-start xl:w-1/2 xl:justify-evenly xl:ml-28">
          <div className="flex justify-center mt-7">
            <button
              onClick={() => {
                setIndex(0);
              }}
              className="mx-3"
            >
              <div className="button"></div>
            </button>
            <button
              onClick={() => {
                setIndex(1);
              }}
              className="mx-3"
            >
              <div className="button"></div>
            </button>
            <button
              onClick={() => {
                setIndex(2);
              }}
              className="mx-3"
            >
              <div className="button"></div>
            </button>
            <button
              onClick={() => {
                setIndex(3);
              }}
              className="mx-3"
            >
              <div className="button"></div>
            </button>
          </div>
          <div className="flex flex-col items-center xl:items-start">
            <h2 className="mt-5">{data.crew[index].role}</h2>
            <h1 className="my-3">{data.crew[index].name}</h1>
            <h3>{data.crew[index].bio}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
