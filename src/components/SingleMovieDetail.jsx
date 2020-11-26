import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import Loader from "./Loading";
import Rating from "./Rating";

function SingleMovieDetail({ movieDetail, credits }) {
  console.log(movieDetail, "movieDetail");
  return (
    <>
      {movieDetail ? (
        <div className="d-flex align-items-center">
          <div className="single-movie-poster">
            <img
              className="movie-poser"
              src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
              alt=""
            />
          </div>

          <div className="pl-5">
            <p className="title-lg">{movieDetail.title}</p>
            <div className="text-secondary">
              <small className="pr-1">{movieDetail.release_date}</small>

              {movieDetail.production_countries.map((countries, i) => (
                <small className="pr-4" key={i}>
                  ({countries.iso_3166_1})
                </small>
              ))}

              {movieDetail.genres.map((genre, i) => (
                <small className="pr-2" key={i}>
                  •{genre.name}
                </small>
              ))}
              <small className="pl-4">
                {Math.floor(movieDetail.runtime / 60) +
                  "h" +
                  (movieDetail.runtime % 60) +
                  "m"}
              </small>
            </div>
            <div className="d-flex align-items-center py-3">
              <Rating number={movieDetail.vote_average / 2} />
              <span className="pl-3">{movieDetail.vote_average / 2}</span>
            </div>
            <h3 className="movie-tagline text-secondary">
              {movieDetail.tagline}
            </h3>
            <h2 style={{ fontSize: "1.5rem" }}>overview</h2>
            <p>{movieDetail.overview}</p>
            <p></p>
          </div>
        </div>
      ) : (
        <Loader />
      )}
      <div className="d-flex pt-5">
        <div>
          <h3 className="title-lg">Top Billed Cast</h3>
          <div className="d-flex cast-container">
            {credits
              ? credits.cast.map((cast, i) => {
                  return (
                    <div className="profile-card shadow-sm mx-2 my-1 border rounded">
                      <NavLink
                        to={`/person/${cast.id}`}
                        key={i}
                        style={{ textDecoration: "none" }}
                      >
                        <div className="profile-img ">
                          <img
                            className="rounded"
                            src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                            alt={cast.name}
                          />
                        </div>
                        <div className="p-2">
                          <h3 className="cast-name">{cast.name}</h3>
                          <p className="text-secondary">{cast.character}</p>
                        </div>
                      </NavLink>
                    </div>
                  );
                })
              : ""}
          </div>
          <div className="mt-4 ml-2 ">
            <NavLink
              to={`/movie/${movieDetail.id}/cast`}
              style={{
                textDecoration: "none",
                color: "#100",
                fontSize: "1.25rem",
              }}
            >
              👉🏻  Full Cast & Crew
            </NavLink>
          </div>
        </div>
        <div className="pl-5 pt-3">
          <div className="pb-3">
            <h3 className="cast-name">Status</h3>
            <p className="text-secondary">{movieDetail.status}</p>
          </div>
          <div className="pb-3">
            <h3 className="cast-name">Original Language</h3>
            <p className="text-secondary">{movieDetail.original_language}</p>
          </div>
          <div className="pb-3">
            <h3 className="cast-name">Budget</h3>
            <p className="text-secondary">
              {movieDetail.budget > 0 ? movieDetail.budget : "-"}
            </p>
          </div>
          <div className="pb-3">
            <h3 className="cast-name">Revenue </h3>
            <p className="text-secondary">
              {movieDetail.revenue > 0 ? movieDetail.revenue : "-"}
            </p>
          </div>
          <div className="pb-3">
            <h3 className="cast-name"> Keywords</h3>
            <p className="text-secondary">{movieDetail.status}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(SingleMovieDetail);
