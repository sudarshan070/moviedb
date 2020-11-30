import Axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../utils/api";
import { API_KEY } from "../utils/api";
import List from "./List";
import Pagination from "./Pagination";

export default function Popular() {
  const [popularMovie, setPopularMovie] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      try {
        const popularMovies = await Axios.get(
          `${baseURL}/movie/popular?api_key=${API_KEY}&page=${page}`
        );
        const movies = popularMovies.data;
        console.log(movies, "test is here");
        setPopularMovie(movies);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [page]);

  return (
    <div>
      <List movieList={popularMovie.results} />
      <Pagination nextPreviousPage={popularMovie} setPage={setPage} />
    </div>
  );
}
