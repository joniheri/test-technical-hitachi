import React from "react";
import { Link, useLocation } from "react-router-dom";

import { dataSoal } from "../data/Soal";

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          HitachiTest
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/" && "active"}`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Test Teknical
              </span>
              <ul className="dropdown-menu">
                {dataSoal &&
                  dataSoal.length > 0 &&
                  dataSoal.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link className="dropdown-item" to={item.patchUrl}>
                          Test {item.id}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
