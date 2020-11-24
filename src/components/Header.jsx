import React from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header position-fixed">
      <div className="container-xl text-white">
        <nav className="d-flex justify-content-between">
          <NavLink to="/" style={{ textDecoration: "none", color: "#fff" }}>
            <h1>MovieDB</h1>
          </NavLink>
          <div>
            <FaSearch />
          </div>
        </nav>
      </div>
    </header>
  );
}
