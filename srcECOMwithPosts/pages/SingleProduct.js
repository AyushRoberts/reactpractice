import React from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import PRODUCTS from "../data.js";

const SingleProduct = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { prodID } = useParams();
  const p = PRODUCTS.find((p) => p.id === parseInt(prodID));
  const { id, name, price, image, details } = p;
  return (
    <main>
      <div className="pg-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1>{name}</h1>
              <p>{pathname}</p>
            </div>
            <div className="col-lg-5">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-end">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/products">Products</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {name}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container content">
        <div className="row">
          <div className="col-lg-5">
            <img src={image} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-7">
            <h2>{name}</h2>
            <p className="price">
              <strong>{price}</strong>
            </p>
            <p className="details">
              {details} {details} {details}
            </p>
            <br />
            <button
              className="btn btn-primary btn-sm"
              onClick={() => navigate(-1)}
            >
              back
            </button>
            &nbsp;
            <button
              className="btn btn-primary btn-sm"
              onClick={() => navigate("/products")}
            >
              nav to prods
            </button>
            &nbsp;
            <Link to="/products" className="btn btn-primary btn-sm">
              PRODUCT
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleProduct;
