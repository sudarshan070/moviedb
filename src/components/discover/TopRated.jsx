import Axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY, baseURL } from "../../utils/api";
import List from "../List";
import Pagination from "../pagination/Pagination";

export default function TopRated() {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    document.title = `MovieDB | Top Rated Movies`;
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const topRatedMovies = await Axios.get(
          `${baseURL}/movie/top_rated?api_key=${API_KEY}&page=${page}`
        );
        const movies = topRatedMovies.data;
        setTopRatedMovies(movies);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [page]);

  return (
    <div>
      <List movieList={topRatedMovies.results} />
      <Pagination
        nextPreviousPage={topRatedMovies}
        setPage={setPage}
        page={page}
      />
    </div>
  );
}
