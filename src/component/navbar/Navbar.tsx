import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const authcontext = useContext(AuthContext);
  const token = authcontext.token;
  const signOut = authcontext.signOut;
  console.log("navbar token", token);

  const handleLogout = () => {
    signOut(() => {
      let path = "/login";
      navigate(path, { replace: true });
    });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="#"> */}
                <Link to="/" className="nav-link">
                  Product
                </Link>
                {/* </a> */}
              </li>
            </ul>
            {token == null ? (
              <button className="btn btn-outline-success" type="submit">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </button>
            ) : (
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={handleLogout}
              >
                <Link to="/login" className="nav-link">
                  Logout
                </Link>
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
