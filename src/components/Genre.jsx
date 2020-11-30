import React from "react";
import { NavLink } from "react-router-dom";

export function Genre({ genres, handleClick }) {
  return (
    <div style={{ position: "sticky", top: "0" }}>
      <div className="genre border-right">
        <h3>Discover</h3>
        <NavLink
          activeClassName="active"
          style={{ textDecoration: "none" }}
          to="/popular"
        >
          Popular
        </NavLink>
        <NavLink
          activeClassName="active"
          style={{ textDecoration: "none" }}
          to="/top-rated"
        >
          Top Rated
        </NavLink>
        <NavLink
          activeClassName="active"
          style={{ textDecoration: "none" }}
          to="/upcoming"
        >
          Upcoming
        </NavLink>
        <h3>Genres</h3>
        <>
          {genres.map((genre, i) => {
            return (
              <NavLink
                activeClassName="active"
                style={{ textDecoration: "none" }}
                to={`/genre/${genre.name}`}
                onClick={() => handleClick(genre.id)}
              >
                {genre.name}
              </NavLink>
            );
          })}
        </>
      </div>
    </div>
  );
}
