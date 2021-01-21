import React, { useEffect } from "react";
import List from "../movies/List";
import Pagination from "../pagination/Pagination";

export default function GenreMovieList({ discoverMovies, page, setPage }) {
  useEffect(() => {
    document.title = `MovieDB | Genre`;
  });

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
