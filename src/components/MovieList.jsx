import Axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../utils/api";
import Rating from "./Rating";

export default function MovieList() {
  const [popularMovie, setPopularMovie] = useState([]);
  const API_KEY = process.env.REACT_APP_MDB_API;

  const fetchPopularMovie = async () => {
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
  };

  useEffect(() => {
    fetchPopularMovie();
  }, []);

  return (
    <div>
      <p>movie list</p>
      {popularMovie ? (
        popularMovie.map((movie, i) => {
          return (
            <ul key={i}>
              <li>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt=""
                />
                <p>{movie.title}</p>
                <div>
                  <Rating number={movie.vote_average / 2} />
                </div>
              </li>
            </ul>
          );
        })
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
