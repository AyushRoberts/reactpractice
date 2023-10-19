import React from "react";
import Status from "../Filters/Category/Status";
import Gender from "../Filters/Category/Gender";
import Species from "../Filters/Category/Species";

const Filters = () => {
  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-4 mb-4">Filter</div>
      <div className="mb-4 text-center text-primary text-decoration-underline">
        Clear
      </div>
      <div className="accordion" id="accordionExample">
        <Gender />
        <Species />
        <Status />
      </div>
    </div>
  );
};

export default Filters;
