import React, { useReducer, useState } from "react";
import "./style2.css";

const reducerFunc = (state, action) => {
  if (action.type === "INCR") {
    state += 1;
  }
  if (action.type === "DECR") {
    state = state == 0 ? 0 : state - 1;
  }
  return state;
};
const UseReducer = () => {
  const initialData = 0;
  //const [myNum, setMyNum] = useState(0);
  const [state, dispatchmethod] = useReducer(reducerFunc, initialData);

  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div class="button2" onClick={() => dispatchmethod({ type: "INCR" })}>
          INCR
        </div>
        <div class="button2" onClick={() => dispatchmethod({ type: "DECR" })}>
          DECR
        </div>
      </div>
    </>
  );
};

export default UseReducer;
