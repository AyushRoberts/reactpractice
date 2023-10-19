import React, { useEffect, useState } from "react";
import "./style2.css";

const UseEffect = () => {
  // const initialData = 15;
  const [myNum, setMyNum] = useState(0);
  useEffect(() => {
    document.title = `Chats(${myNum})`;
  });
  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div className="button2" onClick={() => setMyNum(myNum + 1)}>
          INCR
        </div>
      </div>
    </>
  );
};

export default UseEffect;
