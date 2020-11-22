import Axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY, baseURL } from "../utils/api";

export function Genre() {
  const [genres, setGenre] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const genre = await Axios.get(
          `${baseURL}/genre/movie/list?api_key=${API_KEY}`
        );
        const { genres } = genre.data;
        console.log(genres, "genre is here");
        setGenre(genres);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {genres ? (
        genres.map((genre) => {
          return <ul>{<li>{genre.name}</li>}</ul>;
        })
      ) : (
        <div> Loading... </div>
      )}
    </div>
  );
}
