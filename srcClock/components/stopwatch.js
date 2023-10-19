import React, { useEffect, useState } from "react";
import Laps from "./laps";

const Stopwatch = () => {
  const [toggle, trigger] = useState(0);
  const [hours, sethours] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setminutes] = useState(0);
  const [milSec, setMil] = useState(0);
  const [laps, setLaps] = useState([]);
  const [time, settime] = useState("");
  useEffect(() => {
    const s = () =>
      setTimeout(() => {
        const hourCheck = () => {
          setminutes(0);
          hours < 23 ? sethours(hours + 1) : sethours(0);
        };
        const minCheck = () => {
          setSeconds(0);
          minutes < 59 ? setminutes(minutes + 1) : hourCheck();
        };
        const secCheck = () => {
          setMil(0);
          seconds < 59 ? setSeconds(seconds + 1) : minCheck();
        };
        milSec < 900 ? setMil(milSec + 100) : secCheck();
      }, 100);
    document.getElementById("h").scrollBy({
      top: -100,
      left: 100,
    });
    if (toggle === 1) s();
  });

  const togglefunc = () => {
    toggle === 0 ? trigger(1) : trigger(0);
    const button = document.getElementsByClassName("switch")[0];
    button.classList.toggle("active");
  };
  const lapClicked = () => {
    if (time.length > 1) setLaps([...laps, time]);
  };
  const reset = () => {
    setLaps([]);
    setminutes(0);
    setSeconds(0);
    sethours(0);
    settime("");
  };
  return (
    <>
      <div className="fullstopwatchcont flex">
        <div className="stopwatchcont flex">
          <div className="timecont flex">
            <div className="hours contain">
              {hours < 10 ? "0" + hours : hours}
            </div>
            :
            <div className="minutes contain">
              {minutes < 10 ? "0" + minutes : minutes}
            </div>
            :{" "}
            <div className="seconds contain">
              {seconds < 10 ? "0" + seconds : seconds}
            </div>
          </div>
          <div className="butcont flex">
            <button className="switch mainbut" onClick={() => togglefunc()}>
              {toggle === 0 ? (
                <>
                  <span>START</span>
                  <i className="fa-solid fa-play fa-3x test"></i>
                </>
              ) : (
                <>
                  <span>STOP</span>
                  <i className="fa-solid fa-stop fa-3x test"></i>
                </>
              )}
            </button>
            <button onClick={() => lapClicked()} className="switch lapbut">
              LAP
            </button>
            <button onClick={() => reset()} className="switch lapbut">
              RESET
            </button>
          </div>
        </div>
        <Laps laps={laps} />
      </div>
    </>
  );
};

export default Stopwatch;
