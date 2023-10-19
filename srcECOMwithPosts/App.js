import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import S from "./pages/MainLayout";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Error from "./pages/Error";
import About from "./pages/About";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<S />}>
            <Route index element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="products" element={<Products />}></Route>
            <Route path="products/:prodID" element={<SingleProduct />}></Route>
            <Route path="posts" element={<Posts />}></Route>
            <Route path="*" element={<Error />}></Route>{" "}
          </Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
