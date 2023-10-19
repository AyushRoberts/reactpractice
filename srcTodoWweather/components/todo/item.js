import React from "react";

const Item = ({ items, deleteItem, editItem }) => {
  return (
    <>
      {items.map((e) => {
        return (
          <>
            <div className="eachItem" key={e.id}>
              <h3>{e.name}</h3>
              <div className="todo-btn">
                <i
                  className="fa fa-edit add-btn"
                  onClick={() => editItem(e.id)}
                ></i>
                <i
                  className="fa fa-trash-alt add-btn"
                  onClick={() => deleteItem(e.id)}
                ></i>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Item;
