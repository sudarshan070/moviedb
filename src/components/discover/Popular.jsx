import React, { useEffect } from "react";
import List from "../List";
import Pagination from "../pagination/Pagination";

export default function Popular({ popularMovies, page, setPage }) {
  useEffect(() => {
    document.title = `MovieDB | Popular Movies`;
  });
  return (
    <div>
      <List movieList={popularMovies.results} />
      <Pagination
        nextPreviousPage={popularMovies}
        setPage={setPage}
        page={page}
      />
    </div>
  );
}
