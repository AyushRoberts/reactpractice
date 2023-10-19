import React from "react";
import "./Modal.css";
const Modal = (props) => {
  return (
    <div className="modBackground">
      <div className="modContainer">
        <div className="titleCloseBtn">
          <button onClick={() => props.setOpenModal(false)}>X</button>
        </div>
        <div className="title">
          <h1>sure?</h1>
        </div>
        <div className="body">
          <p>are you sure to continue</p>
        </div>
        <div className="footer">
          <button id="cancelBtn" onClick={() => props.setOpenModal(false)}>
            cancel
          </button>
          <button>continue</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
