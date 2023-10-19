import React, { useState } from "react";
import "./style.css";
import Stopwatch from "./stopwatch";
import Timer from "./timer";
import Navbar from "./navbar";

const Clock = () => {
  const [component, setComp] = useState(<Stopwatch />);
  return (
    <>
      <div className="maincont flex">
        <div className="inbox">
          <Navbar fun={setComp} />
          {component}
        </div>
      </div>
    </>
  );
};

export default Clock;
