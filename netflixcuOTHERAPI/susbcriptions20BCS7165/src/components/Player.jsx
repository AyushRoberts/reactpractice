import React, { useRef } from "react";
import ReactPlayer from "react-player";
const Player = () => {
  return (
    <div className="playermaincont">
      <ReactPlayer
        width={"100%"}
        url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
      />
      <button>FULLSCREEN</button>
    </div>
  );
};

export default Player;
