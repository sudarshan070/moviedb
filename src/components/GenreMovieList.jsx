import React from "react";
import List from "./List";
import Pagination from "./pagination/Pagination";

export default function GenreMovieList({ discoverMovies, page, setPage }) {
  return (
    <div>
      <List movieList={discoverMovies.results} />
      <Pagination
        nextPreviousPage={discoverMovies}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}
