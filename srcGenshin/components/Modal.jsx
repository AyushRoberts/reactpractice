import React from "react";

const Modal = ({ setModalOpen, modtitle, moddesc }) => {
  return (
    <div className="modbg centerflex flex">
      <div className="modcont flex">
        <button onClick={() => setModalOpen(false)}>X</button>
        <div className="modtitle">{modtitle}</div>
        <div className="modcontent">{moddesc}</div>
      </div>
    </div>
  );
};

export default Modal;
