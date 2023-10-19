import React from "react";
import Stopwatch from "./stopwatch";
import Timer from "./timer";

const Navbar = ({ fun }) => {
  return (
    <>
      <div className="navbarcont flex">
        <ul>
          <li onClick={() => fun(<Stopwatch />)} className="navitem">
            STOPWATCH
          </li>
          <li onClick={() => fun(<Timer />)} className="navitem">
            TIMER
          </li>
          <li className="navitem">COMING SOON</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
