import React, { useEffect, useState } from "react";
import "./style.css";
import Item from "./item";
const Todo = () => {
  const getlocal = () => {
    const local = localStorage.getItem("mylist");
    if (local) return JSON.parse(local);
    else return [];
  };
  const [input, setInput] = useState("");
  const [items, setItems] = useState(getlocal());
  const [edit, setIsedititem] = useState("");
  const [toggle, settoggle] = useState(false);

  const addItem = () => {
    if (!input) {
      alert("error");
    } else if (input && toggle) {
      setItems(
        items.map((e) => {
          if (e.id === edit.id) {
            return { ...e, name: input };
          }
          return e;
        })
      );
      setIsedititem(null);
      setInput("");
      settoggle(false);
    } else {
      const toadd = {
        id: new Date().getTime().toString(),
        name: input,
      };
      setItems([...items, toadd]);
      setInput("");
    }
  };

  const deleteItem = (i) => {
    const newlist = items.filter((e) => {
      return e.id !== i;
    });
    setItems(newlist);
  };

  useEffect(() => {
    let count = items.length;
    document.title = `${count} items in the list`;
    localStorage.setItem("mylist", JSON.stringify(items));
  }, [items]);

  const editItem = (i) => {
    const itemtoedit = items.find((e) => {
      return e.id === i;
    });
    setIsedititem(itemtoedit);
    setInput(itemtoedit.name);
    settoggle(true);
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="icon"></img>
            <figcaption>Add items</figcaption>
          </figure>
          <div className="addItems">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Write something..."
              className="form-control"
              type="text"
            />
            {toggle ? (
              <i className="fa add-btn fa-edit" onClick={addItem}></i>
            ) : (
              <i className="fa add-btn fa-plus" onClick={addItem}></i>
            )}
          </div>

          <div className="showItems">
            <Item items={items} deleteItem={deleteItem} editItem={editItem} />
          </div>

          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove"
              onClick={() => setItems([])}
            >
              <span>submit</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
