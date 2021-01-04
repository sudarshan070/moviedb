import React from "react";
import List from "./List";

export default function GenreMovieList({ discoverMovies }) {
  return (
    <div>
      <List movieList={discoverMovies} />
    </div>
  );
}
