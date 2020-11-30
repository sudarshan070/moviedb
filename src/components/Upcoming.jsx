import Axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY, baseURL } from "../utils/api";
import List from "./List";

export default function TopRated() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const upcomingMovies = await Axios.get(
          `${baseURL}/movie/upcoming?api_key=${API_KEY}`
        );
        const movies = upcomingMovies.data;
        setUpcomingMovies(movies);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <List movieList={upcomingMovies.results} />
    </div>
  );
}
