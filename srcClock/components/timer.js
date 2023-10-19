import React, { useEffect, useState } from "react";

const Timer = () => {
  const [toggle, trigger] = useState(0);
  const [hours, sethours] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setminutes] = useState(0);
  const [milSec, setMil] = useState(900);
  const hplus = () => {
    sethours(hours + 1);
  };
  const mplus = () => {
    setminutes(minutes + 1);
  };
  const splus = () => {
    setSeconds(seconds + 1);
  };
  const go = () => {
    toggle === 0 ? trigger(1) : trigger(0);
    const button = document.getElementsByClassName("switch")[3];
    button.classList.toggle("active");
  };
  useEffect(() => {
    const s = () =>
      setTimeout(() => {
        const minCheck = () => {
          const hourCheck = () => {
            setminutes(59);
            hours > 0 ? sethours(hours - 1) : sethours(23);
          };
          setSeconds(59);
          minutes > 0 ? setminutes(minutes - 1) : hourCheck();
        };
        const secCheck = () => {
          setMil(900);
          seconds > 0 ? setSeconds(seconds - 1) : minCheck();
        };
        milSec > 0 ? setMil(milSec - 100) : secCheck();
        if (seconds === 0 && hours === 0 && minutes === 0)
          document.getElementsByClassName("timecont")[0].innerHTML =
            "<span style='color: black'>DONE</span>";
      }, 100);
    if (toggle === 1) s();
  });
  return (
    <>
      <div className="timercont flex">
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
          <button onClick={() => hplus()} className="switch lapbut">
            HPLUS
          </button>
          <button onClick={() => mplus()} className="switch lapbut">
            MPLUS
          </button>
          <button onClick={() => splus()} className="switch lapbut">
            SPLUS
          </button>
          <button onClick={() => go()} className="switch lapbut">
            GO
          </button>
        </div>
      </div>
    </>
  );
};

export default Timer;
