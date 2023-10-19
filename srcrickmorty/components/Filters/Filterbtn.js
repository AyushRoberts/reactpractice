import React from "react";
import Gender from "./Category/Gender";

const Filterbtn = ({ e, name, index }) => {
  return (
    <>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label class="btn btn-outline-primary" for={`${name}-${index}`}>
          {e}
        </label>
      </div>
    </>
  );
};

export default Filterbtn;
