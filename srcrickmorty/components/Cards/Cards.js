import React from "react";
import s from "./Cards.module.scss";
import "./card.css";
const Cards = ({ results }) => {
  let display;
  if (results) {
    display = results.map((e) => {
      let { id, name, image, location, status } = e;
      return (
        <div key={id} className="mb-4 col-4 position-relative">
          <div className={s.cards}>
            <img src={image} alt="" className="img-fluid" />
            <div style={{ padding: "10px" }} className="content">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6">Last Location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
          </div>
          {(() => {
            if (status === "Dead") {
              return (
                <div className={`${s.badge} badge bg-danger position-absolute`}>
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`${s.badge} badge bg-success position-absolute`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${s.badge} badge bg-secondary position-absolute`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </div>
      );
    });
  } else {
    display = "No characters found";
  }
  return <>{display}</>;
};

export default Cards;
