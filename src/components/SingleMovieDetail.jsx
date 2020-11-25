import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import Rating from "./Rating";

function SingleMovieDetail({ movieDetail, credits }) {
  console.log(movieDetail, "movieDetail");
  return (
    <>
      {console.log(credits)}
      {movieDetail ? (
        <div className="d-flex">
          <img
            className="movie-poser"
            src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
            alt=""
          />
          <div>
            <p>{movieDetail.title}</p>
            <div>
              <small>{movieDetail.release_date}</small>

              {movieDetail.production_countries.map((countries, i) => (
                <small key={i}>{countries.iso_3166_1}</small>
              ))}

              {movieDetail.genres.map((genre, i) => (
                <small key={i}>{genre.name}</small>
              ))}
              <small>
                {Math.floor(movieDetail.runtime / 60) +
                  "h" +
                  (movieDetail.runtime % 60) +
                  "m"}
              </small>
            </div>
            <div>
              <Rating number={movieDetail.vote_average / 2} />
              <span>{movieDetail.vote_average / 2}</span>
            </div>
            <h3>{movieDetail.tagline}</h3>
            <h2>overview</h2>
            <p>{movieDetail.overview}</p>
            <p></p>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      <div className="d-flex">
        <div>
          <h3>Top Billed Cast</h3>
          <div>
            {credits
              ? credits.cast.map((cast, i) => {
                  return (
                    <div key={i}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                        alt=""
                      />
                      <h3>{cast.name}</h3>
                      <p>{cast.character}</p>
                    </div>
                  );
                })
              : ""}
          </div>
          <NavLink
            to={`/movie/${movieDetail.id}/cast`}
            style={{ textDecoration: "none" }}
          >
            Full Cast & Crew
          </NavLink>
        </div>
        <div>
          <div>
            <h3>Status</h3> <p>{movieDetail.status}</p>
          </div>
          <div>
            <h3>Original Language</h3> <p>{movieDetail.original_language}</p>
          </div>
          <div>
            <h3>Budget</h3>
            <p>{movieDetail.budget > 0 ? movieDetail.budget : "-"}</p>
          </div>
          <div>
            <h3>Revenue </h3>
            <p>{movieDetail.revenue > 0 ? movieDetail.revenue : "-"}</p>
          </div>
          <div>
            <h3> Keywords</h3> <p>{movieDetail.status}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(SingleMovieDetail);
