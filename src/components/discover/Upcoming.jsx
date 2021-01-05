import Axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY, baseURL } from "../../utils/api";
import List from "../List";
import Pagination from "../pagination/Pagination";

export default function Upcoming() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    document.title = `MovieDB | Upcoming Movies`;
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const upcomingMovies = await Axios.get(
          `${baseURL}/movie/upcoming?api_key=${API_KEY}&page=${page}`
        );
        const movies = upcomingMovies.data;
        setUpcomingMovies(movies);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [page]);

  return (
    <div>
      <List movieList={upcomingMovies.results} />
      <Pagination
        nextPreviousPage={upcomingMovies}
        setPage={setPage}
        page={page}
      />
    </div>
  );
}
