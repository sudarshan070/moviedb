import React from "react";
import { NavLink } from "react-router-dom";
import Loader from "../Loading";
import Rating from "../Rating";

export default function List({ movieList }) {
  return (
    <div className="d-flex flex-wrap movie-list-container container-xl">
      {movieList ? (
        movieList.map((movie, i) => {
          let { poster_path, title, vote_average, id } = movie;
          return (
            <NavLink
              style={{ textDecoration: "none", color: "#000" }}
              to={`/movie/${id}`}
              key={i}
              className="m-4 single-movie text-center shadow"
            >
              <img
                className="movie-poser"
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt=""
              />

              <p className="py-2 font-sm">{title}</p>
              <div className="pb-2">
                <Rating number={vote_average / 2} />
              </div>
            </NavLink>
          );
        })
      ) : (
        <Loader />
      )}
    </div>
  );
}
