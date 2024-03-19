import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary box-shadow">
        <div className="container-fluid ">
          <a className="navbar-brand me-0" href="#">
            <img
              src="./assets/images/nav_logo.jpg"
              alt="Bootstrap"
              width="40"
              height="40"
            />
          </a>
          <h2 className="ms-0">
            Men's<span className="fw-bold">fashion</span>
          </h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-dark fw-bold" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark  fw-bold" href="#">
                  New Arrivals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-bold" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark  fw-bold" href="#">
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
