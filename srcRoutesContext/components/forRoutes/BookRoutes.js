import React from "react";
import BookList from "./BookList";
import Book from "./Book";
import NewBook from "./NewBook";
import { Routes, Route } from "react-router-dom";
import BookLayout from "./BookLayout";
const BookRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="/books/new" element={<NewBook />} />
        </Route>
      </Routes>
    </>
  );
};

export default BookRoutes;
