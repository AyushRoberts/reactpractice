import React from "react";

const Navbar = ({ filterItem, cat }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {cat.map((w) => {
            return (
              <button className="btn-group__item" onClick={() => filterItem(w)}>
                {w}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
