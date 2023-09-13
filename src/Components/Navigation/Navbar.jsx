import React from "react";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  useEffect(() => {
    document.addEventListener("scroll", () => {
      let x = document.getElementById("Nav");
      if (window.scrollY > 34) {
        x.classList.remove("py-4");
      } else {
        x.classList.add("py-4");
      }
    });
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top py-4" id="Nav">
        <div className="container">
          <Link
            className="navbar-brand text-white text-uppercase fw-bolder fs-2"
            to="/"
          >
            Start Framework
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <NavLink
                  className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2"
                  aria-current="page"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink
                  className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2"
                  aria-current="page"
                  to="/portfolio"
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2"
                  aria-current="page"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
