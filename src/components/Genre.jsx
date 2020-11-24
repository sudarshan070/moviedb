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
        setGenre(genres);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="mt-5">
      {genres ? (
        genres.map((genre, i) => {
          return (
            <div key={i}>
              <button className="btn btn-outline-secondary my-3">
                {genre.name}
              </button>
            </div>
          );
        })
      ) : (
        <div> Loading... </div>
      )}
    </div>
  );
}
