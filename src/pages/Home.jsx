import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="hero mt-7 flex flex-col xl:flex-row xl:mt-44 xl:justify-evenly items-center">
        <div className="hero-text">
          <h2>SO, YOU WANT TO TRAVEL TO</h2>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!s
          </p>
        </div>
        <div className="w-full xl:w-1/3 flex items-center justify-center mt-16">
          <a href="/destination">
            <div className="explore">
              <p>EXPLORE</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
