import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header className="header position-fixed">
      <div className="container-xl text-white">
        <nav className="d-flex justify-content-between">
          <h1>MovieDB</h1>
          <div>
            <FaSearch />
          </div>
        </nav>
      </div>
    </header>
  );
}
