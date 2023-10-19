import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/forRoutes/Home";
import BookLayout from "./components/forRoutes/BookLayout";
import BookRoutes from "./components/forRoutes/BookRoutes";
import Notfound from "./components/forRoutes/Notfound";
import COMP1 from "./components/context/comp";
import COMPCHILD from "./components/context/compchild";
import CountContextProvider from "./components/context/CountContext";
import A from "./components/context/compsibling";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/books" element={<h1>extra</h1>} />
      </Routes>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BookRoutes />} />
        {/* <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} /> */}
        <Route path="*" element={<h1>NOT FOUND</h1>} />
        <Route path="/404" element={<Notfound />} />
      </Routes>
      <CountContextProvider>
        <COMP1 />
        <A />
      </CountContextProvider>
    </>
  );
};

export default App;
