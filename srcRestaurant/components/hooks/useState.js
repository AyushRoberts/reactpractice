import React, { useState } from "react";
import "./style2.css";

const UseState = () => {
  // const initialData = 15;
  const [myNum, setMyNum] = useState(0);

  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div class="button2" onClick={() => setMyNum(myNum + 1)}>
          INCR
        </div>
        <div
          class="button2"
          onClick={() => (myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0))}
        >
          DECR
        </div>
      </div>
    </>
  );
};

export default UseState;
