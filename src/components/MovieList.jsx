import Axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../utils/api";
import Rating from "./Rating";
import { API_KEY } from "../utils/api";

export default function MovieList() {
  const [popularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const popularMovies = await Axios.get(
          `${baseURL}/movie/popular?api_key=${API_KEY}`
        );
        const movies = popularMovies.data.results;
        console.log(popularMovies.data, "test is here");
        setPopularMovie(movies);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="d-flex flex-wrap movie-list-container container-xl">
      {popularMovie ? (
        popularMovie.map((movie, i) => {
          return (
            <div key={i} className="m-4 single-movie text-center ">
              <img
                className="movie-poser"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
              />

              <p className="py-2 font-sm">{movie.title}</p>
              <div className="pb-2">
                <Rating number={movie.vote_average / 2} />
              </div>
            </div>
          );
        })
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
