import React from "react";

const Laps = ({ laps }) => {
  return (
    <>
      <div className="lapContainer flex" id="h">
        {laps.map((e) => {
          return <div className="lapItem">{e}</div>;
        })}
      </div>
    </>
  );
};

export default Laps;
