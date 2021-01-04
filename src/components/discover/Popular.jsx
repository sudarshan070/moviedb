import React from "react";
import List from "../List";
import Pagination from "../pagination/Pagination";

export default function Popular({ popularMovie, page, setPage }) {
  return (
    <div>
      <List movieList={popularMovie.results} />
      <Pagination
        nextPreviousPage={popularMovie}
        setPage={setPage}
        page={page}
      />
    </div>
  );
}
