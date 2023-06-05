import React, { useState } from "react";
import data from "../data.json";
import Navbar from "../components/Navbar";
import vehicle from "../assets/technology/image-launch-vehicle-landscape.jpg";
import vehicleDesk from "../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceport from "../assets/technology/image-spaceport-landscape.jpg";
import spaceportDesk from "../assets/technology/image-spaceport-portrait.jpg";
import capsule from "../assets/technology/image-space-capsule-landscape.jpg";
import capsuleDesk from "../assets/technology/image-space-capsule-portrait.jpg";

export default function Technology() {
  const [index, setIndex] = useState(0);

  const technologyImage = [vehicle, spaceport, capsule];
  const technologyDeskImage = [vehicleDesk, spaceportDesk, capsuleDesk];

  return (
    <div className="technology">
      <Navbar />
      <p className="uppercase text-white text-xl con text-center">
        <span className="text-white/25 mx-3">03</span>
        SPACE LAUNCH 101
      </p>
      <div className="xl:flex xl:flex-row-reverse xl:items-center xl:justify-evenly">
        <div className="flex justify-center">
        <img src={technologyImage[index]} className="my-5 xl:hidden" />
        </div>
        <img
          src={technologyDeskImage[index]}
          className="my-5 xl:block hidden"
        />
        <div className="xl:flex">
          <div className="flex justify-center xl:flex-col">
            <button
              onClick={() => {
                setIndex(0);
              }}
            >
              1
            </button>
            <button
              onClick={() => {
                setIndex(1);
              }}
            >
              2
            </button>
            <button
              onClick={() => {
                setIndex(2);
                console.log(window.innerWidth);
              }}
            >
              3
            </button>
          </div>
          <div className="md:flex flex-col items-center md:pb-5 xl:items-start technology-text">
            <h2>THE TERMINOLOGY…</h2>
            <h1>{data.technology[index].name}</h1>
            <h3>{data.technology[index].description}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
