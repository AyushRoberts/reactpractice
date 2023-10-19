import React from "react";
import WomanImg from "../img/woman_hero.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="bg-pink-200 h-[800px]bg-hero bg-no-repeat bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className=" font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>NEW
          </div>
          <h1 className="text-[70px] leading=[1.1] font-light mb-4">
            a8to <br />
            <span className=" font-semibold">hellosale </span>
          </h1>
          <Link
            to="/"
            className="self-start uppercase border-b-2 font-semibold border-primary"
          >
            Discover
          </Link>
        </div>
        <div className="hidden lg:block">
          <img src={WomanImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
