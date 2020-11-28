import Axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY, baseURL } from "../utils/api";
import List from "./List";
export default function Upcoming() {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const topRatedMovies = await Axios.get(
          `${baseURL}/movie/top_rated?api_key=${API_KEY}`
        );
        const movies = topRatedMovies.data;
        console.log(movies, "test is here");
        setTopRatedMovies(movies);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <List movieList={topRatedMovies.results} />
    </div>
  );
}
