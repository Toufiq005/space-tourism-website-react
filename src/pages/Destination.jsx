import React, { useState } from "react";
import Navbar from "../components/Navbar";
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";
import line from "../assets/line.png";
import data from "../data.json";

export default function Destination() {
  const [index, setIndex] = useState(0);

  let planetImg = [moon, mars, europa, titan];

  return (
    <main className="destination">
      <Navbar />
      <p className="uppercase text-white con text-center">
        <span className="text-white/25 mx-3">01</span>
        Pick your destination
      </p>
      <div className="xl:flex xl:w-full xl:items-center xl:justify-evenly xl:mt-7">
        <div className="flex items-center justify-center mt-7 xl:mt-0 xl:w-1/2">
          <img src={planetImg[index]} alt="" className="img" />
        </div>
        <div className="destination-text">
          <div className="destinationNav flex justify-center items-center mt-7 xl:items-start xl:justify-start">
            <button
              onClick={() => {
                setIndex(0);
              }}
            >
              MOON
            </button>
            <button
              onClick={() => {
                setIndex(1);
              }}
            >
              MARS
            </button>
            <button
              onClick={() => {
                setIndex(2);
              }}
            >
              EUROPA
            </button>
            <button
              onClick={() => {
                setIndex(3);
              }}
            >
              TITAN
            </button>
          </div>
          <div className="xl:flex xl:flex-col xl:items-center xl:justify-start">
            <div className="flex flex-col items-center justify-center xl:items-start">
              <h1>{data.destinations[index].name}</h1>
              <h2>{data.destinations[index].description}</h2>
            </div>
            <div className="flex xl:justify-start xl:items-start justify-center mt-7">
              <img src={line} alt="" />
            </div>
            <div className="md:flex xl:justify-start xl:items-start items-center justify-center md:pb-5">
              <div className="md:mx-10">
                <h4>AVG. DISTANCE</h4>
                <h3>{data.destinations[index].distance}</h3>
              </div>
              <div className="md:mx-10">
                <h4>Est. travel time</h4>
                <h3>{data.destinations[index].travel}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
