import React from "react";
import "./Navbar.css";


export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light  sticky">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            eTeliarganj
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Location
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                id="searchBox"
              />
              <button
                type="button"
                className="btn btn-primary position-relative"
              >
                Priyansh
                <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                  <span className="visually-hidden">New alerts</span>
                </span>
              </button>

              <button className="btn btn-outline-success mx-2" type="submit">
                Items | 1
              </button>
            </form>
          </div>
        </div>
      </nav>

    </>
  );
}
