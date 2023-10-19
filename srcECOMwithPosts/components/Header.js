import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="d-flex justify-content-between align-items-center">
          <div className="logo">
            <Link to="/" className="brand">
              WSP
            </Link>
          </div>
          <nav className="nav nav-pills">
            <NavLink
              to="/"
              className={(navD) =>
                navD.isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="about"
              className={(navD) =>
                navD.isActive ? "nav-link active" : "nav-link"
              }
            >
              About
            </NavLink>
            <NavLink
              to="products"
              className={(navD) =>
                navD.isActive ? "nav-link active" : "nav-link"
              }
            >
              Products
            </NavLink>
            <NavLink
              to="Posts"
              className={(navD) =>
                navD.isActive ? "nav-link active" : "nav-link"
              }
            >
              Posts
            </NavLink>
          </nav>
        </nav>
      </div>
    </header>
  );
};

export default Header;
