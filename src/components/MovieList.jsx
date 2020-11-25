import Axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../utils/api";
import { API_KEY } from "../utils/api";
import List from "./List";

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
    <div>
      <List movieList={popularMovie} />
    </div>
  );
}
