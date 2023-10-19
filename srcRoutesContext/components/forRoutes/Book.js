import React from "react";
import { useOutletContext, useParams } from "react-router-dom";
const Book = () => {
  const obj = useOutletContext();
  const { id } = useParams();
  return (
    <div>
      Book {id} {obj.hello}
    </div>
  );
};

export default Book;
